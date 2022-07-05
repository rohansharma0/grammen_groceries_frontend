import styled from "styled-components";

export const StyledProductItem = styled.div`
	width: 15.95vw;
	height: 35vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;

	.product-imgage-container {
		width: 100%;
		height: 85%;
		background-color: #f2f2f2;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.product-description-container {
		width: 100%;
		height: 15%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 1rem;
		align-items: center;
		.product-description {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;

			.product-name {
				font-weight: 600;
			}
			.product-quantity {
				font-size: 14px;
				font-weight: 300;
			}
		}

		.product-price-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-end;
			.product-price {
			}

			.product-actual-price {
				font-size: 14px;
				font-weight: 300;
			}
		}
	}
`;
