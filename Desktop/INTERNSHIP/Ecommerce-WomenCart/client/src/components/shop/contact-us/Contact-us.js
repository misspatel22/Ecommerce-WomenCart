import React, { useState } from "react";
import { postContactus } from "./FetchApi";
import Layout from "../layout";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await postContactus({ name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      console.log(process.env.PORT);

      if (response && response.success) {
        setSuccessMessage(response.success);
        setErrorMessage("");
      } else {
        setErrorMessage(
          response && response.error
            ? response.error
            : "An unknown error occurred."
        );
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      setErrorMessage(
        "An error occurred while submitting the form. Please try again later."
      );
      setSuccessMessage("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    
    <Layout>
      <div className="flex flex-col items-center justify-center my-5">
        {/* <h1 className="text-4xl font-bold mb-4">Contact Us</h1> */}
        <div class="container mt-5">
  <div class="row">
    <div class="col-md-6 mt-3">
      <img src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg" alt="We are always ready to help" class="rounded" style={{width:"550px",height:"350px"}} />
      
      <span className="flex cursor-pointer col-md-4" style={{color:"gray",width:"30px",height:"30px"}} ><img src="https://png.pngtree.com/png-vector/20230213/ourmid/pngtree-circle-phone-call-icon-in-black-color-png-image_6596895.png" alt=""  className="ml-16"/> <strong className="ml-1">9876543219</strong>
     <img src="https://e7.pngegg.com/pngimages/913/680/png-clipart-gmail-logo-illustration-email-computer-icons-message-envelope-mail-miscellaneous-angle-thumbnail.png" alt="" className="ml-5"/> <strong className="ml-1">womencart@gmail.com</strong>
      </span>
    </div>
    <div class="col-md-6 mt-5">

        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-700 text-white d-grid gap-2 col-6 mx-auto font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
        </div>
        {errorMessage && (
          <div className="mt-4 text-red-600 font-semibold">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="mt-4 text-green-600 font-semibold">
            {successMessage}
          </div>
        )}
        {/* Embbed Map */}
        <br />
        <br /></div></div>
        
        <iframe
          title="Map" 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14614.114102634207!2d72.5345206!3d23.69281295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1711947038071!5m2!1sen!2sin"
          width="100%"
          height="500"
          allowfullscreen=""
          className="mt-5"
          style={{ border: 0 }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14614.114102634207!2d72.5345206!3d23.69281295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1711947038071!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
      
    </Layout>
    </>
  );
};

export default ContactUs;
