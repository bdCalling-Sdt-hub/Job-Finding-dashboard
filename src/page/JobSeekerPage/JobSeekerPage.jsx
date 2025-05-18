import React, { useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";

const JobSeekerPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Static user data
    const user = {
        name: "Anika Alam",
        email: "anika123@gmail.com",
        registeredDate: "1 February, 2025",
        phone: "01812121212",
        totalApplications: 16,
        status: "Blocked",
        image:
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=80&q=80",
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="my-10">
            <div className="flex justify-between items-center">
                <h1 className="mb-5 text-3xl font-semibold">Job Seeker Management</h1>
                <div className="flex gap-2">
                    <input
                        type="date"
                        className="border border-gray-300 rounded-md p-2"
                    />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-md p-2"
                    />
                </div>
            </div>

            {/* cards */}
            <div className="space-y-3 my-10">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between flex-wrap border border-green-200 rounded-lg p-4 gap-6 "
                    >
                        <img
                            src={user.image}
                            alt="User"
                            className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                        />

                        <div className="flex flex-col min-w-[140px]">
                            <span className="font-semibold text-gray-900 mb-2 text-xl ">
                                {user.name}
                            </span>
                            <span className="text-base text-gray-500">User Name</span>
                        </div>

                        <div className="flex flex-col min-w-[180px]">
                            <span className="font-semibold text-gray-900 mb-2 text-xl ">
                                {user.email}
                            </span>
                            <span className="text-base text-gray-500">Email</span>
                        </div>

                        <div className="flex flex-col min-w-[160px]">
                            <span className="font-semibold text-gray-900 mb-2 text-xl ">
                                {user.registeredDate}
                            </span>
                            <span className="text-base text-gray-500">Registered Date</span>
                        </div>

                        <div className="flex flex-col min-w-[120px]">
                            <span className="block px-3 py-1 text-green-600 font-semibold mb-2 text-base text-center bg-green-100 rounded">
                                Active
                            </span>
                            <span className="text-base text-gray-500">Account Status</span>
                        </div>

                        <div className="flex flex-col items-center min-w-[80px] cursor-pointer">
                            <EyeOutlined
                                className="text-gray-600 text-xl"
                                onClick={openModal}
                                title="View Details"
                            />
                            <span className="text-base text-gray-500 mt-1">Action</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <Modal
                title="User Details"
                open={isModalOpen}
                onCancel={closeModal}
                footer={null}
                centered
                bodyStyle={{ padding: "24px" }}
                width={700}
            >
                <div className="flex flex-wrap gap-6 items-center">
                    {/* User image */}
                    <img
                        src={user.image}
                        alt={user.name}
                        className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                    />

                    {/* User info */}
                    <div className="flex-1 grid grid-cols-2 gap-y-4">
                        {/* Left column */}
                        <div>
                            <div className="font-semibold text-lg">{user.name}</div>
                            <div className="text-gray-500 text-sm mb-4">User Name</div>

                            <div className="font-semibold text-lg">{user.registeredDate}</div>
                            <div className="text-gray-500 text-sm">Registered Date</div>
                        </div>

                        {/* Right column */}
                        <div>
                            <div className="font-semibold text-lg">{user.email}</div>
                            <div className="text-gray-500 text-sm mb-4">Email</div>

                            <div className="font-semibold text-lg">01812121212</div>
                            <div className="text-gray-500 text-sm">Phone Number</div>
                        </div>

                        {/* Below columns */}

                        <div>
                            <div className="font-semibold text-lg">{user.totalApplications}</div>
                            <div className="text-gray-500 text-sm">Total Job Applications</div>
                        </div>

                        <div>
                            <div className="text-red-700 font-semibold bg-red-100 px-4 py-1 rounded inline-block">
                                Blocked
                            </div>
                            <div className="text-gray-500 text-sm mt-1">Account Status</div>
                        </div>

                        <div className="flex items-center justify-end col-span-2">
                            <button className="bg-[#553283]  text-white px-4 py-2 rounded" type="default" onClick={closeModal}>
                                Unblock
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default JobSeekerPage;
