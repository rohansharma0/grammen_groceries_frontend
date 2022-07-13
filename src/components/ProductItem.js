import React, { useState, useEffect } from "react";
import { getProductImageFromUrl } from "../core/helper/coreapicalls";
import { StyledProductItem } from "./styles/ProductItem.styled";
import { useNavigate } from "react-router-dom";
const ProductItem = ({ product, categoryId, subCategoryId }) => {
	let navigate = useNavigate();

	const { id, name, actualPrice, unit, price, imageUrl } = product;

	const [imageurl, setImageUrl] = useState();
	const [error, setError] = useState(false);

	const loadImage = () => {
		getProductImageFromUrl(imageUrl).then((data) => {
			if (data.error) {
				setError(data.error);
			} else {
				setImageUrl(data);
			}
		});
	};

	useEffect(() => {
		loadImage();
	}, []);

	return (
		<StyledProductItem
			onClick={() => {
				navigate(
					`/category/${categoryId}/sub-category/${subCategoryId}/product/${id}`,
				);
			}}
		>
			<div className="product-imgage-container">
				{imageurl ? <img src={imageurl} alt="product" /> : ""}
			</div>
			<div className="product-description-container">
				<div className="product-description">
					<p className="product-name">{name}</p>
					<p className="product-quantity">{`${unit}`}</p>
				</div>
				<div className="product-price-container">
					<p className="product-price">₹{price}</p>
					<p className="product-actual-price">
						<s>₹{actualPrice}</s>
					</p>
				</div>
			</div>
		</StyledProductItem>
	);
};

export default ProductItem;
