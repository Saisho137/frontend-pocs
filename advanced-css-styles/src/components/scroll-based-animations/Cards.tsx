import { CSSProperties } from "react";
import "./Cards.scss";

const Cards: React.FC = () => {
	const cardsList = [
		{ id: 1, title: "Card 1", content: "Contenido de la tarjeta 1" },
		{ id: 2, title: "Card 2", content: "Contenido de la tarjeta 2" },
		{ id: 3, title: "Card 3", content: "Contenido de la tarjeta 3" },
		{ id: 4, title: "Card 4", content: "Contenido de la tarjeta 4" },
		{ id: 4, title: "Card 4", content: "Contenido de la tarjeta 4" },
		{ id: 4, title: "Card 4", content: "Contenido de la tarjeta 4" },
		{ id: 4, title: "Card 4", content: "Contenido de la tarjeta 4" },
	];

	return (
		<div className="scene">
			<div className="card-stack">
				{cardsList.map((card, index) => (
					<div
						key={card.id}
						className="card"
						style={{ "--i": index as CSSProperties } as React.CSSProperties}>
						<h3>{card.title}</h3>
						<p>{card.content}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Cards;
