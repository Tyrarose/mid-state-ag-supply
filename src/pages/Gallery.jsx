import React from "react";
import "../styles/Gallery.css";

import mixedGallery from "../data/gallery-mixed.json";
import portraitGallery from "../data/gallery-portrait.json";
import landscapeGallery from "../data/gallery-landscape.json";

const Row = ({ ids, gallery, handleImageClick, rowNumber }) => (
	<div className={`row gallery-row row-${rowNumber}`}>
		{/* <div className="row-header">Row {rowNumber}</div> */}
		{ids.map((id) =>
			gallery
				.filter((item) => item.id === id)
				.map((item) => (
					<img
						key={item.id}
						src={item.imageURL}
						alt={`Image ${item.id}`}
						className="collage-item"
						onClick={() => handleImageClick(item.imageURL)}
					/>
				))
		)}
	</div>
);

function Gallery() {
	const [highlightedImage, setHighlightedImage] = React.useState("");

	const handleImageClick = (imageURL) => {
		setHighlightedImage((prev) => (prev ? "" : imageURL));
	};

	const rows = [
		[1, 2, 3, 4, 5],
		[6, 7, 8, 9, 10],
		[11, 12, 13, 14, 15],
		[16, 17, 18, 19, 20, 21],
		[22, 23, 24, 25, 26, 27],
		[28, 29, 30],
	];

	return (
		<div>
			<h1 className="title text-center">Welcome to our gallery,</h1>
			<p className="gallery-context text-center">
				Discover how Mid-State Ag Supply LLC’s solutions make a
				difference in the field. Our gallery showcases real-world
				applications of our ventilation systems, barn curtains, and
				fans, highlighting their impact on farm productivity and animal
				comfort.
			</p>
			<p className="gallery-context text-center">
				See our expertly designed products in action, enhancing
				livestock environments and optimizing farming operations.
				<br></br>Explore the practical benefits and exceptional quality
				of our solutions through these visual examples.
			</p>

			<section className="desktop">
				{rows.map((ids, index) => (
					<Row
						key={index}
						ids={ids}
						gallery={mixedGallery}
						handleImageClick={handleImageClick}
						rowNumber={index + 1}
					/>
				))}
			</section>
			<section className="mobile">
				<div className="portrait text-center">
					{portraitGallery.map((item) => (
						<img
							key={item.id}
							src={item.imageURL}
							className="collage-item"
							alt={`Portrait ${item.id}`}
							onClick={() => handleImageClick(item.imageURL)}
						/>
					))}
				</div>
				<div className="landscapee text-center">
					{landscapeGallery.map((item) => (
						<img
							key={item.id}
							src={item.imageURL}
							className="collage-item"
							alt={`Landscape ${item.id}`}
							onClick={() => handleImageClick(item.imageURL)}
						/>
					))}
				</div>
			</section>

			{/* Fullscreen image */}
			{highlightedImage && (
				<div
					className="fullscreen-overlay"
					onClick={() => setHighlightedImage("")}
				>
					<img
						src={highlightedImage}
						alt="Fullscreen"
						className="fullscreen-image"
					/>
				</div>
			)}
		</div>
	);
}

export default Gallery;
