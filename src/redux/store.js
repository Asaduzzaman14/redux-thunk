import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productReducer from "./reducers/productReducer";
import { rootReducer } from "./reducers/rootReducer";
import logger from "redux-logger";
import cartCounter from "./middleware/cardCounter";
import thunk from "redux-thunk";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter, thunk)));
// const store = createStore(rootReducer,applyMiddleware(cartCounter, thunk));

export default store;
