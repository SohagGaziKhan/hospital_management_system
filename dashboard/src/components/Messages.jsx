import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3030/api/v1/message/get-all-message",
          { withCredentials: true }
        );
        setMessages(data.message);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchMessages();
  }, []);

  const handleDelete = async (messageId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3030/api/v1/message/message-delete/${messageId}`,
        { withCredentials: true }
      );
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message._id !== messageId)
      );
      toast.success(data?.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="page mx-20 bg-gray-200 p-10 h-screen rounded-l-3xl">
      <h1 className="text-2xl font-bold text-center text-indigo-600 mb-8">
        MESSAGE
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">First Name</th>
              <th className="py-2 px-4">Last Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Phone</th>
              <th className="py-2 px-4">Message</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages && messages.length > 0 ? (
              messages.map((element, index) => (
                <tr key={element._id} className="hover:bg-gray-300">
                  <td className="py-2 px-4 text-center">{index + 1}</td>
                  <td className="py-2 px-4 text-center">{element.firstName}</td>
                  <td className="py-2 px-4 text-center">{element.lastName}</td>
                  <td className="py-2 px-4 text-center">{element.email}</td>
                  <td className="py-2 px-4 text-center">{element.phone}</td>
                  <td className="py-2 px-4 text-center">
                    {element.message.slice(0, 20) +
                      (element.message.length > 20 ? "..." : "")}
                  </td>
                  <td className="py-2 px-4 text-center">
                    <MdDelete
                      size={25}
                      onClick={() => handleDelete(element._id)}
                      className="cursor-pointer text-red-500 mx-auto"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-4 px-4 text-center">
                  No Messages!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Messages;
