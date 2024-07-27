import cov from "../img/contactcov.png";

export default function Contact() {
  return (
    <div>
        <h1 className="uppercase pt-12 pl-12 font-bold text-5xl text-[#A95834]">
          à propos
        </h1>
      <div className="relative mt-16 w-full  h-[100vh] bg-white">
        <div
          style={{ backgroundImage: `url(${cov})` }}
          className="absolute bottom-0 w-full sm:h-3/5 h-full bg-contain bg-center bg-no-repeat"
        ></div>
        <div className="relative max-w-screen z-10  md:grid-cols-2 grid ">
            <div className="my-auto bg-[#3C3C3C] p-8 px-14 w-fit">
                <h1>klhggilygyug</h1>
                <h1>klhggilygyug</h1>
                <h1>klhggilygyug</h1>
                <h1>klhggilygyug</h1>
                <h1>klhggilygyug</h1>
            </div>
          <div className="pr-12 rounded-l-xl py-16 text-[#3B4862] bg-black/10 ">
            <form className="ml-auto sm:w-[40vw] space-y-4">
              <div  className="grid  gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe"
                    required
                  />
                </div>
                
                
                <div>
                  <label
                    
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label
                    
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Unique visitors (per month)
                  </label>
                  <input
                    type="number"
                    id="visitors"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <textarea
                placeholder="Message"
                rows="6"
                className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
              ></textarea>
              <button
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
