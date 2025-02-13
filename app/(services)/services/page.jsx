import Footer2 from "@/components/footers/Footer2";
import Header8 from "@/components/headers/Header8";
import Features from "@/components/homes/home-10/Features";
import Service from "@/components/homes/home-10/Service";
import { featuresListData } from "@/data/features";

import { strongMultiPages } from "@/data/menu";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
const dark = false;
const onePage = false;
export const metadata = {
  title: "Odilah Tech || A tech company specializing in webiste development",
  description: "Business and Landing Page website experts",
};
export default function StrongServicesPage() {
  return (
    <>
      <div className="theme-strong">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar wch-unset">
            <Header8 links={strongMultiPages} />
          </nav>
          <main className="main">
            <ParallaxContainer
              className="page-section bg-dark-alpha-30 light-content parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-strong/section-bg-1.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative pt-sm-30">
                {/* Home Section Content */}
                <div className="home-content text-center">
                  <h1 className="hs-title-7 mb-0">
                    <span className="wow charsAnimIn-2" data-splitting="chars">
                      Our <span className="font-alt">Services</span>
                    </span>
                  </h1>
                </div>
                {/* End Home Section Content */}
              </div>
            </ParallaxContainer>
            <section
              className={`page-section  scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
              id="services"
            >
              <div className="container">
                {/* Nav tabs */}

                <Service />
                {/* End Tab panes */}
              </div>
            </section>
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
                    <div className="container">
                      <h2 className="section-title mb-30">
                        Looking for
                        <span className="font-alt">
                          {" "}
                          exclusive creative
                        </span>{" "}
                        services?
                      </h2>
                      <p className="mb-50">
                        Elevate your brand with expert website development,
                        mobile apps, SEO, revamps, management, and secure
                        hosting—crafted for seamless performance and digital
                        success.
                      </p>
                      <div className="local-scroll">
                        {onePage ? (
                          <>
                            <a
                              href="#contact"
                              className="btn btn-mod btn-white btn-w btn-large btn-round btn-hover-anim"
                            >
                              <span>Start a Project</span>
                            </a>
                          </>
                        ) : (
                          <>
                            <Link
                              href={`/strong-contact${dark ? "-dark" : ""}`}
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
              className={`page-section overflow-hidden  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
            >
              <Features />
            </section>
          </main>

          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>
      </div>{" "}
    </>
  );
}
