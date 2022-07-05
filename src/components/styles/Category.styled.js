import styled from "styled-components";

export const StyledCategory = styled.div`
	width: 15vw;
	height: 35vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;

	.category-img-container {
		height: 90%;
		width: 100%;
		background: #f2f2f2;
		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}

	.category-title {
		height: 10%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
