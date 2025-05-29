import React, { useState } from "react";
import {
    Typography,
    Card,
    Button,
    Modal,
    Form,
    Input,
    Collapse,
    Upload,
    Image,
    Space,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const initialData = {
    title: "How It Works",
    subtitleNumber: 14,
    steps: [
        {
            stepNumber: 1,
            title: "Title for Step 1",
            details: "Lorem ipsum dolor sit amet consectetur.",
            illustration: [],
        },
        {
            stepNumber: 2,
            title: "Title for Step 2",
            details: "Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci.",
            illustration: [],
        },
        {
            stepNumber: 3,
            title: "Title for Step 3",
            details: "Lorem ipsum dolor sit amet consectetur.",
            illustration: [],
        },
        {
            stepNumber: 4,
            title: "Title for Step 4",
            details: "Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci.",
            illustration: [],
        },
        {
            stepNumber: 5,
            title: "Title for Step 5",
            details: "Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci.",
            illustration: [],
        },
        {
            stepNumber: 6,
            title: "Title for Step 6",
            details: "Lorem ipsum dolor sit amet consectetur.",
            illustration: [],
        },
    ],
};

const HowItWorks = () => {
    const [data, setData] = useState(initialData);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        form.setFieldsValue(data);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        form
            .validateFields()
            .then((values) => {
                setData(values);
                setIsModalVisible(false);
            })
            .catch((err) => {
                console.log("Validation failed:", err);
            });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const isImage = (file) => file.type && file.type.startsWith("image/");

    const getPreviewUrl = (file) => {
        if (file.url) return file.url;
        if (file.preview) return file.preview;
        file.preview = URL.createObjectURL(file.originFileObj);
        return file.preview;
    };

    return (
        <div style={{ margin: "auto", padding: 24 }}>
            <Card
                title={
                    <>
                        <Title level={2} style={{ marginBottom: 0 }}>
                            {data.title}
                        </Title>
                        <Paragraph type="secondary" style={{ fontSize: 16 }}>
                            {/* {data.subtitleNumber} */}
                        </Paragraph>
                    </>
                }
                extra={
                    <button className="bg-[#553283] text-white py-2 px-4 rounded" onClick={showModal}>
                        Edit
                    </button>
                }
            >
                <Collapse accordion>
                    {data.steps.map((step, index) => (
                        <Panel
                            header={`Step ${step.stepNumber}: ${step.title}`}
                            key={index}
                            style={{ fontWeight: "bold" }}
                        >
                            <Paragraph>
                                <b>Details:</b> {step.details}
                            </Paragraph>

                            <Image
                                width={100}
                                //   src={getPreviewUrl(file)}
                                src="https://cdn.iconscout.com/icon/free/png-256/free-industry-icon-download-in-svg-png-gif-file-formats--factory-industrial-pollution-energy-pack-nature-icons-1207834.png?f=webp&w=256"

                            />

                        </Panel>
                    ))}
                </Collapse>
            </Card>

            <Modal
                title="Update How It Works Data"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={800}
                okText="Save"
            >
                <Form form={form} layout="vertical" preserve={false} initialValues={data}>
                    <Form.Item
                        name="title"
                        label="Main Title"
                        rules={[{ required: true, message: "Please input main title" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="subtitleNumber"
                        label="Subtitle Number"
                        rules={[{ required: true, message: "Please input subtitle number" }]}
                    >
                        <Input type="number" />
                    </Form.Item>

                    <Form.List name="steps">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Card
                                        key={key}
                                        type="inner"
                                        size="small"
                                        title={`Step ${name + 1}`}
                                        extra={
                                            fields.length > 1 ? (
                                                <Button danger type="link" onClick={() => remove(name)}>
                                                    Remove
                                                </Button>
                                            ) : null
                                        }
                                        style={{ marginBottom: 20 }}
                                    >
                                        <Form.Item
                                            {...restField}
                                            name={[name, "stepNumber"]}
                                            label="Step Number"
                                            rules={[{ required: true, message: "Please input step number" }]}
                                        >
                                            <Input type="number" />
                                        </Form.Item>

                                        <Form.Item
                                            {...restField}
                                            name={[name, "title"]}
                                            label="Title"
                                            rules={[{ required: true, message: "Please input title" }]}
                                        >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            {...restField}
                                            name={[name, "details"]}
                                            label="Details"
                                            rules={[{ required: true, message: "Please input details" }]}
                                        >
                                            <Input.TextArea rows={3} />
                                        </Form.Item>

                                        {/* Upload ONE illustration file per step */}
                                        <Form.Item
                                            {...restField}
                                            name={[name, "illustration"]}
                                            label="Upload Illustration"
                                            valuePropName="fileList"
                                            getValueFromEvent={(e) => {
                                                if (Array.isArray(e)) return e;
                                                return e && e.fileList;
                                            }}
                                        >
                                            <Upload
                                                beforeUpload={() => false}
                                                multiple={false}
                                                listType="picture"
                                                maxCount={1}
                                                onChange={({ fileList }) =>
                                                    form.setFieldsValue({
                                                        steps: form
                                                            .getFieldValue("steps")
                                                            .map((step, i) => (i === name ? { ...step, illustration: fileList } : step)),
                                                    })
                                                }
                                                onRemove={(file) => {
                                                    const currentSteps = form.getFieldValue("steps") || [];
                                                    const updatedSteps = currentSteps.map((step, i) => {
                                                        if (i === name) {
                                                            return {
                                                                ...step,
                                                                illustration: (step.illustration || []).filter((f) => f.uid !== file.uid),
                                                            };
                                                        }
                                                        return step;
                                                    });
                                                    form.setFieldsValue({ steps: updatedSteps });
                                                }}
                                            >
                                                <Button icon={<UploadOutlined />}>Select Illustration</Button>
                                            </Upload>
                                        </Form.Item>
                                    </Card>
                                ))}

                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block>
                                        + Add Step
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </Form>
            </Modal>
        </div>
    );
};

export default HowItWorks;
