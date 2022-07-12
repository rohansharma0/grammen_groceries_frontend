import styled from "styled-components";

export const StyledProduct = styled.div`
	display: flex;
	flex-direction: row;
	height: 80vh;
	.left-section {
		flex: 1;
		padding: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.right-section {
		flex: 1;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

		.navbar {
			display: flex;
			flex-direction: row;
			margin: 1rem 0;
			justify-content: center;
			align-items: baseline;
			font-weight: 500;
			font-size: 12px;
			color: #000;

			a {
				font-weight: 500;
				font-size: 14px;
				color: #000;
				padding-right: 4px;

				&:hover {
					color: #ffcd00;
				}
			}
			.product-name {
				color: #828282;
			}
		}

		.product-info {
			.product-title {
				font-size: 2rem;
				font-weight: 600;
			}
			.product-description-info {
				font-weight: 400;
				font-size: 16px;
			}
			.product-description {
				font-size: 15px;
				font-weight: 300;
				margin: 0.25rem 0;
				color: #535353;
			}
		}

		.product-price-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			border: 0.5px solid #ffcc00;
			margin: 2rem 0;
			.product-price-quantity {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.product-quantity {
					color: #000000;
					font-weight: 600;
					width: 100%;
					text-align: center;
					padding: 0.5rem;
				}
				.product-price {
					display: flex;
					flex-direction: row;

					.product-price-text {
						padding: 0.5rem;
					}
					.product-actual-price {
						padding: 0.5rem;
						color: #7c7c7c;
						s {
							text-decoration-color: #7c7c7c;
						}
					}
				}
			}
			.product-discount {
				background: #f6d13c21;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;

				p {
					font-size: 14px;
					color: #ffcd00;
				}
			}
		}

		.add-to-cart-buy-btn {
			display: flex;
			margin: 2rem 0;

			.add-to-cart-btn {
				border: none;
				color: #000;
				background-color: #ffd93e;
				padding: 1rem;
				cursor: pointer;
			}

			.buy-btn {
				margin-left: 2rem;
				border: none;
				color: #000;
				background-color: #ffd93e;
				padding: 1rem;
				cursor: pointer;
			}
		}

		.quantity-btn {
			display: flex;
			flex-direction: row;
			.btn {
				font-size: 1rem;
				border: none;
				color: #000;
				width: 3rem;
				height: 3rem;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #ffd93e;
				cursor: pointer;
			}
		}
	}
`;
