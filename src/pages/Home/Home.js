import React from "react";
import { HomeTabsFilmMobile } from "../../HOC/responsiveComponet";
import HomeCarousel from "../../tempalates/Layout/HomeTemplate/HomeCarousel/HomeCarousel";
import Carousel from "../../tempalates/Layout/HomeTemplate/HomeCarousel/HomeCarousel";
import HomeDetailFilm from "../../tempalates/Layout/HomeTemplate/HomeDetailFilm/HomeDetailFilm";
import HomeTabsFilm from "../../tempalates/Layout/HomeTemplate/HomeTabsFilm/HomeTabsFilm";

export default function Home(props) {
  return (
    <div>
      <HomeCarousel />
      <HomeDetailFilm />
      <HomeTabsFilmMobile>
        <HomeTabsFilm />
      </HomeTabsFilmMobile>
    </div>
  );
}
