import { API } from "../../backend";

export const signup = async (user) => {
	try {
		console.log(user);
		const res = await fetch(`${API}/v1/auth/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
		return await res.json();
	} catch (err) {
		return console.log(err);
	}
};

export const signin = async (user) => {
	try {
		const response = await fetch(`${API}/v1/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
		return await response.json();
	} catch (err) {
		return console.log(err);
	}
};

export const authenticate = (data, next) => {
	if (typeof window !== "undefined") {
		localStorage.setItem("jwt", JSON.stringify(data));
		next();
	}
};

export const signout = () => {
	if (typeof window !== "undefined") {
		localStorage.removeItem("jwt");
	}
};

export const isAutheticated = () => {
	if (typeof window == "undefined") {
		return false;
	}
	if (localStorage.getItem("jwt")) {
		return JSON.parse(localStorage.getItem("jwt"));
	} else {
		return false;
	}
};
