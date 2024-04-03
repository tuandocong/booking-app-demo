import React, { useRef } from "react";
import "./SearchForm.css";
function SearchForm(props) {
  //tham chiếu đến input
  const inputRef = useRef();

  //Hàm khi click vào button SEARCH
  function clickSearchBtnHandler() {
    props.getValueInput(inputRef.current.value);
  }

  //Hàm khi click vào button RESET
  function clickResetBtnHandler() {
    inputRef.current.value = "";
    props.getValueInput(inputRef.current.value);
  }

  return (
    <div className="search-form-box">
      <div className="search-form-items">
        <div className="contain-input-search">
          <input
            type="text"
            placeholder="What the name of movie?"
            ref={inputRef}
          ></input>
          <svg
            className="svg-inline--fa fa-search fa-w-14 icon-search-form"
            fill="#ccc"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </div>
        <div className="btn-box">
          <button className="reset-btn" onClick={clickResetBtnHandler}>
            RESET
          </button>
          <button className="search-btn" onClick={clickSearchBtnHandler}>
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}
export default SearchForm;
