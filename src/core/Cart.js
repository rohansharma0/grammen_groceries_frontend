import React, { useRef } from "react";
import { StyledCart } from "../components/styles/Cart.styled";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
	AiOutlineMinus,
	AiOutlinePlus,
	AiOutlineLeft,
	AiOutlineShopping,
} from "react-icons/ai";

import { TiDeleteOutline } from "react-icons/ti";

import { useStateContext } from "../context/StateContext";
import CartProductImage from "../components/CartProductImage";
import { isAutheticated } from "../auth/helper";
import getStripe from "./helper/getStripe";

import { API } from "../backend";

const Cart = () => {
	const navigate = useNavigate();
	const cartRef = useRef();

	const {
		totalPrice,
		totalQuantities,
		cartItems,
		setShowCart,
		toggleCartItemQuanitity,
		onRemove,
	} = useStateContext();

	const handlePay = async () => {
		if (isAutheticated()) {
			//pay with stripe

			const response = await fetch(
				`${API}/v1/auth/create-checkout-session`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(cartItems),
				},
			);

			if (response.statusCode === 500) return;

			const data = await response.json();

			toast.loading("Redirecting...");
			window.location.replace(data.sessionUrl);
		} else {
			navigate("/auth/signin");
		}
	};

	return (
		<StyledCart ref={cartRef}>
			<div className="cart-container">
				<button
					type="button"
					className=" cart-heading"
					onClick={() => setShowCart(false)}
				>
					<AiOutlineLeft />
					<span className="heading">Your Cart</span>
					<span className="cart-num-items">
						({totalQuantities} items)
					</span>
				</button>

				{cartItems.length < 1 && (
					<div className="empty-cart">
						<AiOutlineShopping size={150} />
						<h3>Your shopping bag is empty</h3>
						<Link to="/">
							<button
								type="button"
								onClick={() => setShowCart(false)}
								className="btn"
							>
								Continue Shopping
							</button>
						</Link>
					</div>
				)}

				<div className="product-container">
					{console.log(cartItems)}
					{cartItems.length >= 1 &&
						cartItems.map((item) => (
							<div className="product" key={item.id}>
								<CartProductImage imageUrl={item.imageUrl} />
								<div className="item-desc">
									<div className="flex top">
										<h5>{item.name}</h5>
										<h4>₹{item.price}</h4>
									</div>
									<div className="flex bottom">
										<div>
											<p className="quantity-desc">
												<span
													className="minus"
													onClick={() =>
														toggleCartItemQuanitity(
															item.id,
															"dec",
														)
													}
												>
													<AiOutlineMinus />
												</span>
												<span className="num">
													{item.quantity}
												</span>
												<span
													className="plus"
													onClick={() =>
														toggleCartItemQuanitity(
															item.id,
															"inc",
														)
													}
												>
													<AiOutlinePlus />
												</span>
											</p>
										</div>
										<button
											type="button"
											className="remove-item"
											onClick={() => onRemove(item)}
										>
											<TiDeleteOutline />
										</button>
									</div>
								</div>
							</div>
						))}
				</div>
				{cartItems.length >= 1 && (
					<div className="cart-bottom">
						<div className="total">
							<h3>Subtotal:</h3>
							<h3>₹{totalPrice}</h3>
						</div>

						<div className="btn-container">
							<button
								type="button"
								className="btn"
								onClick={handlePay}
							>
								Pay with Stripe
							</button>
						</div>
					</div>
				)}
			</div>
		</StyledCart>
	);
};

export default Cart;
