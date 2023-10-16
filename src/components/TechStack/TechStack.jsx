import './TechStack.css'

const TechStack = () => {
	const data = [
		{ name: 'Full Stack Dev' },
		{ name: 'HTML CSS' },
		{ name: 'Java Script' },
		{ name: 'Python' },
		{ name: 'Git' },
		{ name: 'Djinja' },
		{ name: 'Flask' },
		{ name: 'Django' },
		{ name: 'React' },
		{ name: 'FastApi' },
		{ name: 'SQL' },
		{ name: 'PostgresQL' },
		{ name: 'Full Stack Dev' },
		{ name: 'HTML CSS' },
	]

	return (
		<div className='container teck-stack-section'>
			<div className='section-title'>
				<h5>Tech Stack</h5>
				<span className='line'></span>
			</div>
			<div className='row'>
				{data.map((item, index) => (
					<div key={index} className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
						<div className='tech-content'>
							<p>{item.name}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default TechStack
