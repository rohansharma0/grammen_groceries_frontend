import styled from "styled-components";

export const StyledProducts = styled.div`
	display: flex;
	flex-direction: row;
	border: 0.5px solid #f2f2f2;
	.subcategory-wrapper {
		width: 20%;

		.subcategory {
			border-bottom: 0.5px solid #f2f2f2;
			border-left: 3px solid #fff;
			padding-left: 1rem;
			padding-top: 1rem;
			padding-bottom: 1rem;
			cursor: pointer;
			p {
				font-size: 1rem;
				font-weight: 400;
			}

			&:first-child {
				/* border-top: 0.5px solid #f2f2f2; */
			}
		}

		.active {
			background: #f2f2f2;
			border-left: 3px solid #000;
		}
	}

	.products-wrapper {
		width: 80%;
		height: 100vh;
		border-left: 0.5px solid #f2f2f2;

		.products-nav {
			height: 6.2vh;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			border-bottom: 0.5px solid #f2f2f2;
			.products-nav-title {
				padding-left: 2rem;
				font-weight: 600;
			}
		}

		.products-container {
			display: flex;
			flex-wrap: wrap;
		}
	}
`;
