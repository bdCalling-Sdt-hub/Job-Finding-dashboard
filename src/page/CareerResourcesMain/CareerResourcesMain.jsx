import React, { useState } from 'react';
import CareerTabsOne from './CareerTabsOne';
import CareerTabsTwo from './CareerTabsTwo';

const CareerResourcesMain = () => {
    const [activeTab, setActiveTab] = useState('articleBlogs');

    return (
        <div>
            <h2 className="text-4xl font-medium my-10">Resources</h2>

            {/* Tabs */}
            <div className="flex border-b border-gray-300 mb-4 text-lg font-medium">
                <button
                    onClick={() => setActiveTab('articleBlogs')}
                    className={`pb-2 px-4 border-b-2 ${activeTab === 'articleBlogs'
                        ? 'border-black font-semibold'
                        : 'border-transparent text-gray-500'
                        }`}
                >
                    Article Blogs
                </button>
                <button
                    onClick={() => setActiveTab('networkingEvents')}
                    className={`pb-2 px-4 border-b-2 ml-8 ${activeTab === 'networkingEvents'
                        ? 'border-black font-semibold'
                        : 'border-transparent text-gray-500'
                        }`}
                >
                    Networking Events
                </button>
            </div>

            {/* Table header */}
            <div className="grid grid-cols-5 bg-[#553283] text-white text-sm font-semibold px-4 py-2">
                <div>Blog Posts/ Articles</div>
                <div>Publisher Name</div>
                <div>Publishing Date</div>
                <div>Status</div>
                <div>Actions</div>
            </div>

            {/* Tab content */}
            <div className="divide-y divide-gray-300">
                {activeTab === 'articleBlogs' && (
                    <>
                        <CareerTabsOne />
                    </>
                )}

                {activeTab === 'networkingEvents' && (
                    <>
                        <CareerTabsTwo />
                    </>
                )}
            </div>
        </div>
    );
};

export default CareerResourcesMain;
