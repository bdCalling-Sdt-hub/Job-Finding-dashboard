import React from "react";
import { Tag } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";

const CompaniesMain = () => {
    return (
        <div className="relative">

            <div className="flex items-center justify-between my-5">
                <h2 className="text-2xl font-semibold">Company List</h2>
                <div className="flex items-center gap-3">
                    {/* search by date  */}
                    <input
                        type="date"
                        className="border border-gray-300 rounded-md p-2"
                    />
                    {/* search by name  */}
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-md p-2"
                    />
                </div>
            </div>


            <div>
                {
                    [...Array(5)].map((_, index) => (
                        <div className="flex items-center border border-green-200 rounded-lg px-6 py-4 gap-6 my-3 font-sans">
                            {/* Logo box */}
                            <div className="border border-purple-700 rounded-md w-24 h-24 flex justify-center items-center flex-shrink-0">
                                <img
                                    src="/Images/Jobs/PopulerSearch/companyLogo.png"
                                    alt="brac logo"
                                    className="w-20 h-20 object-contain"
                                />
                            </div>

                            {/* Company Name */}
                            <div className="flex-1 min-w-[120px]">
                                <div className="font-semibold  text-xl text-gray-900">Brac International</div>
                                <div className="  text-gray-500 mt-1">Company Name</div>
                            </div>

                            {/* Industry */}
                            <div className="flex-1 min-w-[100px]">
                                <div className="font-semibold  text-xl text-gray-900">Tech</div>
                                <div className="  text-gray-500 mt-1">Industry</div>
                            </div>

                            {/* Location */}
                            <div className="flex-1 min-w-[130px]">
                                <div className="font-semibold  text-xl text-gray-900">Dhaka, Bangladesh</div>
                                <div className="  text-gray-500 mt-1">Location</div>
                            </div>

                            {/* Registered Date */}
                            <div className="flex-1 min-w-[140px]">
                                <div className="font-semibold  text-xl text-gray-900">1 February , 2025</div>
                                <div className="  text-gray-500 mt-1">Registered Date</div>
                            </div>

                            {/* Account Status */}
                            <div className="flex-1 min-w-[90px]">
                                <Tag
                                    color="#D6F6D6"
                                    style={{ color: "#41BE44", fontWeight: 600, fontSize: 12 }}
                                >
                                    Active
                                </Tag>
                                <div className="  text-gray-500 mt-1">Account Status</div>
                            </div>

                            {/* Action */}
                            <div className="min-w-[70px] text-center">
                                <Link to="/companies/:detailsId" className="text-lg text-gray-600 cursor-pointer" title="View">
                                    <EyeOutlined />
                                </Link>
                                <div className="  text-gray-500 mt-1">Action</div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>

            <div className="absolute bottom-5 right-5">
                <Link to="/companies/add-company" className="w-20 h-20 bg-[#553283] cursor-pointer text-white rounded-full flex justify-center items-center">
                    <LuPlus className="text-5xl" />
                </Link>
            </div>


        </div>
    );
};

export default CompaniesMain;
