import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const CompaniesMainDetails = () => {
    return (
        <div>
            <div>
                <Link to="/companies" className="text-2xl flex items-center mt-5">
                    <FaAngleLeft /> Company Details
                </Link>
            </div>
            <div className="border border-[#553283] rounded-lg my-10  font-sans">
                <div className="flex gap-8 flex-wrap p-5">

                    {/* Logo with label */}
                    <div className="flex flex-col justify-center items-center ml-10">
                        <div className="p-2 border border-[#553283] rounded-lg w-28 h-28 flex items-center justify-center mb-2">
                            <img
                                src="/Images/Jobs/PopulerSearch/companyLogo.png"
                                alt="Company Logo"
                                className="w-20 h-20 object-contain"
                            />
                        </div>
                    </div>

                    {/* Details section */}
                    <div className="flex-1 min-w-[500px] flex flex-col justify-between">

                        {/* Top row */}
                        <div className="flex justify-between pb-4">
                            {/* Industry */}
                            <div className="text-center flex-1">
                                <h3 className="font-semibold text-base">Tech</h3>
                                <div className="flex justify-center items-center gap-1 text-gray-400 text-base mt-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="#9CA3AF"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 17v-6a2 2 0 012-2h4a2 2 0 012 2v6m2 4H7a2 2 0 01-2-2v-3h14v3a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    <span>Industry</span>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="text-center flex-1 border-l border-r border-gray-300 px-4">
                                <h3 className="font-semibold text-base">Nicosia, Cyprus</h3>
                                <div className="flex justify-center items-center gap-1 text-gray-400 text-base mt-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="#9CA3AF"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 11c0 2.21-3 5-3 5s-3-2.79-3-5a3 3 0 116 0z"
                                        />
                                        <circle cx="12" cy="11" r="2" />
                                    </svg>
                                    <span>Location</span>
                                </div>
                            </div>

                            {/* Registration Date */}
                            <div className="text-center flex-1">
                                <h3 className="font-semibold text-base">1 February, 2025</h3>
                                <div className="flex justify-center items-center gap-1 text-gray-400 text-base mt-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="#9CA3AF"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span>Registration Date</span>
                                </div>
                            </div>
                        </div>

                        {/* Middle row */}
                        <div className="flex justify-between py-4">
                            {/* Number of Job Posts */}
                            <div className="text-center flex-1">
                                <h3 className="font-semibold text-base">16</h3>
                                <div className="flex justify-center items-center gap-1 text-gray-400 text-base mt-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="#9CA3AF"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 17v-6a2 2 0 012-2h4a2 2 0 012 2v6m2 4H7a2 2 0 01-2-2v-3h14v3a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    <span>Number of Job Posts</span>
                                </div>
                            </div>

                            {/* Applications Received */}
                            <div className="text-center flex-1 border-l border-r border-gray-300 px-4">
                                <h3 className="font-semibold text-base">16</h3>
                                <div className="flex justify-center items-center gap-1 text-gray-400 text-base mt-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="#9CA3AF"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17 21v-2a4 4 0 00-3-3.87M7 21v-2a4 4 0 013-3.87"
                                        />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                    <span>Applications Received</span>
                                </div>
                            </div>

                            {/* Total Followers */}
                            <div className="text-center flex-1">
                                <h3 className="font-semibold text-base">1,200</h3>
                                <div className="flex justify-center items-center gap-1 text-gray-400 text-base mt-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="#9CA3AF"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17 21v-2a4 4 0 00-3-3.87M7 21v-2a4 4 0 013-3.87"
                                        />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                    <span>Total Followers</span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom row */}
                        <div className="pt-4">
                            <h3 className="text-xl font-semibold">Brac International</h3>
                            <span className="text-gray-500 text-base">Company Name</span>
                        </div>
                    </div>

                    {/* Block Button */}
                    <div className="flex items-end">
                        <button className="bg-[#a51111] hover:bg-[#bb2020] text-white py-2 px-6 rounded">
                            Block
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompaniesMainDetails;
