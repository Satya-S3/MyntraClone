import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./itemSlice";
import bagSlice from "./bagSlice";
import searchSlice from "./searchSlice";



const myntraStore=configureStore({
      reducer:{
            items:itemsSlice.reducer,
            bag:bagSlice.reducer,
            search:searchSlice.reducer,
      }
})

export default myntraStore;