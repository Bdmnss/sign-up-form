import { useState } from "react";

const Form = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });

    setErrors({ ...errors, [event.target.name]: "" });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = { ...errors };
    let formIsValid = true;

    if (userInfo.firstName === "") {
      newErrors.firstName = "First Name cannot be empty";
      formIsValid = false;
    } else if (userInfo.firstName.trim().length < 2) {
      newErrors.firstName = "Minimum 2 characters";
      formIsValid = false;
    } else {
      newErrors.firstName = "";
    }

    if (userInfo.lastName === "") {
      newErrors.lastName = "Last Name cannot be empty";
      formIsValid = false;
    } else if (userInfo.lastName.trim().length < 2) {
      newErrors.lastName = "Minimum 2 characters";
      formIsValid = false;
    } else {
      newErrors.lastName = "";
    }

    if (userInfo.email === "") {
      newErrors.email = "Email Address cannot be empty";
      formIsValid = false;
    } else if (!emailRegex.test(userInfo.email)) {
      newErrors.email = "Looks like this is not an email";
      formIsValid = false;
    } else {
      newErrors.email = "";
    }

    if (userInfo.password === "") {
      newErrors.password = "Password cannot be empty";
      formIsValid = false;
    } else if (userInfo.password.trim().length < 8) {
      newErrors.password = "Minimum 8 characters";
      formIsValid = false;
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);

    if (formIsValid) {
      setUserInfo({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="flex flex-col xl:w-[54rem] 2xl:w-[60rem]">
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
        <form onSubmit={handleSubmit}>
          <div className="mb-[1.6rem]">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={userInfo.firstName}
              onChange={changeHandle}
              className={`w-[100%] py-[1.5rem] pl-[2rem] border-[1px] border-solid border-[#dedede] 
                text-[1.4rem] text-[#3d3b48] placeholder-[#3d3b48cc] font-semibold rounded-[5px]
                outline-none ${
                  errors.firstName &&
                  "border-[#ff7979] text-[#ff7979] placeholder-[#ff7979] bg-error-icon bg-no-repeat bg-right-2"
                }`}
            />
            {errors.firstName && (
              <p className="text-end mt-[6px] text-[1.1rem] text-[#ff7979] font-medium">
                {errors.firstName}
              </p>
            )}
          </div>

          <div className="mb-[1.6rem]">
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={userInfo.lastName}
              onChange={changeHandle}
              className={`w-[100%] py-[1.5rem] pl-[2rem] border-[1px] border-solid border-[#dedede] 
                text-[1.4rem] text-[#3d3b48] placeholder-[#3d3b48cc] font-semibold rounded-[5px]
                outline-none ${
                  errors.lastName &&
                  "border-[#ff7979] text-[#ff7979] placeholder-[#ff7979] bg-error-icon bg-no-repeat bg-right-2"
                }`}
            />
            {errors.lastName && (
              <p className="text-end mt-[6px] text-[1.1rem] text-[#ff7979] font-medium">
                {errors.lastName}
              </p>
            )}
          </div>

          <div className="mb-[1.6rem]">
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              value={userInfo.email}
              onChange={changeHandle}
              className={`w-[100%] py-[1.5rem] pl-[2rem] border-[1px] border-solid border-[#dedede] 
                text-[1.4rem] text-[#3d3b48] placeholder-[#3d3b48cc] font-semibold rounded-[5px]
                outline-none ${
                  errors.email &&
                  "border-[#ff7979] text-[#ff7979] placeholder-[#ff7979] bg-error-icon bg-no-repeat bg-right-2"
                }`}
            />
            {errors.email && (
              <p className="text-end mt-[6px] text-[1.1rem] text-[#ff7979] font-medium">
                {errors.email}
              </p>
            )}
          </div>

          <div className="mb-[1.6rem]">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userInfo.password}
              onChange={changeHandle}
              className={`w-[100%] py-[1.5rem] pl-[2rem] border-[1px] border-solid border-[#dedede] 
                text-[1.4rem] text-[#3d3b48] placeholder-[#3d3b48cc] font-semibold rounded-[5px]
                outline-none ${
                  errors.password &&
                  "border-[#ff7979] text-[#ff7979] placeholder-[#ff7979] bg-error-icon bg-no-repeat bg-right-2"
                }`}
            />
            {errors.password && (
              <p className="text-end mt-[6px] text-[1.1rem] text-[#ff7979] font-medium">
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-[100%] py-[1.5rem] bg-[#38cc8b] hover:bg-[#77e2b3] text-[1.2rem] text-white font-semibold
                rounded-[5px] mb-[8px] shadow-shadow-bottom"
          >
            CLAIM YOUR FREE TRIAL
          </button>

          <p className="text-[1.1rem] text-[#bab7d4] px-[1rem] leading-[2.1rem]">
            By clicking the button, you are agreeing to our{" "}
            <span className="text-[#ff7979] font-bold">Terms and Services</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
