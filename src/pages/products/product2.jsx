import React from "react";

function product2() {
	return (
		<section>
			<h1 className="mt-3">Secco Chimneys</h1>
			<div className="row">
				<img
					className=""
					src={
						process.env.PUBLIC_URL +
						"/images/products/product2-1.png"
					}
					alt=""
				/>
				<img
					className=""
					src={
						process.env.PUBLIC_URL +
						"/images/products/product2-2.png"
					}
					alt=""
				/>
				<img
					className=""
					src={
						process.env.PUBLIC_URL +
						"/images/products/product2-3.png"
					}
					alt=""
				/>
				<img
					className=""
					src={
						process.env.PUBLIC_URL +
						"/images/products/product2-4.png"
					}
					alt=""
				/>
			</div>
		</section>
	);
}
export default product2;
