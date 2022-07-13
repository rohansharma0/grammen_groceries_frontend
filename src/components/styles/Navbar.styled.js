import styled from "styled-components";

export const StyledNavber = styled.div`
	height: 10vh;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	.cart-icon {
		font-size: 25px;
		color: #000;
		cursor: pointer;
		position: relative;
		transition: transform 0.4s ease;
		border: none;
		background-color: transparent;
		margin: 0.5rem;
	}
	.cart-icon:hover {
		transform: scale(1.1, 1.1);
	}
	.cart-item-qty {
		position: absolute;
		right: -8px;
		font-size: 12px;
		color: #eee;
		background-color: #fbb03b;
		width: 18px;
		color: #000;
		height: 18px;
		border-radius: 50%;
		text-align: center;
		font-weight: 600;
	}
	.logo-container {
		img {
			width: 100%;
		}
	}

	.nav-links {
		display: flex;
		justify-content: center;
		align-items: baseline;
	}
`;
