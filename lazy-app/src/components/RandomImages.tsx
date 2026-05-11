import React, { useState, useEffect } from "react";

const RandomImages: React.FC = () => {
	const [imageUrls, setImageUrls] = useState<string[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const fetchRandomDogImages = async () => {
		setLoading(true);
		try {
			const response = await fetch("https://dog.ceo/api/breeds/image/random/5");
			const data = await response.json();
			setImageUrls(data.message); // La API retorna un array de URLs de imágenes
		} catch (error) {
			console.error("Error fetching images:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchRandomDogImages();
	}, []);

	return (
		<div>
			<h2>Random Dog Images</h2>
			{loading ? (
				<p>Loading images...</p>
			) : (
				<div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
					{imageUrls.map((url, index) => (
						<img
							key={index + url}
							src={url}
							alt={`Random Dog ${index + 1}`}
							style={{ width: "200px", height: "200px", objectFit: "cover" }}
						/>
					))}
				</div>
			)}
			<button onClick={fetchRandomDogImages} style={{ marginTop: "10px" }}>
				Fetch More Images
			</button>
		</div>
	);
};

export default RandomImages;
