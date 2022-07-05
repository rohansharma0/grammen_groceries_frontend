import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthStyles } from "../components/styles/AuthStyles";

const Reset = () => {
	const navigate = useNavigate();

	return (
		<AuthStyles>
			<div className="navigate-button">
				<div
					onClick={() => navigate(-2)}
					className="navigate-button-btn"
				>
					<div class="arrow-left icon"></div>
					<span>Back to store</span>
				</div>
			</div>
			<form className="form-container">
				<p className="form-title">Forgot your password?</p>
				<p className="form-description">
					Enter your email to recover your account.
				</p>
				<input
					type="email"
					name="email"
					placeholder="Email"
					required
					className="form-input"
				/>
				<button className="form-btn">Reset password</button>
			</form>
		</AuthStyles>
	);
};

export default Reset;
