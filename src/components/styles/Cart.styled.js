import styled from "styled-components";

export const StyledCart = styled.div`
	width: 100vw;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	right: 0;
	top: 0;
	z-index: 100;
	transition: all 1s ease-in-out;

	.cart-container {
		height: 100vh;
		width: 600px;
		background-color: white;
		float: right;
		padding: 40px 10px;
		position: relative;
	}

	.cart-heading {
		display: flex;
		align-items: center;
		font-size: 18px;
		font-weight: 500;
		cursor: pointer;
		gap: 2px;
		margin-left: 10px;
		border: none;
		background-color: transparent;
	}

	.cart-heading .heading {
		margin-left: 10px;
	}
	.cart-num-items {
		margin-left: 10px;
		color: #fbb03b;
	}
	.empty-cart {
		margin: 40px;
		text-align: center;
	}
	.empty-cart h3 {
		font-weight: 600;
		font-size: 20px;
	}
	.cancel {
		cursor: pointer;
	}
	.product-container {
		margin-top: 15px;
		overflow: auto;
		max-height: 70vh;
		padding: 20px 10px;
	}
	.product {
		display: flex;
		gap: 30px;
		padding: 20px;
	}
	.product .cart-product-image {
		width: 140px;
		height: 140px;
		border-radius: 15px;
		background-color: #ebebeb;
	}
	.item-desc .flex {
		display: flex;
		justify-content: space-between;
		width: 350px;
		color: #324d67;
	}
	.item-desc .bottom {
		margin-top: 60px;
	}
	.flex h5 {
		font-size: 24px;
	}
	.flex h4 {
		font-size: 20px;
	}
	.total {
		display: flex;
		justify-content: space-between;
	}
	.total h3 {
		font-size: 22px;
	}
	.remove-item {
		font-size: 24px;
		color: #f02d34;
		cursor: pointer;
		background: transparent;
		border: none;
	}
	.cart-bottom {
		position: absolute;
		bottom: 12px;
		right: 5px;
		width: 100%;
		padding: 30px 65px;
	}

	.btn-container {
		width: 400px;
		margin: auto;
	}
	.btn {
		width: 100%;
		max-width: 400px;
		padding: 10px 12px;
		border-radius: 15px;
		border: none;
		font-size: 20px;
		margin-top: 10px;
		margin-top: 40px;
		text-transform: uppercase;
		background-color: #fbb03b;
		color: #fff;
		cursor: pointer;
		transform: scale(1, 1);
		transition: transform 0.5s ease;
	}
	.btn:hover {
		transform: scale(1.1, 1.1);
	}

	.quantity-desc {
		border: 1px solid gray;
		padding: 6px;
	}
	.quantity-desc span {
		font-size: 16px;
		padding: 6px 12px;
		cursor: pointer;
	}
	.quantity-desc .minus {
		border-right: 1px solid gray;
		color: #f02d34;
	}
	.quantity-desc .num {
		border-right: 1px solid gray;
		font-size: 20px;
	}
	.quantity-desc .plus {
		color: rgb(49, 168, 49);
	}
`;
