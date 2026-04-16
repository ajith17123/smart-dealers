import './Footer.css';

function Footer(){
    return (
        <footer className='foot-sec py-5'>
             <div className='container' data-aos="fade-up">
                <div className='row'>
                    
                 <div className='col-md-4 mb-4'>
                     <h3 className='foot-logo'><i className="bi bi-lightbulb-fill"></i> Smart World</h3>
                        <p className='foot-text'>
                            Transforming your living spaces with intelligent technology. 
                            Making homes smarter and lives easier since 2024.
                        </p>
                 </div>

                 <div className='col-md-4 mb-4'>
                     <h5 className='foot-title'>Quick Links</h5>
                        <ul className='list-unstyled'>
                            <li><a href="#" className='foot-link'>Home</a></li>
                            <li><a href="#" className='foot-link'>Products</a></li>
                            <li><a href="#" className='foot-link'>About Us</a></li>
                            <li><a href="#" className='foot-link'>Contact</a></li>
                        </ul>
                 </div>

                 <div className='col-md-4 mb-4'>
                     <h5 className='foot-title'>Our Services</h5>
                        <ul className='list-unstyled'>
                            <li><a href="#" className='foot-link'>Home Automation</a></li>
                            <li><a href="#" className='foot-link'>Security Systems</a></li>
                            <li><a href="#" className='foot-link'>Smart Lighting</a></li>
                            <li><a href="#" className='foot-link'>24/7 Support</a></li>
                        </ul>
                 </div>

                </div>
             </div>
        </footer>
    )
}

export default Footer;