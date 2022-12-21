import { configureStore } from "@reduxjs/toolkit";
// import auth from "./slices/authSlice";
// import ticket from "./slices/ticketSlice";

const store = configureStore({
  reducer: {
    // auth,
    // ticket,
  },
});

export default store;
