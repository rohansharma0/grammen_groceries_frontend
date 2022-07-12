import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./components/styles/Global";
import { StateContext } from "./context/StateContext";

import Home from "./core/Home";
import Product from "./core/Product";
import Products from "./core/Products";
import Reset from "./user/Reset";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import UserDashBoard from "./user/UserDashBoard";
import PaymentSuccess from "./core/PaymentSuccess";
import PaymentFailed from "./core/PaymentFailed";
import PageNotFound from "./core/PageNotFound";

const CustomRoutes = () => {
	return (
		<StateContext>
			<BrowserRouter>
				<GlobalStyles />
				<Toaster />
				<Navbar />
				<Routes>
					<Route path="/payment/failed" element={<PaymentFailed />} />
					<Route
						path="/payment/success"
						element={<PaymentSuccess />}
					/>
					<Route path="/auth/signin" element={<Signin />} />
					<Route path="/auth/signup" element={<Signup />} />
					<Route path="/auth/reset" element={<Reset />} />
					<Route
						path="/category/:categoryId/sub-category/:subCategoryId/product/:productId"
						element={<Product />}
					/>
					<Route
						path="/category/:categoryId/sub-category/:subCategoryId"
						element={<Products />}
					/>
					/
					<Route path="/profile" element={<UserDashBoard />} />
					<Route path="/" element={<Home />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</StateContext>
	);
};

export default CustomRoutes;
