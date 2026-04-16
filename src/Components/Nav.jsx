import './Nav.css';

function Nav(){
    return(
        <nav className="navbar navbar-expand-lg" data-aos="fade-down">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><i class="bi bi-lightbulb-fill"></i> Smart World</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About-Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="bi bi-person"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="bi bi-bag"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Nav;