import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";

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
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
