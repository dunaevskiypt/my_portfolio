import './Home.css'
import Typewriter from 'typewriter-effect'
import My_SV from './my_resume.pdf'

const Home = () => {
	return (
		<div className='container-fluid home'>
			<div className='container home-content'>
				<h1>Hi my name is</h1>
				<h3>
					<Typewriter
						options={{
							strings: ['Hello my name is Peter', 'I am a developer'],
							autoStart: true,
							loop: true,
							delay: 200,
						}}
					/>
				</h3>
				<div className='button-for-action'>
					<div className='hire-me-button'>Hire me</div>
					<div className='get-cv-button'>
						<a href={My_SV} download='Dunaevskiy_CV.pdf'>
							Get resume
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
