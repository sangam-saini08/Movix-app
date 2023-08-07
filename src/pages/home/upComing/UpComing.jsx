import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper.jsx";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs.jsx";
import useFetch from "../../../hooks/useFetch.jsx";
import Carousel from "../../../components/carousel/Carousel.jsx";

function UpComing() {
	const [urlEndPoint, setUrlEndPoint] = useState("movie");

	const { data, loading } = useFetch(`/${urlEndPoint}/upcoming`);
	const onTabChange = (tab) => {
		setUrlEndPoint("movie");
	};

	return (
		<div className="carouselSection">
			<ContentWrapper>
				<span className="carouselTitle">Up Coming MOVIE</span>
				<SwitchTabs data={["movie"]} onTabChange={onTabChange} />
			</ContentWrapper>
			<Carousel data={data?.results} loading={loading} type={urlEndPoint} />
		</div>
	);
}

export default UpComing;
