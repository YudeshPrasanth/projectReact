import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { TbMailFilled } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaUser, FaHeart } from "react-icons/fa";
import { BsHandbagFill } from "react-icons/bs";
import {BrowserRouter,Form,Link, Route, Routes,} from 'react-router-dom'; import Shopgrid from './component/Shopgrid';
import Index from './component';
import Blog from './component/Blog';
import ContactPage from './component/Contact';



function App() {
  return (
    <BrowserRouter>
    <div>

                                             {/* -------------Common header----------- */}

    <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5> */}
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="container-fluid">
                        <div className="offcanvas-menu-logo">
                            <a href="#"><img src="images/logo.png" alt="logo" /></a>
                        </div>
                        <div className="offcanvas-menu-cart">
                            <ul>
                                <li><a href="#"> <FaHeart /><span>1</span></a></li>
                                <li><a href="#"><BsHandbagFill /><span>3</span></a></li>
                            </ul>
                            <div className="header__cart__price">item: <span>$150.00</span></div>
                        </div>
                        <div className="offcanvas-menu-widget">
                            <div className="header__top__right__language">
                                <img src="images/language.png" alt="language" />
                                <div>English</div>
                                <span className="arrow_carrot-down"></span>
                                <ul>
                                    <li><a href="#">Spanish</a></li>
                                    <li><a href="#">English</a></li>
                                </ul>
                            </div>
                            <div className="header__top__right__auth">
                                <a href="#"><FaUser />Login</a>
                            </div>
                        </div>
                        <nav className="offcanvas-menu-nav mobile-menu">
                            <ul className="navbar-nav">
                                <li className="nav-item active"><a className="nav-link" href="./index.html">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="./shop-grid.html">Shop       </a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Pages</a>
                                    <ul className="header__menu__dropdown">
                                        <li><a className="dropdown-item" href="./shop-details.html">Shop Details</a></li>
                                        <li><a className="dropdown-item" href="./shoping-cart.html">Shopping Cart</a></li>
                                        <li><a className="dropdown-item" href="./checkout.html">Check Out</a></li>
                                        <li><a className="dropdown-item" href="./blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="./blog.html">Blog</a></li>
                                <li className="nav-item"><a className="nav-link" href="./contact.html">Contact</a></li>
                            </ul>
                        </nav>
                        <div id="mobile-menu-wrap"></div>
                        <div className="header__top__right__social">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                            <a href="#"><FaPinterestP /></a>
                        </div>
                        <div className="offcanvas-menu-contact">
                            <ul>
                                <li><TbMailFilled />hello@colorlib.com</li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__left">
                                    <ul>
                                        <li><TbMailFilled />hello@colorlib.com</li>
                                        <li>Free Shipping for all Order of $99</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__right">
                                    <div className="header__top__right__social">
                                        <a href="#"><FaFacebookF /></a>
                                        <a href="#"><FaTwitter /></a>
                                        <a href="#"><FaLinkedinIn /></a>
                                        <a href="#"><FaPinterestP /></a>
                                    </div>
                                    <div className="header__top__right__language">
                                        <img src="images/language.png" alt="language" />
                                        <div>English</div>
                                        <span className="arrow_carrot-down"></span>
                                        <ul>
                                            <li><a href="#">Spanish</a></li>
                                            <li><a href="#">English</a></li>
                                        </ul>
                                    </div>
                                    <div className="header__top__right__auth">
                                        <a href="#"><FaUser />Login</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <a href="./index.html"><img src="images/logo.png" alt="logo" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu navbar navbar-expand-lg">
                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav mx-auto">
                                        <li className="nav-item active">
                                        <Link to="/">  <a className="nav-link" href="">Home</a></Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/Shopgrid"><a className="nav-link" href="">Shop</a></Link>
                                            
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Pages
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="./shop-details.html">Shop Details</a>
                                                <a className="dropdown-item" href="./shoping-cart.html">Shopping Cart</a>
                                                <a className="dropdown-item" href="./checkout.html">Check Out</a>
                                                <a className="dropdown-item" href="./blog-details.html">Blog Details</a>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/Blog"><a className="nav-link" href="">Blog</a></Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/Contact"> <a className="nav-link" href="">Contact</a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul className="d-flex">
                                    <li><a href="#"><FaHeart /><span>1</span></a></li>
                                    <li><a href="#"><BsHandbagFill /><span>3</span></a></li>
                                </ul>
                                <div className="header__cart__price">item: <span>$150.00</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

                                             {/* -------------Common header Section End----------- */}




    <Routes> 
     <Route path='/' element={<Index/>}/>

      
      <Route path='/Shopgrid' element={<Shopgrid/>} />
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/Contact' element={<ContactPage/>}/>
      </Routes>  
    



                                      {/*------------- Footer Section Start ---------------*/}

            <footer className="footer spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__about">
                                <div className="footer__about__logo">
                                    <a href="./index.html"><img src="images/logo.png" alt="logo" /></a>
                                </div>
                                <ul>
                                    <li>Address: 60-49 Road 11378 New York</li>
                                    <li>Phone: +65 11.188.888</li>
                                    <li>Email: hello@colorlib.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                            <div className="footer__widget">
                                <h6>Useful Links</h6>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">About Our Shop</a></li>
                                    <li><a href="#">Secure Shopping</a></li>
                                    <li><a href="#">Delivery information</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Our Sitemap</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">Who We Are</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Innovation</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="footer__widget">
                                <h6>Join Our Newsletter Now</h6>
                                <p>Get E-mail updates about our latest shop and special offers.</p>
                                <form action="#">
                                    <input type="text" placeholder="Enter your mail" />
                                    <button type="submit" className="btn btn-success">Subscribe</button>
                                </form>
                                <div className="footer__widget__social">
                                <a href="#"><FaFacebookF /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaLinkedinIn /></a>
                                <a href="#"><FaPinterestP /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer__copyright">
                                <div className="footer__copyright__text">
                                    <p>
                                        Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                                    </p>
                                </div>
                                <div className="footer__copyright__payment">
                                    <img src="images/payment-item.png" alt="Payment Methods" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

                              {/*---------------- Footer Section End ---------------*/}
    </div>
    </BrowserRouter>
  );
}

export default App;
