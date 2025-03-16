import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"our privacy policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.jpeg"
            alt="contactus"
            style={{ width:"50%"}}
          />
        </div>
        <div className="col-md-4">
          <p><b>Usage Policy:</b> By using Sanatani Store, you agree to comply with all applicable laws and our platform guidelines.
          </p>
          <p><b>Order & Payments:</b> All purchases must be completed with secure payment methods, and orders are processed only upon successful payment confirmation.
          </p>
          <p><b>Privacy & Security:</b> We ensure data protection and do not share personal information except with trusted partners for order fulfillment.</p>
          <p><b>Modifications:</b> Sanatani Store reserves the right to update terms, policies, and prices without prior notice.</p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
