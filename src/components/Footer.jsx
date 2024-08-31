import React from "react";
import "../styles/Footer.css";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<div className="gradient-footer">
				<p className="copyright text-center">
					© Copyright {currentYear} Developed by{" "}
					<a
						href="https://www.tyragenerose.top/"
						className="develink"
						target="_blank"
						rel="noopener noreferrer"
					>
						Tyra
					</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
