import React from "react";
import { Link, useLocation } from "react-router-dom";

const Card = () => {
   const location = useLocation();
   return (
      <div className="w-56 pb-2 mt-8 mx-4 bg-white rounded-md border border-gray-200 overflow-hidden shadow-lg">
         <Link
         to={{
            pathname: "/contact/andrew-garfield",
            state: { background: location }
         }}
         >
         <div className="flex flex-col items-center py-4 px-2 bg-gray-300">
            <span className="w-10 h-10 rounded-full overflow-hidden inline-block">
               <img
               src="https://uifaces.co/our-content/donated/gPZwCbdS.jpg"
               alt=""
               />
            </span>
            <h1 className="text-lg font-medium text-gray-600 mt-2">
               Andrew Garfield
            </h1>
            <p className="text-sm text-gray-600">Project Manager</p>
         </div>
         </Link>
         <div className="px-2 py-2">
         <p className="text-sm text-gray-600 mt-1 flex items-center">
            <svg
               className="w-4 h-4 mr-2"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
               fill-rule="evenodd"
               d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
               clipRule="evenodd"
               />
               <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            Voyance
         </p>
         <p className="text-sm text-gray-600 mt-1 flex items-center">
            <svg
               className="w-4 h-4 mr-2"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
               <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            andrew@hey.com
         </p>
         <p className="text-sm text-gray-600 mt-1 flex items-center">
            <svg
               className="w-4 h-4 mr-2"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
               fill-rule="evenodd"
               d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
               clipRule="evenodd"
               />
            </svg>
            +440-344-45-577
         </p>
         <p className="text-sm text-gray-600 mt-1 flex items-center">
            <svg
               className="w-4 h-4 mr-2"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
               <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
            @andrew_garfield
         </p>
         </div>
      </div>
   );
};

export default Card;
