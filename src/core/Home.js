import React, { useEffect, useState } from "react";
import { isAutheticated } from "../auth/helper";
import Category from "../components/Category";
import { StyledHome } from "../components/styles/Home.Styled";
import { getAllCategories } from "./helper/coreapicalls";

const Home = () => {
	const [categories, setCategories] = useState([]);

	const loadAllCategories = () => {
		getAllCategories().then((data) => {
			setCategories(data);
		});
	};

	useEffect(() => {
		loadAllCategories();
	}, []);

	return (
		<StyledHome>
			<div className="categories-container">
				{categories?.map((category, i) => (
					<Category category={category} key={i} />
				))}
			</div>
		</StyledHome>
	);
};

export default Home;
