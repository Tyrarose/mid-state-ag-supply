import React, { useState } from "react";
import "../styles/Gallery.css";

import gallerylandscapeData from "../data/gallery-landscape.json";
import galleryportraitData from "../data/gallery-portrait.json";

function Gallery() {
	// State to manage the currently highlighted image
	const [highlightedLandscapeImage, setHighlightedLandscapeImage] = useState(
		gallerylandscapeData[0]?.imageURL
	);
	const [highlightedPortraitImage, setHighlightedPortraitImage] = useState(
		galleryportraitData[0]?.imageURL
	);

	// Handler for landscape image click
	const handleLandscapeClick = (imageURL) => {
		setHighlightedLandscapeImage(imageURL);
	};

	// Handler for portrait image click
	const handlePortraitClick = (imageURL) => {
		setHighlightedPortraitImage(imageURL);
	};

	return (
		<div>
			<section className="landscape-section">
				<div className="content-container">
					<div className="landscape-highlight">
						<img
							src={highlightedLandscapeImage}
							alt="Highlighted Landscape"
							className="highlighted-image"
						/>
					</div>
					<div className="landscape-strips text-center">
						{gallerylandscapeData.map((item) => (
							<img
								key={item.id}
								src={item.imageURL}
								alt={`Landscape ${item.id}`}
								className={`landscape-image ${highlightedLandscapeImage === item.imageURL ? "selected-image" : ""}`}
								onClick={() =>
									handleLandscapeClick(item.imageURL)
								}
							/>
						))}
					</div>
				</div>
			</section>
			<section className="portrait-section">
				<div className="content-container">
					<div className="portrait-highlight">
						<img
							src={highlightedPortraitImage}
							alt="Highlighted Portrait"
							className="highlighted-image"
						/>
					</div>
					<div className="portrait-strips text-center">
						{galleryportraitData.map((item) => (
							<img
								key={item.id}
								src={item.imageURL}
								alt={`Portrait ${item.id}`}
								className={`portrait-image ${highlightedPortraitImage === item.imageURL ? "selected-image" : ""}`}
								onClick={() =>
									handlePortraitClick(item.imageURL)
								}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Gallery;
