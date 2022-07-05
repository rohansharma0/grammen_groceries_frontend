import styled from "styled-components";

export const AuthStyles = styled.div`
	.navigate-button {
		height: 10vh;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.navigate-button-btn {
			font-weight: 600;
			font-size: 14px;
			cursor: pointer;

			span {
				margin-left: 1.5rem;
			}

			.arrow-left.icon {
				color: #000;
				position: absolute;
				margin-left: 3px;
				margin-top: 10px;
				width: 12px;
				height: 1px;
				background-color: currentColor;
			}

			.arrow-left.icon:before {
				content: "";
				position: absolute;
				left: 1px;
				top: -3.5px;
				width: 6px;
				height: 6px;
				border-top: solid 1px currentColor;
				border-right: solid 1px currentColor;
				-webkit-transform: rotate(-135deg);
				transform: rotate(-135deg);
			}
		}
	}

	.form-container {
		width: 25rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		.form-title {
			font-size: 1.5rem;
			font-weight: 600;
			text-align: center;
			width: 80%;
		}
		.form-description {
			font-size: 13px;
			font-weight: 400;
			color: #7d7d7d;
			padding: 1rem 3.5rem;
			text-align: center;
			line-height: 180%;
			margin: 0.5rem 0;
		}

		.form-input {
			width: 100%;
			border: 1px solid #d8d8d8;
			padding: 1rem 1.5rem;
			margin: 0.5rem 0;
			font-size: 14px;
			&::placeholder {
				font-size: 14px;
			}
		}

		.form-info-container {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin: 0.5rem 0;
			.form-info-radio-container {
				display: flex;
				flex-direction: row;
				align-items: center;
				.form-info-radio {
					box-sizing: border-box;
					appearance: none;
					background: white;
					border: 1px solid #d8d8d8;
					width: 0.9rem;
					height: 0.9rem;
					cursor: pointer;
					margin-right: 0.7rem;
				}
				.form-info-text {
					font-size: 0.875rem;
				}
			}

			.form-reset-link {
				color: #808080;
				font-size: 0.875rem;
			}
		}

		.form-btn {
			width: 100%;
			background-color: #fbb03b;
			padding: 1rem;
			font-size: 14px;
			text-align: center;
			font-weight: 600;
			margin: 1.5rem 0;
			cursor: pointer;
			border: none;
		}
		.form-footer-container {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			.form-footer-text {
				font-size: 14px;
				margin: 0 0.25rem;
			}

			.form-footer-link {
				font-size: 14px;
				margin: 0 0.25rem;
				font-weight: 600;
				color: #000;
				border: none;
				background: transparent;
				cursor: pointer;
			}
		}
	}
`;
