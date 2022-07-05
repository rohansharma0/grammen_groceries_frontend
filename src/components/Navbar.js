import React from "react";
import { Link } from "react-router-dom";
import { StyledNavber } from "./styles/Navbar.styled";
import { AiOutlineShopping } from "react-icons/ai";

import Logo from "../static/images/logo.png";
import SearchLogo from "../static/images/search.png";
import UserLogo from "../static/images/user.png";
import CartLogo from "../static/images/cart.png";
import Cart from "../core/Cart";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
	const { showCart, setShowCart, totalQuantities } = useStateContext();

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

				<Link to="/profile">
					<img src={UserLogo} alt="user" />
				</Link>
			</div>
			{showCart && <Cart />}
		</StyledNavber>
	);
};

export default Navbar;
