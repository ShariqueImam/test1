"use client";
import React, { useState } from "react";
import { contactItems } from "@/data/contact";
import { InlineWidget } from "react-calendly";

import Image from "next/image";
import axios from "axios";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setError] = useState(false);
  const [isSent, setisSent] = useState(false);
  const [isClicked, setisClicked] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };
  const tokenWithWriteAccess =
    "skj2QmjOkf4Wu4aH4xm3JW2FbiW3M1SMYMt6HCdG7UZcCZXowAElCQaK0xevUC9Ox2XdwLUN5SfHTjevnWA7m0pFetfp0cBynGcoaHDKticWJWQT4zBJU7wcaazFbIf01WlYIMp1I9V5JA3sAMIyoUt2NkwQzucpgvSguaDrQeTAvuHqK8X2";
  const submitHandler = (event) => {
    event.preventDefault();

    const sendData = async () => {
      const { data } = await axios.post(
        `https://u57b46na.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
        {
          mutations: [
            {
              create: {
                _type: "contact",
                createdAt: new Date().toISOString(),
                name: Name,
                email: Email,
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
      // const flashTime = setTimeout(() => {
      //   setIsSubmit(false);
      // }, 2000);
      // return () => {
      //   clearTimeout(flashTime);
      // };
    };
    const sendEmail = (e) => {
      let dataToBeSentToEmail = {
        createdAt: new Date().toISOString(),
        name: Name,
        email: Email,
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
    if (Name != "" && Email != "" && Message != "") {
      // sendEmail();
      sendData();
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <div className="container">
      <div className="row mb-90 mb-sm-50 ">
        <div className="mb-90 mb-sm-50 ">
          <InlineWidget url="https://calendly.com/odilah/15min" />
        </div>
        <div className="col-lg-5 col-xl-4 mb-md-90 mb-sm-50 wow fadeInUp">
          <h2 className="section-title-strong mb-40">
            Let’s work <span className="font-alt">together</span>
          </h2>
          <p className="mb-0">
            Ready to bring your vision to life? Let’s work together to create
            responsive, customizable, and flexible web solutions that elevate
            your brand and deliver outstanding user experiences across all
            devices
          </p>
        </div>
        <div className="col-lg-7 offset-xl-1">
          <div className="round overflow-hidden">
            <Image
              width={1080}
              height={516}
              src="/assets/images/demo-strong/section-image-5.jpg"
              alt="Image Description"
              className="wow scaleOutIn"
              data-wow-offset={110}
            />
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="0.27s">
        {/* Contact Info */}
        <div className="col-lg-5 col-xl-4 mb-md-90 mb-sm-50">
          <div className="contact-2">
            {/* Contact Info Item */}
            {contactItems.map((elm, i) => (
              <div key={i} className="contact-2-item">
                <div className="contact-2-icon">
                  <i className={elm.iconClass} />
                </div>
                <div className="contat-2-intro">
                  <h4 className="contact-2-title">
                    {elm.link.text.split(" ")[0]}{" "}
                    <span className="font-alt">
                      {elm.link.text.split(" ")[1]}
                    </span>
                  </h4>
                  <div className="contact-2-text">
                    <a href={elm.link.url}>{elm.text}</a>
                  </div>
                </div>
              </div>
            ))}
            {/* End Contact Info Item */}

            {/* End Contact Info Item */}
          </div>
        </div>
        {/* End Contact Info */}
        {/* Contact Form */}
        <div className="col-lg-7 offset-xl-1">
          <form
            onSubmit={submitHandler}
            className="form contact-form"
            id="contact_form"
          >
            <div className="row">
              <div className="col-md-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-lg round form-control"
                    placeholder="Enter your name"
                    pattern=".{3,100}"
                    required
                    aria-required="true"
                    onChange={nameChangeHandler}
                    value={Name}
                  />
                </div>
              </div>
              <div className="col-md-6">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-lg round form-control"
                    placeholder="Enter your email"
                    pattern=".{5,100}"
                    required
                    aria-required="true"
                    onChange={emailChangeHandler}
                    value={Email}
                  />
                </div>
              </div>
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="input-lg round form-control"
                style={{ height: 130 }}
                placeholder="You want to develop,revamp or manage websites?"
                defaultValue={""}
                required
                onChange={messageChangeHandler}
                value={Message}
              />
            </div>
            <div className="row">
              <div className="col-sm-6">
                {/* Inform Tip */}
                <div className="form-tip pt-20 pt-sm-0">
                  <i className="icon-info size-16" />
                  All the fields are required. By sending the form you agree to
                  the <a href="/privacy">Terms &amp; Conditions</a> and{" "}
                  <a href="/privacy">Privacy Policy</a>.
                </div>
              </div>
              <div className="col-sm-6">
                {/* Send Button */}
                <div className="text-end pt-20">
                  <button
                    type="submit"
                    id="submit_btn"
                    aria-controls="result"
                    className="submit_btn btn btn-mod btn-white btn-large btn-round btn-hover-anim align-middle"
                  >
                    <span> Send Message </span>
                  </button>
                </div>
              </div>
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
        </div>
        {/* End Contact Form */}
      </div>
    </div>
  );
}
