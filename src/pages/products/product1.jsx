import React from "react";
import productsImages from "../data/products.json";

function Product1() {
	const productName = "Shady Lane Curtains"; // Set the product name here
	const images = productsImages[productName]; // Access the images array for the specific product

	return (
		<section>
			<h1 className="mt-3">{productName}</h1>
			<div className="row"></div>
		</section>
	);
}

export default Product1;
