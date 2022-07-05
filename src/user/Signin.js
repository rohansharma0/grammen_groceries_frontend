import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthStyles } from "../components/styles/AuthStyles";

const Signin = () => {
	const navigate = useNavigate();

	return (
		<AuthStyles>
			<div className="navigate-button">
				<div
					onClick={() => navigate(-1)}
					className="navigate-button-btn"
				>
					<div class="arrow-left icon"></div>
					<span>Back to store</span>
				</div>
			</div>
			<form className="form-container">
				<p className="form-title">Hello ! Welcome back.</p>
				<p className="form-description">
					Login in with your details that you entered during your
					registration.
				</p>
				<input
					type="email"
					name="email"
					placeholder="Email"
					required
					className="form-input"
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					required
					className="form-input"
				/>
				<div className="form-info-container">
					<div className="form-info-radio-container">
						<input type="radio" className="form-info-radio" />
						<p className="form-info-text">Keep me signed in</p>
					</div>
					<Link to="/auth/reset" className="form-reset-link">
						Forgot password?
					</Link>
				</div>
				<button className="form-btn">Sign in</button>
				<div className="form-footer-container">
					<p className="form-footer-text">Not a member yet?</p>
					<Link to="/auth/signup" className="form-footer-link">
						Sign up
					</Link>
				</div>
			</form>
		</AuthStyles>
	);
};

export default Signin;
