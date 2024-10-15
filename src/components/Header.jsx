import React, { useState } from "react";
import {
	Navbar,
	Nav,
	NavItem,
	Container,
	Offcanvas,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

const productsData = [
	{ id: 1, name: "Shady Lane Curtain", url: "/products/shady-lane" },
	{ id: 2, name: "Secco Chimneys", url: "/products/secco-chimneys" },
	{ id: 3, name: "Fans", url: "/products/Fans" },
	{ id: 4, name: "Freestalls", url: "/products/Freestalls" },
	{ id: 5, name: "EXL Lockups", url: "/products/EXL%20Lockups" },
	{
		id: 6,
		name: "Stainless Steel Tip Tanks",
		url: "/products/Stainless%20Steel%20Tip%20Tanks",
	},
	{
		id: 7,
		name: "Auto Vent Controllers",
		url: "/products/Auto%20Vent%20Controllers",
	},
];

const defaultSuggestions = [
	{ id: 1, name: "Shady Lane Curtain", url: "/products/shady-lane" },
	{ id: 2, name: "Fans", url: "/products/Fans" },
	{
		id: 3,
		name: "Auto Vent Controllers",
		url: "/products/Auto%20Vent%20Controllers",
	},
];

export default function Header() {
	const navigate = useNavigate();
	const [expanded, setExpanded] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [suggestedProducts, setSuggestedProducts] = useState([]);

	const handleProductClick = (productUrl) => {
		navigate(productUrl);
		handleClose();
		// setSearchTerm("
		setFilteredProducts([]);
		setSuggestedProducts([]);
	};

	const handleClose = () => setExpanded(false);

	const handleSearch = (event) => {
		const term = event.target.value;
		setSearchTerm(term);
		if (term) {
			const filtered = productsData.filter((product) =>
				product.name.toLowerCase().includes(term.toLowerCase())
			);
			setFilteredProducts(filtered);
		} else {
			setFilteredProducts([]);
		}
	};

	// Show default suggestions when the search bar is focused
	const handleFocus = () => {
		if (!searchTerm) {
			setSuggestedProducts(defaultSuggestions);
		}
	};

	const handleBlur = () => {
		setTimeout(() => {
			setSearchTerm("");
			setFilteredProducts([]);
			setSuggestedProducts([]);
		}, 100);
	};

	return (
		<>
			{["md"].map((expand) => (
				<Navbar key={expand} expand={expand}>
					<Container fluid>
						<NavLink to="/">
							<img
								src={
									process.env.PUBLIC_URL + "/images/logo.png"
								}
								alt="fireproshield"
								className="brand-image"
							/>
						</NavLink>
						<Navbar.Toggle
							aria-controls={`offcanvasNavbar-expand-${expand}`}
							className="ms-auto"
							onClick={() =>
								setExpanded((prevExpanded) => !prevExpanded)
							}
						/>
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
							show={expanded}
							onHide={handleClose}
							className="offcanvas-end"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title
									id={`offcanvasNavbarLabel-expand-${expand}`}
								>
									Menu
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-center nav">
									<NavItem>
										<NavLink
											to="/"
											className={({ isActive }) =>
												isActive
													? "nav-link active-link"
													: "nav-link"
											}
											onClick={handleClose}
										>
											HOME
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											to="/products"
											className={({ isActive }) =>
												isActive
													? "nav-link active-link"
													: "nav-link"
											}
											onClick={handleClose}
										>
											PRODUCTS
										</NavLink>
									</NavItem>

									<NavItem>
										<NavLink
											to="/gallery"
											className={({ isActive }) =>
												isActive
													? "nav-link active-link"
													: "nav-link"
											}
											onClick={handleClose}
										>
											GALLERY
										</NavLink>
									</NavItem>
									<div className="search-container">
										<Form className="d-flex search-bar">
											<FormControl
												type="search"
												placeholder="SEARCH"
												aria-label="Search"
												value={searchTerm}
												onChange={handleSearch}
												onFocus={handleFocus}
												onBlur={handleBlur}
												className="search-input"
											/>
											<Button
												variant="outline-primary"
												className="search-button"
											>
												<i className="fa-solid fa-magnifying-glass"></i>
											</Button>
										</Form>

										{(searchTerm ||
											suggestedProducts.length > 0) && (
											<div className="search-results">
												{filteredProducts.length > 0 ? (
													filteredProducts.map(
														(product) => (
															<div
																key={product.id}
																className="product-item"
																onClick={() =>
																	handleProductClick(
																		product.url
																	)
																}
															>
																<h4 className="text-end">
																	{
																		product.name
																	}
																</h4>
															</div>
														)
													)
												) : suggestedProducts.length >
												  0 ? (
													suggestedProducts.map(
														(product) => (
															<div
																key={product.id}
																className="product-item"
																onClick={() =>
																	handleProductClick(
																		product.url
																	)
																}
															>
																<h4 className="text-end">
																	{
																		product.name
																	}
																</h4>
															</div>
														)
													)
												) : (
													<p>No products found</p>
												)}
											</div>
										)}
									</div>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
}
