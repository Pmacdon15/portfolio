import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

/*
 * Checks the output of `next build` (run `bun run test:build`). Every page the
 * build produced is read from its manifests, so new pages are covered without
 * touching this file.
 *
 * `next build` sorts pages into:
 *   ○ Static   the whole page is prerendered at build time
 *   ƒ Dynamic  the server renders it on every request
 *
 * This site has no per-request data, so every page must stay ○.
 */

const ROOT = path.resolve(__dirname, '../..')
const NEXT = path.join(ROOT, '.next')
const MANIFEST = path.join(NEXT, 'prerender-manifest.json')

type Prerender = {
	initialRevalidateSeconds?: number | false
}

const built = existsSync(MANIFEST)
const read = <T>(file: string): T =>
	JSON.parse(readFileSync(path.join(NEXT, file), 'utf8'))

describe.skipIf(!built && !process.env.REQUIRE_BUILD)(
	'next build output',
	() => {
		it('has a build to check', () => {
			expect(built, 'run `next build` before `bun run test:build`').toBe(
				true,
			)
		})

		if (!built) return

		const manifest = read<{
			routes: Record<string, Prerender>
			dynamicRoutes: Record<string, Prerender>
		}>('prerender-manifest.json')
		const appPaths = read<Record<string, string>>(
			'app-path-routes-manifest.json',
		)

		// Every App Router page the build knows about, e.g. "/resume/page" → "/resume".
		const pages = Object.entries(appPaths)
			.filter(([entry]) => entry.endsWith('/page'))
			.map(([, route]) => route)
			.filter((route) => !route.startsWith('/_'))

		// The prerendered HTML for a route with no dynamic segments.
		const htmlFor = (route: string) => {
			const file = path.join(
				NEXT,
				'server/app',
				`${route === '/' ? 'index' : route.slice(1)}.html`,
			)
			return existsSync(file) ? readFileSync(file, 'utf8') : null
		}

		it("built the site's pages", () => {
			for (const route of [
				'/',
				'/certifications',
				'/contact',
				'/resume',
			]) {
				expect(pages).toContain(route)
			}
		})

		it.each(pages)('%s is fully static (○)', (route) => {
			const entry = manifest.routes[route]
			expect(entry, `${route} wasn't prerendered`).toBeDefined()
			expect(
				entry.initialRevalidateSeconds,
				`${route} revalidates instead of staying static`,
			).toBe(false)
			expect(
				htmlFor(route),
				`${route} has no prerendered HTML`,
			).not.toBeNull()
		})

		it.each(pages)(
			'%s has the header, nav and footer in its HTML',
			(route) => {
				const html = htmlFor(route) ?? ''
				expect(html).toMatch(/<h1[\s>]/)
				for (const href of ['/resume', '/certifications', '/contact']) {
					expect(html, `${route} links to ${href}`).toContain(
						`href="${href}"`,
					)
				}
				expect(html).toContain('href="mailto:patrick@patmac.ca"')
			},
		)

		it('has no dynamic routes', () => {
			expect(manifest.dynamicRoutes).toEqual({})
		})
	},
)
