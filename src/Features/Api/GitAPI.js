import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../Helper/axios";



export const GitUsers = createAsyncThunk("Git/Users", async (username) => {
          try {
                    const response = await Axios.get(`/users/${username}`)
                    return response.data
          } catch (e) {
                    return e.message
          }
})

export const GitUserData = createAsyncThunk("Git/UserData", async ({ username, pageno }) => {
          try {
                    const response = await Axios.get(`/users/${username}/repos?per_page=${pageno}&per_page=8`,)
                    return response.data
          } catch (e) {
                    return e.message
          }
})