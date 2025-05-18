import React from 'react';
import { Table, Tag, Button, Space } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { IoAdd } from 'react-icons/io5';
import { Link } from 'react-router-dom';


// Dummy Data for the table
const data = [
    {
        key: '1',
        jobTitle: 'UIX Designer',
        jobType: 'Full Time',
        daysRemaining: '4 days remaining',
        companyName: 'Brac International',
        status: 'Expired',
        totalApplications: 140,
    },
    {
        key: '2',
        jobTitle: 'UIX Designer',
        jobType: 'Full Time',
        daysRemaining: '4 days remaining',
        companyName: 'Brac International',
        status: 'Active',
        totalApplications: 140,
    },
    {
        key: '3',
        jobTitle: 'UIX Designer',
        jobType: 'Full Time',
        daysRemaining: '4 days remaining',
        companyName: 'Brac International',
        status: 'Expired',
        totalApplications: 140,
    },
    {
        key: '4',
        jobTitle: 'UIX Designer',
        jobType: 'Full Time',
        daysRemaining: '4 days remaining',
        companyName: 'Brac International',
        status: 'Active',
        totalApplications: 140,
    },
    {
        key: '5',
        jobTitle: 'Backend Developer',
        jobType: 'Part Time',
        daysRemaining: '3 days remaining',
        companyName: 'Google',
        status: 'Active',
        totalApplications: 120,
    },
    {
        key: '6',
        jobTitle: 'Frontend Developer',
        jobType: 'Full Time',
        daysRemaining: '2 days remaining',
        companyName: 'Microsoft',
        status: 'Expired',
        totalApplications: 95,
    },
    {
        key: '7',
        jobTitle: 'UX Designer',
        jobType: 'Freelance',
        daysRemaining: '1 day remaining',
        companyName: 'Amazon',
        status: 'Active',
        totalApplications: 50,
    },
    {
        key: '8',
        jobTitle: 'Data Scientist',
        jobType: 'Full Time',
        daysRemaining: '5 days remaining',
        companyName: 'Tesla',
        status: 'Expired',
        totalApplications: 210,
    },
    {
        key: '9',
        jobTitle: 'Product Manager',
        jobType: 'Full Time',
        daysRemaining: '7 days remaining',
        companyName: 'Apple',
        status: 'Active',
        totalApplications: 180,
    },
    {
        key: '10',
        jobTitle: 'Project Manager',
        jobType: 'Full Time',
        daysRemaining: '6 days remaining',
        companyName: 'Facebook',
        status: 'Active',
        totalApplications: 145,
    },
];

// Define columns for the Table
const columns = [
    {
        title: 'Jobs',
        dataIndex: 'jobTitle',
        key: 'jobTitle',
        render: (text, record) => (
            <div>
                <div className='text-xl font-semibold'>{text}</div>
                <div className='flex items-center gap-5 mt-1'>
                    <div>{record.jobType}</div>
                    <div>{record.daysRemaining}</div>
                </div>
            </div>
        ),
    },
    {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName',
        render: (text) => <div className='flex items-center gap-2'>
            <img className='w-10' src="/Images/Jobs/PopulerSearch/companyLogo.png" alt="" />
            {text}
        </div>,
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status) => (
            <Tag color={status === 'Active' ? 'green' : 'red'}>{status}</Tag>
        ),
    },
    {
        title: 'Total Application',
        dataIndex: 'totalApplications',
        key: 'totalApplications',
    },
    {
        title: 'Actions',
        key: 'actions',
        render: () => (
            <Link to={'/job-listing/1'} className='text-center'>
                <EyeOutlined className='text-xl cursor-pointer text-gray-500' />
            </Link>
        ),
    },
];

const JobListingMain = () => {
    return (
        <div style={{ padding: '24px', backgroundColor: '#fff' }}>
            <div className='flex items-center justify-between mb-10'>
                <h2 className='text-3xl font-semibold'>All Job Listing</h2>
                {/* <Link href="/company/addjob" className='h-12 flex items-center cursor-pointer justify-center gap-2 w-48 bg-[#553283] text-white rounded'>
                    <IoAdd className='text-2xl' /> Add New
                </Link> */}
            </div>
            <Table
                dataSource={data}
                pagination={{ pageSize: 10 }}  // Add pagination with 10 items per page
                bordered
                style={{ marginTop: 16 }}
                // Adding header background color
                columns={[...columns].map(col => ({
                    ...col,
                    onHeaderCell: () => ({
                        style: {
                            backgroundColor: '#553283',  // Set header background color
                            color: 'white',               // Set text color to white for the header
                            fontWeight: 'bold',           // Optional: make the header text bold
                        },
                    }),
                }))}
            />

        </div>
    );
};

export default JobListingMain;
