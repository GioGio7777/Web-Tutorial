import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Video1 from "./Video/Video1";
import Video2 from "./Video/Video2";
import Video3 from "./Video/Video3";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" exact element={<App/>}></Route>
                  <Route path="/video1" element={<Video1 />} />
                  <Route path="/video2" element={<Video2/>}></Route>
                  <Route path="/video3" element={<Video3 />} />
              </Routes>
          </BrowserRouter>
      </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
