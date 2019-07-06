import React from 'react';
import useForm from './useForm';

const Form = () => {
	const { values, handleChange, handleSubmit } = useForm();

	return (
		<div className="container">
			<h1 className="large text-center"> How Can I Help You </h1>
			<form
				onSubmit={handleSubmit}
				className="form"
				name="contact"
				method="POST"
				netlify-honeypot="bot-field"
				data-netlify="true"
			>
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={values.name}
					onChange={handleChange}
					required
				/>
				<input
					type="email"
					name="email"
					placeholder="Email "
					value={values.email}
					onChange={handleChange}
					required
				/>
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
				<button type="submit" value="Search" className="btn btn-dark btn-block">
					Send
				</button>
			</form>
		</div>
	);
};

export default Form;
