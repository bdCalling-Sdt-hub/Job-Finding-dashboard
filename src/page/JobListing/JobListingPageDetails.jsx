
import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';

import { Button, Card, Row, Col } from 'antd';
import { toast, ToastContainer } from 'react-toastify';
import { IoEyeOutline } from 'react-icons/io5';
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import TabsOne from './TabsOne';
import TabsTwo from './TabsTwo';

// Sample data for job posts
const initialJobs = [
    {
        companyName: "Brac International",
        jobTitle: "UIX Designer",
        jobType: "Full Time",
        salaryRange: "$1,000 - $1,200",
        datePosted: "1 February, 2025",
        applicationDeadline: "10 February, 2025",
        applicants: 16,
        status: "Expired",
        companyLogo: "/Images/Jobs/PopulerSearch/companyLogo.png",
    }
];

// Sample data for applicants
const allApplicants = [
    {
        key: 1,
        name: 'Anika Alam',
        jobTitle: 'UIX Designer',
        applicationDate: '2 February, 2025',
        status: 'Applied',
        cvLink: '/path-to-cv/anika-alam-cv.pdf',
    },
    {
        key: 2,
        name: 'John Doe',
        jobTitle: 'Backend Developer',
        applicationDate: '3 February, 2025',
        status: 'Applied',
        cvLink: '/path-to-cv/john-doe-cv.pdf',
    },
    {
        key: 3,
        name: 'Emily Brown',
        jobTitle: 'Frontend Developer',
        applicationDate: '4 February, 2025',
        status: 'Shortlisted',
        cvLink: '/path-to-cv/emily-brown-cv.pdf',
    },
];

// Filtered shortlisted applicants
const shortlistedApplicants = allApplicants.filter(applicant => applicant.status === 'Shortlisted');

const JobListingPageDetails = () => {
    // State for active tab
    const [activeTab, setActiveTab] = useState('1');

    // Handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div style={{ padding: '24px' }}>
            <ToastContainer theme="colored" />
            {/* Back Navigation */}
            <div className="flex items-center gap-2 text-3xl font-medium mb-6">
                <FaChevronLeft />
                <Link to="/job-listing">Job Posting Details</Link>
            </div>

            {/* Job Details */}
            {initialJobs.map((job, index) => (
                <div
                    key={index}
                    className="p-5 border border-gray-300 rounded-lg lg:flex justify-between mt-2 items-center"
                >
                    <div className="w-full grid grid-cols-1 items-center md:grid-cols-4 space-y-8">
                        {/* Company Details */}
                        <div className="flex gap-4 items-start">
                            <img className="w-12" src={job.companyLogo} alt="Company Logo" />
                            <div className="text-center">
                                <h3 className="text-xl font-semibold">{job.companyName}</h3>
                                <span>Company</span>
                            </div>
                        </div>

                        {/* Job Title */}
                        <div className="text-center">
                            <h3 className="text-xl font-semibold">{job.jobTitle}</h3>
                            <span>Job Title</span>
                        </div>

                        {/* Job Type */}
                        <div className="text-center">
                            <h3 className="text-xl font-semibold">{job.jobType}</h3>
                            <span>Job Type</span>
                        </div>

                        {/* Salary Range */}
                        <div className="text-center">
                            <h3 className="text-xl font-semibold">{job.salaryRange}</h3>
                            <span>Salary</span>
                        </div>

                        {/* Date Posted */}
                        <div className="text-center">
                            <h3 className="text-xl font-semibold">{job.datePosted}</h3>
                            <span>Date Posted</span>
                        </div>

                        {/* Application Deadline */}
                        <div className="text-center">
                            <h2 className="text-xl font-semibold">{job.applicationDeadline}</h2>
                            <span>Application Deadline</span>
                        </div>

                        {/* Number of Applicants */}
                        <div className="text-center">
                            <h3 className="text-xl font-semibold">{job.applicants}</h3>
                            <span>Applicants</span>
                        </div>

                        {/* Job Status */}
                        <div className="text-center">
                            <span
                                className={`px-4 py-1 mb-1 inline-block rounded-lg ${job.status === 'Active'
                                    ? 'bg-[#7ed9572a] text-green-500'
                                    : 'bg-[#d619193b] text-red-500'
                                    }`}
                            >
                                {job.status}
                            </span>
                            <span className="block">Status</span>
                        </div>
                    </div>
                    <div>
                        <button className='flex items-center gap-2 mt-4 w-full text-[#ffffff] font-medium  bg-[#d32f2f] py-2 px-4 rounded-lg justify-center cursor-pointer'>Delete</button>
                    </div>
                </div>
            ))}

            {/* Custom Tabs */}
            <div className="mt-10">
                <div className="custom-tabs flex justify-center gap-10 mb-6">
                    {/* Custom Tabs */}
                    <div className='bg-[#f4edff] p-2 flex items-center justify-end gap-1 border-2 rounded-full border-[#784fad3b]'>
                        <div
                            className={`tab ${activeTab === '1' ? 'active-tab' : ''}`}
                            onClick={() => handleTabClick('1')}
                        >
                            All Applicants
                        </div>
                        <div
                            className={`tab ${activeTab === '2' ? 'active-tab' : ''}`}
                            onClick={() => handleTabClick('2')}
                        >
                            Shortlisted
                        </div>
                    </div>
                </div>

                {/* Tab Content */}
                {activeTab === '1' && (
                    <TabsOne />
                )}

                {activeTab === '2' && (
                    <TabsTwo />
                )}
            </div>

            

            {/* Custom Tab Styling */}
            <style jsx>{`
        .custom-tabs .tab {
          padding: 10px 20px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          border-radius: 999px;
          color: #6d6d6d; /* Default tab purple text */
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .custom-tabs .tab.active-tab {
          background-color: #553283; /* Active tab purple background */
          color: white; /* Active tab white text */
        }

        .custom-tabs .tab:hover {
          background-color: #553283; /* Light gray background on hover */
          color: #fff; /* Purple text on hover */
        }
      `}</style>
        </div>
    );
};

export default JobListingPageDetails;
