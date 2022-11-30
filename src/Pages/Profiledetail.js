import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GitUserData } from '../Features/Api/GitAPI'
import { geterror, getstatus, getuserrepo } from '../Features/Slice/GitSlice'
import Repocard from "../Components/Repocard";
import Spinner from "../Components/Spinner";
import link from '../Assets/SVG/link.svg'
const Profiledetail = () => {
          const [SearchParams] = useSearchParams()
          const dispatch = useDispatch()
          const error = useSelector(geterror)
          const status = useSelector(getstatus)
          const userrepodata = useSelector(getuserrepo)
          const [page, setPage] = useState(1)


          useEffect(() => {
                    dispatch(GitUserData({
                              username: SearchParams.get("profilename"),
                              pageno: page
                    }))
          }, [page, SearchParams, dispatch])

          const handlenext = () => {
                    setPage(page + 1)
          }
          const handleprevious = () => {
                    if (page > 1) {
                              setPage(page - 1)
                    }

          }
          console.log(page)
          return (
                    <div className="w-full h-screen flex flex-col  " >

                              <div className=" container mx-auto flex flex-col  py-20">
                                        <div className="flex flex-row items-stretch  ">
                                                  <img src={SearchParams.get("profilepic")} alt="profile" className="w-24 h-24 sm:w-40 sm:h-40 md:w-60 md:h-60  rounded-full shadow-lg" />
                                                  <div className=" flex items-center px-10">
                                                            <div className="flex flex-row my-2">
                                                                      <div className="text-center px-4 my-2">
                                                                                <h6 className="mb-1 text-lg font-mono font-medium ">following</h6>
                                                                                <p className="text-sm font-mono">{SearchParams.get("following")}</p>
                                                                      </div>
                                                                      <div className="text-center px-4 my-2">
                                                                                <h6 className="mb-1 text-lg font-mono  font-medium ">followers</h6>
                                                                                <p className="text-sm font-mono ">{SearchParams.get("followers")}</p>
                                                                      </div>
                                                            </div>

                                                  </div>
                                        </div>
                                        <div className="flex flex-col ">
                                                  <h1 className="mb-1 text-2xl font-mono text-gray-900 ">{SearchParams.get("profilename")}</h1>
                                                  <h5 className="text-lg font-mono text-gray-900 ">Bio:- {SearchParams.get("profilebio")} </h5>
                                                  <a className="font-mono flex text-gray-900 " href={SearchParams.get("profileurl")}>Visit
                                                            <img src={link} alt="link" className="w-4 h-4 pt-1" />
                                                  </a>
                                        </div>

                              </div>

                              <div className="  container mx-auto ">
                                        {status === "loading" && <div className="flex h-full justify-center items-center"><Spinner /></div>}

                                        {status === "successful" && <div className="flex flex-col h-full">
                                                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                                            {userrepodata.map((item) => {
                                                                      return <Repocard reponame={item.name} repobio={item.description} repolanguage={item.language} repovisit={item.html_url
                                                                      } />
                                                            })}

                                                  </div>

                                        </div>}


                                        {status === "failed" && <div className="flex h-full justify-center items-center"><h1 className="font-mono text-lg sm:text-xl md:text-2xl text-red-700">{error}</h1></div>}

                              </div>
                              <div className="container mx-auto flex justify-between py-4">
                                        <button onClick={handleprevious} class="inline-flex font-mono items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                  <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                                                  Previous
                                        </button>
                                        <button onClick={handlenext} class="inline-flex font-mono items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                  Next
                                                  <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </button>
                              </div>

                    </div >
          );
};

export default Profiledetail;
