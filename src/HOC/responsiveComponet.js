import { useMediaQuery } from "react-responsive";
import HeaderMobile from "../tempalates/Layout/HomeTemplate/Header/HeaderMobile";
//HomeTabsFilm responsive
export const HomeTabsFilmMobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 767 });
  return isMobile ? children : null;
};
export const HeaderResponsive = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 991 });
  return isMobile ? children : <HeaderMobile />;
};
