import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { StyledProduct } from "../components/styles/Product.styled";
import { useStateContext } from "../context/StateContext";
import { getProductById, getProductImageFromUrl } from "./helper/coreapicalls";

const Product = () => {
	const params = useParams();
	const productId = params.productId;
	const subCategoryId = params.subCategoryId;
	const categoryId = params.categoryId;

	const [product, setProduct] = useState({});
	const [error, setError] = useState(false);
	const [imageurl, setImageUrl] = useState(null);

	const [productQuantity, setProductQuantity] = useState(1);

	const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

	const loadProduct = () => {
		getProductById(productId).then((data) => {
			getProductImageFromUrl(data.imageUrl).then((data2) => {
				if (data2.error) {
					setError(data2.error);
				} else {
					setImageUrl(data2);
				}
			});
			if (data.error) {
				setError(data.error);
			} else {
				setProduct(data);
			}
		});
	};

	const handleCheckout = async () => {
		onAdd(product, qty);

		setShowCart(true);
	};

	useEffect(() => {
		loadProduct();
	}, []);

	return (
		<StyledProduct>
			<div className="left-section">
				{imageurl ? <img src={imageurl} alt="product-image" /> : ""}
			</div>
			<div className="right-section">
				<div className="navbar">
					<Link to="/">Home</Link>
					{"/"}
					<Link
						to={`/category/${categoryId}/sub-category/${subCategoryId}`}
					>
						{product?.category?.title}
					</Link>
					{"/"}
					<Link
						to={`/category/${categoryId}/sub-category/${subCategoryId}`}
					>
						{product?.subCategory?.title}
					</Link>
					{"/"}
					<p className="product-name"> {product?.name}</p>
				</div>
				<div className="product-info">
					<p className="product-title">{product.name}</p>
					<p className="product-description-info">Description</p>
					<p className="product-description">{product.description}</p>
				</div>
				<div className="product-price-container">
					<div className="product-price-quantity">
						<p className="product-quantity">{product.unit}</p>
						<div className="product-price">
							<p className="product-price-text">
								₹{product.price}
							</p>
							<p className="product-actual-price">
								<s>₹{product.actualPrice}</s>
							</p>
						</div>
					</div>
					<div className="product-discount">
						<p>{product.discountPercentage}% off</p>
					</div>
				</div>
				<div className="quantity-btn">
					<button className="btn" onClick={decQty}>
						-
					</button>
					<div className="btn">{qty}</div>
					<button className="btn" onClick={incQty}>
						+
					</button>
				</div>
				<div className="add-to-cart-buy-btn">
					<button
						className="add-to-cart-btn"
						onClick={() => onAdd(product, qty)}
					>
						Add to Cart
					</button>

					<button className="buy-btn" onClick={handleCheckout}>
						Buy Now
					</button>
				</div>
			</div>
		</StyledProduct>
	);
};

export default Product;
