import { API } from "../../backend";

//get all the categories
export const getAllCategories = async () => {
	try {
		const res = await fetch(`${API}/categories/`, {
			method: "GET",
		});
		return await res.json();
	} catch (err) {
		console.log(err);
	}
};

//get all the subcategory by category
export const getSubCategoriesByCategory = async (categoryId) => {
	try {
		const res = await fetch(
			`${API}/category/${categoryId}/sub-categories/`,
			{
				method: "GET",
			},
		);
		return await res.json();
	} catch (err) {
		console.log(err);
	}
};

//get category by categoryId

export const getCategoryById = async (categoryId) => {
	try {
		const res = await fetch(`${API}/category/${categoryId}/`, {
			method: "GET",
		});
		return await res.json();
	} catch (err) {
		console.log(err);
	}
};

//get products by subCategoryId

export const getProductsBySubCategory = async (subCategoryId) => {
	try {
		const res = await fetch(
			`${API}/sub-category/${subCategoryId}/products/`,
			{
				method: "GET",
			},
		);
		return await res.json();
	} catch (err) {
		console.log(err);
	}
};

//get products by subCategoryId

export const getProductById = async (productId) => {
	try {
		const res = await fetch(`${API}/product/${productId}`, {
			method: "GET",
		});
		return await res.json();
	} catch (err) {
		console.log(err);
	}
};

//get iamge from imageUrl

export const getCategoryImageFromUrl = async (imageUrl) => {
	try {
		const res = await fetch(`${API}/category/image/${imageUrl}`, {
			method: "GET",
		});
		return res.url;
	} catch (err) {
		console.log(err);
	}
};

//get iamge from imageUrl
export const getProductImageFromUrl = async (imageUrl) => {
	try {
		const res = await fetch(`${API}/product/image/${imageUrl}`, {
			method: "GET",
		});
		return res.url;
	} catch (err) {
		console.log(err);
	}
};
