import React from "react";


export const metadata = {
  title: "Submitted Details",
  description: "View the list of submitted contact form details.",
};

async function fetchMessages() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/contact`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch messages");
  }

  return res.json();
}

export default async function DetailsPage() {
  let messages = [];

  try {
    messages = await fetchMessages();
  } catch (error) {
    console.error(error);
  }

  return (
   <section className="py-8 px-4 sm:px-8 lg:px-16 bg-gray-50">
     <div className="max-w-7xl mx-auto">
       <header className="text-center mb-8">
         <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
           Submitted Details
         </h1>
         <p className="text-lg text-gray-600">
           View the list of submitted contact form details.
         </p>
       </header>

       <div className="overflow-x-auto">
         {messages.length > 0 ? (
           <table className="min-w-full table-auto bg-white shadow-lg rounded-lg border border-gray-200">
             <thead className="bg-green-500 text-white">
               <tr>
                 <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
                 <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
                 <th className="px-6 py-3 text-left text-sm font-medium">Message</th>
                 <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
               </tr>
             </thead>
             <tbody>
               {messages.map((message) => (
                 <tr key={message._id} className="hover:bg-gray-100">
                   <td className="px-6 py-4 text-sm text-gray-800">{message.name}</td>
                   <td className="px-6 py-4 text-sm text-gray-800">{message.email}</td>
                   <td className="px-6 py-4 text-sm text-gray-800">{message.message}</td>
                   <td className="px-6 py-4 text-sm text-gray-600">
                     {new Date(message.createdAt).toLocaleString()}
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         ) : (
           <p className="text-center text-lg text-gray-600 mt-8">
             No submissions found.
           </p>
         )}
       </div>
     </div>
   </section>
 );
}