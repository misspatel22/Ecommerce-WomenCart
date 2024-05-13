import React from 'react';
import Navber from '../partials/Navber'
import Footer from '../partials/Footer';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const About = () => {
  return (
    <>
      <Navber />

      <section className="section mt-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-7 mt-5">
              <div className='float-left'>
                <img alt="Web Studio" className=" float-left" src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg" />
              </div>
            </div>
            <div className="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-5 mt-md-0">
              <div>
                <h3 className='margin-top-5'> <p className='text-center'>"women cart"</p> <p className='text-center'>Your One-Stop Ecommerce Destination</p>
                </h3><br />

                <p className="margin-top-5 lh-base" style={{textAlign:'justify'}}>"Women's Cart" is an exclusive e-commerce platform dedicated to fulfilling the fashion and lifestyle needs of women. From trendy clothing to shoes , heels , jewellery and cosmetic, Women's Cart offers a curated selection of items tailored to the modern woman's style and preferences.
                </p>
                {/* <p><span className='fw-bold'>E-shop.com</span> is a company that provides digital cloud platforms and premium services related to Business Solutions on the Internet.</p> */}
              </div>
            </div>
          </div>


        </div>
      </section>
      <div className="container text-center mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-11">
            <div className="p-1 mb-5 mh-100">
              <div className="section-header">
                <h2>Start Shopping Today !!
                </h2>
              </div>
              <div className="section-text" style={{textAlign:'justify'}}>
                Experience the convenience of online shopping like never before with ShopifyMart. Whether you're shopping for yourself or searching for the perfect gift, we're here to make your shopping experience enjoyable and stress-free. Explore our website today and discover endless possibilities at your fingertips. Happy shopping !!
              </div>
            </div>
          </div>



          {/* <div className='row'>
            <div class="col-sm-3">
              <div class="card" style={{ width: '18rem' }}>
                <div className='card-body'>

                  <img src="https://silverbobbin.com/wp-content/uploads/Made-in-the-USA-Clothing-Brands.jpg" class="card-img" alt="..." />

                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card" style={{ width: '18rem' }}>
                <div className='card-body'>

                  <img src="https://media.istockphoto.com/id/1279108197/photo/variety-of-womens-fashion-comfortable-shoes-of-all-seasons-on-a-light-background-top-view.webp?b=1&s=170667a&w=0&k=20&c=K4XGHnA8DrYHYDKYXLHoRJTiRbNK5Gx4955ADG24hzM=" class="card-img" alt="..." />

                </div>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="card" style={{ width: '18rem' }}>
                <div className='card-body'>

                  <img src="https://i.pinimg.com/originals/bb/23/2a/bb232ab956b7dae0779f369071d31a2f.jpg" class="card-img" alt="..." />

                </div>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="card" style={{ width: '18rem' }}>
                <div className='card-body'>

                  <img src="https://imgix-prod.sgs.com/-/media/sgscorp/images/temporary/cosmetics-1600px.cdn.en-HU.1.jpg?fit=crop&auto=format&crop=focalpoint&fp-x=0&fp-y=0&fp-z=1&w=645&h=403" class="card-img" alt="..." />

                </div>
              </div>
            </div> */}



          <div class="row row-cols-1  row-cols-md-2 row-cols-lg-4 g-3 mb-5 mx-1">
            <div class="col">
              <div class="card">
                <img src="https://silverbobbin.com/wp-content/uploads/Made-in-the-USA-Clothing-Brands.jpg" class="card-img-top" alt="cloths" style={{height:'200px'}} />
                <div class="card-body">
                  <Link to="/shop" class="btn btn-outline-secondary btn-sm">Now Shop</Link>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://media.istockphoto.com/id/1279108197/photo/variety-of-womens-fashion-comfortable-shoes-of-all-seasons-on-a-light-background-top-view.webp?b=1&s=170667a&w=0&k=20&c=K4XGHnA8DrYHYDKYXLHoRJTiRbNK5Gx4955ADG24hzM=" class="card-img-top" alt="shoes" style={{height:'200px'}} />
                <div class="card-body">
                  <Link to="/shop" class="btn btn-outline-secondary btn-sm">Now Shop</Link>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://i.pinimg.com/originals/bb/23/2a/bb232ab956b7dae0779f369071d31a2f.jpg" class="card-img-top" alt="jewellery" style={{height:'200px'}} />
                <div class="card-body">
                  <Link to="/shop" class="btn btn-outline-secondary btn-sm">Now Shop</Link>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="https://imgix-prod.sgs.com/-/media/sgscorp/images/temporary/cosmetics-1600px.cdn.en-HU.1.jpg?fit=crop&auto=format&crop=focalpoint&fp-x=0&fp-y=0&fp-z=1&w=645&h=403" class="card-img-top" alt="cosmetic" style={{height:'200px'}} />
                <div class="card-body">
                  <Link to="/shop" class="btn btn-outline-secondary btn-sm">Now Shop</Link>
                </div>
              </div>
            </div>
          </div>





        </div>

      </div>

      <Footer />

    </>



  );
}

export default About;


