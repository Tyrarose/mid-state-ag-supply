import React from "react";

function product1() {
	return (
		<section>
			<h1 className="mt-3">Shady Lane Curtains</h1>
			<div className="row">
				<img
					className=""
					src={
						process.env.PUBLIC_URL +
						"/images/products/product1-1.png"
					}
					alt=""
				/>
				<img
					className=""
					src={
						process.env.PUBLIC_URL +
						"/images/products/product1-2.png"
					}
					alt=""
				/>
			</div>
		</section>
	);
}

export default product1;
