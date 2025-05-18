import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { Modal, Button } from "antd";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";

const CareerTabsTwo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);

    // Sample data for modal content
    const articles = [
        {
            id: 1,
            title: "Future of UIX Designer",
            postedOn: "12 February, 2025",
            publisher: "Brac International",
            publishDate: "12 February, 2035",
            status: "Published",
        },
        {
            id: 2,
            title: "Future of UIX Designer",
            postedOn: "12 February, 2025",
            publisher: "Brac International",
            publishDate: "12 February, 2035",
            status: "Pending",
        },
        {
            id: 3,
            title: "Future of UIX Designer",
            postedOn: "12 February, 2025",
            publisher: "Brac International",
            publishDate: "12 February, 2035",
            status: "Pending",
        },
    ];

    const openModal = (article) => {
        setSelectedArticle(article);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedArticle(null);
    };

    return (
        <div className="relative">
            <div className="h-full pb-28">
                {articles.map((article) => (
                    <div
                        key={article.id}
                        className="grid grid-cols-5 px-4 py-4 items-center border-b border-gray-300"
                    >
                        <div>
                            <div className="font-semibold">{article.title}</div>
                            <div className="text-xs text-gray-600">
                                Posted on: {article.postedOn}
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                            <div className="w-6 h-6 rounded-full bg-gray-400" />
                            {article.publisher}
                        </div>
                        <div>{article.publishDate}</div>
                        <div>
                            {article.status === "Published" ? (
                                <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs font-semibold">
                                    Published
                                </span>
                            ) : (
                                <span className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded text-xs font-semibold">
                                    Pending
                                </span>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                            {article.status === "Published" ? (
                                <button className="text-red-600 border border-red-600 px-3 py-1 rounded text-xs hover:bg-red-600 hover:text-white transition">
                                    Remove
                                </button>
                            ) : (
                                <button className="text-green-600 border border-green-600 px-3 py-1 rounded text-xs hover:bg-green-600 hover:text-white transition">
                                    Approve
                                </button>
                            )}
                            <Link to="/career-resources/add-network-event/1" className="bg-[#553283] text-white px-5 py-2 rounded text-xs hover:bg-[#553283]">Edit</Link>
                            <button
                                title="View"
                                onClick={() => openModal(article)}
                                className="text-gray-700 hover:text-gray-900"
                            >
                                <FiEye size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-5 right-0">
                <Link to="/career-resources/add-network-event" className="w-16 h-16 bg-[#553283] text-white rounded-full flex items-center justify-center"><LuPlus className="text-4xl" /></Link>
            </div>

            <Modal
                open={isModalOpen}
                onCancel={closeModal}
                width={1200}
                centered
                footer={
                    <div className="flex justify-center">
                        <button
                            type="primary"
                            className="bg-[#553283] border-[#553283] text-white px-8 text-base py-2 rounded mr-2"
                            onClick={() => alert("Edit clicked")}
                        >
                            Edit
                        </button>
                    </div>
                }

            >

                <div className="flex items-center justify-between p-2 my-5 border-2 border-[#553283] rounded">
                    <div className="flex items-center gap-5">
                        <img className="w-32 " src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" alt="" />
                        <div>
                            <h3 className="text-2xl ">Title</h3>
                            <div className="flex items-center gap-2 mt-1">
                                <h3 className="bg-[#8351c563] text-[#553283]  px-2 text-base py-1 rounded">Posted on: 12 February, 2025</h3>
                                <h3 className="bg-[#8351c563] text-[#553283]  px-2 text-base py-1 rounded">Publish Date: 12 February, 2035</h3>
                            </div>
                        </div>
                    </div>
                    <button className="bg-[#553283] border-[#553283] text-white px-8 text-base py-3 rounded">Check Out Event</button>
                </div>

                <div>
                    {/* Image */}
                    <div className="w-full">
                        <img
                            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                            alt="Font pairs"
                            className="rounded-lg object-cover w-full h-[300px]"
                        />
                    </div>

                    {/* Text content */}
                    <div className="my-10 space-y-5">
                        <div>
                            <h3 className="text-2xl font-medium leading-snug">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                            </h3>

                            <p className="text-base leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CareerTabsTwo;
