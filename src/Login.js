import React, { useState } from "react";
import "./App.css";

function Login() {
  const [sidebar, setsidebar] = useState();
  return (
    <div className="h-full bg-gradient-to-tl from-gray-100 to-gray-100 w-full py-16 px-4">
        <div className="flex justify-left">
        <img src="../wobot-logo_blue 1.png" alt="logo" className="w-15 h-15" />
            </div>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded-2xl lg:w-1/3 md:w-1/2 w-full p-16">
            <div className="flex justify-center">
                <img src="../Solid_lines.png" alt="logo" className="w-15 h-15" />
                </div>
                <br/>
          <p
            tabIndex={0}
            role="heading"
            aria-label="Login to your account"
            className="text-2xl text-center font-semibold leading-6 text-gray-800"
          >
            It's a delight to have you <br/><fr/>onboard
          </p>
          <p className="text-sm mt-4 font-medium text-center  leading-none text-gray-500">
            Help us know you better.<br/><fr/> (This is how we optimize Wobot as per your
            business needs)
          </p>

          <div className="mt-6  w-full ">
            <lable className="text-base font-medium leading-none text-gray-800">
              Company Name
            </lable>
            <input
              aria-label="enter email adress"
              role="input"
              type="email"
              placeholder="e.g. Example Inc"
              className="bg-white border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6  w-full">
            <lable className="text-base font-medium leading-none text-gray-800">
              Industry
            </lable>
            <div className="relative flex items-center justify-center">
              {/* <input aria-label="enter Password" role="input" type="password" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" /> */}
              <select
                className="bg-white border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                name="type"
                id="type"
              >
                <option>Select</option>
                <option value="Residential">Wobot</option>
                <option value="Commercial">Wobot.ai</option>
              </select>{" "}
            </div>
          </div>
          <div className="mt-6  w-full">
            <lable className="text-base font-medium leading-none text-gray-800">
              {" "}
              Company Size
            </lable>
            <table className="flex mt-2">
              <tr className="bg-gray-300  rounded">
                <td>
                  <span className="p-3">1-20</span>
                </td>
              </tr>
              <tr className="bg-gray-300 ml-3  rounded">
                <td>
                  <span className="p-3">21-50</span>
                </td>
              </tr>
              <tr className="bg-blue-500 ml-3 rounded">
                <td>
                  <span className="p-3 text-white">51-200</span>
                </td>
              </tr>
              <tr className="bg-gray-300 ml-3  rounded">
                <td>
                  <span className="p-3">201-500</span>
                </td>
              </tr>
              <tr className="bg-gray-300 ml-3  rounded">
                <td>
                  <span className="p-3">500+</span>
                </td>
              </tr>
            </table>
          </div>
          <div className="mt-10">
            <button
              role="button"
              aria-label="create my account"
              className="focus:ring-2  focus:ring-offset-2 focus:ring-indigo-500 text-sm font-semibold leading-none text-white focus:outline-none bg-blue-500 border rounded hover:bg-indigo-600 py-4 w-full"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="mt-16 text-sm font-medium text-center text-gray-600">
          <h2>Terms Of Use | Privacy Policy</h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
