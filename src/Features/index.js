import { configureStore } from "@reduxjs/toolkit";
import GitSlice from "./Slice/GitSlice";


export const store = configureStore({
          reducer: {
                    GitUserData: GitSlice,
          },
});