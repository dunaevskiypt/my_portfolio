import './About.css'
import ProfileFoto from '../../../public/images/profile_foto.jpg'

const About = () => {
	return (
		<div className='container about-section'>
			<div className='row'>
				<div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
					<div className='about-image'>
						<img src={ProfileFoto} alt='image' />
					</div>
				</div>
				<div className='col-xl-6 col-lg col-md-12 col-sm-12'>
					<div className='about-details'>
						<div className='about-title'>
							<h5>About Me</h5>
							<span className='line'></span>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
							expedita, minima non obcaecati aut debitis. Totam perspiciatis,
							voluptatum incidunt excepturi ullam quaerat ducimus eaque libero,
							nulla culpa iste eligendi at fugit dolor, earum explicabo atque.
							Labore deleniti rem est quis sequi illo qui modi dolor eius
							similique sed ducimus quod ad voluptas corporis vel repellendus
							aliquam dolores, quia maiores! Mollitia?
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
