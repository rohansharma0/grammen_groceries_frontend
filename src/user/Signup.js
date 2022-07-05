import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../auth/helper";
import { AuthStyles } from "../components/styles/AuthStyles";

const Signup = () => {
	const navigate = useNavigate();

	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		error: "",
		success: false,
	});

	const { firstName, lastName, email, password, error, success } = user;

	const handleChange = (name) => (event) => {
		setUser({ ...user, error: false, [name]: event.target.value });
	};

	const onSubmit = (event) => {
		// event.preventDefault();
		// setUser({ ...user, error: false });
		// signup({ email: email, password: password })
		// 	.then((data) => {
		// 		if (data.error) {
		// 			setUser({ ...user, error: data.error, success: false });
		// 			console.log("10");
		// 		} else {
		// 			setUser({
		// 				...user,
		// 				firstName: "",
		// 				lastName: "",
		// 				email: "",
		// 				password: "",
		// 				error: "",
		// 				success: true,
		// 			});
		// 		}
		// 	})
		// 	.catch((e) => {
		// 		console.log(e);
		// 	});
	};

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
				<p className="form-title">
					Create an account and discover the benefits.
				</p>
				<p className="form-description"></p>
				<input
					type="text"
					name="firstName"
					placeholder="First Name"
					required
					className="form-input"
					onChange={handleChange("firstName")}
					value={firstName}
				/>
				<input
					type="text"
					name="lastName"
					placeholder="Last Name"
					required
					className="form-input"
					onChange={handleChange("lastName")}
					value={lastName}
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					required
					className="form-input"
					onChange={handleChange("email")}
					value={email}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					required
					className="form-input"
					onChange={handleChange("password")}
					value={password}
				/>
				<div className="form-info-container">
					<div className="form-info-radio-container">
						<input type="radio" className="form-info-radio" />
						<p className="form-info-text">
							I argree to all the Terms and Conditions and Privacy
							Policy.
						</p>
					</div>
				</div>

				<button className="form-btn" onClick={onSubmit}>
					Sign up
				</button>
				<div className="form-footer-container">
					<p className="form-footer-text">
						Are you already a member?
					</p>
					<button
						onClick={() => navigate(-1)}
						className="form-footer-link"
					>
						Sign in
					</button>
				</div>
			</form>
		</AuthStyles>
	);
};

export default Signup;
