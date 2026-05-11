import { lazy, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";

const YouTubePlayer = lazy(() => import("../components/YoutubePlayer"));

const HomePage = () => {
	const videoId = "aW2m-BtCJyE";
	const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

	const [showVideo, setShowVideo] = useState(false);
	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate("/large-content");
	};

	const handlePlayClick = () => {
		setShowVideo(true);
	};

	return (
		<main>
			<h1>Home</h1>
			<button onClick={handleRedirect}>Go to Infinite Scroll</button>
			<section
				style={{
          position: 'relative',
          width: '100%',
          maxWidth: '640px',
          margin: 'auto',
          paddingTop: showVideo ? '' : '56.25%', // Mantener relación de aspecto 16:9
        }}
        >
				{showVideo ? (
					<Suspense fallback={<div>Loading Video...</div>}>
						<YouTubePlayer videoId={videoId} />
					</Suspense>
				) : (
					<div
						style={{
							position: "absolute",
							width: "100%",
							height: "100%",
							backgroundImage: `url(${thumbnailUrl})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							cursor: "pointer",
						}}
						onClick={handlePlayClick}>
						<div
							style={{
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								width: "68px",
								height: "48px",
								background: "rgba(0, 0, 0, 0.8)",
								borderRadius: "50%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 24 24"
								fill="white">
								<path d="M8 5v14l11-7z" />
							</svg>
						</div>
					</div>
				)}
			</section>
		</main>
	);
};

export default HomePage;
