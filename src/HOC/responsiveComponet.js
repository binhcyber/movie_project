import { useMediaQuery } from "react-responsive";
//HomeTabsFilm responsive
export const HomeTabsFilmMobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 767 });
  return isMobile ? children : null;
};
