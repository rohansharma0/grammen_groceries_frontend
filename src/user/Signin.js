import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authenticate, signin } from "../auth/helper";
import { AuthStyles } from "../components/styles/AuthStyles";

const Signin = () => {
	const navigate = useNavigate();

	const [user, setUser] = useState({
		email: "",
		password: "",
		error: "",
		success: false,
	});

	const { email, password, error, success } = user;

	const handleChange = (name) => (event) => {
		setUser({ ...user, error: false, [name]: event.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setUser({ ...user, error: false });
		//get token
		signin({ email, password })
			.then((data) => {
				if (data.error) {
					setUser({ ...user, error: data.error, success: false });
				} else {
					setUser({
						...user,
						email: "",
						password: "",
						error: "",
						success: true,
					});
					//store in memory
					authenticate(data, () => {
						// redirect to home page

						navigate(-1);
					});
					console.log(data);
				}
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<AuthStyles>
			<div className="navigate-button">
				<div
					onClick={() => navigate(-1)}
					className="navigate-button-btn"
				>
					<div className="arrow-left icon"></div>
					<span>Back to store</span>
				</div>
			</div>
			<form method="POST" className="form-container">
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
						<p className="form-info-text">Keep me signed in</p>
					</div>
					<Link to="/auth/reset" className="form-reset-link">
						Forgot password?
					</Link>
				</div>
				<button className="form-btn" onClick={onSubmit}>
					Sign in
				</button>
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
