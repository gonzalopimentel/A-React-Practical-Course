/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import useInitialState from "../hooks/useInitialState";

import "../assets/styles/App.scss";

import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

const API = "http://localhost:3000/initialState";

const App = () => {
  const initialState = useInitialState(API);
  return (
    <div className="App">
      <Header />
      <Search />

      {initialState.mylist.length === 0 ? (
        <Categories title="My List">
          <h3>Your List is Empty, add some content!</h3>
        </Categories>
      ) : (
        <Categories title="My List">
          <Carousel>
            {initialState.mylist.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencies">
        <Carousel>
          {initialState.trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Platzi Video Classics">
        <Carousel>
          {initialState.originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};
export default App;
