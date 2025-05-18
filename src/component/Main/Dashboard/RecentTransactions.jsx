import React from "react";

const jobs = [
  {
    id: 1,
    title: "Sr. Uix Designer",
    location: "Nicosia, Cyprus",
    type: "Full-Time",
    posted: "Posted 2 hours ago",
  },
  {
    id: 2,
    title: "Sr. Uix Designer",
    location: "Nicosia, Cyprus",
    type: "Full-Time",
    posted: "Posted 2 hours ago",
  },
  {
    id: 3,
    title: "Sr. Uix Designer",
    location: "Nicosia, Cyprus",
    type: "Full-Time",
    posted: "Posted 2 hours ago",
  },
  {
    id: 4,
    title: "Sr. Uix Designer",
    location: "Nicosia, Cyprus",
    type: "Full-Time",
    posted: "Posted 2 hours ago",
  },
];

const companies = [
  {
    id: 1,
    name: "Brac International",
    location: "Nicosia, Cyprus",
    employees: "Nicosia, Cyprus",
    created: "Created 2 days ago",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Brac International",
    location: "Nicosia, Cyprus",
    employees: "Nicosia, Cyprus",
    created: "Created 2 days ago",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Brac International",
    location: "Nicosia, Cyprus",
    employees: "Nicosia, Cyprus",
    created: "Created 2 days ago",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Brac International",
    location: "Nicosia, Cyprus",
    employees: "Nicosia, Cyprus",
    created: "Created 2 days ago",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
];

// Icons
const LogoIcon = () => (
  <svg
    className="w-6 h-6 text-pink-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M4 4h4l4 8-4 8H4z" />
  </svg>
);

const LocationIcon = () => (
  <svg
    className="w-4 h-4 mr-1 text-gray-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M12 21s-6-5.686-6-10a6 6 0 0112 0c0 4.314-6 10-6 10z" />
    <circle cx="12" cy="11" r="2" />
  </svg>
);

const PeopleIcon = () => (
  <svg
    className="w-4 h-4 mr-1 text-gray-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M17 21v-2a4 4 0 00-3-3.87M7 21v-2a4 4 0 013-3.87" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ClockIcon = () => (
  <svg
    className="w-3 h-3 text-gray-400"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const RecentTransactions = () => {
  return (
    <div className="w-full col-span-full md:col-span-6 bg-white rounded-lg my-10">
      {/* Recently Posted Jobs */}
      <h3 className="text-gray-700 font-semibold mb-4 text-xl">Recently Posted Jobs</h3>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {jobs.map(({ id, title, location, type, posted }) => (
          <div
            key={id}
            className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg w-full "
          >
            <div>
              {/* <LogoIcon /> */}
              <img className="w-20" src="/Images/Jobs/PopulerSearch/companyLogo.png" alt="" />
            </div>
            <div className="flex flex-col w-full ">
              <div className="font-semibold text-gray-800">{title}</div>
              <div className="flex items-center text-gray-600 mt-0.5">
                <LocationIcon />
                <span>{location}</span>
              </div>
            </div>
            <div className="w-2/3">
              <div className="text-sm font-semibold text-gray-700">{type}</div>
              <div className="text-sm text-gray-400">{posted}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recently Created Companies */}
      <h3 className="text-gray-700 font-semibold mb-4 text-xl">Recently Created Companies</h3>
      <div className="grid grid-cols-4 gap-4">
        {companies.map(({ id, name, location, employees, created, image }) => (
          <div
            key={id}
            className="flex flex-col rounded-lg border border-gray-300 overflow-hidden w-full"
          >
            <img src={image} alt={name} className="h-16 w-full object-cover" />
            <div className="p-3  text-gray-700 flex flex-col gap-2">
              <div className="font-semibold">{name}</div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="flex items-center">
                  <LocationIcon />
                  <span>{location}</span>
                </div>
                <div className="flex items-center border-l border-gray-300 pl-3">
                  <PeopleIcon />
                  <span>{employees}</span>
                </div>
              </div>
              <div className="text-gray-400 text-[13px] flex items-center justify-end">{created}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
