import { FaDatabase, FaRegUser, FaUsers } from "react-icons/fa";
import { PiBagLight, PiCurrencyCircleDollar, PiUsers, PiUsersThreeFill } from "react-icons/pi";
import { useGetDashboardStatusQuery } from "../../../redux/features/dashboard/dashboardApi";
import { MdMale } from "react-icons/md";
import { GiFemale } from "react-icons/gi";
import { AiOutlineFileSearch } from "react-icons/ai";
const Status = () => {
  const { data, isLoading } = useGetDashboardStatusQuery();



  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {/* Total Job Postings */}
        <div className=" border-2 border-[#7ed957] p-6 rounded-lg space-x-4">
          <div className="text-4xl bg-[#7ed957] w-16 h-16 flex items-center justify-center mb-2 mx-auto text-white p-2 rounded-full">
            <AiOutlineFileSearch />
          </div>
          <div className='text-center'>
            <h3 className="text-3xl text-[#553283] font-semibold">120</h3>
            <p className="text-sm text-[#553283] font-semibold mt-1">Total Job Postings</p>
          </div>
        </div>

        {/* Total Job Postings */}
        <div className=" border-2 border-[#7ed957] p-6 rounded-lg space-x-4">
          <div className="text-4xl bg-[#7ed957] w-16 h-16 flex items-center justify-center mb-2 mx-auto text-white p-2 rounded-full">
            <PiBagLight />
          </div>
          <div className='text-center'>
            <h3 className="text-3xl text-[#553283] font-semibold">120</h3>
            <p className="text-sm text-[#553283] font-semibold mt-1">Total Job Postings</p>
          </div>
        </div>

        {/* Total Job Postings */}
        <div className=" border-2 border-[#7ed957] p-6 rounded-lg space-x-4">
          <div className="text-4xl bg-[#7ed957] w-16 h-16 flex items-center justify-center mb-2 mx-auto text-white p-2 rounded-full">
            <FaRegUser className="text-3xl" />
          </div>
          <div className='text-center'>
            <h3 className="text-3xl text-[#553283] font-semibold">120</h3>
            <p className="text-sm text-[#553283] font-semibold mt-1">Total Job Postings</p>
          </div>
        </div>


        {/* Total Applicants */}
        <div className=" border-2 border-[#7ed957] p-6 rounded-lg  space-x-4">
          <div className="text-4xl bg-[#7ed957] w-16 h-16 flex items-center justify-center mb-2 mx-auto text-white p-2 rounded-full">
            <FaUsers />
          </div>
          <div className='text-center'>
            <h3 className="text-3xl text-[#553283] font-semibold">120</h3>
            <p className="text-sm text-[#553283] font-semibold mt-1">Total Applicants</p>
          </div>
        </div>

        {/* Male Applicants */}
        <div className=" border-2 border-[#7ed957] p-6 rounded-lg space-x-4">
          <div className="text-4xl bg-[#7ed957] w-16 h-16 flex items-center justify-center mb-2 mx-auto text-white p-2 rounded-full">
            <MdMale />
          </div>
          <div className='text-center'>
            <h3 className="text-3xl text-[#553283] font-semibold">20</h3>
            <p className="text-sm text-[#553283] font-semibold mt-1">Male Applicants</p>
          </div>
        </div>

        {/* Female Applicants */}
        <div className=" border-2 border-[#7ed957] p-6 rounded-lg  space-x-4">
          <div className="text-4xl bg-[#7ed957] w-16 h-16 flex items-center justify-center mb-2 mx-auto text-white p-2 rounded-full">
            <GiFemale />
          </div>
          <div className='text-center'>
            <h3 className="text-3xl text-[#553283] font-semibold">25</h3>
            <p className="text-sm text-[#553283] font-semibold mt-1">Female Applicants</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Status;
