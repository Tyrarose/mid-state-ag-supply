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
import productsData from "../data/products.json";
import "../styles/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
	const navigate = useNavigate();

	const handleProductClick = (productId) => {
		navigate(`/productshop?highlight=${productId}`);
		handleClose();
		setSearchTerm("");
		setFilteredProducts([]);
	};

	const [expanded, setExpanded] = useState(false);
	const location = useLocation();
	const isHomePage = location.pathname === "/";

	const handleClose = () => setExpanded(false);

	const [searchTerm, setSearchTerm] = useState("");
	const [filteredProducts, setFilteredProducts] = useState([]);

	const handleSearch = (event) => {
		const term = event.target.value;
		setSearchTerm(term);
		if (term) {
			const filtered = productsData.filter(
				(product) =>
					product.name.toLowerCase().includes(term.toLowerCase()) ||
					product.description
						.toLowerCase()
						.includes(term.toLowerCase())
			);
			setFilteredProducts(filtered);
		} else {
			setFilteredProducts([]);
		}
	};

	const handleBlur = () => {
		setTimeout(() => {
			setSearchTerm("");
			setFilteredProducts([]);
		}, 100);
	};

	const highlightText = (text, highlight, maxLength = null) => {
		if (!highlight) return text;

		if (maxLength && text.length > maxLength) {
			text = text.substring(0, maxLength) + "...";
		}

		const regex = new RegExp(`(${highlight})`, "gi");
		const parts = text.split(regex);

		return parts.map((part, index) =>
			regex.test(part) ? (
				<span key={index} className="highlight">
					{part}
				</span>
			) : (
				part
			)
		);
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
											to="/contactus"
											className={({ isActive }) =>
												isActive
													? "nav-link active-link"
													: "nav-link"
											}
											onClick={handleClose}
										>
											CONTACT US
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
												placeholder="Search"
												aria-label="Search"
												value={searchTerm}
												onChange={handleSearch}
												onBlur={handleBlur}
											/>
											<Button variant="outline-primary">
												<i className="fa-solid fa-magnifying-glass"></i>
											</Button>
										</Form>
										{searchTerm && (
											<div className="search-results">
												{filteredProducts.length > 0 ? (
													filteredProducts.map(
														(product) => (
															<div
																key={product.id}
																className="product-item"
																onClick={() =>
																	handleProductClick(
																		product.id
																	)
																}
															>
																<h4 className="text-end">
																	{highlightText(
																		product.name,
																		searchTerm
																	)}
																</h4>
																<p className="text-end">
																	{window.innerWidth <=
																	767
																		? highlightText(
																				product.description,
																				searchTerm,
																				40
																			)
																		: highlightText(
																				product.description,
																				searchTerm,
																				80
																			)}
																</p>
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
