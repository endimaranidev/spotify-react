import "./Main.css";
import Card from "./Card";
import { playlist } from "@/Data/Playlist";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

interface Artist {
	id: number;
	name: string;
	genre: string;
	urlImg: string;
}

interface MainProps {
	searchTerm: string;
	filteredArtists: Artist[];
}

const Main = ({ searchTerm, filteredArtists }: MainProps) => {
	const showArtists = searchTerm.trim() !== "" && filteredArtists.length > 0;

	return (
		<div className="playlist-container">
			<div id="result-playlists" className={showArtists ? "hidden" : ""}>
				<div className="playlist">
					<h1 id="greeting">Boas vindas</h1>
					<h2 className="session">Navegar por todas as seções</h2>
				</div>
				<div className="offer__scroll-container">
					<div className="offer__list">
						<section className="offer__list-item">
							{playlist.map((list, index) => (
								<Card
									key={list.id}
									name={list.name}
									image={list.image}
									index={index}
								/>
							))}
						</section>
					</div>
				</div>
			</div>

			<div id="result-artist" className={!showArtists ? "hidden" : ""}>
				<div className="grid-container">
					{filteredArtists.map((artist) => (
						<div key={artist.id} className="artist-card">
							<div className="card-img">
								<Image
									src={artist.urlImg}
									alt={artist.name}
									className="artist-img"
									width={300}
									height={300}
                                    quality={100}
                                    priority
								/>
								<div className="play">
									<FontAwesomeIcon icon={faPlay} className="fa-play" />
								</div>
							</div>
							<div className="card-text">
								<a className="vst" href="#">
									<span className="artist-name">{artist.name}</span>
									<span className="artist-categorie">{artist.genre}</span>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Main;
