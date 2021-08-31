import { createStore } from "redux";
import rootReducer from "./Shopping/rootReducer";

const store = createStore(rootReducer);

export default store;
