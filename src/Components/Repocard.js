import React from "react";
import xtype from 'xtypejs'
import link from '../Assets/SVG/link.svg'

const Repocard = ({ reponame, repobio, repolanguage, repovisit }) => {
          return (
                    <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" >
                              <div className="flex flex-col items-center pt-10">
                                        <h5 className="mb-1 text-xl font-medium text-center text-gray-900 dark:text-white">{reponame}</h5>
                                        <span className="text-sm text-gray-500 text-center dark:text-gray-400">{repobio}</span>
                                        <a className="font-mono flex text-gray-500 dark:text-gray-400 " href={repovisit}>
                                                  Visit
                                                  <img src={link} alt="link" className="w-4 h-4 pt-1" /></a>


                              </div>
                              <p className="text-gray-500 dark:text-gray-400 my-3 mx-4"> Languages :- </p>
                              {xtype.type(repolanguage) === "string" && <div className="flex flex-row justify-between pb-10 mx-4"><p className="rounded bg-slate-500 px-4 py-2 text-white">{repolanguage}</p></div>}
                              {xtype.type(repolanguage) === "array" && <div className="flex flex-row justify-between pb-10 mx-4">
                                        {repolanguage.map((item) => {
                                                  <p className="rounded bg-slate-500 px-4 py-2 mx-2 text-white">{item}</p>
                                        })}
                              </div>}

                    </div>
          );
};

export default Repocard;
