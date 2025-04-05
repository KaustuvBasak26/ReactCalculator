import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300">
      <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-2xl">
        <div className="text-right text-3xl mb-6 h-16 border border-gray-300 rounded-lg p-4 bg-gray-100 overflow-x-auto whitespace-nowrap">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (btn === "=") handleEvaluate();
                else handleClick(btn);
              }}
              className="text-2xl bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-xl shadow-md transition duration-200"
            >
              {btn}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="col-span-4 bg-red-500 hover:bg-red-600 text-white p-4 rounded-xl shadow-md transition duration-200"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
