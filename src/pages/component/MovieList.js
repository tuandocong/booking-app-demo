import React from "react";
import "./MovieList.css";

function MovieList(props) {
  // Kiểm tra xem có phải thuộc List Original Movie
  let isOriginaldata = false;
  if (props.nameList === "orig") {
    isOriginaldata = true;
  }

  // Hàm khi click vào 1 movie img => gửi đi data của movie clicked
  function getMovieData(item) {
    props.onClickImgMovie(item);
  }

  return (
    <div className="contain-movie-list">
      {!isOriginaldata && <h1>{props.nameList}</h1>}
      <div className="list-movie-orig">
        {props.dataList.map((item) => (
          <div
            key={item.id}
            className="contain-img-movie-list"
            onClick={() => getMovieData(item)}
          >
            <img
              src={
                isOriginaldata
                  ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                  : item.backdrop_path
                  ? //khắc phuc lỗi khi không có img minh họa sẽ thay bằng 1 img có sẵn
                    ` https://image.tmdb.org/t/p/w200${item.backdrop_path}`
                  : `https://image.tmdb.org/t/p/w200/eoAvHxfbaPOcfiQyjqypWIXWxDr.jpg`
              }
              alt="img"
              className={isOriginaldata ? "img-origin" : ""}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MovieList;
