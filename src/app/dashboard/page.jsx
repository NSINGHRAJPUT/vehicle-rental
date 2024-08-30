"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "universal-cookie";

const projects = [
  {
    id: 1,
    title: "Owner Name",
    location: "Brampton",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Owner Name2",
    location: "Brampton",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Owner Name3",
    location: "Brampton",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  ut labore et dolore magna aliqua.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Owner Name4",
    location: "Brampton",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  ut labore et dolore magna aliqua.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Owner Name5",
    location: "Brampton",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const Dashboard = () => {
  const router = useRouter();
  const cookies = new Cookies();
  const [showProjectsSublist, setShowProjectsSublist] = useState(false);
  const [showResidentsSublist, setShowResidentsSublist] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [isOwner, setIsOwner] = useState(true);

  const logoutHandler = () => {
    cookies.remove("token");
    router.push("/");
  };

  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="lg:w-64 m-4 bg-blue-50 h-[93%] shadow-md">
        <div className="text-center mb-8">
          <Link href="/">
            <img
              src="/path-to-your-logo.png" // Replace with your logo
              alt="Condominium Portal"
              className="h-16 mx-auto"
            />
          </Link>
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/corporations/dashboard">
                <div className="flex items-center p-2 text-blue-800 hover:bg-blue-100 rounded-md cursor-pointer">
                  🏠
                  <span className="ml-2 hidden lg:inline-block">Dashboard</span>
                </div>
              </Link>
            </li>
            <li onClick={() => setShowProjectsSublist(!showProjectsSublist)}>
              <div className="flex items-center p-2 text-blue-800 hover:bg-blue-100 rounded-md cursor-pointer">
                📋
                <span className="ml-2 hidden lg:inline-block">
                  Project Listing
                </span>
              </div>
              {showProjectsSublist && (
                <ul className="ml-6 space-y-2">
                  <li className="hover:bg-blue-100">
                    <Link href="/corporations/contract">
                      <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                        Create Listing
                      </span>
                    </Link>
                  </li>
                  <li className="hover:bg-blue-100">
                    <Link href="/corporations/managecontracts">
                      <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                        Archived Project
                      </span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li onClick={() => setShowResidentsSublist(!showResidentsSublist)}>
              <div className="flex items-center p-2 text-blue-800 hover:bg-blue-100 rounded-md cursor-pointer">
                📋
                <span className="ml-2 hidden lg:inline-block">
                  Residents Request
                </span>
              </div>
              {showResidentsSublist && (
                <ul className="ml-6 space-y-2">
                  <li className="hover:bg-blue-100 rounded-md">
                    <div
                      onClick={() => fetchOwnersRequests()}
                      className="text-blue-600 cursor-pointer p-2 hover:text-blue-800 "
                    >
                      Owners
                    </div>
                  </li>
                  <li className="hover:bg-blue-100 rounded-md">
                    <div
                      onClick={() => fetchTanentsRequests()}
                      className="text-blue-600 cursor-pointer p-2 hover:text-blue-800"
                    >
                      Tenants
                    </div>
                  </li>
                </ul>
              )}
            </li>
            <li className="ml-2">
              <Link href="/about">
                <div className="flex items-center p-2 text-blue-800 hover:bg-blue-100 rounded-md cursor-pointer">
                  ℹ️
                  <span className="ml-3 hidden lg:inline-block">About Us</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className="flex items-center p-2 text-blue-800 hover:bg-blue-100 rounded-md cursor-pointer">
                  📞
                  <span className="ml-2 hidden lg:inline-block">
                    Contact Us
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/corporations/messages">
                <div className="flex items-center p-2 text-blue-800 hover:bg-blue-100 rounded-md cursor-pointer">
                  💬
                  <span className="ml-2 hidden lg:inline-block">Message</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pl-0 p-6">
        {/* Header */}
        <header className="bg-blue-50 p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-semibold mb-4 md:mb-0">
            {isOwner ? "Owners" : "Tenants"} Requests
          </h1>
          <div className="flex items-center space-x-4">
            <div className="text-gray-700">🔔</div>
            <div
              onClick={() => setShowProfile(!showProfile)}
              className="w-10 h-10 rounded-full overflow-hidden cursor-pointer"
            >
              <img
                src="/path-to-profile-image.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {showProfile && (
                <ul
                  onClick={() => setShowProfile(!showProfile)}
                  className="absolute bg-white flex-col right-[1%] bg-opacity-50 flex items-center justify-center"
                >
                  <li className="p-4 rounded-lg">
                    <Link href="/corporations/profile">
                      <span className="text-gray-800 cursor-pointer">
                        Profile
                      </span>
                    </Link>
                  </li>
                  <li className="p-4 rounded-lg">
                    <button onClick={logoutHandler} className="">
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </header>

        {/* Project List */}
        <section className="bg-blue-50 p-6 rounded-lg shadow-md overflow-auto max-h-[calc(105vh-280px)] scrollbar-custom">
          {projects.map((user) => (
            <div
              key={user.id}
              className="flex shadow-lg flex-col lg:flex-row bg-gray-50 p-4 rounded-lg mb-4"
            >
              <img
                src={user.imageUrl}
                alt="Project"
                className="w-full lg:w-24 h-24 object-cover rounded-lg mr-4 mb-4 lg:mb-0"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{user.title}</h3>
                <p className="text-gray-500">{user.location}</p>
                <p className="text-gray-700 mt-2">{user.description}</p>
              </div>
              <div className="flex gap-4 items-center flex-col mt-4 lg:mt-0">
                <button
                  onClick={() => console.log("approve")}
                  className="bg-primaryl w-32 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Approve
                </button>
                <button
                  onClick={() => console.log("reject")}
                  className="bg-orange-500 w-32 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Reject
                </button>
                <button
                  className="bg-gray-500 w-32 text-white px-4 py-2 rounded hover:bg-gray-400"
                  onClick={() => console.log("view")}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Modal for Viewing User Details */}
        {/* {showUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">User Details</h2>
                <button
                  onClick={() => setShowUser(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✖
                </button>
              </div>
              <div className="mb-4">
                <img
                  src={user.Id_Proof_Document}
                  alt={"Id_Proof_Document"}
                  className="w-full h-64 object-contain rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">
                  Name : {user.First_Name} {user.Last_Name}
                </h3>
                <p className="text-gray-500">Phone : {user.Phone_No}</p>
                <p className="text-gray-500">Email : {user.Email}</p>
                <p className="text-gray-500">
                  Property Type : {user.Property_Type}
                </p>

                <p className="text-gray-500">
                  Address : {user.Residential_Address}
                </p>
                <div className="flex gap-4">
                  <NavLink
                    to={user.Id_Proof_Document}
                    target="_blank"
                    className="text-gray-700 hover:text-gray-300"
                  >
                    View Id Proof
                  </NavLink>
                  <NavLink
                    to={user.Proof_Of_Ownership}
                    target="_blank"
                    className="text-gray-700 hover:text-gray-300"
                  >
                    View Proof Of Ownership
                  </NavLink>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowUser(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )} */}

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          <button className="px-4 py-2 bg-primaryl text-white rounded hover:bg-blue-700">
            1
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
            2
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
            3
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
            ...
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
            10
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
