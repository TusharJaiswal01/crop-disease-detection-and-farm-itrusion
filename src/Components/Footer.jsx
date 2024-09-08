import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#08320b] px-5 py-10 lg:px-20 lg:py-20">
      <div className="contain flex flex-col lg:flex-row justify-between lg:justify-start space-y-10 lg:space-y-0 lg:space-x-10">

        {/* Footer Section 1 */}
        <div className="footer-section space-y-7 flex flex-col items-start">
          <h4 className="text-white font-semibold text-center lg:text-left">
            <img src="logo2.png" className="h-20 w-auto mx-auto lg:mx-0" alt="Logo" />
            <br />
            Happen active county. Winding morning<br /> ambition shyness
            evident to poor.<br /> Because elderly new to the point<br />
            to main success.
          </h4>
          <form className="newsletter-form w-full flex flex-col items-center lg:items-start">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-control p-2 rounded w-full lg:w-auto"
              name="email"
            />
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-green-700 text-white rounded-lg"
            >
              Go
            </button>
          </form>
        </div>

        <div className="border-gray-300 lg:h-[300px] hidden lg:block"></div>

        {/* Footer Section 2 */}
        <div className="footer-section space-y-7 text-center lg:text-left">
          <h3 className="text-white font-bold">Explore</h3>
          <ul className="text-white space-y-2">
            <li><a href="#">About</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Legal Notices</a></li>
            <li><a href="#">Privacy Notices</a></li>
            <li><a href="#">Security Information</a></li>
            <li><a href="#">Trust Center</a></li>
          </ul>
        </div>

        {/* Footer Section 3 */}
        <div className="footer-section space-y-7 text-center lg:text-left">
          <h4 className="text-white font-bold">Recent Posts</h4>
          <ul className="text-white space-y-2">
            <li className="flex flex-col lg:flex-row items-center space-x-3">
              <img
                src="https://validthemes.net/themeforest/wp/agrul/wp-content/uploads/2023/04/blog-2-150x150.jpg"
                height="100"
                width="100"
                className="rounded-lg"
                alt="Post"
              />
              <p className="text-yellow-500 text-sm lg:text-base">
                Oct, 2024<br />Announcing the resolution sentiments
              </p>
            </li>
            <li className="flex flex-col lg:flex-row items-center space-x-3">
              <img
                src="https://validthemes.net/themeforest/wp/agrul/wp-content/uploads/2023/04/blog-1-150x150.jpg"
                height="100"
                width="100"
                className="rounded-lg"
                alt="Post"
              />
              <p className="text-yellow-500 text-sm lg:text-base">
                Dec 14, 2024<br />The Super Soil Organic Farming
              </p>
            </li>
          </ul>
        </div>

        {/* Footer Section 4 */}
        <div className="footer-section space-y-7 text-center lg:text-left">
          <h4 className="widget-title text-white font-bold">Contact Info</h4>
          <ul className="text-white space-y-2">
            <li className="flex flex-col lg:flex-row items-center lg:space-x-3">
              <img
                src="https://img.icons8.com/?size=48&id=2yfgHA8XGxvd&format=gif"
                height="20px"
                width="25px"
                className="rounded-md"
                alt="Address Icon"
              />
              <strong>Address: AITR Mangliya, Indore</strong>
            </li>
            <li className="flex flex-col lg:flex-row items-center lg:space-x-3">
              <img
                src="https://img.icons8.com/?size=48&id=tnnUFgHrPmR0&format=gif"
                height="20px"
                width="25px"
                className="rounded-md"
                alt="Email Icon"
              />
              <strong>Email: abc@gmail.com</strong>
            </li>
            <li className="flex flex-col lg:flex-row items-center lg:space-x-3">
              <img
                src="https://img.icons8.com/?size=40&id=lCYOZaaeqtKc&format=gif"
                height="20px"
                width="25px"
                className="rounded-md"
                alt="Phone Icon"
              />
              <strong>Phone: +123 34598768</strong>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
