import { combineReducers } from "redux";
import { CarouselReducer } from "./CarouselReducer";
import { DetailFilmReducer } from "./DetailFilmReducer";
import { TabsFilmReducer } from "./TabsFilmReducer";
import { InforFilmReducer } from "./InForFilmReducer";
import { UserReducer } from "./UserReducer";
import { TicketReducer } from "./TicketReducer";
export const configReducer = combineReducers({
  CarouselReducer,
  DetailFilmReducer,
  TabsFilmReducer,
  InforFilmReducer,
  UserReducer,
  TicketReducer,
  //
});
