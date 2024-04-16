function BlogPostView() {
  return (
    <div className="relative px-4 py-14">
      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="">
            <div className="flex flex-row">
              <a
                href="#"
                className="text-indigo-600 hover:text-gray-700 transition duration-500 ease-in-out text-sm"
              >
                Flutter
              </a>
              <p>&nbsp;|&nbsp;</p>
              <a
                href="#"
                className="text-indigo-600 hover:text-gray-700 transition duration-500 ease-in-out text-sm"
              >
                Flutter
              </a>
            </div>
            <h1 href="#" className="text-gray-900 font-bold text-4xl">
              Mobile app for Avoiding Food Wasting and Delivery to Food Wanted
              People
            </h1>
            <div className="py-5 text-sm font-regular text-gray-900 flex">
              <span className="mr-3 flex flex-row items-center">
                <span className="ml-1">6 mins ago</span>
              </span>

              <a
                href="#"
                className="flex flex-row items-center hover:text-indigo-600  mr-3"
              >
                <svg
                  className="text-indigo-600"
                  fill="currentColor"
                  height="16px"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  ></path>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                <span className="ml-1">Hashan Ranasinghe</span>
              </a>

              <a
                href="#"
                className="flex flex-row items-center hover:text-indigo-600"
              >
                <svg
                  className="text-indigo-600"
                  fill="currentColor"
                  height="16px"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill=""
                    d="M15.4496399,8.42490555 L8.66109799,1.63636364 L1.63636364,1.63636364 L1.63636364,8.66081885 L8.42522727,15.44178 C8.57869221,15.5954158 8.78693789,15.6817418 9.00409091,15.6817418 C9.22124393,15.6817418 9.42948961,15.5954158 9.58327627,15.4414581 L15.4486339,9.57610048 C15.7651495,9.25692435 15.7649133,8.74206554 15.4496399,8.42490555 Z M16.6084423,10.7304545 L10.7406818,16.59822 C10.280287,17.0591273 9.65554997,17.3181054 9.00409091,17.3181054 C8.35263185,17.3181054 7.72789481,17.0591273 7.26815877,16.5988788 L0.239976954,9.57887876 C0.0863319284,9.4254126 0,9.21716044 0,9 L0,0.818181818 C0,0.366312477 0.366312477,0 0.818181818,0 L9,0 C9.21699531,0 9.42510306,0.0862010512 9.57854191,0.239639906 L16.6084423,7.26954545 C17.5601275,8.22691012 17.5601275,9.77308988 16.6084423,10.7304545 Z M5,6 C4.44771525,6 4,5.55228475 4,5 C4,4.44771525 4.44771525,4 5,4 C5.55228475,4 6,4.44771525 6,5 C6,5.55228475 5.55228475,6 5,6 Z"
                  ></path>
                </svg>
                <span className="ml-1">Mongo DB</span>
              </a>
            </div>
            <hr />
            <img
              src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c"
              alt="Featured image"
              className="w-full h-auto mb-8"
            />
            <p className="text-base leading-8 my-5">
              We are third-year undergraduate students pursuing a degree in
              Computing and Information at Sabaragamuwa University in Sri Lanka.
              This is 3rd year first semester group mini-project. Our team
              members are:{" "}
            </p>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>P.W. Chathura Janaka Senarathna</li>
              <li>R.M.H.K. Ranasinghe</li>
              <li>P.M. Supun Madusanka</li>
              <li>S. Mathusan</li>
            </ul>
            <h3 className="text-2xl font-bold my-5">
              Let’s dive into our mini-project
            </h3>
            <p className="text-base leading-8 my-5">
              Food-care is a mobile application designed to tackle the pressing
              issue of food wastage by providing a platform for individuals and
              businesses to share excess food with those in need. By fostering a
              sense of community and social responsibility, Food-care aims to
              make a meaningful impact on reducing food wastage and promoting
              sustainability. Wasting food is a global crisis, and Sri Lanka is
              no exception. Every day, a significant amount of perfectly edible
              food goes to waste. Food-care addresses this issue by offering a
              solution that connects those with excess food to those who could
              benefit from it. Food-care serves as a bridge between food donors
              and recipients, providing an intuitive and user-friendly mobile
              application. This app empowers individuals, restaurants, and
              events to easily share surplus food with nearby individuals or
              charitable organizations, reducing waste and contributing to the
              betterment of the community.
            </p>
            <h3 className="text-2xl font-bold my-5">Objectives</h3>
            <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
              <li>
                To reduce food waste by connecting people who have excess food
                with those in need and to encourage people to donate their
                excess food instead of throwing it away or letting it go to
                waste.
              </li>
              <li>
                To provide a platform for people in need of food assistance to
                easily find and access available resources in their area. Waste
                by connecting people who have excess food with those in need.
              </li>
              <li>
                To provide an easy and efficient way for people to donate their
                excess food to those in need.
              </li>
              <li>
                To create a platform that allows users to easily find and access
                food donations in their area.
              </li>
              <li>
                To provide a safe and secure way for users to donate and receive
                food donations.
              </li>
              <li>
                To provide a platform that allows users to track their donations
                and the impact they are making in their community.
              </li>
              <li>
                To create an app that is accessible to all users, regardless of
                their location or financial status.
              </li>
              <li>
                To promote awareness of food waste and its effects on the
                environment, economy, and society as a whole.
              </li>
            </ol>
            <h3 className="text-2xl font-bold my-5">Technology</h3>
            <p className="text-base leading-8 my-5">
              Technologies that we are used for developing this client mobile
              application and admin web:
            </p>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              Mobile application:
            </h2>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
              <li>FLUTTER framework</li>
            </ul>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              Admin web:
            </h2>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
              <li>REACT JS</li>
            </ul>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              Backend server:
            </h2>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
              <li>NODE JS</li>
              <li>MONGO DB</li>
            </ul>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              Push notification:
            </h2>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
              <li>JIRA software</li>
            </ul>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              Project management:
            </h2>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
              <li>FIREBASE</li>
            </ul>
            <h2 className="mb-2 text-lg font-semibold text-gray-900">Ides:</h2>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
              <li>VISUAL STUDIO </li>
              <li>ANDROID STUDIO</li>
            </ul>
            <h3 className="text-2xl font-bold my-5">Methodology</h3>
            <p className="text-base leading-8 my-5">
              The system is being developed using the Agile Scrum methodology,
              which is the System Development Life Cycle methodology. Scrum is
              an agile framework within which people can address complex
              adaptive problems while productively and creatively delivering
              products of the highest possible value.
            </p>
            <a
              href="#"
              className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              #MongoDB
            </a>
    
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPostView;
