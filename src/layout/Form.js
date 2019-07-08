import React from 'react';
import NetlifyForm from 'react-netlify-form';

const Form = () => {
	return (
		<div className="container">
			<h1 className="large text-center"> How Can I Help You </h1>
			<NetlifyForm name="contact" canSubmit="true">
				{({ loading, error, success }) => (
					<div>
						{loading && <div>Loading...</div>}
						{error && <div>Your information was not sent. Please try again later.</div>}
						{success && <div>Thank you for contacting us!</div>}
						{!loading &&
						!success && (
							<div>
								<input type="hidden" name="contact" value="contact" />
								<input type="text" name="name" placeholder="Name" required />
								<input type="email" name="email" placeholder="Email" required />
								<textarea
									type="textarea"
									name="message"
									cols="30"
									rows="10"
									placeholder="How can I help you"
									required
								/>
								<button type="submit" className="btn btn-dark btn-block">
									Submit
								</button>
							</div>
						)}
					</div>
				)}
			</NetlifyForm>
		</div>
	);
};

export default Form;
