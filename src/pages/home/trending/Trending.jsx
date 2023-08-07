import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper.jsx";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs.jsx";
import useFetch from "../../../hooks/useFetch.jsx";
import Carousel from "../../../components/carousel/Carousel.jsx";

function Trending() {
	const [urlEndPoint, setUrlEndPoint] = useState("day");

	const { data, loading } = useFetch(`/trending/movie/${urlEndPoint}`);
	const onTabChange = (tab) => {
		setUrlEndPoint(tab === "Day" ? "day" : "week");
	};

	return (
		<div className="carouselSection">
			<ContentWrapper>
				<span className="carouselTitle">Trending</span>
				<SwitchTabs data={["Day", "week"]} onTabChange={onTabChange} />
			</ContentWrapper>
			<Carousel data={data?.results} loading={loading} type={"movie"} />
		</div>
	);
}

export default Trending;
