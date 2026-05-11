import { FC } from "react";

interface YouTubePlayerProps {
	videoId: string;
	width?: string;
	height?: string;
}

const YouTubePlayer: FC<YouTubePlayerProps> = ({ videoId, width = "560", height = "315" }) => {
	const embedUrl = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
			<iframe
				width={width}
				height={height}
        loading="lazy" // With this property isnt necessary to implement lazy loading manually.
				src={embedUrl}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen></iframe>
		</div>
	);
};

export default YouTubePlayer;
