const FAQ_Hero = () => {
  return (
    <div className="bg-lemonColor py-[76px] flex items-center justify-center max-xmd:py-[50px] xl:px-0 px-[5%] flex-col">
      <h1 className="text-black font-aeonik sm:text-[50px] text-[24px] sm:leading-[54px] leading-[30px] xl:leading-[54px]  pb-[8%] text-center md:w-[90%] xl:pb-[33px] font-[500]">
        Frequently Asked Questions
      </h1>

      <form className="lg:w-[870px] w-full">
        <label className="mb-2 text-sm font-medium text-[#8495B1] sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-[#8495B1] border rounded-lg bg-[#fff]  dark:bg-[#fff]  dark:placeholder-gray-400 dark:text-[#8495B1] dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for a question..."
            required
          />
        </div>
      </form>
    </div>
  );
};

export default FAQ_Hero;
