import React from "react";
import "../styles/Products.css";

import buttonNames from "../data/products-buttonNames.json";

function Products() {
	return (
		<div className="container products-container text-center">
			<h1 className="title">Products</h1>
			<section className="buttons">
				{buttonNames.map((item) => (
					<button
						key={item.id}
						type="button"
						className="btn btn-primary btn-lg btn-block product-btn"
					>
						{item.buttonName}
					</button>
				))}
			</section>
		</div>
	);
}

export default Products;
