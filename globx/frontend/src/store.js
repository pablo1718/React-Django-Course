import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//Reducers
import students from "./reducers/students.js";
import errors from "./reducers/errors.js";
import messages from "./reducers/messages.js";
import auth from "./reducers/auth.js";

const initialState = {};
const middleware = [thunk];

const reducers = combineReducers({
  students,
  errors,
  messages,
  auth,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
