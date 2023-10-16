import React from 'react'
import {
	LiaHomeSolid,
	LiaUserAltSolid,
	LiaStackOverflow,
	LiaKeyboardSolid,
	LiaBookReaderSolid,
	LiaRandomSolid,
	LiaHandshakeSolid,
	LiaPhoneVolumeSolid,
} from 'react-icons/lia'
import './SideBarList.css'

const SideBarList = ({ expandSidebar }) => {
	return (
		<React.Fragment>
			{expandSidebar ? (
				<div className='navbar-items'>
					<div className='logo'>
						<h3>DPT/</h3>
					</div>
					<ul>
						<li className='nav-item'>
							<LiaHomeSolid size={30} />
							Home
						</li>
						<li className='nav-item'>
							<LiaUserAltSolid size={30} />
							About
						</li>
						<li className='nav-item'>
							<LiaStackOverflow size={30} />
							Experience
						</li>
						<li className='nav-item'>
							<LiaKeyboardSolid size={30} />
							Tech Stack
						</li>
						<li className='nav-item'>
							<LiaBookReaderSolid size={30} />
							Education
						</li>
						<li className='nav-item'>
							<LiaRandomSolid size={30} />
							Projects
						</li>
						<li className='nav-item'>
							<LiaHandshakeSolid size={30} />
							Testimonial
						</li>
						<li className='nav-item'>
							<LiaPhoneVolumeSolid size={30} />
							Contacts
						</li>
					</ul>
				</div>
			) : (
				<div className='navbar-items'>
					<ul>
						<li className='nav-item'>
							<LiaHomeSolid size={30} />
						</li>
						<li className='nav-item'>
							<LiaUserAltSolid size={30} />
						</li>
						<li className='nav-item'>
							<LiaStackOverflow size={30} />
						</li>
						<li className='nav-item'>
							<LiaKeyboardSolid size={30} />
						</li>
						<li className='nav-item'>
							<LiaBookReaderSolid size={30} />
						</li>
						<li className='nav-item'>
							<LiaRandomSolid size={30} />
						</li>
						<li className='nav-item'>
							<LiaHandshakeSolid size={30} />
						</li>
						<li className='nav-item'>
							<LiaPhoneVolumeSolid size={30} />
						</li>
					</ul>
				</div>
			)}
		</React.Fragment>
	)
}

export default SideBarList
