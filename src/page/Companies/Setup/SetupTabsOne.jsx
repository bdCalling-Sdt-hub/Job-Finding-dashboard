
import React, { useState } from 'react';
import { Form, Upload, Button, message, Tooltip, Input } from 'antd';
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons';
import { CiLocationOn } from 'react-icons/ci';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';

const SetupTabsOne = () => {
    // State to handle file list for Logo and Cover Photo
    const [fileListLogo, setFileListLogo] = useState([]);
    const [fileListCover, setFileListCover] = useState([]);

    // Handle file upload
    const handleUpload = (info, type) => {
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    // Handle file removal
    const handleRemove = (file, type) => {
        message.info(`${file.name} file removed.`);
        if (type === 'logo') {
            setFileListLogo([]);
        } else {
            setFileListCover([]);
        }
    };


    // State to handle file list for Founder 3 and Founder 4
    const [fileListFounder3, setFileListFounder3] = useState([]);
    const [fileListFounder4, setFileListFounder4] = useState([]);

    // Handle file upload
    const handleUpload2 = (info, type) => {
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    // Handle file removal
    const handleRemove2 = (file, type) => {
        message.info(`${file.name} file removed.`);
        if (type === 'founder3') {
            setFileListFounder3([]);
        } else {
            setFileListFounder4([]);
        }
    };

    const onChangeFounder3 = ({ fileList }) => setFileListFounder3(fileList);
    const onChangeFounder4 = ({ fileList }) => setFileListFounder4(fileList);


    //=========== company pictures  and videos ===============
    const [fileListPictures, setFileListPictures] = useState([]);
    const [fileListVideos, setFileListVideos] = useState([]);

    // Handle file upload for Pictures and Videos
    const handleUpload3 = (info, type) => {
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    // Handle file removal for Pictures and Videos
    const handleRemove3 = (file, type) => {
        message.info(`${file.name} file removed.`);
        if (type === 'pictures') {
            setFileListPictures([]);
        } else if (type === 'videos') {
            setFileListVideos([]);
        }
    };



    // Renamed state for file list
    const [customFileList, setCustomFileList] = useState([]);

    // Renamed handle upload function
    const customHandleUpload = (info) => {
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    // Renamed handle remove function
    const customHandleRemove = (file) => {
        message.info(`${file.name} file removed.`);
        setCustomFileList([]);  // Clear the file list when removed
    };



    const handleAllSubmit = (values) => {

        toast.success('Job added successfully');

        console.log(values);


    };


    return (
        <div className="lg:p-6">
            <ToastContainer theme='colored' />
            <Form layout="vertical" onFinish={handleAllSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company Logo Upload */}
                    <div>
                        <h2 className='text-base font-semibold mb-2'>Upload Company Logo</h2>
                        <Form.Item
                            name="companyLogo"
                            valuePropName="fileList"
                            getValueFromEvent={(e) => e && e.fileList}
                            className="border-dashed border-2 p-6 bg-[#5532832c] text-center rounded-lg w-full flex items-center justify-center py-5"
                        >
                            <Upload
                                name="logo"
                                action="/upload" // Replace with your backend upload URL
                                onChange={(info) => handleUpload(info, 'logo')}
                                onRemove={(file) => handleRemove(file, 'logo')}
                                fileList={fileListLogo}
                                showUploadList={{
                                    showRemoveIcon: true,
                                    removeIcon: <DeleteOutlined style={{ color: 'red' }} />,
                                }}
                                accept=".jpg,.jpeg,.png"
                                beforeUpload={() => false} // Prevent automatic upload
                                className="w-full cursor-pointer"
                            >
                                <div className="p-5">
                                    <img className="w-14 mx-auto" src="/Images/upload.png" alt="" />
                                    <p className="text-sm mt-4">Drag your file(s) to start uploading</p>
                                    <p className="text-sm">OR</p>
                                    <button className="mt-4 cursor-pointer py-2 px-8 border-2 border-[#553283] text-[#553283] rounded-md">
                                        Browse files
                                    </button>
                                </div>
                            </Upload>
                        </Form.Item>

                    </div>
                    {/* Company Cover Photo Upload */}
                    <div>
                        <h3 className='text-base font-semibold mb-2'>Upload Company Cover Photo</h3>
                        <Form.Item
                            name="companyCoverPhoto"
                            valuePropName="fileList"
                            getValueFromEvent={(e) => e && e.fileList}
                            className="border-dashed border-2 p-6 bg-[#5532832c] text-center rounded-lg w-full flex items-center justify-center"
                        >
                            <Upload
                                name="coverPhoto"
                                action="/upload" // Replace with your backend upload URL
                                onChange={(info) => handleUpload(info, 'cover')}
                                onRemove={(file) => handleRemove(file, 'cover')}
                                fileList={fileListCover}
                                showUploadList={{
                                    showRemoveIcon: true,
                                    removeIcon: <DeleteOutlined style={{ color: 'red' }} />,
                                }}
                                accept=".jpg,.jpeg,.png"
                                beforeUpload={() => false} // Prevent automatic upload
                                className="w-full cursor-pointer"
                            >
                                <div className="p-5">
                                    <img className="w-14 mx-auto" src="/Images/upload.png" alt="" />
                                    <p className="text-sm mt-4">Drag your file(s) to start uploading</p>
                                    <p className="text-sm">OR</p>
                                    <button className="mt-4 cursor-pointer py-2 px-8 border-2 border-[#553283] text-[#553283] rounded-md">
                                        Browse files
                                    </button>
                                </div>
                            </Upload>
                        </Form.Item>
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                        {/* Left Section */}
                        <div className='space-y-6'>
                            <div className="">
                                <label htmlFor="industry" className="block text-base font-medium">Industry Type</label>
                                <select
                                    id="industry"
                                    className="w-full p-3 border-2 border-[#7c7c7c] rounded-lg mt-2"
                                >
                                    <option>Select Industry</option>
                                    <option>Tech</option>
                                    <option>Healthcare</option>
                                    <option>Finance</option>
                                </select>
                            </div>

                            <div className="">
                                <label htmlFor="company-name" className="block text-base font-medium">Company Name</label>
                                <input
                                    type="text"
                                    id="company-name"
                                    placeholder="Write about company"
                                    className="w-full p-3 border-2 border-[#7c7c7c] rounded-lg mt-2"
                                />
                            </div>

                            <div className="">
                                <label htmlFor="location" className="block text-base font-medium">Location</label>
                                <div className="flex items-center border-2 border-[#7c7c7c] rounded-lg mt-2 p-3">
                                    <span className="text-gray-500"><CiLocationOn className='text-2xl' /></span>
                                    <input
                                        type="text"
                                        id="location"
                                        placeholder="Find Location"
                                        className="w-full pl-2 border-none focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className='space-y-6'>
                            <div className="">
                                <label htmlFor="website-link" className="block text-base font-medium">Website Link</label>
                                <div className="flex items-center border-2 border-[#7c7c7c] rounded-lg mt-2 p-3">
                                    <span className="text-gray-500">🔗</span>
                                    <input
                                        type="url"
                                        id="website-link"
                                        placeholder="Paste URL"
                                        className="w-full pl-2 border-none focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="">
                                <label htmlFor="social-link-1" className="block text-base font-medium">Social Links</label>
                                <div className="flex items-center border-2 border-[#7c7c7c] rounded-lg mt-2 p-3">
                                    <span className="text-gray-500">🔗</span>
                                    <input
                                        type="url"
                                        id="social-link-1"
                                        placeholder="Facebook URL"
                                        className="w-full pl-2 border-none focus:outline-none"
                                    />
                                    <FaFacebook className='text-2xl text-[#134dca] ml-2' />
                                </div>
                            </div>

                            <div className="">
                                <div className="flex items-center border-2 border-[#7c7c7c] rounded-lg mt-2 p-3">
                                    <span className="text-gray-500">🔗</span>
                                    <input
                                        type="url"
                                        id="social-link-2"
                                        placeholder="Linkedin URL"
                                        className="w-full pl-2 border-none focus:outline-none"
                                    />
                                    <FaLinkedin className='text-2xl text-[#134dca] ml-2' />
                                </div>
                            </div>

                            <div className="">
                                <div className="flex items-center border-2 border-[#7c7c7c] rounded-lg mt-2 p-3">
                                    <span className="text-gray-500">🔗</span>
                                    <input
                                        type="url"
                                        id="social-link-3"
                                        placeholder="Paste URL"
                                        className="w-full pl-2 border-none focus:outline-none"
                                    />
                                    <FaInstagram className='text-2xl text-[#7813ca] ml-2' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5">
                    {/* Left Section */}
                    <div>
                        <div className="mb-4">
                            <label htmlFor="founding-year" className="block text-base font-medium">Company Founding Year</label>
                            <input
                                type="text"
                                id="founding-year"
                                placeholder="Enter Company Founding Year"
                                className="w-full p-3 border-2 border-[#7c7c7c] rounded-lg mt-2"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="dei" className="block text-base font-medium">DEI %</label>
                            <input
                                type="text"
                                id="dei"
                                placeholder="Enter DEI %"
                                className="w-full p-3 border-2 border-[#7c7c7c] rounded-lg mt-2"
                            />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div>
                        <div className="mb-4">
                            <label htmlFor="total-employees" className="block text-base font-medium">Total Employees</label>
                            <input
                                type="text"
                                id="total-employees"
                                placeholder="Enter total count of employee"
                                className="w-full p-3 border-2 border-[#7c7c7c] rounded-lg mt-2"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="growth-rate" className="block text-base font-medium">Growth Rate</label>
                            <input
                                type="text"
                                id="growth-rate"
                                placeholder="Enter Growth Rate"
                                className="w-full p-3 border-2 border-[#7c7c7c] rounded-lg mt-2"
                            />
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Founder 3 Image Upload */}
                    {/* name field  */}
                    <div>
                        <h2 className='text-base font-medium'>Founder 1</h2>
                        <Form.Item
                            name="founder1Name"
                        >
                            <input
                                placeholder="Founder 3 Name"
                                className="w-full p-3 border-2 border-[#7c7c7c] rounded-lg mt-2"
                            />
                        </Form.Item>
                        <Form.Item
                            name="founder1Image"
                            valuePropName="fileList"
                            getValueFromEvent={(e) => e && e.fileList}
                            className="border-dashed border-2 p-6 bg-[#5532832c] text-center rounded-lg w-full flex items-center justify-center py-5"
                        >
                            <Upload
                                name="founder3"
                                action="/upload" // Replace with your backend upload URL
                                onChange={(info) => handleUpload2(info, 'founder3')}
                                onRemove={(file) => handleRemove2(file, 'founder3')}
                                fileList={fileListFounder3}
                                showUploadList={{
                                    showRemoveIcon: true,
                                    removeIcon: <DeleteOutlined style={{ color: 'red' }} />,
                                }}
                                accept=".jpg,.jpeg,.png"
                                beforeUpload={() => false} // Prevent auto upload
                                className="w-full cursor-pointer"
                            >
                                <div className="p-5">
                                    <img className="w-14 mx-auto" src="/Images/upload.png" alt="" />
                                    <p className="text-sm mt-4">Drag your file(s) to start uploading</p>
                                    <p className="text-sm">OR</p>
                                    <button className="mt-4 cursor-pointer py-2 px-8 border-2 border-[#553283] text-[#553283] rounded-md">
                                        Browse files
                                    </button>
                                </div>
                            </Upload>
                            {/* Image Preview and File Info */}
                            {fileListFounder3.length > 0 && (
                                <div className="mt-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <img
                                            src={URL.createObjectURL(fileListFounder3[0].originFileObj)}
                                            alt="Founder 3 Image Preview"
                                            className="w-20 h-20 object-contain mx-auto"
                                        />
                                        <div className="text-sm">
                                            <div>{fileListFounder3[0].name}</div>
                                            <div>{(fileListFounder3[0].size / 1024 / 1024).toFixed(2)} MB</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Form.Item>
                    </div>

                    <div>
                        <h2 className='text-base font-medium'>Founder 2</h2>
                        <Form.Item
                            name="founder2Name"
                        >
                            <input
                                placeholder="Founder 2"
                                className="w-full p-3 border-2 border-[#7c7c7c] rounded-lg mt-2"
                            />
                        </Form.Item>
                        {/* Founder 4 Image Upload */}
                        <Form.Item
                            name="founder2Image"
                            valuePropName="fileList"
                            getValueFromEvent={(e) => e && e.fileList}
                            className="border-dashed border-2 p-6 bg-[#5532832c] text-center rounded-lg w-full flex items-center justify-center"
                        >
                            <Upload
                                name="founder4"
                                action="/upload" // Replace with your backend upload URL
                                onChange={(info) => handleUpload2(info, 'founder4')}
                                onRemove={(file) => handleRemove2(file, 'founder4')}
                                fileList={fileListFounder4}
                                showUploadList={{
                                    showRemoveIcon: true,
                                    removeIcon: <DeleteOutlined style={{ color: 'red' }} />,
                                }}
                                accept=".jpg,.jpeg,.png"
                                beforeUpload={() => false} // Prevent auto upload
                                className="w-full cursor-pointer"
                            >
                                <div className="p-5">
                                    <img className="w-14 mx-auto" src="/Images/upload.png" alt="" />
                                    <p className="text-sm mt-4">Drag your file(s) to start uploading</p>
                                    <p className="text-sm">OR</p>
                                    <button className="mt-4 cursor-pointer py-2 px-8 border-2 border-[#553283] text-[#553283] rounded-md">
                                        Browse files
                                    </button>
                                </div>
                            </Upload>
                            {/* Image Preview and File Info */}
                            {fileListFounder4.length > 0 && (
                                <div className="mt-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <img
                                            src={URL.createObjectURL(fileListFounder4[0].originFileObj)}
                                            alt="Founder 4 Image Preview"
                                            className="w-20 h-20 object-contain mx-auto"
                                        />
                                        <div className="text-sm">
                                            <div>{fileListFounder4[0].name}</div>
                                            <div>{(fileListFounder4[0].size / 1024 / 1024).toFixed(2)} MB</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Form.Item>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    {/* Upload Pictures of Your Company */}
                    <div>
                        <h2 className='text-base font-medium mb-2'>Upload Pictures of Your Company</h2>
                        <Form.Item
                            name="companyPictures"
                            valuePropName="fileList"
                            getValueFromEvent={(e) => e && e.fileList}
                            className="border-dashed border-2 p-6 bg-[#5532832c] text-center rounded-lg w-full flex items-center justify-center py-5"
                        >
                            <Upload
                                name="pictures"
                                action="/upload" // Replace with your backend upload URL
                                onChange={(info) => handleUpload3(info, 'pictures')}
                                onRemove={(file) => handleRemove3(file, 'pictures')}
                                fileList={fileListPictures}
                                showUploadList={{
                                    showRemoveIcon: true,
                                    removeIcon: <DeleteOutlined style={{ color: 'red' }} />,
                                }}
                                accept=".jpg,.jpeg,.png"
                                beforeUpload={() => false} // Prevent auto upload
                                className="w-full cursor-pointer"
                            >
                                <div className="p-5">
                                    {/* <UploadOutlined className="text-4xl text-purple-500" /> */}
                                    <img className="w-14 mx-auto" src="/Images/upload.png" alt="" />
                                    <p className="text-sm mt-4">Drag your file(s) to start uploading</p>
                                    <p className="text-sm">OR</p>
                                    <button className="mt-4 cursor-pointer py-2 px-8 border-2 border-[#553283] text-[#553283] rounded-md">
                                        Browse files
                                    </button>
                                </div>
                            </Upload>
                        </Form.Item>
                    </div>

                    {/* Upload Videos of Your Company */}
                    <div>
                        <h2 className='text-base font-medium mb-2'>Upload Videos of Your Company</h2>
                        <Form.Item
                            name="companyVideos"
                            valuePropName="fileList"
                            getValueFromEvent={(e) => e && e.fileList}
                            className="border-dashed border-2 p-6 bg-[#5532832c] text-center rounded-lg w-full flex items-center justify-center"
                        >
                            <Upload
                                name="videos"

                                action="/upload" // Replace with your backend upload URL
                                onChange={(info) => handleUpload3(info, 'videos')}
                                onRemove={(file) => handleRemove3(file, 'videos')}
                                fileList={fileListVideos}
                                showUploadList={{
                                    showRemoveIcon: true,
                                    removeIcon: <DeleteOutlined style={{ color: 'red' }} />,
                                }}
                                accept=".mp4,.avi,.mov"
                                beforeUpload={() => false} // Prevent auto upload
                                className="w-full cursor-pointer"
                            >
                                <div className="p-5">
                                    {/* <UploadOutlined className="text-4xl text-purple-500" /> */}
                                    <img className="w-14 mx-auto" src="/Images/upload.png" alt="" />
                                    <p className="text-sm mt-4">Drag your file(s) to start uploading</p>
                                    <p className="text-sm">OR</p>
                                    <button className="mt-4 cursor-pointer py-2 px-8 border-2 border-[#553283] text-[#553283] rounded-md">
                                        Browse files
                                    </button>
                                </div>
                            </Upload>
                        </Form.Item>
                    </div>
                </div>

                <div className="">
                    <Form layout="vertical">
                        {/* About Section */}
                        <div>
                            <h2 className='text-base font-medium mb-2'>About</h2>
                            <Form.Item
                                name="about"
                            >
                                <Input.TextArea placeholder="Write about company" rows={4} />
                            </Form.Item>
                        </div>

                        {/* Our Take Section */}
                        <div>
                            <h2 className='text-base font-medium mb-2'>Our Take</h2>
                            <Form.Item
                                name="ourTake"
                            >
                                <Input.TextArea placeholder="Write about company" rows={4} />
                            </Form.Item>
                        </div>

                        {/* Name and Role */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h2 className='text-base font-medium mb-2'>Name</h2>
                                <Form.Item
                                    name="name"
                                >
                                    <Input className='!py-3' placeholder="Enter Company Founding Year" />
                                </Form.Item>

                            </div>
                            <div>
                                <h2 className='text-base font-medium mb-2'>Role</h2>
                                <Form.Item
                                    name="role"
                                >
                                    <Input className='!py-3' placeholder="Enter total count of employee" />
                                </Form.Item>
                            </div>
                        </div>

                    </Form>
                </div>


                <div className="">
                    <h2 className="text-base font-medium mb-4">Our Take Images</h2>

                    <Form.Item
                        name="ourTakeImages"
                        valuePropName="fileList"
                        getValueFromEvent={(e) => e && e.fileList}
                        className="border-dashed border-[#553283] border-2 p-6 bg-[#5532832c] text-center rounded-lg w-full flex items-center justify-center"
                    >


                        {/* Upload Section */}
                        <Upload
                            name="ourTakeImages"
                            action="/upload" // Replace with your backend upload URL
                            onChange={customHandleUpload}
                            onRemove={customHandleRemove}
                            fileList={customFileList}
                            showUploadList={{
                                showRemoveIcon: true,
                            }}
                            accept=".jpg,.jpeg,.png"
                            beforeUpload={() => false} // Prevent auto upload
                            className="w-full cursor-pointer "
                        >
                            <div className='!p-5'>
                                {/* <UploadOutlined className="text-4xl text-purple-500" /> */}
                                <img className="w-14 mx-auto" src="/Images/upload.png" alt="" />
                                <p className="text-sm mt-4">Drag your file(s) to start uploading</p>
                                <p className="text-sm">OR</p>
                                <button className="mt-4 cursor-pointer py-2 px-8 border-2 border-[#553283] text-[#553283] rounded-md">
                                    Browse files
                                </button>
                            </div>
                        </Upload>
                    </Form.Item>
                </div>

                {/* Submit Button */}
                <Form.Item>
                    <button className='!w-full !py-3 bg-[#553283] rounded-lg text-white font-semibold cursor-pointer' type="primary" htmlType="submit">
                        Submit
                    </button>
                </Form.Item>
            </Form >
        </div >
    );
};

export default SetupTabsOne;
