import './Hero.css';
import prod from "../assets/Images/Hero.jpg";

function Hero(){
    return(
        <section className='hero-sec'>
           <div className='container'>
              <div className='row align-items-center'>
                 <div className='col-md-6' data-aos="fade-right">
                     <h1 className='hero-title'>Make Your Home Smarter</h1>
                     <p className='hero-para'>
              Experience the next generation of home automation. Control lights, security, and climate with a single tap.
            </p>
            <div className='hero-but' data-aos="fade-up" data-aos-delay="300">
                <button className='btn-hero'>Explore Products</button>
                <button className='btn-hero'>Watch Demo</button>
            </div>
                 </div>

                 <div className='col-md-6' data-aos="fade-left" data-aos-delay="200">
                     <img src={prod}
                      alt="hero-product"
                      className='img-fluid hero-img' />
                 </div>

              </div>
           </div>
        </section>
    )
}

export default Hero;