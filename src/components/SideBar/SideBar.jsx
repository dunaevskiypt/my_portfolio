import { useState } from 'react'
import './SideBar.css'
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia'
import SideBarList from './SideBarList'
import Home from '../Home/Home'
import About from '../About/About'

const SideBar = () => {
	const [expandSidebar, setexpandSidebar] = useState(true)

	const handleClick = () => {
		setexpandSidebar(!expandSidebar)
	}
	return (
		<div className='container-fluid sidebar-section'>
			<div className={expandSidebar ? 'sidebar-expand sidebar' : 'sidebar'}>
				<div className='icon-for-sidebar-expand-and-collapse'>
					<p onClick={handleClick}>
						{expandSidebar ? (
							<LiaAngleLeftSolid size={30} />
						) : (
							<LiaAngleRightSolid size={30} />
						)}
					</p>
				</div>
				<SideBarList expandSidebar={expandSidebar} />
			</div>
			<div className='container'>
				<Home />
				<About />
			</div>
		</div>
	)
}

export default SideBar
