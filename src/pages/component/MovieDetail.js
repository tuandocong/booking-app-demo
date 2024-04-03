import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
function MovieDetail(props) {
  //Chứa data các video trả về từ API
  const [videoMovie, setVideoMovie] = useState([]);

  //Chứa đường dẫn của video sau khi lọc qua các tiêu chí
  const [currentMovie, setCurrentMovie] = useState("");

  //lấy đường dẫn từ id movie trả về từ props
  const requests = `https://api.themoviedb.org/3//movie/${props.dataMovie.id_movie}/videos?api_key=5930a4bd5fd362f703107574d4a9f27d`;

  //gửi yêu cầu API và xử lý TH trả về error
  useEffect(() => {
    fetch(requests)
      .then((response) => {
        if (!response.ok) {
          setVideoMovie([]);
          throw new Error(`Không có video Trailer trả về từ API cho movie!!!`);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data.success === false) {
          setVideoMovie([]);
          throw new Error(` ${data.status_message}`);
        } else {
          setVideoMovie(data.results);
        }
      })
      .catch((error) => {
        console.log(`ERROR: ${error.message}!!!!!`);
      });
  }, [requests]);

  //Lấy video trailer phù hợp: site === 'Youtube', ưu tiên 'Trailer'>'Teaser'
  useEffect(() => {
    if (videoMovie.length === 0) {
      setCurrentMovie("");
    } else {
      for (let i = 0; i < videoMovie.length; i++) {
        // console.log(videoMovie[i].site);
        if (videoMovie[i].site === "YouTube") {
          // console.log(videoMovie[i]);
          if (videoMovie[i].type === "Trailer") {
            setCurrentMovie(videoMovie[i].key);
            // console.log(currentMovie);
            break;
          } else if (videoMovie[i].type === "Teaser") {
            setCurrentMovie(videoMovie[i].key);
            // console.log(currentMovie);
            break;
          }
        } else {
          setCurrentMovie("");
          console.log("no video???");
        }
      }
    }
  }, [videoMovie]);

  return (
    <div className="contain-movie-detail">
      <div>
        <div className="name-movie-detail">
          {props.dataMovie.title
            ? props.dataMovie.title
            : props.dataMovie.name_movie}
        </div>
        <div className="info-movie-detail">
          <div className="date-detail">
            Release Date:{" "}
            {props.dataMovie.release_date
              ? props.dataMovie.release_date
              : props.dataMovie.first_air_date}
          </div>
          <div className="vote-detail">Vote: {props.dataMovie.vote}/10</div>
          <div className="text-detail">
            {props.dataMovie.overview
              ? props.dataMovie.overview
              : "It hasn't oveview"}
          </div>
        </div>
      </div>
      <div>
        {currentMovie && (
          <iframe
            title="myFrame"
            className="movie-detail-trailer"
            width="95%"
            height="320px"
            // src="https://www.youtube.com/embed/9-0WZDbA9m0"
            src={`https://www.youtube.com/embed/${currentMovie}`}
          ></iframe>
        )}
        {!currentMovie && (
          <img
            src={
              props.dataMovie.backdrop
                ? `https://image.tmdb.org/t/p/w500${props.dataMovie.backdrop}`
                : `https://image.tmdb.org/t/p/w500/xEG5iP1qZCiDt4BefSpLy1d54zE.jpg`
            }
            alt="img"
            className="backdrop-movie-detail"
          ></img>
        )}
      </div>
    </div>
  );
}
export default React.memo(MovieDetail);
