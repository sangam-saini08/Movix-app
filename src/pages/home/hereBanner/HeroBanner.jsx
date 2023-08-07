import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch.jsx";
import Img from "../../../components/lazyLoadimg/img.jsx";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper.jsx";

function HeroBanner() {
	const [background, setBackground] = useState("");
	const [query, setQuery] = useState("");
	const { backdrop } = useSelector((state) => state.home.url);
	const navigate = useNavigate();

	const { data, loading } = useFetch("/movie/upcoming");

	useEffect(() => {
		const bg = data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
		setBackground(backdrop + bg);
	}, [data]);

	const queryHandler = (event) => {
		if (event.key === "Enter" && query.length > 0) {
			navigate(`/search/${query}`);
		}
	};

	return (
		<div className="heroBanner">
			{!loading && (
				<div className="backdrop-img" style={{ width: "100%", height: "100%" }}>
					<Img src={background} />
				</div>
			)}
			<div className="opacity-layer"></div>
			<ContentWrapper>
				<div className="heroBannerContent">
					<span className="title">Welcome.</span>
					<span className="subTitle">
						Millions of movies, TV shows and people to discover. Explore now.
					</span>
					<div className="searchInput">
						<input
							type="text"
							placeholder="Search for a movie or tv show..."
							onKeyUp={queryHandler}
							value={query}
							onChange={(event) => {
								setQuery(event.target.value);
							}}
						/>
						<button>Search</button>
					</div>
				</div>
			</ContentWrapper>
		</div>
	);
}

export default HeroBanner;
