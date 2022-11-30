import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import link from '../Assets/SVG/link.svg'
const Usercard = ({ profilepic, username, bio, followers, following, profileurl }) => {
          const navigate = useNavigate()
          // const [createparam, setCreateparam] = useSearchParams()

          const handleprofile = () => {
                    navigate({
                              pathname: "/user",
                              search: createSearchParams({
                                        profilename: username,
                                        profilepic: profilepic,
                                        profilebio: bio,
                                        profileurl: profileurl,
                                        following: following,
                                        followers: followers
                              }).toString()
                    })
          }
          return (
                    <button className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" onClick={handleprofile}>
                              <div className="flex flex-col items-center py-10">
                                        <img className="w-24 h-24 mb-3 rounded-full  shadow-lg" src={profilepic} alt="profile image" />
                                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{username}</h5>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">{bio}</span>
                                        <a className="font-mono flex text-gray-500 dark:text-gray-400 " href={profileurl}>
                                                  Visit
                                                  <img src={link} alt="link" className="w-4 h-4 pt-1" /></a>
                              </div>
                    </button>
          );
};

export default Usercard;
