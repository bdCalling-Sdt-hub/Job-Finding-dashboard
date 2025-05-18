import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { IoEyeOutline } from 'react-icons/io5';
import { Modal, Button } from 'antd';
import { MdOutlineFileDownload } from 'react-icons/md';

const TabsTwo = () => {
    // State to manage modal visibility and selected applicant data
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedApplicant, setSelectedApplicant] = useState(null);

    // Handle view applicant details
    const showModal = (applicant) => {
        setSelectedApplicant(applicant);
        setIsModalVisible(true);
    };

    // Handle modal cancel (close)
    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedApplicant(null);
    };

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5'>
                {
                    [...Array(8)].map((_, index) => (
                        <div key={index} className='p-4 border border-[#553283] bg-white shadow rounded-lg'>
                            <div className='flex items-center justify-between mb-4'>
                                <img className='w-14 rounded-full' src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" alt="" />
                                <div>
                                    <p className='font-semibold'>Anika Alam</p>
                                    <p>Software Developer</p>
                                </div>
                                <IoEyeOutline
                                    className='text-xl cursor-pointer'
                                    onClick={() => showModal({
                                        name: 'Anika Alam',
                                        jobTitle: 'Software Developer',
                                        applicationDate: '2 February, 2025',
                                        cvLink: '/path-to-cv/anika-alam-cv.pdf',
                                    })}
                                />
                            </div>
                            <hr className='my-2' />
                            <span>Applied: 2 February, 2025</span>
                            <button className='flex items-center gap-2 mt-4 w-full text-[#553283] font-medium border border-[#553283] py-2 px-4 rounded-lg justify-center cursor-pointer'>
                                <FiDownload /> Download CV
                            </button>
                        </div>
                    ))
                }
            </div>

            {/* Modal for viewing applicant details */}
            {selectedApplicant && (
                <Modal
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    width={1200}

                    footer={null}
                >
                    <div className='p-3 border border-[#553283] rounded-lg'>
                        <div className="flex flex-col lg:flex-row gap-10  w-full mx-auto">
                            {/* Left side: Profile Image */}
                            <div className="flex justify-center lg:w-1/3">
                                <img
                                    src="/UserProfile/user.png"
                                    alt="Profile"
                                    className="w-full object-cover"
                                />
                            </div>

                            {/* Right side: Personal Information */}
                            <div className="lg:w-2/3">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-1">Personal Information</h2>
                                    <hr className="border-gray-300 mb-4" />
                                </div>

                                {/* Personal Information Columns */}
                                <div className="flex flex-col lg:flex-row lg:gap-10 mt-10">
                                    {/* Left Column */}
                                    <div className="space-y-5 lg:w-1/2">
                                        <div className="flex flex-col">
                                            <span className="font-medium text-gray-600">Full Name</span>
                                            <p className="text-lg font-semibold">Jeremy Rodriguez</p>
                                        </div>

                                        <div className="flex flex-col">
                                            <span className="font-medium text-gray-600">Date of Birth</span>
                                            <p className="text-lg font-semibold">1 January, 2000</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-medium text-gray-600">Gender</span>
                                            <p className="text-lg font-semibold">Male</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-medium text-gray-600">Nationality</span>
                                            <p className="text-lg font-semibold">Bangladeshi</p>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="border-l-2 border-gray-300 h-auto lg:h-52 my-4 lg:mx-4"></div>

                                    {/* Right Column */}
                                    <div className="space-y-5 lg:w-1/2">
                                        <div className="flex flex-col">
                                            <span className="font-medium text-gray-600">Phone Number</span>
                                            <p className="text-lg font-semibold">+880-122332454</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-medium text-gray-600">Email</span>
                                            <p className="text-lg font-semibold">abc@gmail.com</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-medium text-gray-600">Address</span>
                                            <p className="text-lg font-semibold">Nicosia, Cyprus</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 my-10 w-full mx-auto">
                            {/* Left side: Profile Image */}
                            <div className="space-y-5">
                                <div>
                                    <h2 className='text-xl font-semibold mb-3 pb-2 text-[#553283]'>MY CV</h2>
                                </div>
                                <div className='flex items-center justify-between p-5 rounded-lg bg-[#f4edff] border-dashed border-2 border-[#553283]'>
                                    <img className='w-12' src="/Images/upload.png" alt="" />
                                    <div>
                                        <h2>UiX Designer.png</h2>
                                        <p>1.2 MB</p>
                                    </div>
                                    <MdOutlineFileDownload className='text-[#553283] text-4xl cursor-pointer' />
                                </div>
                                <div className='flex items-center justify-between p-5 rounded-lg bg-[#f4edff] border-dashed border-2 border-[#553283]'>
                                    <img className='w-12' src="/Images/upload.png" alt="" />
                                    <div>
                                        <h2>UiX Designer.png</h2>
                                        <p>1.2 MB</p>
                                    </div>
                                    <MdOutlineFileDownload className='text-[#553283] text-4xl cursor-pointer' />
                                </div>
                                <div>
                                    <h2 className='text-xl font-semibold mb-3 pb-2 text-[#553283]'>My Portfolio</h2>
                                </div>
                                <div className='flex items-center justify-between p-5 rounded-lg bg-[#f4edff] border-dashed border-2 border-[#553283]'>
                                    <img className='w-12' src="/Images/upload.png" alt="" />
                                    <div>
                                        <h2>UiX Designer.png</h2>
                                        <p>1.2 MB</p>
                                    </div>
                                    <MdOutlineFileDownload className='text-[#553283] text-4xl cursor-pointer' />
                                </div>

                                <div className='md:flex space-y-2 items-center gap-2'>
                                    <button className='w-full cursor-pointer border-[#7ed957] text-[#7ed957] border-2 py-2 px-4 rounded-lg'>Go to Portfolio 1</button>
                                    <button className='w-full cursor-pointer border-[#7ed957] text-[#7ed957] border-2 py-2 px-4 rounded-lg'>Go to Portfolio 2</button>
                                </div>

                            </div>
                            <div className="space-y-5 ">
                                <div>
                                    <h2 className='text-2xl font-semibold mb-3 pb-2 border-b-2 border-gray-800'>Education</h2>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-medium text-gray-600">University Name</span>
                                    <p className="text-lg font-semibold">East West University</p>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-medium text-gray-600">Passing Year</span>
                                    <p className="text-lg font-semibold">January, 2024</p>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-medium text-gray-600">Grade</span>
                                    <p className="text-lg font-semibold">3.67</p>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-medium text-gray-600">Department</span>
                                    <p className="text-lg font-semibold">Computer Science & Engineering</p>
                                </div>
                            </div>
                            <div className="space-y-5 ">
                                <div>
                                    <h2 className='text-2xl font-semibold mb-3 pb-2 '>Skills & Expertise</h2>
                                </div>
                                <div className='flex items-center gap-3 flex-wrap'>
                                    <span className='p-2 block text-left min-w-[150px] rounded-lg bg-[#f4edff] text-[#553283] font-semibold'>UI/UX Designer</span>
                                    <span className='p-2 block text-left min-w-[150px] rounded-lg bg-[#f4edff] text-[#553283] font-semibold'>Web Designer</span>
                                    <span className='p-2 block text-left min-w-[150px] rounded-lg bg-[#f4edff] text-[#553283] font-semibold'>AWS</span>
                                    <span className='p-2 block text-left min-w-[150px] rounded-lg bg-[#f4edff] text-[#553283] font-semibold'>UI/UX Designer</span>
                                    <span className='p-2 block text-left min-w-[150px] rounded-lg bg-[#f4edff] text-[#553283] font-semibold'>Web Designer</span>
                                    <span className='p-2 block text-left min-w-[150px] rounded-lg bg-[#f4edff] text-[#553283] font-semibold'>AWS</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-whitemx-auto">
                            {/* Title Section */}
                            <div className="text-3xl font-semibold mb-6 text-gray-800">
                                Discover Me
                            </div>

                            {/* Grid Layout Section */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Left Column */}
                                <div className=" space-y-8 md:border-r-2 border-gray-200">

                                    <div>
                                        <h2>What are the three most important factors you look for in a new job?</h2>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                Advanced tech
                                            </div>
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                Flexibility & wellbeing
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h2>Company Size Preference:</h2>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                21-100 employees
                                            </div>
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                101-200 employees
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h2>Languages for Work (Excluding English):</h2>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                Limassol
                                            </div>
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                Paphos
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <h2>Preferred Job Roles:</h2>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                Software Engineering
                                            </div>
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                Product
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <h2>Industry Interests:</h2>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                B2C
                                            </div>
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                B2B
                                            </div>
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                Marketplace
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h2>Pronouns:</h2>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                She/Her
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Middle Column */}
                                <div className="space-y-8 md:border-r-2 border-gray-200">
                                    <div>
                                        <h2>Preferred Work Location:</h2>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                Limassol
                                            </div>
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                Paphos
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h2>Remote Work Location:</h2>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-3" >
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                Other EMEA location
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <h2>Job Start Timeframe:
                                            </h2>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                ASAP
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <h2>Desired Role Level (select up to 2):</h2>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                Junior (1-2 years)
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <h2>Preferred Technologies:
                                            </h2>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                Notion
                                            </div>
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                Design
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Right Column */}
                                <div className="space-y-8 ">
                                    <div>

                                        <div>
                                            <h2>Visa Requirement for Current Location:</h2>
                                        </div>
                                        <div className="flex flex-wrap space-y-3 gap-2 mt-3">
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                No
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <div>
                                                <h2>Minimum Expected Yearly Salary (€):</h2>
                                            </div>

                                            <div className="flex flex-wrap gap-2 mt-3">
                                                <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                    24k
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h2>Gender:</h2>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            <div className="bg-[#dcf8d2] text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                                Female
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h2>Ethnicity:</h2>
                                        </div>
                                        <div className="bg-[#dcf8d2] mt-3 w-auto inline-block text-[#7ed957] border-2 border-[#7ed957] py-4 px-6 rounded-full text-sm font-semibold">
                                            Asian
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='py-5'>
                            <h3 className='text-2xl font-semibold mb-3'>About Me </h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus harum quia repudiandae doloremque, libero doloribus eos sapiente enim ipsa molestiae! lroem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus harum quia repudiandae doloremque, libero doloribus eos sapiente enim ipsa molestiae!</p>
                        </div>
                        <div className='flex items-center justify-center mt-3'>
                            <button className=' border-[#553283] text-base font-medium border text-[#553283] py-3 px-20 rounded-lg justify-center cursor-pointer'>Email Candidate</button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default TabsTwo;
