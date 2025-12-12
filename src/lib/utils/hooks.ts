// useIsSmallScreen.js
import { useEffect, useState } from 'react'

const useIsSmallScreen = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(false)

	useEffect(() => {
		const checkScreenSize = () => {
			setIsSmallScreen(window.innerWidth <= 880)
		}
		checkScreenSize()
		window.addEventListener('resize', checkScreenSize)
		return () => window.removeEventListener('resize', checkScreenSize)
	}, [])

	return isSmallScreen
}

export default useIsSmallScreen
