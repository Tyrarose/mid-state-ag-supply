import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import Product1 from "./pages/products/product1";
import Product2 from "./pages/products/product2";
import Product3 from "./pages/products/product3";

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
				<Route path="/products/product1" element={<Product1 />} /> {}
				<Route path="/products/product2" element={<Product2 />} /> {}
				<Route path="/products/product3" element={<Product3 />} /> {}
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
