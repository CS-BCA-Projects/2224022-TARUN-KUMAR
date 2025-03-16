import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us-Sanatani Store"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            <b>Jai Shree Ram to all...Sanatani Store is an exclusive e-commerce platform dedicated to providing all Sanatani products in one place at the most affordable prices. Our mission is to promote and preserve the rich cultural heritage of Sanatan Dharma by offering a wide range of authentic and high-quality products, making them accessible to everyone. </b>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
