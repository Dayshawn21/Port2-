import React from 'react';
import css from '../img/css.png';
import html from '../img/html.png';
import javascript from '../img/javascript.png';
import react from '../img/react.png';
import sass from '../img/sass.png';

const About = () => {
	return (
		<div className="container">
			<div className=" p-2">
				<h2 className="large text-center">About Me</h2>
				<div className="bottom-line" />
				<p className="lead text-center">Let me tell you a little about myself and what I do</p>
			</div>
			<div>
				<p className="lead">
					I am a self-taught programmer from Houston, Texas. I started programming about a year ago and, since
					then, I’ve spent my days continuing my coding journey by polishing up and enhancing my skills. I am
					highly motivated, result-oriented, self-driven, hard-working – and a fast learner. I am especially
					eager to be a part of the team and to learn new technologies so that I can become a valuable
					employee and bring success to my future company.
				</p>
			</div>
			<div className=" p-2">
				<h1 className="large text-center">Skills</h1>
				<p className="lead text-center
      ">A few skills that I’ve picked up along the way</p>
				<div className="icon">
					<img src={html} alt="" />
					<img src={css} alt="" />
					<img src={javascript} alt="" />
					<img src={react} alt="" />
					<img src={sass} alt="" />
				</div>
			</div>
		</div>
	);
};

export default About;
