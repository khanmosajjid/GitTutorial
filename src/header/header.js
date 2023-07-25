
import React, { useEffect } from "react";
import "./header.css";
import $ from 'jquery';


function Header(){
  

    $(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

	    if (scroll >= 50) {
	        $('header').addClass('nav-fixed');
	    } else {
	        $('header').removeClass('nav-fixed');
	    }

	});


    return (

        <>

        <header class="site-header fixed-top">
            <nav class="navbar navbar-expand-md">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="images/logo.png" width={"150px"} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Token</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Road map</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Faq</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <div class="d-flex">
                            <a href="#" class="btn btn-primary">Add Token</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        
        </>
    );
}

export default Header;