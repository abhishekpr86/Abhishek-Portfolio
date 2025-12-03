import React from 'react'
import LeftLogo from '../assets/image/LeftLogo.png'
import Insta from '../assets/image/instagram.svg';
import LinkedIN from '../assets/image/linkedin.svg';

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="nav-inner">

				<div className="nav-left">
					<img className="logo-img" src={LeftLogo} alt="Site logo"/>
					<nav className="nav-center" aria-label="Primary">
						<a href="#home">Home</a>
						<a href="#skills">Skills</a>
						<a href="#projects">Projects</a>
					</nav>
				</div>

				<div className="nav-right">
					<a className="connect-btn" href="mailto:abhishekpr1272002@gmail.com?subject=Let's%20Connect&body=Hi%20Abhishek,%20I'd%20like%20to%20connect!" aria-label="Let's connect via email">
						Let's Connect
					</a>

					<div className="socials">
						
						<a
							className="social-icon linkedin"
							href="https://www.linkedin.com/in/abhishekpr1272002"
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn"
							title="LinkedIn"
						><img src={Insta} alt="Instagram" />
						</a>

						<a
							className="social-icon instagram"
							href="https://www.instagram.com/abhishekpr__"
							target="_blank"
							rel="noreferrer"
							aria-label="Instagram"
							title="Instagram"
						><img src={LinkedIN} alt="Instagram" />
						</a>
					</div>
				</div>

				
			</div>
		</div>
	)
}

export default Navbar

