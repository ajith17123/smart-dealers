import './Body.css'
import Prod1 from '../assets/Images/Motion Sensor.jpg';
import Prod2 from '../assets/Images/Smart Door Lock.jpg';
import Prod3 from '../assets/Images/Smart Switch.jpg';
import Prod4 from '../assets/Images/Track Lights.jpg';

function Body(){
    return (

        <>

        {/* {Product Section} */}

        <section className='prod-sec'>
            <div className='container'>
                <h1 className='section-title'>Our Products</h1>
                <div className='row'>
                    
                    <div className='col-md-3 col-12' data-aos="fade-up" data-aos-delay="100">
                        <div className='product-card'>
                            <img src={Prod1} className='prod-img img-fluid' alt="bulb" />
                            <h3 className='prod-title'>Motion Sensor</h3>
                            <p className='prod-price'><i className="bi bi-currency-rupee"></i>1299</p>
                            <button className='btn-buy'>Add to Cart <i className="bi bi-cart2"></i></button>
                        </div>
                    </div>

                    <div className='col-md-3 col-12' data-aos="fade-up" data-aos-delay="200">
                        <div className='product-card'>
                            <img src={Prod2} className='prod-img img-fluid' alt="bulb" />
                            <h3 className='prod-title'>Smart Door Lock</h3>
                            <p className='prod-price'><i className="bi bi-currency-rupee"></i>2499</p>
                            <button className='btn-buy'>Add to Cart <i className="bi bi-cart2"></i></button>
                        </div>
                    </div>

                    <div className='col-md-3 col-12' data-aos="fade-up" data-aos-delay="300">
                        <div className='product-card'>
                            <img src={Prod3} className='prod-img img-fluid' alt="bulb" />
                            <h3 className='prod-title'>Smart Switch</h3>
                            <p className='prod-price'><i className="bi bi-currency-rupee"></i>499</p>
                            <button className='btn-buy'>Add to Cart <i className="bi bi-cart2"></i></button>
                        </div>
                    </div>

                    <div className='col-md-3 col-12' data-aos="fade-up" data-aos-delay="400">
                        <div className='product-card'>
                            <img src={Prod4} className='prod-img img-fluid' alt="bulb" />
                            <h3 className='prod-title'>Track Lights</h3>
                            <p className='prod-price'><i className="bi bi-currency-rupee"></i>999</p>
                            <button className='btn-buy'>Add to Cart <i className="bi bi-cart2"></i></button>
                        </div>
                    </div>

                </div>
            </div>
        </section>

{/* About Section} */}

          <section className='about-sec'>
              <div className='container'>
                 <h1 className='about-header' data-aos="zoom-in">Who We Are</h1>
                 <div className='row'>
                    <div className='col-md-8' data-aos="fade-up">
                         <p className='about-para'>
                    At Smart World, we are dedicated to transforming traditional living spaces into futuristic, 
                    intelligent homes. Our journey started with a simple vision: to make high-end home automation 
                    accessible to everyone. From smart lighting to advanced security systems, we provide 
                    seamless technology that adapts to your lifestyle. We believe that technology should 
                    work for you, making your daily routines simpler, safer, and more energy-efficient. 
                    Join us as we redefine the way you interact with your home, one smart device at a time.
                </p>
                    </div>
                 </div>
              </div>
          </section>

          {/* {Contact Section} */}

          <section className='cont-sec py-5'>
               <div className='container'>
                  <h1 className='section-title'>Contact Us</h1>
                  <div className='row'>
                    
                     <div className='col-md-6 col-12' data-aos="fade-right">
                         <div className='cont-info'>
                              <h3 className='cont-heading'>Get In Touch</h3>
                    <p><i className="bi bi-geo-alt-fill text-accent"></i>Smart World, Bangalore</p>
                    <p><i className="bi bi-telephone-fill text-accent"></i>0000000000</p>
                    <p><i className="bi bi-envelope-fill text-accent"></i>smart@gmail.com</p>
                         </div>
                     </div>

                     <div className='col-md-6 col-12' data-aos="fade-left">
                         <form className='cont-form'>
                            <div className='mb-3'>
                                <input type="text" className='form-control' placeholder='Your Name' />
                            </div>
                            <div className='mb-3'>
                                 <input type="email" className='form-control' placeholder='Enter Mail Id' />
                            </div>
                            <div className='mb-3'>
                                 <textarea className='form-control' rows={4} placeholder='How Can We Help You?' ></textarea>
                            </div>
                            <button type='submit' className='btn-buy'>Send Message</button>
                         </form>
                     </div>
                    
                  </div>
               </div>
          </section>

          </>
    )
}

export default Body;