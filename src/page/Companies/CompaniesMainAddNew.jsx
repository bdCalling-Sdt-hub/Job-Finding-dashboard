import React, { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';
import { GrUserSettings } from 'react-icons/gr';
import { PiUsersThree } from 'react-icons/pi';
import SetupTabsOne from './Setup/SetupTabsOne';
import SetupTabsTwo from './Setup/SetupTabsTwo';
import SetupTabsThree from './Setup/SetupTabsThree';


const CompaniesMainAddNew = () => {

    const [activeTab, setActiveTab] = useState('profile');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'profile':
                return <SetupTabsOne />;
            case 'team':
                return <SetupTabsTwo />;
            case 'culture':
                return <SetupTabsThree />;
            default:
                return null;
        }
    };



    return (
        <div>
            <div>
                <Link to="/companies" className="text-2xl flex items-center mt-5">
                    <FaAngleLeft /> Company Profile Setup
                </Link>
            </div>


            <div className='bg-white border-2 p-4 rounded shadow-sm border-[#553283]  my-10'>
                {/* Tabs */}
                <div className="border-b border-gray-300 mb-4 flex gap-10">
                    <button
                        onClick={() => setActiveTab('profile')}
                        className={`py-2 border-b-2 md:text-xl text-sm cursor-pointer flex items-center gap-2 ${activeTab === 'profile' ? 'border-[#7ed957] text-[#7ed957]' : 'border-transparent text-gray-500'
                            } font-medium`}
                    >
                        <CiUser className='text-xl md:block hidden' /> Profile Setup
                    </button>
                    <button
                        onClick={() => setActiveTab('team')}
                        className={`py-2 border-b-2 md:text-xl text-sm cursor-pointer flex items-center gap-2 ${activeTab === 'team' ? 'border-[#7ed957] text-[#7ed957]' : 'border-transparent text-gray-500'
                            } font-medium`}
                    >
                        <PiUsersThree className='text-xl md:block hidden' /> Team Setup
                    </button>
                    <button
                        onClick={() => setActiveTab('culture')}
                        className={`py-2 border-b-2 md:text-xl text-sm cursor-pointer flex items-center gap-2 ${activeTab === 'culture' ? 'border-[#7ed957] text-[#7ed957]' : 'border-transparent text-gray-500'
                            } font-medium`}
                    >
                        <GrUserSettings className='text-xl md:block hidden' /> Culture Setup
                    </button>
                </div>

                {/* Tab Content */}
                <div className="mt-10">
                    {renderTabContent()}
                </div>
            </div>


        </div>
    );
}

export default CompaniesMainAddNew;
