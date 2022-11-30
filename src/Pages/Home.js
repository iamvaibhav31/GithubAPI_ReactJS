import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GitUsers } from '../Features/Api/GitAPI'
import { geterror, getstatus, getusers } from '../Features/Slice/GitSlice'
import Usercard from "../Components/Usercard";
import Spinner from "../Components/Spinner";

const Home = () => {
          const dispatch = useDispatch()
          const error = useSelector(geterror)
          const status = useSelector(getstatus)
          const usersdata = useSelector(getusers)
          const [searched, setSeached] = useState("")


          const userfilter = (e) => {
                    e.preventDefault()
                    setSeached(e.target.value)

          }

          const handlesubmit = (e) => {
                    e.preventDefault()
                    dispatch(GitUsers(searched))
          }


          return (
                    <div className="w-screen h-screen flex justify-center items-center flex-col">
                              <div className=" my-4">

                                        <div className="flex flex-col ">
                                                  <h1 className="text-center my-4 font-mono tracking-wide text-lg sm:text-2xl md:text-4xl">GitHub Users</h1>
                                                  <div className="flex ">
                                                            <input class=" appearance-none border rounded-full font-mono mx-2 py-3 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={userfilter} />
                                                            <button className="mx-2 py-3 px-5 bg-sky-600 hover:bg-sky-800 font-mono text-white rounded-full" onClick={handlesubmit}> Search</button>
                                                  </div>

                                        </div>



                              </div>

                              <div className="container mx-auto flex justify-center my-8 ">

                                        {status === "loading" && <Spinner />}

                                        {status === "successful" && <Usercard profilepic={usersdata.avatar_url} username={usersdata.login} bio={usersdata.bio} followers={usersdata.followers} following={usersdata.following} profileurl={usersdata.html_url} />}

                                        {status === "failed" && <h1 className="font-mono text-lg sm:text-xl md:text-2xl text-red-700">{error}</h1>}



                              </div>
                    </div>
          );
};

export default Home;
