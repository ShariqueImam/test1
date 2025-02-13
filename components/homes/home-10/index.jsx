"use client";
import Faq from "@/components/homes/home-10/Faq";
import Team from "./Team";
import Service from "./Service";

import Portfolio from "./Portfolio";
import Features from "./Features";
import Blog from "./Blog";

import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";
import Contact from "./Contact";
import Link from "next/link";
import { useEffect } from "react";
import { featuresListData } from "@/data/features";
import Image from "next/image";

export default function Home10({ onePage = false, dark = false }) {
  useEffect(() => {
    const addPaddingLeft = () => {
      document.getElementById("paddingLeft").style.paddingLeft = `${
        (window.innerWidth -
          document.getElementById("paddingLeftContainer").offsetWidth) /
        2
      }px`;
    };
    const addPaddingRight = () => {
      document.getElementById("paddingRight").style.paddingRight = `${
        (window.innerWidth -
          document.getElementById("paddingRightContainer").offsetWidth) /
        2
      }px`;
    };
    addPaddingLeft();
    addPaddingRight();
    window.addEventListener("resize", addPaddingLeft);
    window.addEventListener("resize", addPaddingRight);
    return () => {
      window.removeEventListener("resize", addPaddingLeft);
      window.removeEventListener("resize", addPaddingRight);
    };
  }, []);

  return (
    <>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-caption-border">About Odilah</h2>
              <h3 className="section-title-strong mb-90 mb-sm-50">
                Group <span className="font-alt">of</span> Creators
                <span className="font-alt"> and</span> Tech Lovers
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4 mb-xs-50">
              <div className="call-action-4-images">
                <div className="call-action-4-image-1">
                  <Image
                    width={500}
                    height={692}
                    src="/assets/images/demo-strong/section-image-1.jpg"
                    alt="Image description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                  />
                </div>
                <div className="call-action-4-image-2">
                  <Image
                    width={500}
                    height={692}
                    src="/assets/images/demo-strong/section-image-2.jpg"
                    alt="Image description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset="0"
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-8 col-lg-6 col-xl-4 offset-xl-1 mt-n10">
              <div className="wow linesAnimIn" data-splitting="lines">
                <p className="lead mt-0 mb-40">
                  Odilah is a full-service creative studio creating beautiful
                  digital experiences and products. We are a company
                  specializing in designing, revamping and managing mobile and
                  web apps.
                </p>
                <p className="mb-40">
                  We specialize in developing, revamping, and managing websites
                  tailored to your business needs. Whether you're launching a
                  new site, refreshing an outdated one, or ensuring seamless
                  maintenance.
                </p>
              </div>

              <div className="local-scroll wow fadeInUp" data-wow-offset="0">
                {onePage ? (
                  <>
                    <a
                      href="#team"
                      className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                    >
                      <span>
                        Learn More
                        <span className="visually-hidden">About Us</span>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/strong-about${dark ? "-dark" : ""}`}
                      className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                    >
                      <span>
                        Learn More
                        <span className="visually-hidden">About Us</span>
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>

            <div className="col-lg-2 offset-xl-1 d-none d-lg-block">
              <div className="round overflow-hidden">
                <Image
                  width={330}
                  height={894}
                  src="/assets/images/demo-strong/section-image-3.jpg"
                  alt="Image description"
                  className="wow scaleOutIn"
                  data-wow-duration="1.2s"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="team"
      >
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-xl-5 d-flex align-items-center team-1-column-sticky mb-lg-90 mb-sm-50">
              <div>
                <h2 className="section-caption-border">Our Team</h2>
                <h3 className="section-title-strong mb-40">
                  Meet the<span className="font-alt"> team of</span> experts
                </h3>
                <p className="mb-40">
                  Meet our expert team of designers, developers, and strategists
                  dedicated to crafting, revamping, and managing high-performing
                  websites effortlessly.
                </p>
                <div className="local-scroll">
                  {onePage ? (
                    <>
                      {" "}
                      <a
                        href="/contact"
                        className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                      >
                        <span>Contact our Team</span>
                      </a>
                    </>
                  ) : (
                    <>
                      {" "}
                      <Link
                        href={`/contact`}
                        className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                      >
                        <span>Contact our Team</span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* End Left Column */}
            {/* Right Column */}
            <div className="col-xl-6 offset-xl-1">
              <Team />
            </div>
            {/* End Right Column */}
          </div>
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />

      <section className="pt-30">
        <div id="paddingLeftContainer" className="container"></div>
        <div className="row g-0">
          <div className="col-lg-6">
            <div
              id="paddingLeft"
              className={`split-column-left ${
                dark ? "bg-dark-2" : "bg-dark-1"
              }  light-content position-relative d-flex align-items-center`}
            >
              {/* Decorative Dots */}
              <div className="position-absolute top-0 end-0 pt-2 pe-2 opacity-02">
                <Image
                  width={192}
                  height={222}
                  src="/assets/images/demo-strong/decoration.svg"
                  alt=""
                />
              </div>
              {/* End Decorative Dots */}
              <div>
                <h2 className="section-title mb-30">
                  Looking for
                  <span className="font-alt"> exclusive creative</span>{" "}
                  services?
                </h2>
                <p className="mb-50">
                  Elevate your brand with expert website development, mobile
                  apps, SEO, revamps, management, and secure hosting—crafted for
                  seamless performance and digital success.
                </p>
                <div className="local-scroll">
                  {onePage ? (
                    <>
                      <a
                        href="/contact"
                        className="btn btn-mod btn-white btn-w btn-large btn-round btn-hover-anim"
                      >
                        <span>Start a Project</span>
                      </a>
                    </>
                  ) : (
                    <>
                      <Link
                        href={`/contact`}
                        className="btn btn-mod btn-white btn-w btn-large btn-round btn-hover-anim"
                      >
                        <span>Start a Project</span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch mt-n30 mt-md-0 mb-30 mb-md-0">
            <div
              className="split-image-right"
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.5"
            >
              <Image
                width={1100}
                height={930}
                src="/assets/images/demo-strong/split-image-1.jpg"
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="services"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-caption-border">Our Services</h2>
              <h3 className="section-title-strong mb-90 mb-sm-50">
                We provide the
                <span className="font-alt"> full stack of</span> creative
                services
              </h3>
            </div>
          </div>
          {/* Nav tabs */}

          <Service />
          {/* End Tab panes */}
        </div>
      </section>
      {/* this is the portfolio section */}
      {/* <section
        className={`page-section  scrollSpysection  overflow-hidden  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="portfolio"
      >
        <Portfolio />
      </section> */}
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      <section
        className={`page-section overflow-hidden  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
      >
        {/* <Features /> */}
      </section>
      <section className="pt-30">
        <div id="paddingRightContainer" className="container" />
        <div className="row g-0">
          <div className="col-lg-6 mt-n30 mt-md-0 mb-30 mb-md-0">
            <div
              id="paddingRight"
              className={`split-column-right ${
                dark ? "bg-dark-2" : "bg-dark-1"
              } light-content position-relative d-flex align-items-center`}
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.5"
            >
              {/* Decorative Dots */}
              <div className="position-absolute top-0 start-0 pt-2 ps-2 opacity-02">
                <Image
                  width={192}
                  height={222}
                  src="/assets/images/demo-strong/decoration.svg"
                  alt=""
                />
              </div>
              {/* End Decorative Dots */}
              <div>
                <h2 className="section-title mb-30">
                  Responsive, <span className="font-alt"> flexible</span> and
                  customizable.
                </h2>
                <p className="mb-50">
                  Delivering responsive, customizable, and flexible web
                  solutions designed to grow with your business. Create
                  seamless, high-performing websites that adapt to every device,
                  ensuring a smooth, dynamic user experience.
                </p>
                {/* Features List */}
                <div className="row mt-n20">
                  {/* Features List Item */}
                  {featuresListData.map((item, index) => (
                    <div
                      key={index}
                      className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20"
                    >
                      <div className="features-list-icon">
                        <i className="mi-check" />
                      </div>
                      <div className="features-list-text">{item.text}</div>
                    </div>
                  ))}
                  {/* End Features List Item */}
                </div>
                {/* End Features List */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch order-lg-first">
            <div className="split-image-left">
              <Image
                width={1100}
                height={930}
                src="/assets/images/demo-strong/split-image-2.jpg"
                alt="Image Description"
              />
              {/* Circle Text */}
              <div className="position-absolute bottom-0 start-0 ps-4 pb-4 d-none d-sm-block">
                <Image
                  src="/assets/images/demo-strong/circle-text.svg"
                  width={138}
                  height={138}
                  alt="Image Description"
                />
              </div>
              {/* End Circle Text */}
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section overflow-hidden  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
      >
        <div className="container ">
          {/* adding the FAQS */}
          <div className="row mb-90 mb-sm-50">
            <div className="col-lg-7 d-flex align-items-center custom">
              <div
                className="wow fadeInUp"
                data-wow-duration="1.2s"
                data-wow-offset={255}
              >
                <h2 className="section-title-strong mb-40">
                  How we <span className="font-alt">work?</span>
                </h2>
                <Faq />
                <div className="local-scroll">
                  <Link
                    href={`/contact`}
                    className="btn btn-mod btn-large btn-round btn-hover-anim custom"
                  >
                    <span>Start a Project</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-title-strong mb-40">
                Clients <span className="font-alt">Stories</span>
              </h2>
              <p className="mb-0">
                Discover what our clients are saying! Real reviews from
                businesses who’ve experienced our responsive, customizable, and
                flexible web solutions. See how we transform ideas into
                seamless, high-performance websites.
              </p>
            </div>
          </div>
          <Testimonials />
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      {/* THIS IS THE BLOG SECTION */}
      {/* <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="blog"
      > 
        <Blog />
      </section> */}
      <section
        className="page-section bg-dark-1 light-content"
        style={{
          backgroundImage:
            "url(/assets/images/full-width-images/section-bg-2.jpg)",
        }}
      >
        <Newsletter />
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="contact"
      >
        <Contact />
      </section>
    </>
  );
}
