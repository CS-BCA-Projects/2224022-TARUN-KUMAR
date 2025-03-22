import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
          "Need help with orders, products, or queries? Contact Sanatani Store for support. We're here to assist you with devotion and care. Reach out via call, email, or chat anytime!
          </p>
          <p className="mt-3">
            <BiMailSend /> :sanatani@store.ac.in
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +91-9889670940
          </p>
          <p className="mt-3">
            <BiSupport /> : +91-9889674560 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
