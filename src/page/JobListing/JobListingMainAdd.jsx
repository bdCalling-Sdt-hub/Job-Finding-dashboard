import React, { useState } from 'react';
import { Form, Input, Select, Button, Row, Col, Tag, message } from 'antd';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import Dragger from 'antd/es/upload/Dragger';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

const { Option } = Select;

const JobListingMainAdd = () => {

    const [culturalActivitiesFiles, setCulturalActivitiesFiles] = useState([]);

    // Handle file removal
    const handleRemove = (file) => {
        message.info(`${file.name} removed.`);
        setCulturalActivitiesFiles(prevFiles =>
            prevFiles.filter(f => f.uid !== file.uid)  // Filter out the removed file
        );
    };

    // Handle file change (upload)
    const onChangeCulturalActivitiesFiles = ({ fileList }) => {
        setCulturalActivitiesFiles(fileList);
    };

    const handleSubmit = (values) => {
        console.log('Form values:', values);
        console.log('Cultural Activities Files:', culturalActivitiesFiles);
        toast.success('Job added successfully');
    };



    return (
        <div style={{ padding: '24px' }}>
            <ToastContainer theme='colored' />
            {/* Back Navigation */}
            <Link to="/job-listing" className="flex  items-center gap-2 text-2xl">
                <MdKeyboardArrowLeft className="text-3xl" />
                <Link to="/job-listing">Job Setup</Link>
            </Link>

            <div className=' my-10 border-2 border-[#553283] rounded-lg p-10'>
                {/* Form */}
                <Form name="jobForm" onFinish={handleSubmit} layout="vertical" >
                    {/* Basic Job Details Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Basic Job Details</h3>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Form.Item label="Job Title" name="jobTitle">
                                    <Input className='!py-2' placeholder="Search" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="Employment Type" name="employmentType">
                                    <Select size='large' className='!border !border-[#afafaf] rounded-lg' placeholder="Select">
                                        <Option className="!py-2" value="fullTime">Full Time</Option>
                                        <Option className="!py-2" value="partTime">Part Time</Option>
                                        <Option className="!py-2" value="contract">Contract</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="Location" name="location">
                                    <Input className='!py-2' placeholder="Search" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="Salary Range" name="salaryRange">
                                    <Input className='!py-2' placeholder="Search" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item className=' ' label="Experience Level" name="experienceLevel">
                                    <Select size='large' className='!border !border-[#afafaf] rounded-lg' placeholder="Select">
                                        <Option value="junior">Junior</Option>
                                        <Option value="mid">Mid</Option>
                                        <Option value="senior">Senior</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="Application Last Date" name="lastDate">
                                    <Input className='!py-2' placeholder="Search" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </div>

                    {/* Skills & Expertise Section */}
                    <div style={{ marginTop: '30px' }}>
                        <h3 className="text-lg font-semibold mb-4">Skills & Expertise</h3>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Form.Item label="Seniority" name="seniority">
                                    <Input className='!py-2' placeholder="Search" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="Skills & Expertise" name="skillsExpertise">
                                    <Input className='!py-2' placeholder="Search" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <div>
                            {/* <h4 className="text-md font-semibold mb-2">Skills</h4> */}
                            <div className="flex gap-3">
                                <span className='py-1 px-3 bg-[#553283] text-white rounded font-semibold'>Figma</span>
                                <span className='py-1 px-3 bg-[#553283] text-white rounded font-semibold'>Website Design</span>
                                <span className='py-1 px-3 bg-[#553283] text-white rounded font-semibold'>Prototype</span>
                                <span className='py-1 px-3 bg-[#553283] text-white rounded font-semibold'>Wireframe</span>
                                <span className='py-1 px-3 bg-[#553283] text-white rounded font-semibold'>Product Design</span>
                            </div>
                        </div>


                    </div>

                    {/* Job Description & Responsibilities Section */}
                    <div style={{ marginTop: '30px' }}>
                        <h3 className="text-lg font-semibold mb-4">Job Description & Responsibilities</h3>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item label="Job Description" name="jobDescription">
                                    <Input.TextArea placeholder="Search" rows={4} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Your Scope" name="yourScope">
                                    <Input.TextArea placeholder="Search" rows={4} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Job Responsibilities" name="jobResponsibilities">
                                    <Input.TextArea placeholder="Search" rows={4} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Position Requirements" name="PositionRequirements">
                                    <Input.TextArea placeholder="Search" rows={4} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="What’s In For You" name="WhatisInForYou">
                                    <Input.TextArea placeholder="Search" rows={4} />
                                </Form.Item>
                            </Col>

                        </Row>
                    </div>

                    <div>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item className=' ' label="Deliverables" name="Deliverables">
                                    <Select size='large' className='!border !border-[#afafaf] rounded-lg' placeholder="Select">
                                        <Option value="cv">CV</Option>
                                        <Option value="coverletter">Cover Letter</Option>
                                        <Option value="shortVideo">Short video</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <h3 className='text-base font-medium mb-1'>Upload Video</h3>
                                <Form.Item>
                                    <Dragger
                                        action="/upload"
                                        fileList={culturalActivitiesFiles}
                                        onRemove={(file) => handleRemove(file, setCulturalActivitiesFiles)}
                                        beforeUpload={() => false}
                                        onChange={onChangeCulturalActivitiesFiles}
                                        accept=".jpg,.jpeg,.png,.gif,.mp4,.avi,.mov"
                                        showUploadList={{ showRemoveIcon: true }}
                                        className="w-full cursor-pointer p-6 rounded-lg"
                                    >
                                        <div className="p-5">
                                            <img className="w-12 mx-auto" src="/Images/upload.png" alt="" />
                                            <p className="text-sm mt-4">Drag your file(s) to start uploading</p>
                                            <p className="text-sm">OR</p>
                                            <button className="mt-4 cursor-pointer py-2 px-8 border-2 border-[#553283] text-[#553283] rounded-md">
                                                Browse files
                                            </button>
                                        </div>
                                    </Dragger>
                                </Form.Item>
                            </Col>
                        </Row>
                    </div>

                    {/* Submit Button */}
                    <Form.Item style={{ marginTop: '30px' }}>
                        <button className='py-3 cursor-pointer px-8 font-semibold bg-[#553283] text-white rounded-md' type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Post Job
                        </button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default JobListingMainAdd;
