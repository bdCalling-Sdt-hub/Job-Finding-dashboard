import React, { useState } from 'react';
import { Form, Input, Upload, Button, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { toast, ToastContainer } from 'react-toastify';

const { Dragger } = Upload;

const SetupTabsThree = () => {
    const [missionImage, setMissionImage] = useState([]);
    const [missionImage2, setMissionImage2] = useState([]);
    const [coreValuesImage, setCoreValuesImage] = useState([]);
    const [commitmentImage, setCommitmentImage] = useState([]);
    const [culturalActivitiesFiles, setCulturalActivitiesFiles] = useState([]);
    console.log(missionImage, missionImage2, coreValuesImage, commitmentImage, culturalActivitiesFiles);

    const handleUpload = (info, setFileList) => {
        if (info.file.status === 'done') {
            message.success(`${info.file.name} uploaded successfully.`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} upload failed.`);
        }
    };

    const handleRemove = (file, setFileList) => {
        message.info(`${file.name} removed.`);
        setFileList([]);
    };

    const onChangeMissionImage = ({ fileList }) => setMissionImage(fileList);
    const onChangeMissionImage2 = ({ fileList }) => setMissionImage2(fileList);
    const onChangeCoreValuesImage = ({ fileList }) => setCoreValuesImage(fileList);
    const onChangeCommitmentImage = ({ fileList }) => setCommitmentImage(fileList);
    const onChangeCulturalActivitiesFiles = ({ fileList }) => setCulturalActivitiesFiles(fileList);

    const handleSubmit = (values) => {
        console.log('Form values:', values);
        console.log('Cultural Activities Files:', culturalActivitiesFiles);
        toast.success('Job added successfully');
    };


    return (
        <div className="p-6">
            <ToastContainer theme='colored' />
            <Form name="basic" onFinish={handleSubmit} layout="vertical">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className='text-base font-medium mb-2'>Mission We Are Working On</h3>
                        <Form.Item name="missionOverview">
                            <Input.TextArea rows={10} placeholder="Write about mission" />
                        </Form.Item>
                    </div>

                    <div>
                        <h3 className='text-base font-medium '>Upload Overview Related Picture</h3>
                        <Form.Item>
                            <Dragger
                                action="/upload"
                                fileList={missionImage}
                                onChange={onChangeMissionImage}
                                onRemove={(file) => handleRemove(file, setMissionImage)}
                                beforeUpload={() => false}
                                accept=".jpg,.jpeg,.png"
                                showUploadList={{ showRemoveIcon: true }}
                                className="w-full cursor-pointer p-6  rounded-lg"
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
                    </div>
                </div>

                {/* Mission Titles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h3 className='text-base font-medium mb-2'>Mission 1 Title</h3>
                        <Form.Item name="mission1TitleSet1">
                            <Input className='!py-2' placeholder="Write about mission" />
                        </Form.Item>
                    </div>
                    <div>
                        <h3 className='text-base font-medium mb-2'>Mission 2 Title</h3>
                        <Form.Item name="mission2TitleSet1">
                            <Input className='!py-2' placeholder="Write about mission" />
                        </Form.Item>
                    </div>
                    <div>
                        <h3 className='text-base font-medium mb-2'>Mission 3 Title</h3>
                        <Form.Item name="mission3TitleSet1">
                            <Input className='!py-2' placeholder="Write about mission" />
                        </Form.Item>
                    </div>
                </div>

                {/* Mission Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h3 className='text-base font-medium mb-2'>Missions 1 Details</h3>
                        <Form.Item name="mission1DetailsSet1">
                            <Input.TextArea placeholder="Write about mission" />
                        </Form.Item>
                    </div>
                    <div>
                        <h3 className='text-base font-medium mb-2'>Mission 2 Details</h3>
                        <Form.Item name="mission2DetailsSet1">
                            <Input.TextArea placeholder="Write about mission" />
                        </Form.Item>
                    </div>
                    <div>
                        <h3 className='text-base font-medium mb-2'>Mission 3 Details</h3>
                        <Form.Item name="mission3DetailsSet1">
                            <Input.TextArea placeholder="Write about mission" />
                        </Form.Item>
                    </div>
                </div>

                {/* Second Set of Mission Overview + Image */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className='text-base font-medium mb-2'>Our Vision</h3>
                        <Form.Item name="missionOverview2">
                            <Input.TextArea rows={10} placeholder="Write about mission" />
                        </Form.Item>
                    </div>

                    <div>
                        <h3 className='text-base font-medium '>Upload Vision Picture</h3>
                        <Form.Item>
                            <Dragger
                                action="/upload"
                                fileList={missionImage2}
                                onChange={onChangeMissionImage2}
                                onRemove={(file) => handleRemove(file, setMissionImage2)}
                                beforeUpload={() => false}
                                accept=".jpg,.jpeg,.png"
                                showUploadList={{ showRemoveIcon: true }}
                                className="w-full cursor-pointer p-6  rounded-lg"
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
                    </div>
                </div>

                {/* Second Set of Mission Titles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h3 className='text-base font-medium mb-2'>Vision 1 Title</h3>
                        <Form.Item name="mission1TitleSet2">
                            <Input className='!py-2' placeholder="Write about mission" />
                        </Form.Item>
                    </div>
                    <div>
                        <h3 className='text-base font-medium mb-2'>Vision 2 Title</h3>
                        <Form.Item name="mission2TitleSet2">
                            <Input className='!py-2' placeholder="Write about mission" />
                        </Form.Item>
                    </div>
                    <div>
                        <h3 className='text-base font-medium mb-2'>Vision 3 Title</h3>
                        <Form.Item name="mission3TitleSet2">
                            <Input className='!py-2' placeholder="Write about mission" />
                        </Form.Item>
                    </div>
                </div>

                {/* Second Set of Mission Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h3 className='text-base font-medium mb-2'>Vision 1 Details</h3>
                        <Form.Item name="mission1DetailsSet2">
                            <Input.TextArea placeholder="Write about mission" />
                        </Form.Item>
                    </div>
                    <div>
                        <h3 className='text-base font-medium mb-2'>Vision 2 Details</h3>
                        <Form.Item name="mission2DetailsSet2">
                            <Input.TextArea placeholder="Write about mission" />
                        </Form.Item>
                    </div>
                    <div>
                        <h3 className='text-base font-medium mb-2'>Vision 3 Details</h3>
                        <Form.Item name="mission3DetailsSet2">
                            <Input.TextArea placeholder="Write about mission" />
                        </Form.Item>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className='text-base font-medium mb-2'>Our Core Values</h3>
                        <Form.Item name="coreValuesOverview">
                            <Input.TextArea rows={10} placeholder="Write about core values" />
                        </Form.Item>
                    </div>

                    <div>
                        <h3 className='text-base font-medium'>Upload Core Values Picture</h3>
                        <Form.Item>
                            <Dragger
                                action="/upload"
                                fileList={coreValuesImage}
                                onRemove={(file) => handleRemove(file, setCoreValuesImage)}
                                beforeUpload={() => false}
                                onChange={onChangeCoreValuesImage}
                                accept=".jpg,.jpeg,.png"
                                showUploadList={{ showRemoveIcon: true }}
                                className="w-full cursor-pointer p-6  rounded-lg"
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
                    </div>
                </div>

                {/* Core Value Titles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h3 className='text-base font-medium mb-2'>Core Value 1 Title</h3>
                        <Form.Item name="coreValue1Title">
                            <Input className='!py-2' placeholder="Write about core value" />
                        </Form.Item>
                    </div>
                    <div>
                        <h3 className='text-base font-medium mb-2'>Core Value 2 Title</h3>
                        <Form.Item name="coreValue2Title">
                            <Input className='!py-2' placeholder="Write about core value" />
                        </Form.Item>
                    </div>
                    <div>
                        <h3 className='text-base font-medium mb-2'>Core Value 3 Title</h3>
                        <Form.Item name="coreValue3Title">
                            <Input className='!py-2' placeholder="Write about core value" />
                        </Form.Item>
                    </div>
                </div>

                {/* Core Value Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h3 className='text-base font-medium mb-2'>Core Value 1 Details</h3>
                        <Form.Item name="coreValue1Details">
                            <Input.TextArea placeholder="Write about core value" />
                        </Form.Item>
                    </div>
                    <div>
                        <h3 className='text-base font-medium mb-2'>Core Value 2 Details</h3>
                        <Form.Item name="coreValue2Details">
                            <Input.TextArea placeholder="Write about core value" />
                        </Form.Item>
                    </div>
                    <div>
                        <h3 className='text-base font-medium mb-2'>Core Value 3 Details</h3>
                        <Form.Item name="coreValue3Details">
                            <Input.TextArea placeholder="Write about core value" />
                        </Form.Item>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className='text-base font-medium mb-2'>Commitment</h3>
                        <Form.Item name="commitmentOverview">
                            <Input.TextArea rows={10} placeholder="Write about Commitment" />
                        </Form.Item>
                    </div>

                    <div>
                        <h3 className='text-base font-medium '>Upload Commitment Picture</h3>
                        <Form.Item>
                            <Dragger
                                action="/upload"
                                fileList={commitmentImage}
                                onRemove={(file) => handleRemove(file, setCommitmentImage)}
                                beforeUpload={() => false}
                                onChange={onChangeCommitmentImage}
                                accept=".jpg,.jpeg,.png,.gif,.mp4,.avi,.mov"
                                showUploadList={{ showRemoveIcon: true }}
                                className="w-full cursor-pointer p-6  rounded-lg"
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
                    </div>
                </div>

                {/* Upload Cultural Activities Section */}
                <div className="">
                    <div>
                        <h3 className='text-base font-medium'>Upload Pictures/Videos of Cultural Activities</h3>
                        <Form.Item>
                            <Dragger
                                action="/upload"
                                fileList={culturalActivitiesFiles}
                                onRemove={(file) => handleRemove(file, setCulturalActivitiesFiles)}
                                beforeUpload={() => false}
                                onChange={onChangeCulturalActivitiesFiles}
                                accept=".jpg,.jpeg,.png,.gif,.mp4,.avi,.mov"
                                showUploadList={{ showRemoveIcon: true }}
                                className="w-full cursor-pointer p-6  rounded-lg"
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
                    </div>
                </div>

                <div className="mt-8 ">
                    <button className="cursor-pointer w-full py-2 px-8  bg-[#553283] text-[#ffffff] rounded-md">Save</button>
                </div>

            </Form>
        </div>
    );
};

export default SetupTabsThree;
