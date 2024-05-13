import React, { useState } from 'react'
import { Footer, Navber } from '../partials'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { postContactus } from '../contact-us/FetchApi';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css"
import Heading from '../Shared/Heading';
import Testimonial from '../testimonial/Testimonial';

import Img1 from "../homepage/imgs/deliverycard.png"
import Img2 from "../homepage/imgs/shipping.png"
import Img3 from "../homepage/imgs/quality.png"

const Homepage = () => {

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <Navber />

      {/* <div>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="https://www.faberwebdesign.co.uk/wp-content/uploads/2019/12/e-commerce-link-building-760x400.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="https://img.freepik.com/free-vector/bad-habits-flat-background-with-people-having-shopping-addiction-making-online-purchases-vector-illustration_1284-83177.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://img.freepik.com/premium-vector/young-women-relaxing-home-using-phone-orders-fashion-cloths-online-shopping-home-delivery_530733-3045.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}

      <div className='w-3/4 m-auto my-3'>
        <div className="mt-32">
          <Slider {...settings}>
            {data.map((d) => (
              <div className='bg-gray h-[450px] p-1'>
                {/* <button type='button' data-role='none' className='slick-arrow slick-prev' style={{ display: 'block', backgroundColor: 'red' }}></button> */}
                <div className='flex justify-center items-center'>
                  <img src={d.img} alt="" style={{width:'100%',height:'530px'}}/>
                </div>
                {/* <div className='flex flex-col justify-center items-center gap-4 p-4'>
                  <p className='text-xl font-semibold'>{d.name}</p>
                  <p>{d.intro}</p>

                </div> */}
                {/* <button type='button' data-role='none' className='slick-arrow slick-prev' style={{ display: 'block', backgroundColor: 'red' }}></button> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="container mt-3 ">
        <div className="row">
          <div className="col-md-7 my-5">
            <div className='float-left'>
              <img alt="Web Studio" className=" float-left" src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg" />
            </div>
          </div>
          <div className="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-5 mt-md-0">
            <div>
              <h3 className='mt-5'> <p className='text-center'>Start Shopping Today !!</p>
              </h3>
              <p className="mb-5 lh-base d-flex items-center justify-content-center" style={{ textAlign: 'justify' }}>"Women's Cart" is an exclusive e-commerce platform dedicated to fulfilling the fashion and lifestyle needs of women. From trendy clothing to shoes , heels , jewellery and cosmetic, Women's Cart offers a curated selection of items tailored to the modern woman's style and preferences. Experience the convenience of online shopping like never before with ShopifyMart. Whether you're shopping for yourself or searching for the perfect gift, we're here to make your shopping experience enjoyable and stress-free. Explore our website today and discover endless possibilities at your fingertips. Happy shopping !!
              </p>
              {/* <p><span className='fw-bold'>E-shop.com</span> is a company that provides digital cloud platforms and premium services related to Business Solutions on the Internet.</p> */}
            </div>
          </div>
        </div>
      </div>
      
      <div className='container'>
        <div class="row row-cols-1  row-cols-md-1 row-cols-lg-3 g-3 mb-5 mx-1">
          <div class="col">
            <div class="card">
              <img src="https://static.vecteezy.com/system/resources/previews/001/750/741/original/online-shopping-and-e-commerce-banner-vector.jpg" alt="online shopping" style={{height:'250px'}}/>
              <div class="card-body">
                <Link to="/shop" class="btn btn-outline-secondary btn-sm">Now Shop</Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://st3.depositphotos.com/1010613/18119/i/450/depositphotos_181190250-stock-photo-close-woman-shopping-online-using.jpg" class="card-img-top" alt="select & add to cart"  style={{height:'250px'}}/>
              <div class="card-body">
                <Link to="/shop" class="btn btn-outline-secondary btn-sm">Now Shop</Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://b2commerce.io/wp-content/uploads/2023/06/Hot-Sale-2023-Key-eCommerce-Trends-900X478.png" alt="pay & buy now"  style={{height:'250px'}}/>
              <div class="card-body">
                <Link to="/shop" class="btn btn-outline-secondary btn-sm">Now Shop</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 ml-20">
        <div className="container">
          {/* Header section */}
          <Heading title="Why Shop With Us" />
          {/* Blog section */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
            {/* Blog card */}
            {BlogData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.title}
                className="bg-white dark:bg-gray-900"
              >
                {/* image section */}
                <div className="overflow-hidden rounded-2xl mb-2">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-250px object-cover rounded-2xl hover:scale-105 duration-500 col-lg-10 col-sm-10"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Testimonial/>

      <div className="flex flex-col items-center justify-center mb-5 mt-3">
      <h1 className=' text-center text-3xl font-bold text-black' >Contact us</h1>
        <div class="container">
          <div class="row">
            <div class="col-md-6 mb-1">
              <img src="https://st.depositphotos.com/1265075/3330/i/600/depositphotos_33303185-stock-photo-contact-us-web-icons-on.jpg" alt="We are always ready to help" class="rounded"/>
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
                    className={`bg-blue-500 hover:bg-blue-700 text-white d-grid gap-2 col-6 mx-auto font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isLoading ? "opacity-50 cursor-not-allowed" : ""
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
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

const data = [
  {
    img: `https://www.advanceecomsolutions.com/wp-content/uploads/2022/08/ecom-ban-img.jpg`
  },
  {
    img: `https://s7d1.scene7.com/is/image/wbcollab/china_online_shop_0?qlt=90&fmt=webp&resMode=sharp2`
  },
  {
    img: `https://assets-global.website-files.com/6470768de8327f36a7ae11a5/64e5de890d2027d279fe3b4a_Best%2520Practices%2520For%2520eCommerce%2520Website%2520Design.png`
  },
  {
    img: `https://previews.123rf.com/images/pattarasin/pattarasin1608/pattarasin160800029/61300199-sale-banner-template-80-off-vector-concept-of-online-shop.jpg`
  },
  {
    img: `https://www.kindpng.com/picc/m/465-4653741_e-commerce-banner-ecommerce-web-development-services-hd.png`
  }
]

const BlogData = [
  {
    image: Img1,
    aosDelay: "0",
  },
  {
    
    image: Img2,
    aosDelay: "200",
  },
  {
    
    image: Img3,
    aosDelay: "400",
  },
];

export default Homepage
