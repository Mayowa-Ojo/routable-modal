import React from "react";
import Card from "./Card";

const Contacts = () => {
   return (
      <div className="pt-16 w-full">
         <h1 className="text-2xl font-semibold text-gray-600 text-center">
         Contacts
         </h1>
         <div className="flex justify-center flex-wrap mt-8">
         {Array(6)
               .fill()
               .map(() => (
                  <Card />
               ))}
         </div>
      </div>
   );
};

export default Contacts;
