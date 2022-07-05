import React, { useEffect, useState } from "react";
import { getProductImageFromUrl } from "../core/helper/coreapicalls";

const CartProductImage = ({ imageUrl }) => {
	const [imageurl, setImageUrl] = useState(null);

	const loadImage = () => {
		getProductImageFromUrl(imageUrl).then((data) => {
			setImageUrl(data);
		});
	};

	useEffect(() => {
		loadImage();
	}, []);

	return (
		<>
			{imageurl ? (
				<img
					src={imageurl}
					alt="product-image"
					className="cart-product-image"
				/>
			) : (
				""
			)}
		</>
	);
};

export default CartProductImage;
