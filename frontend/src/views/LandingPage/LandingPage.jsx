import { useState } from 'react'
import './LandingPage.styles.sass'
import SphereWhite from "../../assets/SKILLSPHEREWhite.png";
import SphereBlack from "../../assets/SKILLSPHEREBlack.png";
import PeopleTalking from "../../assets/people_talking.png";
import GroupIcons from "../../assets/GroupIcons.png";
import IconeMoeda from "../../assets/icone-moeda2.png";
import IconeWeb from "../../assets/icone-web.png";
import IconeNotas from "../../assets/icone-notas2.png";
import JohnDoe from "../../assets/johndoe.png";
import Drawing from "../../assets/drawing.png";
import Socials from "../../assets/socials.png";
import HederaLogo from "../../assets/hedera-hashgraph-logo.png";
import { userService } from '../../services/userService';

const LandingPage = () => {
const [isLogin, setIsLogin] = useState(true)
const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
});

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};

const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    try {
        await userService.createUser({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password
        });

        alert('User registered successfully!');
    } catch (error) {
        alert('An error occurred during sign-up. Please try again.');
        console.error(error);
    }
};



return (
	<div className="landing-page">
	<section className="section-one">
		<div className="content-left">
			<div className="icon">
				<img src={SphereWhite} alt="Profile" className="landing-image"/>
			</div>
			<h1>The Ultimate Global Platform for Competitions and Challenges</h1>
			<p>Host, join and manage competitions all in one place</p>
			<button className="explore-button">Explore Events</button>
		</div>
		<div className="image-right">
			<img src={PeopleTalking} alt="Profile"/>
		</div>
	</section>

	<section className="section-two">
		<div className="section-two-border"></div>
		<div className="section-two-content">
		<div className="section-two-left">
			<h2>Ready to Join?</h2>
			<div className='subtitle-section-two'>Log in to access your account or sign up to get started</div>
			<div className="icons">
				<img src={SphereBlack} alt="Profile" className="landing-image3"/>
				<img src={HederaLogo} alt="Profile" className="landing-image4"/>
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
				<input className="form-input" type="email" placeholder="Email" />
				<input className="form-input" type="password" placeholder="Password" />
				<div className="remember-me">
					<div className="chekbox-remember-me">
						<input type="checkbox" id="remember-me" className='checkbox'/>
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<a href="#forgot-password">Forgot the password?</a>
				</div>
				<div className="button-container">
					<button className="form-button">Log In</button>
				</div>
				</>
			) : (
				<>
				<input
					className="form-input"
					type="text"
					name="firstName"
					placeholder="First Name"
					value={formData.firstName}
					onChange={handleChange}
				/>
				<input
					className="form-input"
					type="text"
					name="lastName"
					placeholder="Last Name"
					value={formData.lastName}
					onChange={handleChange}
				/>
				<input
					className="form-input"
					type="email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
				/>
				<input
					className="form-input"
					type="password"
					name="password"
					placeholder="Password"
					value={formData.password}
					onChange={handleChange}
				/>
				<input
					className="form-input"
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
					value={formData.confirmPassword}
    				onChange={handleChange}
				/>
				<div className="terms-checkbox">
					<input type="checkbox" id="terms" className='checkbox'/>
					<label htmlFor="terms">I agree to the Terms of Service and Privacy Policy.</label>
				</div>
				<div className="button-container">
					<button className="form-button" onClick={handleSubmit}>Sign In</button>
				</div>
				</>
			)}
			</div>
		</div>
		</div>
	</section>

	<section className="section-three">
		<div className="content-center">
		<div className="three-images">
			<div className="image-text">
				<img src={IconeWeb} alt="Profile" className="web-image"/>
				<span>Track Results Effortlessly</span>
				<p>View rankings and performance live</p>
			</div>
			<div className="image-text">
				<img src={IconeMoeda} alt="Profile" className="coin-image"/>
				<span>Global Payments</span>
				<p>Manual payments with prize automation</p>
			</div>
			<div className="image-text">
				<img src={IconeNotas} alt="Profile" className="notes-image"/>
				<span>Event Management</span>
				<p>Create and customize competitions easily</p>
			</div>
		</div>
		<button className="explore-button">Explore Events</button>
		</div>
	</section>

	<section className="section-four">
		<div className="content-left-four">
			<h1>How Does It Work?</h1>
			<img src={GroupIcons} alt="Profile"/>
		</div>
		<div className="content-right-four">
			<div className="text-block">
				<h3>Create or Join Events</h3>
				<p>
				As an organizer, you can easily create fully customizable events with options to set
				entry fees, prizes, and rules. Participants can explore competitions tailored to their
				skills and join seamlessly.
				</p>
				<hr/>
			</div>
			<div className="text-block">
				<h3>Compete Globally</h3>
				<p>
				Once the event starts, participants collaborate or compete in real time. Organizers and
				users can track performance, deadlines, and updates effortlessly, no matter their
				location.
				</p>
				<hr/>
			</div>
			<div className="text-block">
				<h3>Earn Rewards and Recognition</h3>
				<p>
				At the end of each competition, prizes are securely managed and distributed. Organizers
				can define prize pools, and winners automatically receive their rewards. Certifications
				are issued as unique NFTs for a lasting recognition of achievements.
				</p>
			</div>
		</div>
	</section>

	<section className="section-five">
		<hr />
		<div className="section-five-content">
			<div className="text-container-five">
				<h3 className="testimonial-text">
					SkillSphere transformed how we host global competitions. Easy, efficient, and user-friendly!
				</h3>
				<span>- John Doe, Event Organizer</span>
			</div>
			<div className="testimonial-image">
				<img src={JohnDoe} alt="Profile"/>
			</div>
		</div>
	</section>

	<section className="section-six">
		<div className="section-six-left">
			<img src={SphereWhite} alt="Profile" className="landing-image"/>
			<h1>Join a Global Community of Innovators.</h1>
			<span>Start hosting, competing, and growing today.</span>
			<button className="get-started-button">Get Started</button>
		</div>
		<div className="section-six-right">
			<img src={Drawing} alt="Profile" className="landing-image5"/>
			<div className="social-icons">
				<img src={Socials} alt="Profile"/>
			</div>
		</div>
	</section>
	</div>
)
}

export default LandingPage
