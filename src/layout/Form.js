import React from 'react';
import useForm from './useForm';

const Form = () => {
	const { values, handleChange, handleSubmit } = useForm(login);
	function login() {
		console.log(values);
	}
	return (
		<div className="container">
			<h1 className="large text-center"> How Can I Help You </h1>
			<form onSubmit={handleSubmit} className="form" name="contact" method="POST" data-netlify="true">
				<input type="text" name="name" placeholder="Name" value={values.name} onChange={handleChange} />
				<input type="email" name="email" placeholder="Email " value={values.email} onChange={handleChange} />
				<textarea
					name="textarea"
					id=""
					cols="30"
					rows="10"
					placeholder="How Can I Help You "
					onChange={handleChange}
				/>
				<div className="field">
					<div data-netlify-recaptacha="true" />
				</div>
				<input type="submit" value="Search" className="btn btn-dark btn-block" />
			</form>
		</div>
	);
};

export default Form;
