import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import ProductProp from "./components/ProductProp";
import ShadyLane from "./pages/products/ShadyLane";
import SeccoChimneys from "./pages/products/SeccoChimneys";

import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<Router>
			<Header />
			<Routes location={window.location}>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/contactus" element={<ContactUs />} />
				<Route path="/gallery" element={<Gallery />} />
				{/* Add routes for specific products */}
				<Route path="/products/shady-lane" element={<ShadyLane />} />
				<Route
					path="/products/secco-chimneys"
					element={<SeccoChimneys />}
				/>
				<Route path="/products/shady-lane" element={<ShadyLane />} />

				{/* Catch all other products with ProductProp */}
				<Route
					path="/products/:productName"
					element={<ProductProp />}
				/>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
