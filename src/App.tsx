function App() {
  return (
    <main
      className="min-h-screen min-w-screen bg-mobile-hero-image bg-no-repeat bg-[#ff7979]
    bg-cover"
    >
      <div className="flex flex-col justify-center items-center min-h-[100vh]">
        <div className="text-center w-[75%] mb-[6.4rem]">
          <h1 className="text-[2.8rem] text-white font-bold leading-[3.6rem] mb-[1.6rem]">
            Learn to code by watching others
          </h1>
          <p className="text-[1.6rem] text-white font-medium leading-[2.6rem]">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>

        <div className="w-[75%] flex flex-col">
          <div
            className="w-[100%] flex justify-center bg-[#5e54a4] py-[1.6rem] rounded-[1rem]
          text-center leading-[2.6rem] mb-[2.4rem] cursor-pointer shadow-shadow-bottom"
          >
            <p className="px-[6rem] text-white text-[1.5rem]">
              <span className="font-bold">Try it free 7 days</span> then $20/mo.
              thereafter
            </p>
          </div>

          <div className="p-[2.4rem] bg-white rounded-[1rem] text-center shadow-shadow-bottom">
            <form>
              <div className="mb-[1.6rem]">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-[100%] py-[1.5rem] pl-[2rem] border-[1px] border-solid border-[#dedede] 
                text-[1.4rem] text-[#3d3b48] placeholder-[#3d3b48cc] font-semibold rounded-[5px]"
                />
                <p className="text-end mt-[6px] text-[1.1rem] text-[#ff7979] font-medium">
                  First Name cannot be empty
                </p>
              </div>

              <div className="mb-[1.6rem]">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-[100%] py-[1.5rem] pl-[2rem] border-[1px] border-solid border-[#dedede] 
                text-[1.4rem] text-[#3d3b48] placeholder-[#3d3b48cc] font-semibold rounded-[5px]"
                />
                <p className="text-end mt-[6px] text-[1.1rem] text-[#ff7979] font-medium">
                  Last Name cannot be empty
                </p>
              </div>

              <div className="mb-[1.6rem]">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-[100%] py-[1.5rem] pl-[2rem] border-[1px] border-solid border-[#dedede] 
                text-[1.4rem] text-[#3d3b48] placeholder-[#3d3b48cc] font-semibold rounded-[5px]"
                />
                <p className="text-end mt-[6px] text-[1.1rem] text-[#ff7979] font-medium">
                  Email Address cannot be empty
                </p>
              </div>

              <div className="mb-[1.6rem]">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-[100%] py-[1.5rem] pl-[2rem] border-[1px] border-solid border-[#dedede] 
                text-[1.4rem] text-[#3d3b48] placeholder-[#3d3b48cc] font-semibold rounded-[5px]"
                />
                <p className="text-end mt-[6px] text-[1.1rem] text-[#ff7979] font-medium">
                  Password cannot be empty
                </p>
              </div>

              <button
                type="submit"
                className="w-[100%] py-[1.5rem] bg-[#38cc8b] text-[1.2rem] text-white font-semibold
                rounded-[5px] mb-[8px] shadow-shadow-bottom"
              >
                CLAIM YOUR FREE TRIAL
              </button>

              <p className="text-[1.1rem] text-[#bab7d4] px-[1rem]">
                By clicking the button, you are agreeing to our{" "}
                <span className="text-[#ff7979] font-bold">
                  Terms and Services
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
