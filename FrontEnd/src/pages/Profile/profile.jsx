import React from 'react';
//import ProfileImg from '../assets/img/team-1.jpg'; // Make sure this path is correct

const ProfileSection = () => {
  return (
    <>
      {/* Profile Header */}
      <div className="w-full mx-auto mt-24 px-4 sm:px-6 lg:px-8" style={{ position: 'relative', top: '-55px' }}
      >
        <div className="relative flex flex-col bg-white dark:bg-slate-850 shadow-3xl dark:shadow-dark-xl rounded-2xl p-6">
          <div className="flex flex-wrap items-center">
            {/* Profile Image */}
            <div className="w-auto px-3">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-xl overflow-hidden shadow-2xl">
                {/* <img src={ProfileImg} alt="profile_image" className="w-full h-full object-cover" /> */}
              </div>
            </div>

            {/* Name and Title */}
            <div className="px-3 my-auto">
              <h5 className="text-lg font-semibold dark:text-white">Sayo Kravits</h5>
              <p className="text-sm font-medium text-gray-600 dark:text-white/60">Public Relations</p>
            </div>

            {/* Tabs (Right aligned on md+) */}
            <div className="w-full md:w-auto md:ml-auto mt-4 md:mt-0 px-3">
              <ul className="flex flex-wrap bg-gray-100 dark:bg-slate-700 p-1 rounded-xl gap-2">
                {['App', 'Messages', 'Settings'].map((tab, index) => (
                  <li key={tab}>
                    <a
                      href="#"
                      className="flex items-center px-3 py-1 text-sm font-medium text-slate-700 dark:text-white hover:bg-blue-500 hover:text-white transition rounded-lg"
                    >
                      <i className={`ni ni-${['app', 'email-83', 'settings-gear-65'][index]}`}></i>
                      <span className="ml-2">{tab}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-screen-xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 w-full"  style={{ position: 'relative', top: '-65px' }}>
        <div className="bg-white dark:bg-slate-850 shadow-xl dark:shadow-dark-xl rounded-2xl p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-lg font-semibold dark:text-white/80">Edit Profile</p>
            <button className="px-6 py-2 bg-blue-500 text-white text-xs font-bold rounded-lg hover:shadow-md transition">
              Save
            </button>
          </div>

          {/* User Info */}
          <section>
            <h6 className="uppercase text-sm text-gray-500 dark:text-white/60 mb-4">User Information</h6>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Username" defaultValue="lucky.jesse" />
              <Input label="Email address" type="email" defaultValue="jesse@example.com" />
              <Input label="First name" defaultValue="Jesse" />
              <Input label="Last name" defaultValue="Lucky" />
            </div>
          </section>

          <hr className="my-6 border-gray-300 dark:border-white/30" />

          {/* Contact Info */}
          <section>
            <h6 className="uppercase text-sm text-gray-500 dark:text-white/60 mb-4">Contact Information</h6>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Input label="Address" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
              <Input label="City" defaultValue="New York" />
              <Input label="Country" defaultValue="United States" />
              <Input label="Postal code" defaultValue="437300" />
            </div>
          </section>

          <hr className="my-6 border-gray-300 dark:border-white/30" />

          {/* About */}
          <section>
            <h6 className="uppercase text-sm text-gray-500 dark:text-white/60 mb-4">About me</h6>
            <Input label="About me" defaultValue="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source." />
          </section>
        </div>
      </div>
    </>
  );
};

// Reusable input component
const Input = ({ label, type = "text", defaultValue }) => (
  <div>
    <label className="block mb-1 text-xs font-bold text-slate-700 dark:text-white/80">{label}</label>
    <input
      type={type}
      defaultValue={defaultValue}
      className="w-full px-3 py-2 text-sm text-gray-700 dark:text-white bg-white dark:bg-slate-850 border border-gray-300 dark:border-white/20 rounded-lg outline-none focus:border-blue-500 transition"
    />
  </div>
);

export default ProfileSection;
