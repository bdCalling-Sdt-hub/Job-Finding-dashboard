import React, { useState } from 'react';
import { Typography, Card, Button, Modal, Form, Input, Collapse, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const initialData = {
    title: "Why Karma",
    mainTitle: "Title",
    mainDetails:
        "Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a vitae diam pharetra duis habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum nisl magnis convallis arcu enim tortor. Cursus a sed tortor enim mi imperdiet massa donec mauris.",
    reasons: [
        {
            reason: "Reason 1",
            details:
                "Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a vitae diam pharetra duis habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum nisl magnis convallis arcu enim tortor. Cursus a sed tortor enim mi imperdiet massa donec mauris.",
        },
        {
            reason: "Reason 2",
            details:
                "Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a vitae diam pharetra duis habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum nisl magnis convallis arcu enim tortor. Cursus a sed tortor enim mi imperdiet massa donec mauris.",
        },
        {
            reason: "Reason 3",
            details:
                "Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a vitae diam pharetra duis habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum nisl magnis convallis arcu enim tortor. Cursus a sed tortor enim mi imperdiet massa donec mauris.",
        },
    ],
    file1: [],
    file2: [],
};

const WhyKarma = () => {
    const [data, setData] = useState(initialData);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        form.setFieldsValue({
            title: data.title,
            mainTitle: data.mainTitle,
            mainDetails: data.mainDetails,
            reasons: data.reasons,
            file1: data.file1,
            file2: data.file2,
        });
        setIsModalVisible(true);
    };

    const handleOk = () => {
        form
            .validateFields()
            .then(values => {
                // Store files as well in state
                setData(values);
                setIsModalVisible(false);
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // Upload props for controlled uploads (prevent auto-upload)
    const uploadProps = {
        beforeUpload: file => {
            // prevent automatic upload
            return false;
        },
        onRemove: (file, fileList, fieldName) => {
            // Remove file from the form field value
            const currentFiles = form.getFieldValue(fieldName) || [];
            const filtered = currentFiles.filter(f => f.uid !== file.uid);
            form.setFieldsValue({ [fieldName]: filtered });
        },
        onChange: info => {
            // Add files to the form field value
            const { fileList, event } = info;
            // fileList already contains updated list of files
            // but we need to update the form value manually inside onChange because form is controlling the files
        },
    };

    return (
        <div style={{ padding: 24, margin: 'auto' }}>
            <Card
                title={
                    <Title level={2} style={{ marginBottom: 0 }}>
                        {data.title}
                    </Title>
                }
                extra={
                    <button
                        className="bg-[#553283] text-white py-2 px-4 rounded"
                        onClick={showModal}
                    >
                        Edit
                    </button>
                }
            >
                <Title level={4}>{data.mainTitle}</Title>
                <Paragraph>{data.mainDetails}</Paragraph>

                <Collapse accordion>
                    {data.reasons.map((reasonObj, idx) => (
                        <Panel header={reasonObj.reason} key={idx}>
                            <Paragraph>{reasonObj.details}</Paragraph>
                        </Panel>
                    ))}
                </Collapse>
                <div className='flex gap-4 mt-5'>
                    <img className='w-48 h-48 border border-gray-400 ' src="https://cdn.iconscout.com/icon/free/png-256/free-industry-icon-download-in-svg-png-gif-file-formats--factory-industrial-pollution-energy-pack-nature-icons-1207834.png?f=webp&w=256" alt="" />
                    <img className='w-48 h-48 border border-gray-400 ' src="https://cdn.iconscout.com/icon/free/png-256/free-industry-icon-download-in-svg-png-gif-file-formats--factory-industrial-pollution-energy-pack-nature-icons-1207834.png?f=webp&w=256" alt="" />
                </div>
            </Card>

            <Modal
                title="Update Why Karma Data"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Save"
                width={800}
            >
                <Form form={form} layout="vertical" preserve={false}>
                    <Form.Item
                        name="title"
                        label="Main Title"
                        rules={[{ required: true, message: 'Please input the main title!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="mainTitle"
                        label="Section Title"
                        rules={[{ required: true, message: 'Please input the section title!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="mainDetails"
                        label="Section Details"
                        rules={[{ required: true, message: 'Please input the section details!' }]}
                    >
                        <Input.TextArea rows={4} />
                    </Form.Item>

                    <Form.List name="reasons">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Card
                                        key={key}
                                        size="small"
                                        type="inner"
                                        title={`Reason ${name + 1}`}
                                        extra={
                                            fields.length > 1 ? (
                                                <Button danger type="link" onClick={() => remove(name)}>
                                                    Remove
                                                </Button>
                                            ) : null
                                        }
                                        style={{ marginBottom: 16 }}
                                    >
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'reason']}
                                            label="Reason Title"
                                            rules={[{ required: true, message: 'Please input the reason title!' }]}
                                        >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            {...restField}
                                            name={[name, 'details']}
                                            label="Reason Details"
                                            rules={[{ required: true, message: 'Please input the reason details!' }]}
                                        >
                                            <Input.TextArea rows={3} />
                                        </Form.Item>
                                    </Card>
                                ))}

                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block>
                                        + Add Reason
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>

                    {/* File Upload 1 */}
                    <Form.Item
                        name="file1"
                        label="Upload File 1"
                        valuePropName="fileList"
                        getValueFromEvent={e => {
                            // Normalize fileList on change event
                            if (Array.isArray(e)) return e;
                            return e && e.fileList;
                        }}
                    >
                        <Upload
                            beforeUpload={() => false}
                            multiple={false}
                            listType="text"
                            onChange={({ fileList }) => form.setFieldsValue({ file1: fileList })}
                            onRemove={(file) => {
                                const currentFiles = form.getFieldValue('file1') || [];
                                const filtered = currentFiles.filter(f => f.uid !== file.uid);
                                form.setFieldsValue({ file1: filtered });
                            }}
                        >
                            <Button icon={<UploadOutlined />}>Select File 1</Button>
                        </Upload>
                    </Form.Item>

                    {/* File Upload 2 */}
                    <Form.Item
                        name="file2"
                        label="Upload File 2"
                        valuePropName="fileList"
                        getValueFromEvent={e => {
                            if (Array.isArray(e)) return e;
                            return e && e.fileList;
                        }}
                    >
                        <Upload
                            beforeUpload={() => false}
                            multiple={false}
                            listType="text"
                            onChange={({ fileList }) => form.setFieldsValue({ file2: fileList })}
                            onRemove={(file) => {
                                const currentFiles = form.getFieldValue('file2') || [];
                                const filtered = currentFiles.filter(f => f.uid !== file.uid);
                                form.setFieldsValue({ file2: filtered });
                            }}
                        >
                            <Button icon={<UploadOutlined />}>Select File 2</Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default WhyKarma;
