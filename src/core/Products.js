import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import { StyledProducts } from "../components/styles/Products.styled";
import {
	getCategoryById,
	getSubCategoriesByCategory,
	getProductsBySubCategory,
} from "./helper/coreapicalls";

const Products = () => {
	let navigate = useNavigate();

	const params = useParams();
	const categoryId = params.categoryId;
	const subCategoryId = params.subCategoryId;

	const [subCategories, setSubCategories] = useState([]);
	const [category, setCategory] = useState(null);
	const [products, setProducts] = useState({});
	const [error, setError] = useState(false);

	const loadSubCategories = () => {
		getSubCategoriesByCategory(categoryId).then((data) => {
			if (data.error) {
				setError(data.error);
			} else {
				setSubCategories(data);
			}
		});
	};

	const loadCategory = () => {
		getCategoryById(categoryId).then((data) => {
			if (data.error) {
				setError(data.error);
			} else {
				setCategory(data);
			}
		});
	};

	const loadProductsBySubCategory = () => {
		getProductsBySubCategory(subCategoryId).then((data) => {
			if (data.error) {
				setError(data.error);
			} else {
				setProducts(data);
			}
		});
	};

	useEffect(() => {
		loadSubCategories();
		loadCategory();
	}, []);

	useEffect(() => {
		loadProductsBySubCategory();
	}, [subCategoryId]);

	return (
		<StyledProducts>
			<div className="subcategory-wrapper">
				{subCategories.map((subCategory) => (
					<div
						className={
							subCategoryId == subCategory.id
								? "subcategory active"
								: "subcategory"
						}
						onClick={() =>
							navigate(
								`/category/${categoryId}/sub-category/${subCategory.id}`,
							)
						}
						key={subCategory.id}
					>
						<p>{subCategory.title}</p>
					</div>
				))}
			</div>
			<div className="products-wrapper">
				<div className="products-nav">
					<div className="products-nav-title">
						<p>{category?.title}</p>
					</div>
				</div>
				<div className="products-container">
					{products.productList?.map((product) => (
						<ProductItem
							product={product}
							categoryId={categoryId}
							subCategoryId={subCategoryId}
							key={product.id}
						/>
					))}
				</div>
			</div>
		</StyledProducts>
	);
};

export default Products;
