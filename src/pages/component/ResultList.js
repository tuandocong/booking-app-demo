import React, { useEffect } from "react";
import { useState } from "react";
import "./ResultList.css";
function ResultList(props) {
  //Chứa mảng các kết quả trả về từ API đã tìm kiếm
  const [resultArr, setResultArr] = useState([]);

  //Đướng dẫn lấy dữ liệu từ API bằng từ khóa nhận được qua props
  const requestMovie = `https://api.themoviedb.org/3/search/movie?api_key=5930a4bd5fd362f703107574d4a9f27d&language=en-US&query=${props.nameSearch}&page=1`;

  //Gửi yêu cầu API
  useEffect(() => {
    fetch(requestMovie)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: API request !!!`);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setResultArr(data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [requestMovie]);
  const getMovieData = (data) => {
    props.getIDMovie(data);
  };

  return (
    <div style={{ backgroundColor: "rgb(23,23,23)" }}>
      <h1 className="header-result">Search Result</h1>
      <div className="result-list">
        {resultArr.map((data) => (
          <img
            onClick={() => getMovieData(data)}
            key={data.id}
            src={
              data.poster_path
                ? `https://image.tmdb.org/t/p/w200${data.poster_path}`
                : `https://image.tmdb.org/t/p/w200/zzoPxWHnPa0eyfkMLgwbNvdEcVF.jpg`
            }
            alt="img"
          ></img>
        ))}
      </div>
    </div>
  );
}
export default ResultList;
