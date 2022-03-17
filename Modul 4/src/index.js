import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
//import BlogPost from './container/BlogPost/BlogPost';


// function HelloComponent(){
//   return <p>HelloComponent</p>
// }

// class StateFullComponent extends React.Component {
//   render() {
//     return <p>Statefull Component</p>;
//   }
// }

// ReactDOM.render(<HelloComponent />, document.getElementById('root'));


//ReactDOM.render(<BlogPost/>, document.getElementById('content'))

//ReactDOM.render(<App />, document.getElementById('root'));

import MahasiswaBlogPost from './container/BlogPost/MahasiswaBlogPost';

// ReactDOM.render(<BlogPost />, document.getElementById('content'));
ReactDOM.render(<MahasiswaBlogPost />, document.getElementById('content'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();