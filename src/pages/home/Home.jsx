import React from "react";
import "./style.scss";
import HeroBanner from "./hereBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import UpComing from "./upComing/UpComing";

function Home() {
	return (
		<div className="homePage">
			<HeroBanner />
			<Trending />
			<Popular />
			<TopRated />
			<UpComing />
		</div>
	);
}

export default Home;
