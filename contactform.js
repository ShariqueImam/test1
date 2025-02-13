import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const style = {
  wrapper:
    "w-[90%] md:w-[60%] lg:w-[50%] mx-auto text-neutral-600 my-12 md:my-24",
  smallHeading:
    " font-semibold text-2xl md:text-3xl max-w-fit mx-auto py-2  my-8 md:my-10 font flex items-center justify-center flex-col text-center",
  formContainer: "flex flex-col font",
  input:
    "text-sm md:text-lg rounded-lg px-3  md:px-4 py-2 md:py-3 placeholder:text-neutral-600 ring-none outline-none bg-neutral-100 my-2 md:my-3 w-[100%] md:w-[70%] mx-auto",
  btn: "text-white bg-opacity-[0.8] hover:bg-opacity-[0.95] transition duration-[300ms] my-6  tracking-wide text-center",
  btnContainer:
    "text-white p-1 mx-auto transition duration-[250ms] font-normal cursor-pointer hover:opacity-[0.9] my-2 flex items-center justify-center bg-neutral-600  px-4 rounded-lg w-[100%] md:w-[70%] mx-auto",
  btn: " px-7 md:px-5 py-2 md:py-3 transition duration-[200ms] max-w-fit mx-auto md:mx-0 text-white text-md",
  label: "",
  checkbox: "w-[100%] md:w-[70%] mx-auto my-6 md:my-8 flex flex-col",
  option:
    "w-[100%] md:w-[70%] mx-auto my-6 md:my-8 bg-neutral-100 rounded-lg px-3  md:px-4 py-2 md:py-3",
  singleCheckBox: "flex items-center justify-end flex-row-reverse ",
};

const ContactForm = () => {
  const [isError, setError] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSent, setisSent] = useState(false);
  const [Recaptcha, setRecaptcha] = useState(false);
  const [isClicked, setisClicked] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [BusinessName, setBusinessName] = useState("");
  const [WebsiteUrl, setWebsiteUrl] = useState("");
  const [TimeFrame, setTimeFrame] = useState("");
  const [selectedValue1, setSelectedValue1] = React.useState(Boolean);
  const [selectedValue2, setSelectedValue2] = React.useState(Boolean);
  const [selectedValue3, setSelectedValue3] = React.useState(Boolean);
  const [selectedValue4, setSelectedValue4] = React.useState(Boolean);
  const handleTimeFrameChange = (event) => {
    setTimeFrame(event.target.value);
  };
  const handleChange1 = (event) => {
    setSelectedValue1(event.target.checked);
  };
  const handleChange2 = (event) => {
    setSelectedValue2(event.target.checked);
  };
  const handleChange3 = (event) => {
    setSelectedValue3(event.target.checked);
  };
  const handleChange4 = (event) => {
    setSelectedValue4(event.target.checked);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };
  const businessNameChangeHandler = (e) => {
    setBusinessName(e.target.value);
  };
  const websiteUrlChangeHandler = (e) => {
    setWebsiteUrl(e.target.value);
  };
  console.log(Recaptcha);
  const tokenWithWriteAccess =
    "skMYb2qhBcd5DgUBwQXHcpHWKn98TcBEGcApaVrGna7gUoQWDXC9VGRHJLy5G9CW7Fwhff0JmevJhBgxqh2Y22kWJR7R7E9fgDmJWDpIQGT558IOEMKAuKoVXg7v1rQ8trGDaMGG30c0nOhEwxW2Ad5ZnNL632XuIGX7i0aqOUWA1oV3XdaS";
  const submitHandler = (event) => {
    if (!Recaptcha) {
      setisClicked(true);
    }
    if (Name != "" && Email != "" && TimeFrame != "" && Message != "") {
      setError(false);
    } else {
      setError(true);
    }
    event.preventDefault();
    const sendData = async () => {
      setIsSubmit(true);
      const { data } = await axios.post(
        `https://1d8xcsdc.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
        {
          mutations: [
            {
              create: {
                _type: "contact",
                createdAt: new Date().toISOString(),
                name: Name,
                email: Email,
                businessName: BusinessName,
                websiteUrl: WebsiteUrl,
                timeFrame: TimeFrame,
                newWebsite: selectedValue1,
                revampWebsite: selectedValue2,
                updateWebsite: selectedValue3,
                webHosting: selectedValue4,
                message: Message,
              },
            },
          ],
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${tokenWithWriteAccess}`,
          },
        }
      );
      // to represent the success message
      const flashTime = setTimeout(() => {
        setIsSubmit(false);
      }, 2000);
      return () => {
        clearTimeout(flashTime);
      };
    };
    const sendEmail = (e) => {
      let dataToBeSentToEmail = {
        createdAt: new Date().toISOString(),
        name: Name,
        email: Email,
        businessName: BusinessName,
        websiteUrl: WebsiteUrl,
        timeFrame: TimeFrame,
        newWebsite: selectedValue1,
        revampWebsite: selectedValue2,
        updateWebsite: selectedValue3,
        webHosting: selectedValue4,
        message: Message,
      };
      emailjs
        .send(
          "service_umwwy54",
          "template_9dm9zlk",
          dataToBeSentToEmail,
          "6BIY51JblL2XGIZJ8"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    };
    if (
      Name != "" &&
      Email != "" &&
      TimeFrame != "" &&
      Message != "" &&
      Recaptcha
    ) {
      sendData();
      sendEmail();
      setName("");
      setEmail("");
      setBusinessName("");
      setWebsiteUrl("");
      setTimeFrame("");
      setMessage("");
      setSelectedValue1(false);
      setSelectedValue2(false);
      setSelectedValue3(false);
      setSelectedValue4(false);
      setisSent(true);
    }
  };

  const SITE_KEY = "6Le0fwcnAAAAAL3H--B_C0On3uzb0QxJWjUDSw7h";
  const SECRET_KEY = "6Le0fwcnAAAAAFO1KOYlF_NgsYIz5pGmFFooHD1b";
  const captchaRef = useRef(null);
  const handleChanges = () => {
    setRecaptcha(true);
  };

  return (
    <div className={style.wrapper}>
      <h2 className={style.smallHeading}>
        Hi there, how can I help? Provide as much information as possible.{" "}
        <p className="border-b-[4px] border-stone-300 w-[25vw] md:w-[10vw] mt-5"></p>
      </h2>
      <form className={style.formContainer}>
        <input
          type="name"
          className={style.input}
          placeholder="* Your Name"
          value={Name}
          onChange={nameChangeHandler}
        />
        <input
          type="email"
          className={style.input}
          placeholder="* Your Email "
          value={Email}
          onChange={emailChangeHandler}
        />
        <input
          type="text"
          className={style.input}
          placeholder="Your Business Name "
          value={BusinessName}
          onChange={businessNameChangeHandler}
        />
        <input
          type="text"
          className={style.input}
          placeholder="Your Website Url "
          value={WebsiteUrl}
          onChange={websiteUrlChangeHandler}
        />
        <div className={style.checkbox}>
          <section className={style.singleCheckBox}>
            <p className={style.label}>New Website</p>
            <Checkbox
              checked={selectedValue1}
              onChange={handleChange1}
              inputProps={{ "aria-label": "controlled" }}
            />
          </section>
          <section className={style.singleCheckBox}>
            <p className={style.label}> Existing site revamp or migration</p>
            <Checkbox
              checked={selectedValue2}
              onChange={handleChange2}
              inputProps={{ "aria-label": "controlled" }}
            />{" "}
          </section>
          <section className={style.singleCheckBox}>
            <p className={style.label}> Updates to existing site only</p>
            <Checkbox
              checked={selectedValue3}
              onChange={handleChange3}
              inputProps={{ "aria-label": "controlled" }}
            />{" "}
          </section>
          <section className={style.singleCheckBox}>
            <p className={style.label}> Web hosting</p>
            <Checkbox
              checked={selectedValue4}
              onChange={handleChange4}
              inputProps={{ "aria-label": "controlled" }}
            />
          </section>
        </div>
        <select
          value={TimeFrame}
          onChange={handleTimeFrameChange}
          className={style.option}
        >
          <option value="">* Select the Time Frame</option>
          <option value="1-2Weeks">1-2 Weeks</option>
          <option value="2-3Weeks">2-3 Weeks</option>
          <option value="withinNextMonth">Within Next Month</option>
          <option value="withinNext3Months">Within Next 3 Months</option>
          <option value="openTimeFrame">Open Time Frame</option>
        </select>
        <textarea
          rows="10"
          col="20"
          className={style.input}
          placeholder="* Your Message here "
          value={Message}
          onChange={messageChangeHandler}
        ></textarea>
        {/* {isSubmit && (
          <p className=" my-4 [100%] md:w-[70%] mx-auto font bg-amber-500 text-white p-4 text-center w-[100%] rounded-lg">
            Message received Successfuly. Our Team will contact you soon
          </p>
        )} */}
        {isError && (
          <p className=" my-4 [100%] md:w-[70%] mx-auto font bg-red-600 text-white p-4 text-center w-[100%] rounded-lg">
            Please fill out all required fields
          </p>
        )}
        {/* adding the recaptcha */}
        <div className="flex items-center justify-center ">
          <ReCAPTCHA
            sitekey={SITE_KEY}
            ref={captchaRef}
            onChange={handleChanges}
            className={`mx-auto my-5 md:my-6  p-2 ${
              isClicked && "border-2 border-red-300"
            }`}
          />{" "}
        </div>
        <div className={style.btnContainer} onClick={submitHandler}>
          <button className={style.btn}>Submit</button>
        </div>{" "}
        {isSent && (
          <p className="my-4 [100%] md:w-[70%] mx-auto font bg-amber-500 text-white p-4 text-center w-[100%] rounded-lg">
            Thanks. We have received you message. Our team will contact you
            soon.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
