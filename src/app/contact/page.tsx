import { ReachOutForm } from '@/components/ui/forms/reach-out-form'
import PageHeader from '@/components/ui/page-header'

export default function Page() {
	return (
		<>
			<PageHeader title="Get in touch" />
			<div className="flex w-full justify-center">
				<ReachOutForm />
			</div>
		</>
	)
}
