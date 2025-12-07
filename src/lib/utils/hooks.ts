export const isMobile = (): boolean => {
	const userAgent =
		typeof window !== 'undefined' ? window.navigator.userAgent : ''
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		userAgent,
	)
}
