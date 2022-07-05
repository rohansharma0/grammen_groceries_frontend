import { API } from "../../backend";

export const signup = async (user) => {
	try {
		const response = await fetch(`${API}/v1/auth/register`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "http://localhost:3000",
			},
			body: JSON.stringify(user),
		});
		return await response.json();
	} catch (err) {
		return console.log(err);
	}
};

export const signin = (user) => {
	return fetch(`${API}/signin`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
	if (typeof window !== "undefined") {
		localStorage.setItem("jwt", JSON.stringify(data));
		next();
	}
};

export const signout = (next) => {
	if (typeof window !== "undefined") {
		localStorage.removeItem("jwt");
		next();

		return fetch(`${API}/signout`, {
			method: "GET",
		}).catch((err) => console.log(err));
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
