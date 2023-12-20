import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [colour, setColour] = useState("slate");

  function changeColor(e) {
    var selectedColor = e.target.innerHTML.toLowerCase();
    console.log(selectedColor);
    setColour(selectedColor);
    document.body.style.backgroundColor = selectedColor;
  }

  return (
    <>
      <h1 className="mb-4 text-2xl drop-shadow-xl font-bold font-mono text-gray-900 dark:text-white md:text-5xl lg:text-6xl">BackGround Colour</h1>
      <div className="fixed flex flex-wrap bottom-10 justify-center inset-x-0 px-2">
        <div className="outline-none flex flex-wrap gap-3 bg-white rounded-xl justify-center px-2 py-2">
          <button
            onClick={changeColor}
            className="focus:outline-none text-black bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-400 text-sm font-bold rounded-full px-5 py-2"
          >
            Red
          </button>
          <button
            type="button"
            onClick={changeColor}
            className="focus:outline-none text-black bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-full text-sm font-bold px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Green
          </button>
          <button
            onClick={changeColor}
            type="button"
            class="focus:outline-none text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
          >
            Skyblue
          </button>
          <button
            onClick={changeColor}
            className="focus:outline-none text-black hover:bg-pink-700 bg-pink-400 focus:ring-4 focus:ring-pink-500 dark:focus:ring-pink-500 font-bold rounded-full px-4 py-2 "
          >
            Pink
          </button>
          <button
            onClick={changeColor}
            className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-orange-300 font-bold rounded-full px-3 py-2 dark:focus:ring-yellow-900"
          >
            Yellow
          </button>
          <button
            onClick={changeColor}
            type="button"
            class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-bold rounded-full text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Purple
          </button>
        </div>
      </div>
      <div className="main-content" style={{ backgroundColor: colour }}>
      <h1 class="text-sm font-medium dark:text-white">
      Your Colour is {colour}
      </h1>

      </div>
    </>
  );
}

export default App;
