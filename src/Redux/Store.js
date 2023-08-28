import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {Reducer} from './Reducer';
import logger from "redux-logger";

const rootReducer = combineReducers({user:Reducer});

const store = configureStore({reducer:rootReducer,middleware:[thunk,logger]})
export default store;