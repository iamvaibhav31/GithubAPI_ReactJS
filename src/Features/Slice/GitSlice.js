import { createSlice } from "@reduxjs/toolkit";
import { GitUsers, GitUserData } from "../Api/GitAPI"
import xtype from 'xtypejs'

const initialState = {
          users: [],
          repo: [],
          status: 'idle', // idle | loading | successful | failed
          error: null
}

const GitDataSlice = createSlice({
          name: 'GitHubData',
          initialState,
          reducers: {},
          extraReducers(builder) {
                    builder
                              .addCase(GitUsers.pending, (state, action) => {
                                        console.log(action)
                                        state.status = "loading"
                              })
                              .addCase(GitUsers.fulfilled, (state, action) => {
                                        console.log(action)
                                        if (xtype.type(action.payload) === "object") {
                                                  state.status = "successful"
                                                  state.users = action.payload
                                        } else {
                                                  state.status = "failed"
                                                  state.error = action.payload
                                        }

                              })
                              .addCase(GitUserData.pending, (state, action) => {
                                        console.log(action)
                                        state.status = "loading"
                              })
                              .addCase(GitUserData.fulfilled, (state, action) => {
                                        console.log(state.repo)
                                        if (xtype.type(action.payload) === "array") {
                                                  state.status = "successful"
                                                  state.repo = action.payload
                                        } else {
                                                  state.status = "failed"
                                                  state.error = action.payload
                                        }

                              })
                    // .addCase(GitUsers.rejected, (state, action) => {
                    //           state.status = "failed"
                    //           console.log(action)

                    //           state.error = action.error.message
                    // })
          }

})

export const getusers = (state) => state.GitUserData.users
export const getuserrepo = (state) => state.GitUserData.repo
export const getstatus = (state) => state.GitUserData.status
export const geterror = (state) => state.GitUserData.error

export default GitDataSlice.reducer;