import { useState } from 'react'
import './LandingPage.styles.sass'

const LandingPage = () => {
const [isLogin, setIsLogin] = useState(true)

return (
	<div className="landing-page">
	<section className="section-one">
		<div className="content-left">
		<div className="icon">
			{/* I will put icons here */}
		</div>
		<h1>The Ultimate Global Platform for Competitions and Challenges</h1>
		<p>Host, join and manage competitions all in one place</p>
		<button className="explore-button">Explore Events</button>
		</div>
		<div className="image-right">
		<img src="path_to_your_image.png" alt="Landing Image" />
		</div>
	</section>

	<section className="section-two">
		<div className="section-two-content">
		<div className="section-two-left">
			<h2>Ready to Join?</h2>
			<p>Log in to access your account or sign up to get started</p>
			<div className="icons">
			{/* I will put icons here */}
			</div>
		</div>
		<div className="section-two-right">
			<div className="form-toggle">
			<button
				onClick={() => setIsLogin(true)}
				className={`toggle-btn ${isLogin ? 'active' : ''}`}
			>
				Log in
			</button>
			<button
				onClick={() => setIsLogin(false)}
				className={`toggle-btn ${!isLogin ? 'active' : ''}`}
			>
				Sign Up
			</button>
			</div>
			<div className="form">
			{isLogin ? (
				<>
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<div className="remember-me">
					<div className="chekbox-remember-me">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<a href="#forgot-password">Forgot the password?</a>
				</div>
				<button className="form-button">Log In</button>
				</>
			) : (
				<>
				<input type="text" placeholder="First Name" />
				<input type="text" placeholder="Last Name" />
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<input type="password" placeholder="Confirm Password" />
				<div className="terms-checkbox">
					<input type="checkbox" id="terms" />
					<label htmlFor="terms">I agree to the Terms of Service and Privacy Policy.</label>
				</div>
				<button className="form-button">Sign Up</button>
				</>
			)}
			</div>
		</div>
		</div>
	</section>

	<section className="section-three">
		<div className="content-center">
		<div className="three-images">
			{/* I will put PNGS here */}
		</div>
		<button className="explore-button">Explore Events</button>
		</div>
	</section>

	<section className="section-four">
		<div className="content-left">
		<h1>How Does It Work?</h1>
		<div className="how-images">
			{/* I will put PNGS here */}
		</div>
		</div>
		<div className="content-right">
		<div className="text-block">
			<h3>Create or Join Events</h3>
			<p>
			As an organizer, you can easily create fully customizable events with options to set
			entry fees, prizes, and rules. Participants can explore competitions tailored to their
			skills and join seamlessly.
			</p>
			<hr />
		</div>
		<div className="text-block">
			<h3>Compete Globally</h3>
			<p>
			Once the event starts, participants collaborate or compete in real time. Organizers and
			users can track performance, deadlines, and updates effortlessly, no matter their
			location.
			</p>
			<hr />
		</div>
		<div className="text-block">
			<h3>Earn Rewards and Recognition</h3>
			<p>
			At the end of each competition, prizes are securely managed and distributed. Organizers
			can define prize pools, and winners automatically receive their rewards. Certifications
			are issued as unique NFTs for a lasting recognition of achievements.
			</p>
			<hr />
		</div>
		</div>
	</section>

	<section className="section-five">
		<hr />
		<div className="section-five-content">
			<h3 className="testimonial-text">
				SkillSphere transformed how we host global competitions. Easy, efficient, and user-friendly!
			</h3>
			<div className="testimonial-image">
				{/* I will put PNGS here */}
			</div>
		</div>
	</section>

	<section className="section-six">
		<div className="section-six-left">
		<img src="path_to_your_image.png" alt="Left Image" />
			<h1>Join a Global Community of Innovators.</h1>
			<button className="get-started-button">Get Started</button>
		</div>
		<div className="section-six-right">
			<img src="path_to_large_image.png" alt="Right Large Image" />
			<div className="social-icons">
				{/* I will put icons here */}
			</div>
		</div>
	</section>
	</div>
)
}

export default LandingPage
