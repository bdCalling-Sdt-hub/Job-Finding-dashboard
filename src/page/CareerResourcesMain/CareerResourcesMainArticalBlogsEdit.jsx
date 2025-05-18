import React from "react";
import { Upload, Button, Input } from "antd";
import { InboxOutlined, LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Dragger } = Upload;
const { TextArea } = Input;

const CareerResourcesMainArticalBlogsEdit = () => {
    const props = {
        name: "file",
        multiple: true,
        action: "/upload.do", // dummy URL, replace with your API
        onChange(info) {
            const { status } = info.file;
            if (status !== "uploading") {
                // console.log(info.file, info.fileList);
            }
            if (status === "done") {
                // message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === "error") {
                // message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            // console.log("Dropped files", e.dataTransfer.files);
        },
    };

    return (
        <div className=" bg-white p-6 rounded shadow-sm">
            {/* Back & Title */}
            <Link to="/career-resources" className="flex items-center gap-4 mb-8 cursor-pointer select-none">
                <LeftOutlined className="text-xl text-gray-600" />
                <h1 className="text-2xl font-semibold">Edit Article/Blog</h1>
            </Link>

            {/* Form */}
            <form className="space-y-6">
                {/* Publisher Name */}
                <div>
                    <label className="block mb-2 font-medium text-gray-700">
                        Publisher Name
                    </label>
                    <Input
                        placeholder="Enter title"
                        // bordered={false}
                        className="border border-purple-700 rounded-md px-3 py-2"
                    />
                </div>

                {/* Publisher Image Upload */}
                <div>
                    <label className="block mb-2 font-medium text-gray-700">
                        Publisher Image
                    </label>
                    <Dragger {...props} className=" border-none border-2 border-gray-300 rounded-lg py-12">
                        <p className="ant-upload-drag-icon text-purple-700">
                            {/* <InboxOutlined /> */}
                            <img className="w-12 mx-auto" src="/Images/upload.png" alt="" />
                        </p>
                        <p className="ant-upload-text text-gray-500">
                            Drag your file(s) to start uploading
                        </p>
                        <p className="ant-upload-hint text-gray-400">OR</p>
                        <Button>Browse files</Button>
                    </Dragger>
                </div>

                {/* Title of Blog */}
                <div>
                    <label className="block mb-2 font-medium text-gray-700">
                        Title of Blog
                    </label>
                    <Input
                        placeholder="Enter title"
                        // bordered={false}
                        className="border border-purple-700 rounded-md px-3 py-2"
                    />
                </div>

                {/* Upload Picture of Blog */}
                <div>
                    <label className="block mb-2 font-medium text-gray-700">
                        Upload Picture of Blog
                    </label>
                    <Dragger {...props} className=" border-none border-2 border-gray-300 rounded-lg py-12">
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
                        // bordered={false}
                        className="!border !border-purple-700 rounded-md px-3 py-2 resize-none"
                    />
                </div>

                {/* Publish Button */}
                <div>
                    <button
                        type="primary"
                        htmlType="submit"
                        className="bg-[#553283] border-[#553283] text-white px-8 !py-2 rounded"
                    >
                        Publish
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CareerResourcesMainArticalBlogsEdit;
