import gsap from "gsap";
import React, { useEffect } from "react";
import "../styles/about.css";
import PageLayOut from "./../component/Shared/PageLayOut";

function AboutUsPage() {
  const listdata = [
    "Act honestly and fairly in Applicants best interests under current legislation",
    "Paramount quality work with transparency",
    "High success rate",
    "Dedication, Knowledge & Commitment",
    "Provide Worldwide Immigration options",
    "Visa assistance from ICCRC, MARA registered professionals",
    "Act honestly and fairly in Applicants best interests under current legislation",
    "Free telephonic and email consultation both from our most experienced",
    "immigration professionals",
    "Handled successfully many complicated applications",
    "Most genuine visa counseling with prominent process guidance",
  ];
  useEffect(()=>{
    gsap.fromTo('.text-animation',{x:200,opacity:0},{x:0,opacity:1,duration:.6})
  },[])

  return (
    <PageLayOut>
      <div className="about-section-1">
        <div className="container mx-auto px-[16px] md:px-6">
          <div>
            <div className="h-[100px] relative">
              <h2 className="text-[3rem] text-[#ff0038] whitespace-nowrap">
                ABOUT US
              </h2>
            </div>
            <div>
              <div className="p-wrapper">
                <p className="text-3d text-animation">
                  The most trusted leading nation-wide Immigration Service
                  provider and Immigration law firm In Canada. <br /> We offer
                  professional and legal assistance to settle permanently in
                  Canada. <br />
                  The Firm is established to provide supreme Visa Immigration
                  services and known for the excellent track record of
                  delivering the paramount quality work. <br />
                  The group of Immigration Professionals and Legal
                  representatives at ImmigrateCanada assist you to solve all
                  legal aspects included in the immigration procedure.
                </p>
              </div>
            </div>
            <div>
              <div className="p-wrapper">
                <div className="text-animation">
                  <h4 className="text-3d text-[1.5rem] font-PublicSans font-bold text-white">
                    WE HAVE BEEN RATED AS BEST IMMIGRATION SERVICE PROVIDER IN
                    CANADA FOR:
                  </h4>
                  <ul className="text-[18px]">
                    {listdata.map((el, i) => (
                      <li key={i}>{el}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayOut>
  );
}

export default AboutUsPage;
