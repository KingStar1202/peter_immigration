import React, { useState } from "react";
import SingleCollapse from './SingleCollapse';

const Collapse = () => {
  const data = [
    {
      id: 1,
      title: "WHAT IS A CANADA PR (PERMANENT RESIDENCE) VISA?",
      desc: (
        <>
          Canada Permanent Residence Visa – Permanent Residency is a visa which
          allows staying indefinitely by availing all social benefits in a
          Country of which he/she is not a citizen.
          <br />
          Person who is staying in work or student visa cannot be considered as
          Permanent Resident.
          <br />
          When you are a Permanent Resident, you can live outside of the Country
          but must meet certain residency obligations to maintain your status.
          <br />
          People who are granted Permanent Residency in a Country are usually
          issued Permanent Resident card as an official proof of Permanent
          Resident status.
        </>
      ),
    },
    {
      id: 2,
      title: "AN INSIGHT INTO THE CANADA PERMANENT RESIDENT VISA PROCESS",
      desc: (
        <>
          Canada has today become the most ideal country to reside and work in. Every year, around 500,000 people migrate to this nation with a permanent residency status.<br/>If you also wish to make a new start in Canada, then you will have to attain the Permanent Resident (PR) visa.<br/>One can apply for Canada PR visa through various Immigration consultant programs including Spousal PR Sponsorship, Express Entry, Provincial Nominee Program or PNP, Family Sponsorship etc.<br/>All these programs have their own guidelines and procedures, which you must strictly follow.<br/>However due to our network connections and unique access to resources, your chances of an approved application is extremely high as no other competitor in our industry has access to the resources and network of individuals that we have!
        </>
      ),
    },
    {
      id: 3,
      title: "WHAT DOES  A CANADAIAN PR BENEFITS OFFER?",
      desc: (
        <>
          -Social benefits that Canadian citizens receive, including health care coverage<br/> -Own property<br/> -Live &amp; Study anywhere in Canada<br/>-Main and Spouse dependent get the access to work in any profile<br/>-Apply for Canadian Citizenship<br/> -Get protection under Canadian law and the Canadian Charter of Rights and Freedoms<br/> -Can move freely from province to province<br/> -Free education for all children under 18 years in the Canadian public school system<br/> -Sponsor eligible family members
        </>
      ),
    },
  ];
  return (
    <div className="relative">
      {data.map((single, index) => <SingleCollapse key={index} data={single}/>)}
    </div>
  );
};

export default Collapse;
