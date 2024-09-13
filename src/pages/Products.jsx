import React, { useState, useRef } from "react";
import "../styles/Products.css";

// Import product components
import Product1 from "./products/product1";
import Product2 from "./products/product2";
import Product3 from "./products/product3";
import Product4 from "./products/product4";
import Product5 from "./products/product5";
import Product6 from "./products/product6";
import Product7 from "./products/product7";

function Products() {
	const [selectedProduct, setSelectedProduct] = useState(null);
	const productViewRef = useRef(null);

	// Define a mapping of button names to components
	const productComponents = {
		"Shady Lane Curtains": <Product1 />,
		"Secco Chimneys": <Product2 />,
		Fans: <Product3 />,
		Freestalls: <Product4 />,
		"EXL Lockups": <Product5 />,
		"Stainless Steal Tip Tanks": <Product6 />,
		"Auto Vent Controllers": <Product7 />,
	};

	const buttonNames = Object.keys(productComponents).map((name, index) => ({
		id: index + 1,
		buttonName: name,
	}));

	const renderProductComponent = () => {
		return (
			productComponents[selectedProduct] || (
				<p>Please select a product to view details.</p>
			)
		);
	};

	const handleButtonClick = (buttonName) => {
		setSelectedProduct(buttonName);

		// Delay scrolling to ensure the DOM has updated
		setTimeout(() => {
			if (productViewRef.current) {
				productViewRef.current.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		}, 50);
	};

	return (
		<div className="container products-container text-center">
			<h1 className="title">Our Product Range</h1>
			<p className="products-context text-center">
				Explore our diverse selection of high-quality products designed
				to meet various needs:
			</p>

			{/* Buttons */}
			<section className="buttons">
				{buttonNames.map((item) => (
					<button
						key={item.id}
						onClick={() => handleButtonClick(item.buttonName)}
						className="btn btn-primary btn-lg btn-block product-btn"
					>
						{item.buttonName}
					</button>
				))}
			</section>

			<p className="products-context">
				Each product is crafted to provide exceptional quality and
				performance in its respective field.
			</p>

			{/* Product View Section */}
			<section className="productview" ref={productViewRef}>
				{renderProductComponent()}
			</section>
		</div>
	);
}

export default Products;
