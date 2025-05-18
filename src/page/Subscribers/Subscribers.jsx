import React, { useState } from 'react';
import { DatePicker, Modal } from 'antd';
import { FiEye } from 'react-icons/fi';
import { LuPlus } from 'react-icons/lu';

const Subscribers = () => {
    const [search, setSearch] = useState('');
    const [date, setDate] = useState(null);
    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [selectedSubscriber, setSelectedSubscriber] = useState(null);

    const subscribers = [
        {
            id: 1,
            name: 'Bashar Islam',
            email: 'info@gmail.com',
            package: 'Launch',
            timeDate: '11 Oct 24, 11:10PM',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            details: 'Subscribed on launch plan, premium user, active.',
        },
        {
            id: 2,
            name: 'Bashar Islam',
            email: 'info@gmail.com',
            package: 'Launch',
            timeDate: '11 Oct 24, 11:10PM',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            details: 'Subscribed on launch plan, premium user, active.',
        },
        {
            id: 3,
            name: 'Bashar Islam',
            email: 'info@gmail.com',
            package: 'Launch',
            timeDate: '11 Oct 24, 11:10PM',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            details: 'Subscribed on launch plan, premium user, active.',
        },
    ];

    const filteredSubscribers = subscribers.filter((sub) =>
        sub.name.toLowerCase().includes(search.toLowerCase())
    );

    const openModal = (subscriber) => {
        setSelectedSubscriber(subscriber);
        setViewModalOpen(true);
    };

    const closeModal = () => {
        setViewModalOpen(false);
        setSelectedSubscriber(null);
    };

    return (
        <div className="p-6 relative pb-28">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">All Subscribers</h2>
                <div className="flex gap-4">
                    <DatePicker
                        onChange={(date) => setDate(date)}
                        placeholder="Date"
                        className="border border-gray-300 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="User Name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-1"
                    />
                </div>
            </div>

            <table className="w-full border-collapse table-auto text-left">
                <thead>
                    <tr className="bg-purple-100 text-purple-800 font-semibold text-sm">
                        <th className="px-4 py-3">#SL</th>
                        <th className="px-4 py-3">Customer Name</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3">Package</th>
                        <th className="px-4 py-3">Time & Date</th>
                        <th className="px-4 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSubscribers.map((sub, i) => (
                        <tr
                            key={sub.id}
                            className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                        >
                            <td className="px-4 py-3">{i + 1 < 10 ? '0' + (i + 1) : i + 1}</td>
                            <td className="px-4 py-3 flex items-center gap-3">
                                <img
                                    src={sub.avatar}
                                    alt={sub.name}
                                    className="w-8 h-8 rounded-full object-cover"
                                />
                                {sub.name}
                            </td>
                            <td className="px-4 py-3">{sub.email}</td>
                            <td className="px-4 py-3">{sub.package}</td>
                            <td className="px-4 py-3">{sub.timeDate}</td>
                            <td className="px-4 py-3">
                                <button
                                    onClick={() => openModal(sub)}
                                    className="text-gray-600 hover:text-gray-900"
                                    title="View"
                                >
                                    <FiEye size={20} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal
                title="Transaction Details"
                visible={viewModalOpen}
                onCancel={closeModal}
                footer={null}
                centered
                width={600}
            >
                {selectedSubscriber && (
                    <div className="border border-purple-700 rounded-lg p-6 space-y-6 font-sans text-gray-900">
                        <div className="grid grid-cols-3 gap-6">
                            <div>
                                <div className="font-semibold text-sm">#{selectedSubscriber.id || '121321435'}</div>
                                <div className="text-xs text-gray-500 mt-1">Transaction ID</div>
                            </div>
                            <div>
                                <div className="font-semibold text-sm">{selectedSubscriber.price || '120$'}</div>
                                <div className="text-xs text-gray-500 mt-1">Amount</div>
                            </div>
                            <div>
                                <div className="font-semibold text-sm">{selectedSubscriber.timeDate || '1 February, 2025'}</div>
                                <div className="text-xs text-gray-500 mt-1">Payment Date</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div>
                                <div className="font-semibold text-sm">{selectedSubscriber.name}</div>
                                <div className="text-xs text-gray-500 mt-1">User Name</div>
                            </div>
                            <div>
                                <div className="font-semibold text-sm">{selectedSubscriber.package}</div>
                                <div className="text-xs text-gray-500 mt-1">Subscription Type</div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>


        </div>
    );
};

export default Subscribers;
