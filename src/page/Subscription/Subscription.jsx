import React, { useState } from "react";
import { Modal, Input, message } from "antd";
import { FaPlus } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FcCancel } from "react-icons/fc";
import { IoAdd } from "react-icons/io5";

const Subscription = () => {
    // Static subscriptions data in state
    const [subscriptions, setSubscriptions] = useState([
        {
            id: 1,
            name: "Weekly Plan",
            price: "$5.50",
            duration: "week",
            details: [
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
            ],
        },
        {
            id: 2,
            name: "Monthly Plan",
            price: "$20",
            duration: "month",
            details: [
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
            ],
        },
        {
            id: 3,
            name: "Yearly Plan",
            price: "$200",
            duration: "year",
            details: [
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
            ],
        },
    ]);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [subscriptionName, setSubscriptionName] = useState("");
    const [price, setPrice] = useState("");
    const [details, setDetails] = useState([""]); // <-- Array of detail strings
    const [duration, setDuration] = useState("weekly");
    const [editingId, setEditingId] = useState(null);

    // Open modal for add or edit
    const showModal = (edit = false, subscription = null) => {
        setIsEditing(edit);
        setIsModalVisible(true);

        if (edit && subscription) {
            setSubscriptionName(subscription.name);
            setPrice(subscription.price.replace(/^\$/, ""));
            setDetails(subscription.details.length ? subscription.details : [""]);
            setDuration(subscription.duration);
            setEditingId(subscription.id);
        } else {
            setSubscriptionName("");
            setPrice("");
            setDetails([""]);
            setDuration("weekly");
            setEditingId(null);
        }
    };

    // Close modal and reset fields
    const handleCancel = () => {
        setIsModalVisible(false);
        setSubscriptionName("");
        setPrice("");
        setDetails([""]);
        setDuration("weekly");
        setEditingId(null);
    };

    // Handle changing a specific detail input
    const handleDetailChange = (index, value) => {
        const newDetails = [...details];
        newDetails[index] = value;
        setDetails(newDetails);
    };

    // Add new empty detail input
    const addDetailField = () => {
        setDetails([...details, ""]);
    };

    // Remove detail input by index
    const removeDetailField = (index) => {
        if (details.length === 1) return; // Keep at least one input
        const newDetails = details.filter((_, i) => i !== index);
        setDetails(newDetails);
    };

    // Add new subscription
    const handleAdd = (e) => {
        e.preventDefault();
        if (!subscriptionName || !price || details.some((d) => !d.trim())) {
            message.error("Please fill all fields and subscription details!");
            return;
        }

        const newSub = {
            id: Date.now(),
            name: subscriptionName,
            price: `$${price}`,
            duration,
            details,
        };

        setSubscriptions([...subscriptions, newSub]);
        message.success("Subscription added!");
        handleCancel();
    };

    // Update existing subscription
    const handleUpdate = (e) => {
        e.preventDefault();
        if (!subscriptionName || !price || details.some((d) => !d.trim())) {
            message.error("Please fill all fields and subscription details!");
            return;
        }

        const updatedSubs = subscriptions.map((sub) =>
            sub.id === editingId
                ? {
                    ...sub,
                    name: subscriptionName,
                    price: `$${price}`,
                    duration,
                    details,
                }
                : sub
        );

        setSubscriptions(updatedSubs);
        message.success("Subscription updated!");
        handleCancel();
    };

    // Delete subscription by id
    const handleDelete = (id) => {
        const filteredSubs = subscriptions.filter((sub) => sub.id !== id);
        setSubscriptions(filteredSubs);
        message.success("Subscription deleted!");
    };

    return (
        <section className="p-6">
            <div className="w-full flex justify-end py-6">
                <button
                    className="text-xl px-4 py-3 bg-[#553283] text-white flex justify-center items-center gap-2 rounded"
                    onClick={() => showModal(false)}
                >
                    <FaPlus className="text-xl" /> Add Subscription
                </button>
            </div>

            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
                {subscriptions.map((subscription) => (
                    <div
                        key={subscription.id}
                        className="bg-[#553283] rounded-lg p-6 text-white flex flex-col justify-between"
                    >
                        <div>
                            <div className="text-sm mb-1 opacity-100">
                                <span className="font-semibold text-4xl">$123</span>{" "}
                                <span className="text-xs">monthly</span>
                            </div>
                            <h2 className="text-3xl font-semibold mb-4">{subscription.name}</h2>

                            <p>This plan includes:</p>
                            <div className="bg-white rounded-lg p-4 text-black mb-6">
                                <ul className="list-disc list-inside space-y-2">
                                    {subscription.details.map((detail, idx) => (
                                        <li
                                            key={idx}
                                            className={`flex items-center gap-2 ${idx < 4
                                                ? "text-green-600"
                                                : "line-through text-red-600"
                                                }`}
                                        >
                                            {idx < 4 ? (
                                                <FaRegCircleCheck className="text-xl" />
                                            ) : (
                                                <FcCancel className="text-xl" />
                                            )}
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => handleDelete(subscription.id)}
                                className="py-3 bg-white text-[#553283] rounded hover:bg-red-600 hover:text-white transition"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => showModal(true, subscription)}
                                className="py-3 bg-green-500 rounded hover:bg-green-600 transition"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                title={isEditing ? "Edit Subscription" : "Add Subscription"}
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <form onSubmit={isEditing ? handleUpdate : handleAdd}>
                    <div className="mb-4">
                        <label className="block mb-2 font-semibold">
                            Subscription Package name
                        </label>
                        <Input
                            placeholder="Enter subscription name"
                            value={subscriptionName}
                            onChange={(e) => setSubscriptionName(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 font-semibold">
                            Subscription Duration
                        </label>
                        <select
                            className="w-full border border-gray-300 rounded-md p-2"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        >
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 font-semibold">
                            Subscription Package Price
                        </label>
                        <Input
                            placeholder="Enter price"
                            value={price}
                            type="number"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    {/* Dynamic details inputs */}
                    <div className="mb-4">
                        <label className="block mb-2 font-semibold">
                            Subscription Package Details
                        </label>
                        {details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2 mb-2">
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    placeholder={`Detail #${idx + 1}`}
                                    value={detail}
                                    onChange={(e) => handleDetailChange(idx, e.target.value)}
                                    required
                                />
                                {details.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeDetailField(idx)}
                                        className="text-red-600 hover:text-red-800 font-bold text-2xl"
                                        title="Remove detail"
                                    >
                                        &times;
                                    </button>
                                )}
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={addDetailField}
                            className="mt-2 flex justify-center items-center gap-2 text-[#553283] border border-[#553283] px-4 py-2 w-full text-center rounded hover:bg-[#a971f1] hover:text-white transition"
                        >
                            <IoAdd /> Add Detail
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-[#553283] text-white rounded hover:bg-[#492a72] transition"
                    >
                        {isEditing ? "Update Subscription" : "Add Subscription"}
                    </button>
                </form>
            </Modal>
        </section>
    );
};

export default Subscription;
