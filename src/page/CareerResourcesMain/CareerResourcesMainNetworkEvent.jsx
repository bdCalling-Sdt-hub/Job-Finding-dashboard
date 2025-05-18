import React from "react";
import { Upload, Button, Input, DatePicker, TimePicker } from "antd";
import { InboxOutlined, LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { IoIosLink } from "react-icons/io";

const { Dragger } = Upload;
const { TextArea } = Input;

const CareerResourcesMainNetworkEvent = () => {
    const uploadProps = {
        name: "file",
        multiple: true,
        action: "/upload.do", // dummy upload URL
        showUploadList: false,
        onChange(info) {
            const { status } = info.file;
            if (status === "done") {
                // success handling
            } else if (status === "error") {
                // error handling
            }
        },
        onDrop(e) {
            // handle dropped files
        },
    };

    return (
        <div className="bg-white p-6 rounded shadow-sm   mx-auto">
            {/* Header */}
            <Link
                to="/career-resources"
                className="flex items-center gap-4 mb-8 cursor-pointer select-none"
            >
                <LeftOutlined className="text-xl text-gray-600" />
                <h1 className="text-2xl font-semibold">Add Networking Event</h1>
            </Link>

            {/* Form */}
            <form className="space-y-6">
                {/* Event Title */}
                <div>
                    <label className="block mb-2 font-medium text-gray-700">Event Title</label>
                    <Input
                        placeholder="Enter title"
                        className="border border-purple-700 rounded-md px-3 py-2"
                    />
                </div>

                {/* Event Link + Event Date + Event Time */}
                <div className="flex flex-wrap gap-4">
                    <div className="flex-1 ">
                        <label className="block mb-1 font-medium text-gray-700">Event Link</label>
                        <Input
                            placeholder="Write about company"
                            prefix={<IoIosLink />}
                            className="border border-purple-700 rounded-md px-3 py-2"
                        />
                        <div className="text-xs text-gray-500 mt-1">Social Links</div>
                    </div>

                    <div className="min-w-[250px]">
                        <label className="block mb-1 font-medium text-gray-700">Event Date</label>
                        <DatePicker
                            size="large"
                            placeholder="Select Event Date"
                            className="w-full border border-purple-700 rounded-md"
                        />
                    </div>

                    <div className="min-w-[250px]">
                        <label className="block mb-1 font-medium text-gray-700">Event Time</label>
                        <TimePicker
                            size="large"
                            placeholder="Select Event Time"
                            className="w-full border border-purple-700 rounded-md"
                            use12Hours
                            format="h:mm a"
                        />

                    </div>
                </div>

                {/* Event Photo 1 */}
                <div>
                    <label className="block mb-2 font-medium text-gray-700">Event Photo 1</label>
                    <Dragger
                        {...uploadProps}
                        className=" border-none border-2 border-gray-300 rounded-lg py-12"
                    >
                        <p className="ant-upload-drag-icon text-purple-700">
                            <img className="w-12 mx-auto" src="/Images/upload.png" alt="" />
                        </p>
                        <p className="ant-upload-text text-gray-500">
                            Drag your file(s) to start uploading
                        </p>
                        <p className="ant-upload-hint text-gray-400">OR</p>
                        <Button>Browse files</Button>
                    </Dragger>
                </div>

                {/* Event Photo 2 */}
                <div>
                    <label className="block mb-2 font-medium text-gray-700">Event Photo 2</label>
                    <Dragger
                        {...uploadProps}
                        className=" border-none border-2 border-gray-300 rounded-lg py-12"
                    >
                        <p className="ant-upload-drag-icon text-purple-700">
                            <img className="w-12 mx-auto" src="/Images/upload.png" alt="" />
                        </p>
                        <p className="ant-upload-text text-gray-500">
                            Drag your file(s) to start uploading
                        </p>
                        <p className="ant-upload-hint text-gray-400">OR</p>
                        <Button>Browse files</Button>
                    </Dragger>
                </div>

                {/* Details */}
                <div>
                    <label className="block mb-2 font-medium text-gray-700">Details</label>
                    <TextArea
                        rows={4}
                        placeholder="Enter title"
                        className="border border-purple-700 rounded-md px-3 py-2 resize-none"
                    />
                </div>

                {/* Publish Button */}
                <div>
                    <button 
                        type="primary"
                        className="bg-[#553283] border-[#553283] text-white px-8 py-2 rounded"
                    >
                        Publish
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CareerResourcesMainNetworkEvent;
