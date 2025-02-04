"use client";

import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Main from "@/Components/Main/Main";
import Sidebar from "@/Components/Sidebar/Sidebar";

import { useState, useEffect } from "react";

import artistsData from "@/api-artists/artists.json";


export default function Home() {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredArtists, setFilteredArtists] = useState(artistsData.artists);


	useEffect(() => {
		if (searchTerm.trim() === "") {
			setFilteredArtists([]);
		} else {
			setFilteredArtists(
				artistsData.artists.filter((artist) =>
					artist.name.toLowerCase().startsWith(searchTerm.toLowerCase())
				)
			);
		}
	}, [searchTerm]);

	return (
		<>
			<Header searchTerm={searchTerm} onSearch={setSearchTerm} />
			<Sidebar />
			<Main searchTerm={searchTerm} filteredArtists={filteredArtists} />
			<Footer />
		</>
	);
}
