import React from "react";
import { Link } from "react-router-dom";
import { StyledNavber } from "./styles/Navbar.styled";
import { AiOutlineShopping } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import Logo from "../static/images/logo.png";
import Cart from "../core/Cart";
import { useStateContext } from "../context/StateContext";

import { isAutheticated } from "../auth/helper";

const Navbar = () => {
	const navigate = useNavigate();

	const { showCart, setShowCart, totalQuantities } = useStateContext();

	const handleOnClickProfile = () => {
		if (isAutheticated()) {
			navigate("/profile");
		} else {
			navigate("/auth/signin");
		}
	};

	return (
		<StyledNavber>
			<div className="logo-container">
				<Link to="/">
					<img src={Logo} alt="logo" />
				</Link>
			</div>
			<div className="nav-links">
				<button
					type="button"
					className="cart-icon"
					onClick={() => setShowCart(true)}
				>
					<AiOutlineShopping />
					<span className="cart-item-qty">{totalQuantities}</span>
				</button>
				<CgProfile
					className="cart-icon"
					onClick={handleOnClickProfile}
				/>
			</div>
			{showCart && <Cart />}
		</StyledNavber>
	);
};

export default Navbar;
