import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import BlogPost from "./container/BlogPost/BlogPost";
// import MahasiswaBlogPost from './container/BlogPost/MahasiswaBlogPost';
 //ReactDOM.render(<MahasiswaBlogPost />, document.getElementById("content"));
//ReactDOM.render(<BlogPost />, document.getElementById("content"));


import BlogPost from './container/BlogPost/BlogPost';
ReactDOM.render(<BlogPost />, document.getElementById('content'));
// ReactDOM.render(<MahasiswaBlogPost />, document.getElementById("content"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
