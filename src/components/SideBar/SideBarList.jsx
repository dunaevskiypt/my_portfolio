import React, { useEffect, useState } from 'react'
import './SideBarList.css'

const SideBarList = ({ expandSidebar }) => {
	const [showLogo, setShowLogo] = useState(false)

	useEffect(() => {
		if (expandSidebar) {
			// При раскрытии сайдбара, показываем лого с задержкой
			setTimeout(() => {
				setShowLogo(true)
			}, 900) // Задержка в миллисекундах (0.8 секунды)
		} else {
			// При закрытии сайдбара, сначала скрываем лого, затем меняем состояние expandSidebar
			setShowLogo(false)
			setTimeout(() => {
				// Меняем состояние expandSidebar
			}, 900) // Задержка в миллисекундах (0.5 секунды)
		}
	}, [expandSidebar])

	return (
		<React.Fragment>
			{expandSidebar ? (
				<div className='navbar-items'>
					<div className='sidebar-profile-foto'>
						{showLogo && <h2 className='logo'>LOGO</h2>}
					</div>
				</div>
			) : (
				<div className='clear-foto'></div>
			)}
		</React.Fragment>
	)
}

export default SideBarList
