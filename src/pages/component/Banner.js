import React from "react";
import "./Banner.css";
function Banner(props) {
  // Lấy dữ liệu từ props: ảnh backdrop_path, name Movie, Overview
  const imgBanner = `https://image.tmdb.org/t/p/original${props.data.backdrop_path}`;
  const nameMovieBanner = props.data.name;
  const overviewMovieBanner = props.data.overview;

  return (
    <div className="contain-banner">
      <img src={imgBanner} alt="abc" style={{ width: "100%" }}></img>
      <div className="info-movie-banner">
        <div className="name-movie-banner">{nameMovieBanner}</div>
        <div>
          <button className="btn-banner">Play</button>
          <button className="btn-banner">My List</button>
        </div>
        <p className="overview-banner">{overviewMovieBanner}</p>
      </div>
    </div>
  );
}
export default React.memo(Banner);
