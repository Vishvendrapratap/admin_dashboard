import { configureStore } from "@reduxjs/toolkit";

import LoginPagereducer from '../Reducers/Loginpagereducer';

const store=configureStore({reducer:LoginPagereducer})

export default store;