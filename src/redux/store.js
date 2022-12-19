import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productReducer from "./reducers/productReducer";
import { rootReducer } from "./reducers/rootReducer";
import logger from "redux-logger";
import cartCounter from "./middleware/cardCounter";


// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
const store = createStore(rootReducer, applyMiddleware(cartCounter));

export default store;
