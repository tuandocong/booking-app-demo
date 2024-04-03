import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import MovieList from "../component/MovieList";
import MovieDetail from "../component/MovieDetail";

function Browse() {
  //Các API Endpoint để lấy dữ liệu từ API
  const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=5930a4bd5fd362f703107574d4a9f27d&language=en-US`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=5930a4bd5fd362f703107574d4a9f27d&with_network=123`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=5930a4bd5fd362f703107574d4a9f27d&language=en-US`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=5930a4bd5fd362f703107574d4a9f27d&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=5930a4bd5fd362f703107574d4a9f27d&with_genres=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=5930a4bd5fd362f703107574d4a9f27d&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=5930a4bd5fd362f703107574d4a9f27d&with_genres=10749`,
    fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=5930a4bd5fd362f703107574d4a9f27d&with_genres=99`,
    fetchSearch: `https://api.themoviedb.org/3/search/movie?api_key=5930a4bd5fd362f703107574d4a9f27d&language=en-US`,
  };
  //State lưu giá trị trả về từ Endpoint
  // Banner Movie
  const [movieBanner, setMovieBanner] = useState({
    name: "",
    backdrop_path: "/wPU78OPN4BYEgWYdXyg0phMee64.jpg",
    overview: "",
  });
  //Orginal Movies
  const [movieListOrig, setMovieListOrig] = useState([]);
  //Xu hướng Movies
  const [movieListTrending, setMovieListTrending] = useState([]);
  //Xếp hạng cao Movies
  const [movieListTopRate, setMovieListTopRate] = useState([]);
  //Hành động Movies
  const [movieListAction, setMovieListAction] = useState([]);
  //Hài Movies
  const [movieListComedy, setMovieListComedy] = useState([]);
  //Kinh dị Movies
  const [movieListHorror, setMovieListHorror] = useState([]);
  // Lãng mạn Movies
  const [movieListRomance, setMovieListRomance] = useState([]);
  //Tài liệu Movies
  const [movieListDocument, setMovieListDocument] = useState([]);

  //Gửi yêu cầu dữ liệu từ API
  useEffect(() => {
    //1. Data cho Banner
    fetch(requests.fetchNetflixOriginals)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.results[
          Math.floor(Math.random() * data.results.length - 1)
        ];
      })
      .then((movie) => {
        setMovieBanner(movie);
      });

    //2. Data cho list originnal
    fetch(requests.fetchNetflixOriginals)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovieListOrig(data.results);
      });

    //3. Dât cho list trending
    fetch(requests.fetchTrending)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovieListTrending(data.results);
      });

    //4. Data cho list top rate
    fetch(requests.fetchTopRated)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovieListTopRate(data.results);
      });

    //5.Data cho list action
    fetch(requests.fetchActionMovies)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovieListAction(data.results);
      });

    //6.Data cho list comedy
    fetch(requests.fetchComedyMovies)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovieListComedy(data.results);
      });

    //7.Data cho list horror
    fetch(requests.fetchHorrorMovies)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovieListHorror(data.results);
      });

    //8.Data cho list romance
    fetch(requests.fetchRomanceMovies)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovieListRomance(data.results);
      });

    //9.Data cho list document
    fetch(requests.fetchDocumentaries)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.results);
        setMovieListDocument(data.results);
      });
  }, [
    requests.fetchNetflixOriginals,
    requests.fetchTrending,
    requests.fetchTopRated,
    requests.fetchActionMovies,
    requests.fetchComedyMovies,
    requests.fetchRomanceMovies,
    requests.fetchHorrorMovies,
    requests.fetchDocumentaries,
  ]);

  // COMPONENT MOVIE DETAIL ---hiển thị thông tin phim được click:
  //giá trị xét ẩn/hiện MovieDetail
  const [isShow, setIsShow] = useState(false);
  //giá trị ID của movie hiện trên MovieDetail
  const [idMovieClicked, setIdMovieClicked] = useState("123");

  //Nhận data từ component MovieList khi click vào img của một bộ phim:
  //State chứa thông tin movie
  const [movieDetail, setMovieDetail] = useState({
    release_date: "1972-03-14",
    first_air_date: "1972-03-14",
    name_movie: "The Godfather",
    vote: "8.7",
    title: "The Godfather",
    id_movie: "123",
    backdrop: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    overview:
      "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
  });
  //Hàm khi click vào 1 img -- dataMovie được kiểm tra và gán data để MovieDetail sử dụng
  const getDataMovieHandler = (dataMovie) => {
    //kiểm tra id => trạng thái ẩn hiện movieDetail:
    if (dataMovie.id === idMovieClicked) {
      setIsShow(!isShow);
    } else {
      setIsShow(true);
      setIdMovieClicked(dataMovie.id);
    }

    //Gán data nhận được cho MovieDetail
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
  };

  return (
    <div
      className="app"
      style={{ paddingBottom: "500px", backgroundColor: "rgb(23, 23, 23)" }}
    >
      <Banner data={movieBanner} />

      <MovieList
        dataList={movieListOrig}
        nameList="orig"
        onClickImgMovie={getDataMovieHandler}
      />
      <MovieList
        dataList={movieListTrending}
        nameList="Xu hướng"
        onClickImgMovie={getDataMovieHandler}
      />
      <MovieList
        dataList={movieListTopRate}
        nameList="Xếp hạng cao"
        onClickImgMovie={getDataMovieHandler}
      />
      <MovieList
        dataList={movieListAction}
        nameList="Hành động"
        onClickImgMovie={getDataMovieHandler}
      />
      <MovieList
        dataList={movieListComedy}
        nameList="Hài"
        onClickImgMovie={getDataMovieHandler}
      />
      <MovieList
        dataList={movieListHorror}
        nameList="Kinh dị"
        onClickImgMovie={getDataMovieHandler}
      />
      <MovieList
        dataList={movieListRomance}
        nameList="Lãng mạn"
        onClickImgMovie={getDataMovieHandler}
      />
      <MovieList
        dataList={movieListDocument}
        nameList="Tài liệu"
        onClickImgMovie={getDataMovieHandler}
      />
      {isShow && <MovieDetail dataMovie={movieDetail} />}
      <Navbar />
    </div>
  );
}

export default Browse;
