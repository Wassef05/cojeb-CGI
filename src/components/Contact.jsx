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
            <div className="my-auto bg-[#3C3C3C] rounded-r-3xl p-8 px-14 w-fit">
                <div className="flex p-2 text-white ">
                  <div className="mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 max-w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h1>cogebimmobiliere@gmail.com</h1>
                  </div>
                </div>
                <div className="flex p-2 text-white ">
                  <div className="mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 max-w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <h1>c+216 73 323 435</h1>
                  </div>
                </div>
                <div className="flex p-2 text-white ">
                  <div className="mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 max-w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>

                  </div>
                  <div>
                    <h1>Avenue de l'environnement, Sousse, <br/>
                    Tunisia, 4000</h1>
                  </div>
                </div>
            </div>
          <div className="md:pr-12 rounded-l-xl py-16 text-[#3B4862] bg-black/10 ">
            <form className="ml-auto sm:w-[40vw] space-y-4">
              <div  className="grid  gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    NOM ET PRENOM
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="NOM ET PRENOM"
                    required
                  />
                </div>
                <div>
                  <label
                    
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    EMAIL
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="EMAIL"
                    required
                  />
                </div>
                
                
                <div>
                  <label
                    
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    TELEPHONE
                  </label>
                  <input
                    type="text"
                    id="website"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="TELEPHONE"
                    required
                  />
                </div>
                <div>
                  <label
                    
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    PROJET
                  </label>
                  <input
                    type="text"
                    id="visitors"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="PROJET"
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
                ENVOYER
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
