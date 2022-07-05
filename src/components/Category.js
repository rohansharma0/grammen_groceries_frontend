import React, { useState, useEffect } from "react";
import { StyledCategory } from "./styles/Category.styled";
import { useNavigate } from "react-router-dom";
import {
	getCategoryImageFromUrl,
	getSubCategoriesByCategory,
} from "../core/helper/coreapicalls";

const Category = ({ category }) => {
	let navigate = useNavigate();

	const [imageUrl, setImageUrl] = useState();
	const [subCategory, setSubCategory] = useState([]);

	const loadImage = () => {
		getCategoryImageFromUrl(category.imageUrl).then((data) => {
			setImageUrl(data);
		});
	};

	const loadSubCategory = () => {
		getSubCategoriesByCategory(category.id).then((data) => {
			setSubCategory(data);
		});
	};

	useEffect(() => {
		loadImage();
		loadSubCategory();
	}, []);

	return (
		<StyledCategory
			onClick={() => {
				navigate(
					`/category/${category.id}/sub-category/${subCategory[0].id}`,
				);
			}}
		>
			<div className="category-img-container">
				{imageUrl ? <img src={imageUrl} alt="category image" /> : ""}
			</div>
			<div className="category-title">
				<p>{category.title}</p>
			</div>
		</StyledCategory>
	);
};

export default Category;
