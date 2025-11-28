
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// SVG Close Icon
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="white"
    className="w-7 h-7"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// SVG Chat Icon
const ChatIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="4 4 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 9.78374C4 5.84433 4.81543 5 8.62 5H11.38C15.1846 5 16 5.84433 16 9.78374C16 13.7232 15.1846 14.9008 11.38 14.9008H10.8303C10.8025 14.9346 10.7703 14.9666 10.7336 14.9962L8.54286 16.86C8.12929 17.1935 7.5137 16.898 7.5137 16.3667V14.87C4.65254 14.6884 4 13.3078 4 9.78374ZM10 10.6667C10.3682 10.6667 10.6667 10.3682 10.6667 10C10.6667 9.63181 10.3682 9.33333 10 9.33333C9.63181 9.33333 9.33333 9.63181 9.33333 10C9.33333 10.3682 9.63181 10.6667 10 10.6667ZM13.3333 10C13.3333 10.3682 13.0349 10.6667 12.6667 10.6667C12.2985 10.6667 12 10.3682 12 10C12 9.63181 12.2985 9.33333 12.6667 9.33333C13.0349 9.33333 13.3333 9.63181 13.3333 10ZM7.33333 10.6667C7.70152 10.6667 8 10.3682 8 10C8 9.63181 7.70152 9.33333 7.33333 9.33333C6.96514 9.33333 6.66667 9.63181 6.66667 10C6.66667 10.3682 6.96514 10.6667 7.33333 10.6667Z"
      fill="white"
    />
  </svg>
);

// SVG Bot Icon with orange background
const BotIcon = () => (
  <div className="rounded-full bg-orange-500 flex items-center justify-center p-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#e8eaed"
    >
      <path d="M160-120v-200q0-33 23.5-56.5T240-400h480q33 0 56.5 23.5T800-320v200H160Zm200-320q-83 0-141.5-58.5T160-640q0-83 58.5-141.5T360-840h240q83 0 141.5 58.5T800-640q0 83-58.5 141.5T600-440H360ZM240-200h480v-120H240v120Zm120-320h240q50 0 85-35t35-85q0-50-35-85t-85-35H360q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-80q17 0 28.5-11.5T400-640q0-17-11.5-28.5T360-680q-17 0-28.5 11.5T320-640q0 17 11.5 28.5T360-600Zm240 0q17 0 28.5-11.5T640-640q0-17-11.5-28.5T600-680q-17 0-28.5 11.5T560-640q0 17 11.5 28.5T600-600ZM480-200Zm0-440Z" />
    </svg>
  </div>
);

const TypingIndicator = () => (
  <div className="flex items-center">
    <motion.span
      className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 mr-1"
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{ duration: 0.8, repeat: Infinity }}
    />
    <motion.span
      className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 mr-1"
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
    />
    <motion.span
      className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
    />
  </div>
);

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const chatContainerRef = useRef(null);
  const inputFormRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputHeight, setInputHeight] = useState(0);
  const welcomeSuggestions = [
 "Can I see my reservation details?",
"Can I request an early check-in?",
"Which destinations do you cover?",
"Is my booking non-refundable?",
"Is there Wi-Fi available?"
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (inputFormRef.current) {
      setInputHeight(inputFormRef.current.offsetHeight);
    }
  }, [isOpen, isMobile]);

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  const sendMessageToGemini = async (messages) => {
    setIsTyping(true);
    try {
      // Get only the last 5 messages
      const lastFiveMessages = messages.slice(-5);

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: lastFiveMessages }), // Send last 5 messages
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Failed to send message: ${response.status} - ${
            errorData.message || response.statusText
          }`
        );
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      throw error;
    } finally {
      setIsTyping(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newUserMessage = { message: newMessage, role: "user" };
    setChatHistory((prevHistory) => [...prevHistory, newUserMessage]);
    setNewMessage("");

    try {
      const response = await sendMessageToGemini([
        ...chatHistory,
        newUserMessage,
      ]);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { message: response, role: "model" },
      ]);
    } catch (error) {
      console.log("error while sending the message to gemini", error);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        {
          message:
            "Sorry, can you please send that again, and make sure you're online",
          role: "model",
        },
      ]);
    }
  };

  const handleSuggestionClick = async (suggestion) => {
    // Only set the chat history and send message. Do not set newMessage
    const newUserMessage = { message: suggestion, role: "user" };
    setChatHistory((prevHistory) => [...prevHistory, newUserMessage]);

    try {
      const response = await sendMessageToGemini([
        ...chatHistory,
        newUserMessage,
      ]);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { message: response, role: "model" },
      ]);
    } catch (error) {
      console.log("error while sending the message to gemini", error);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        {
          message:
            "Sorry, can you please send that again, and make sure you're online",
          role: "model",
        },
      ]);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleChatClose = () => {
    setIsOpen(false);
  };

  const freshChatView = () => (
    <div className="flex flex-col items-center justify-center h-full text-gray-600 dark:text-gray-300 px-4">
      <h2 className="text-2xl font-semibold mb-4">Chat with us</h2>
      <p className="text-center mb-6 text-gray-500 dark:text-gray-400">
        👋 Hi, message us with any questions. We're happy to help!
      </p>
      <p className="text-gray-500 dark:text-gray-400 mb-4">You can ask eg.</p>
      <ul className="list-none pl-0 space-y-2  text-gray-500 dark:text-gray-400 ">
        {welcomeSuggestions.map((suggestion, index) => (
          <li
            key={index}
            className="hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer"
            onClick={() => handleSuggestionClick(suggestion)}
          >
            - {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
  const renderMessage = (msg, index) => {
    if (msg.role === "model") {
      return (
        <div key={index} className={`flex w-full items-start justify-start`}>
          <div className="flex items-start gap-2">
            <BotIcon />
            <div className={`rounded-md p-2 bg-gray-100 dark:bg-gray-700`}>
              <motion.p className="text-lg dark:text-neutral-300">
                {msg.message.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * i,
                    }}
                    className="inline-block"
                  >
                    {word} 
                  </motion.span>
                ))}
              </motion.p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div key={index} className={`flex w-full items-start justify-end`}>
          <div className={`rounded-md p-2 bg-blue-200 dark:bg-blue-800`}>
            {msg.message}
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 ${
        isMobile && isOpen ? "w-full h-full top-0 left-0" : ""
      }`}
    >
      {/* Toggle Button (always visible, except when chat is full screen on mobile) */}
      {!(isMobile && isOpen) && (
        <motion.button
          type="button"
          data-spec="toggle-button"
          aria-label="Chat window"
          aria-expanded="true"
          className="chat-toggle chat-toggle--icon-button chat-toggle--bottom-right icon-only mobile-only bg-black rounded-full p-3 shadow-lg flex items-center justify-center"
          onClick={toggleChat}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          layout
        >
          {isOpen ? <CloseIcon /> : <ChatIcon />}
        </motion.button>
      )}
      {/* Chat Box Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`absolute ${
              isMobile
                ? "top-0 left-0 w-full h-full rounded-none"
                : "bottom-20 right-0 w-[90vw] sm:w-[400px] sm:bottom-20 md:bottom-20 sm:right-0 rounded-md"
            } shadow-lg bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700`}
            initial={{
              opacity: 0,
              y: isMobile ? 0 : 20,
              scale: isMobile ? 1 : 0.95,
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: isMobile ? 0 : 20,
              scale: isMobile ? 1 : 0.95,
            }}
            transition={{ duration: 0.2 }}
            style={{
              maxHeight: isMobile ? "100vh" : "calc(100vh - 150px)",
              overflow: "hidden",
            }}
            layout
          >
            {/* Fake Navigation Bar (only on mobile when open) */}
            {isMobile && (
              <div className="bg-orange-500 p-3 flex items-center relative dark:bg-orange-700">
                <span className="text-white font-bold text-center w-full">
                  Acme Booking Inc.
                </span>
                <button
                  onClick={handleChatClose}
                  className="absolute top-2 right-2 p-2 text-white "
                >
                  <CloseIcon />
                </button>
              </div>
            )}
            {/* Conditional rendering of Chat History or Fresh Chat View */}
            {chatHistory.length === 0 ? (
              <div
                className={`p-4 ${
                  isMobile
                    ? "h-[calc(100vh-100px)] absolute top-[50px] bottom-[60px] left-0 w-full"
                    : "h-[50vh]"
                } overflow-y-auto dark:text-gray-200`}
              >
                {freshChatView()}
              </div>
            ) : (
              <div
                ref={chatContainerRef}
                className={`p-4 ${
                  isMobile
                    ? "h-[calc(100vh-160px)] absolute top-[50px] bottom-[60px] overflow-y-auto left-0 w-full"
                    : "h-[50vh] overflow-y-auto"
                } flex flex-col gap-2 dark:text-gray-200`}
                style={{
                  paddingTop: "10px",
                  paddingBottom: isMobile ? "60px" : `${inputHeight}px`,
                  maxHeight: isMobile
                    ? "auto"
                    : `calc(100vh - ${inputHeight + 100}px)`,
                }}
              >
                {chatHistory.map((msg, index) => renderMessage(msg, index))}
                {isTyping && (
                  <div className="flex w-full items-start justify-start">
                    <div className="flex items-start gap-2">
                      <BotIcon />
                      <div
                        className={`rounded-md p-2 bg-gray-100 dark:bg-gray-700`}
                      >
                        <TypingIndicator />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            {/* Input Form */}
            <form
              onSubmit={handleSendMessage}
              className={`p-4 border-t border-gray-200 dark:border-gray-700 absolute bottom-0 w-full ${
                isMobile ? "left-0" : ""
              }`}
              ref={inputFormRef}
            >
              <div className="flex items-center">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border border-gray-300 rounded-md mr-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBox;
