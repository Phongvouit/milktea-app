"use client"
const ChatPage = () => {
  return (
    // <LayoutUser>
    //   <div className="flex h-screen w-full">
    //     <div className="w-1/4">
    //       <UserAdmin admin={admin!} />
    //     </div>
    //     <div className="flex-1">
    //       <div className="bg-white shadow-md rounded-lg w-full">
    //         <div className="p-4 border-b bg-green-800 text-white rounded-t-lg flex justify-between items-center">
    //           <p className="text-lg font-semibold">Admin Bot</p>
    //           <button
    //             id="close-chat"
    //             className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="w-6 h-6"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M6 18L18 6M6 6l12 12"
    //               ></path>
    //             </svg>
    //           </button>
    //         </div>
    //         <div id="chatbox" className="p-4 h-80 overflow-y-auto">
    //           {/* <!-- Chat messages will be displayed here --> */}
    //           <div className="mb-2 text-right">
    //             <p className="bg-green-800 text-white rounded-lg py-2 px-4 inline-block">
    //               hello
    //             </p>
    //           </div>
    //           <div className="mb-2">
    //             <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
    //               This is a response from the chatbot.
    //             </p>
    //           </div>
    //           <div className="mb-2 text-right">
    //             <p className="bg-green-800 text-white rounded-lg py-2 px-4 inline-block">
    //               this example of chat
    //             </p>
    //           </div>
    //           <div className="mb-2">
    //             <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
    //               This is a response from the chatbot.
    //             </p>
    //           </div>
    //           <div className="mb-2 text-right">
    //             <p className="bg-green-800 text-white rounded-lg py-2 px-4 inline-block">
    //               design with tailwind
    //             </p>
    //           </div>
    //           <div className="mb-2">
    //             <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
    //               This is a response from the chatbot.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="p-4 border-t flex">
    //           <input
    //             id="user-input"
    //             type="text"
    //             placeholder="Type a message"
    //             className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
    //           />
    //           <button
    //             id="send-button"
    //             className="bg-green-800 text-white px-4 py-2 rounded-r-md hover:bg-green-900 transition duration-300"
    //           >
    //             Send
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </LayoutUser>
    <div className="bg-white shadow-md rounded-lg w-full">
      <div className="p-4 border-b bg-green-800 text-white rounded-t-lg flex justify-between items-center">
        <p className="text-lg font-semibold">Admin Bot</p>
        <button
          id="close-chat"
          className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div id="chatbox" className="p-4 h-80 overflow-y-auto">
        {/* <!-- Chat messages will be displayed here --> */}
        <div className="mb-2 text-right">
          <p className="bg-green-800 text-white rounded-lg py-2 px-4 inline-block">
            hello
          </p>
        </div>
        <div className="mb-2">
          <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
            This is a response from the chatbot.
          </p>
        </div>
        <div className="mb-2 text-right">
          <p className="bg-green-800 text-white rounded-lg py-2 px-4 inline-block">
            this example of chat
          </p>
        </div>
        <div className="mb-2">
          <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
            This is a response from the chatbot.
          </p>
        </div>
        <div className="mb-2 text-right">
          <p className="bg-green-800 text-white rounded-lg py-2 px-4 inline-block">
            design with tailwind
          </p>
        </div>
        <div className="mb-2">
          <p className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">
            This is a response from the chatbot.
          </p>
        </div>
      </div>
      <div className="p-4 border-t flex">
        <input
          id="user-input"
          type="text"
          placeholder="Type a message"
          className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          id="send-button"
          className="bg-green-800 text-white px-4 py-2 rounded-r-md hover:bg-green-900 transition duration-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
