import React, { useState } from 'react';
import { Form, Input, Upload, Button, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { toast, ToastContainer } from 'react-toastify';

const { Dragger } = Upload;

const SetupTabsTwo = () => {
    // States for each upload box
    const [overviewFile, setOverviewFile] = useState([]);
    const [team1Pic1, setTeam1Pic1] = useState([]);
    const [team1Pic2, setTeam1Pic2] = useState([]);
    const [team1Pic3, setTeam1Pic3] = useState([]);

    const [team2Pic1, setTeam2Pic1] = useState([]);
    const [team2Pic2, setTeam2Pic2] = useState([]);
    const [team2Pic3, setTeam2Pic3] = useState([]);

    const [team3Pic1, setTeam3Pic1] = useState([]);
    const [team3Pic2, setTeam3Pic2] = useState([]);
    const [team3Pic3, setTeam3Pic3] = useState([]);

    const [team4Pic1, setTeam4Pic1] = useState([]);
    const [team4Pic2, setTeam4Pic2] = useState([]);
    const [team4Pic3, setTeam4Pic3] = useState([]);

    // Common handlers
    const handleUpload = (info, setter) => {
        if (info.file.status === 'done') {
            message.success(`${info.file.name} uploaded successfully.`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} upload failed.`);
        }
    };

    const handleRemove = (file, setter) => {
        message.info(`${file.name} removed.`);
        setter([]);
    };

    const createDragger = (fileList, setFileList, label) => (
        <div>
            <h2 className='text-base font-medium '>{label}</h2>
            <Form.Item >
                <Dragger
                    action="/upload"
                    fileList={fileList}
                    onChange={({ fileList }) => setFileList(fileList)}
                    onRemove={(file) => handleRemove(file, setFileList)}
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
    );


    const handleSubmit = (values) => {
        console.log('Form values:', values);
        console.log('Cultural Activities Files:', overviewFile);
        toast.success('Job added successfully');
    };

    return (
        <div className="lg:p-6">
            <ToastContainer theme='colored' />
            <Form name="basic" onFinish={handleSubmit} layout="vertical">
                {/* Overview and Picture side-by-side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Overview */}
                    <div>
                        <h3 className='text-base font-medium mb-2'>Overview</h3>
                        <Form.Item name="overview">
                            <Input.TextArea rows={10} placeholder="Write about teams" />
                        </Form.Item>
                    </div>
                    {createDragger(overviewFile, setOverviewFile, 'Upload Overview Related Picture')}
                </div>

                {/* Team 1 Name */}
                <div>
                    <h3 className='text-base font-medium mb-2'>Team 1 Name</h3>
                    <Form.Item name="team1Name">
                        <Input className='!py-3' placeholder="Write about team1" />
                    </Form.Item>
                </div>
                {/* Team 1 Details */}
                <div>
                    <h3 className='text-base font-medium mb-2'>Team 1 Details</h3>
                    <Form.Item name="team1Details">
                        <Input className='!py-3' placeholder="Write about team1 details" />
                    </Form.Item>
                </div>

                {/* Team 1 Related Pictures */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {createDragger(team1Pic1, setTeam1Pic1, 'Upload Team1 Related Picture')}
                    {createDragger(team1Pic2, setTeam1Pic2, 'Upload Team1 Related Picture')}
                    {createDragger(team1Pic3, setTeam1Pic3, 'Upload Team1 Related Picture')}
                </div>

                {/* Team 2 Name */}
                <div>
                    <h3 className='text-base font-medium mb-2'>Team 2 Name</h3>
                    <Form.Item name="team2Name">
                        <Input className='!py-3' placeholder="Write about team1" />
                    </Form.Item>
                </div>
                {/* Team 2 Details */}
                <div>
                    <h3 className='text-base font-medium mb-2'>Team 2 Details</h3>
                    <Form.Item name="team2Details">
                        <Input className='!py-3' placeholder="Write about team1 details" />
                    </Form.Item>
                </div>

                {/* Team 2 Related Pictures */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {createDragger(team2Pic1, setTeam2Pic1, 'Upload Team 2 Related Picture')}
                    {createDragger(team2Pic2, setTeam2Pic2, 'Upload Team 2 Related Picture')}
                    {createDragger(team2Pic3, setTeam2Pic3, 'Upload Team 2 Related Picture')}
                </div>

                {/* Team 3 Name */}
                <div>
                    <h3 className='text-base font-medium mb-2'>Team 3 Name</h3>
                    <Form.Item name="team3Name">
                        <Input className='!py-3' placeholder="Write about team3" />
                    </Form.Item>
                </div>
                {/* Team 3 Details */}
                <div>
                    <h3 className='text-base font-medium mb-2'>Team 3 Details</h3>
                    <Form.Item name="team3Details">
                        <Input className='!py-3' placeholder="Write about team3 details" />
                    </Form.Item>
                </div>

                {/* Team 3 Related Pictures */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {createDragger(team3Pic1, setTeam3Pic1, 'Upload Team 3 Related Picture')}
                    {createDragger(team3Pic2, setTeam3Pic2, 'Upload Team 3 Related Picture')}
                    {createDragger(team3Pic3, setTeam3Pic3, 'Upload Team 3 Related Picture')}
                </div>

                {/* Team 4 Name */}
                <div>
                    <h3 className='text-base font-medium mb-2'>Team 4 Name</h3>
                    <Form.Item name="team4Name">
                        <Input className='!py-3' placeholder="Write about team4" />
                    </Form.Item>
                </div>
                {/* Team 4 Details */}
                <div>
                    <h3 className='text-base font-medium mb-2'>Team 4 Details</h3>
                    <Form.Item name="team4Details">
                        <Input className='!py-3' placeholder="Write about team4 details" />
                    </Form.Item>
                </div>

                {/* Team 4 Related Pictures */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {createDragger(team4Pic1, setTeam4Pic1, 'Upload Team 4 Related Picture')}
                    {createDragger(team4Pic2, setTeam4Pic2, 'Upload Team 4 Related Picture')}
                    {createDragger(team4Pic3, setTeam4Pic3, 'Upload Team 4 Related Picture')}
                </div>





                <div>
                    <button type="submit" className="bg-[#553283] w-full text-center cursor-pointer text-white py-3 px-6 rounded-md">Submit</button>
                </div>

            </Form>
        </div>
    );
};

export default SetupTabsTwo;
