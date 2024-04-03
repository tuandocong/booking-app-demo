import React, { useState } from "react";
import Navbar from "../component/Navbar";
import ResultList from "../component/ResultList";
import SearchForm from "../component/SearchForm";
import MovieDetail from "../component/MovieDetail";
const Search = () => {
  //useState chứa giá trị lấy từ input
  const [nameSearch, setNameSearch] = useState("");
  //useState xét ẩn/hiện movieDetail
  const [isShow, setIsShow] = useState(false);
  //useState chứa giá trị ID của bộ phim muốn xem detail
  const [idMovieClicked, setIdMovieClicked] = useState("123");
  //useState chứa data của bộ phim muốn xem detail
  const [movieDetail, setMovieDetail] = useState({
    release_date: "1972-03-14",
    first_air_date: "1972-03-14",
    name_movie: "The Godfather",
    vote: "10",
    title: "The Godfather",
    id_movie: "123",
    backdrop: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    overview: "abc",
  });
  // Hàm kiểm tra giá trị trả về từ img của bộ phim và gán data để hiển thị trên movieDetail
  function getIDMovieHandler(dataMovie) {
    //kiểm tra giá trị id movie => trạng thái ẩn/hiện movieDetail:
    if (dataMovie.id === idMovieClicked) {
      setIsShow(!isShow);
    } else {
      setIsShow(true);
      setIdMovieClicked(dataMovie.id);
    }

    //gán giá trị nhận được cho movieDetail
    setMovieDetail({
      first_air_date: dataMovie.first_air_date,
      name_movie: dataMovie.name,
      release_date: dataMovie.release_date,
      vote: dataMovie.vote_average,
      title: dataMovie.title,
      id_movie: dataMovie.id,
      overview: dataMovie.overview,
      backdrop: dataMovie.backdrop_path,
    });
  }
  //Hàm khi click và btn Search
  function getValueInputHandler(valueSearch) {
    setNameSearch(valueSearch);
  }
  return (
    <div className="app">
      <SearchForm getValueInput={getValueInputHandler} />
      <ResultList nameSearch={nameSearch} getIDMovie={getIDMovieHandler} />
      {isShow && <MovieDetail dataMovie={movieDetail} />}
      <Navbar />
    </div>
  );
};

export default Search;
