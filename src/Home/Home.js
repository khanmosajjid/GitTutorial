
import './Home.css';
import { Accordion, Tabs } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { Tab } from "bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home(){



    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
      var blogSlideSettings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    

    return(

        <>
            
        <section id="home_section" class="section_banner bg_black_dark" data-z-index="1" data-parallax="scroll" data-image-src="assets/images/banner_bg2.png">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12 col-sm-12 order-lg-first">
                        <div class="banner_text_s2 text_md_center">
                            <h1 class="animation text-white" data-animation="fadeInUp" data-animation-delay="1.1s"><strong>Bitcoin</strong> is peer to peer innovative <strong>network</strong></h1>
                            <h5 class="animation presale_txt text-white" data-animation="fadeInUp" data-animation-delay="1.3s">Token Presale is <mark class="gradient_box">Live</mark></h5>

                            {/* <div class="transparent_bg tk_counter_inner m-lg-0 banner_token text-center px-0 animation" data-animation="fadeIn" data-animation-delay="1.4s">
                                <div class="tk_countdown_time transparent_bg box_shadow_none border counter_medium animation" data-animation="fadeInUp" data-animation-delay="1.2s" data-time="2021/12/08 00:00:00"></div>
                            </div> */}
                            <div class="transparent_bg tk_counter_inner m-lg-0 banner_token text-center px-0 animation" data-animation="fadeIn" data-animation-delay="1.4s">
                                <div className='tk_countdown_time transparent_bg box_shadow_none border counter_medium animation'>
                                    <span class="counter_box">
                                        <span class="tk_counter days">00 </span>
                                        <span class="tk_text">Days</span>
                                    </span>
                                    <span class="counter_box">
                                        <span class="tk_counter days">00 </span>
                                        <span class="tk_text">Days</span>
                                    </span>
                                    <span class="counter_box">
                                        <span class="tk_counter days">00 </span>
                                        <span class="tk_text">Days</span>
                                    </span>
                                    <span class="counter_box">
                                        <span class="tk_counter days">00 </span>
                                        <span class="tk_text">Days</span>
                                    </span>
                                </div>
                            </div>
                            

                            <div class="btn_group pt-2 pb-3 animation" data-animation="fadeInUp" data-animation-delay="1.4s"> 
                                <a href="index-dark-modern.html#whitepaper" class="btn btn-primary btn-radius nav-link content-popup">Whitepaper <i class="fa fa-arrow-right"></i></a> 
                                <a href="index-dark-modern.html#" class="btn btn-primary ms-3 btn-radius">Buy Token Now! <i class="fa fa-arrow-right"></i></a> 
                            </div>

                            <span class="text-white icon_title animation" data-animation="fadeInUp" data-animation-delay="1.4s">We accept :</span>
                            <ul class="list_none currency_icon">
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="1.5s"><i class="fa-brands fa-bitcoin"></i><span>Bitcoin</span></li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="1.6s"><i class="fa-brands fa-ethereum"></i><span>Ethereum </span></li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="1.7s"><i class="fa-solid fa-litecoin-sign"></i><span>Litecoin</span></li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="1.8s"><i class="fa-solid fa-fan"></i><span>Ripple</span></li>
                            </ul>
                            
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 order-first">
                        <div class="banner_image_right res_md_mb_50 res_xs_mb_30 animation" data-animation-delay="1.5s" data-animation="fadeInRight"> 
                            <img alt="banner_vector2" src="images/banner_img2.png" /> 
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="service" class="small_pb small_pt">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                        <div class="title_default_light title_border text-center">
                        <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Meet our solution for you</h4>
                        <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="box_wrap text-center animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                            <img src="images/service_icon1.png" alt="service_icon1"/>
                            <h4 className="text-white">Secure Storage</h4>
                            <p className="text-white">your wallet must be secured. Bitcoin makes it possible to transfer value any where in a very easy way and it allows you to be in control of your money.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="box_wrap text-center animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                            <img src="images/service_icon2.png" alt="service_icon2"/>
                            <h4 className="text-white">Mobile App</h4>
                            <p className="text-white">The #1 most popular cryptocurrency wallet for those looking to transform the financial system right from their pocket. Cash instantly with anyone in the world.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="box_wrap text-center animation" data-animation="fadeInUp" data-animation-delay="1s">
                            <img src="images/service_icon3.png" alt="service_icon3"/>
                            <h4 className="text-white">Exchange Service</h4>
                            <p className="text-white">Each user has unique needs, so there is no one size fits all for exchanges. Our Bitcoin exchange reviews detail each exchange's supported countries</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="box_wrap text-center animation" data-animation="fadeInUp" data-animation-delay="1s">
                            <img src="images/service_icon4.png" alt="service_icon4"/>
                            <h4 className="text-white">Investment projects</h4>
                            <p className="text-white">Bitcoin investment opportunities exist outside of simply speculating on the Bitcoin exchange rate. sell bitcoins and profit from extreme changes</p>
                        </div>
                    </div>
                    <div class="col-lg-4  col-md-6 col-sm-12">
                        <div class="box_wrap text-center animation" data-animation="fadeInUp" data-animation-delay="1s">
                            <img src="images/service_icon5.png" alt="service_icon5"/>
                            <h4 className="text-white">Credit Card Use</h4>
                            <p className="text-white">We are accept any credit or debit card from VISA or MasterCard. This option may be especially useful for those seek ing for the ways</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="box_wrap text-center animation" data-animation="fadeInUp" data-animation-delay="1s">
                            <img src="images/service_icon6.png" alt="service_icon6"/>
                            <h4 className="text-white">Planning</h4>
                            <p className="text-white">A cutting edge issue in traditional estate planning is Cryptocash. Cryptocash is a digital or virtual currency that uses cryptography for security</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="about" class="small_pt">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="text_md_center">
                            <img class="animation" data-animation="zoomIn" data-animation-delay="0.2s" src="images/about_img2.png" alt="aboutimg2"/> 
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
                        <div class="title_default_light title_border">
                        <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">About The Cryptocash</h4>
                        <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Cryptocash is one of the most transformative technologies since the invention of the Internet. Cryptocash stands firmly in support of financial freedom and the liberty that Bitcoin provides globally for anyone to voluntarily participate in a permissionless and decentralized network. </p>
                        <p class="animation" data-animation="fadeInUp" data-animation-delay="0.8s">which empowers people to not be marginalized by governments and financial institutions. Bitcoin is freedom. </p>
                        </div>
                        <a href="https://www.youtube.com/watch?v=ZE2HxTmxfrI" class="btn btn-primary btn-radius video animation" data-animation="fadeInUp" data-animation-delay="1s">Let's Start <i class="ion-ios-arrow-thin-right"></i></a> 
                    </div>
                </div>
            </div>
        </section>



        <section id="token" class="section_token token_sale bg_light_dark" data-z-index="1" data-parallax="scroll" style={{backgroundImage:"url(images/token_bg.png)"}}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
                        <div class="title_default_light title_border text-center">
                            <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Token Sale</h4>
                            <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Join the industry leaders to discuss where the markets are heading. We accept token payments. </p>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-lg-3">
                        <div class="pr_box">
                            <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Starting time :</h6>
                            <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Apr 23, 2018 (Mon 10:00 AM)</p>
                        </div>
                        <div class="pr_box">
                            <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.6s">Ending time :</h6>
                            <p class="animation" data-animation="fadeInUp" data-animation-delay="0.8s">Jun 18, 2018 (Mon 12:00 PM)</p>
                        </div>
                        <div class="pr_box">
                            <h6 class="animation" data-animation="fadeInUp" data-animation-delay="1s">Tokens exchange rate</h6>
                            <p  class="animation" data-animation="fadeInUp" data-animation-delay="1.2s">1 ETH = 820 BCC, 1 BCC = 2150 BCC</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="token_sale res_md_mb_40 res_md_mt_40 res_sm_mb_30 res_sm_mt_30">
                            <div class="tk_countdown text-center animation token_countdown_bg" data-animation="fadeIn" data-animation-delay="1s" style={{backgroundImage:"url(images/token_countdown_bg.png)"}}>
                                <div class="tk_counter_inner">
                                    <div class="tk_countdown_time animation" data-animation="fadeInUp" data-animation-delay="1.2s" data-time="2021/12/08 00:00:00">
                                        <span class="counter_box">
                                            <span class="tk_counter days">00 </span>
                                            <span class="tk_text">Days</span>
                                        </span>
                                        <span class="counter_box">
                                            <span class="tk_counter days">00 </span>
                                            <span class="tk_text">Days</span>
                                        </span>
                                        <span class="counter_box">
                                            <span class="tk_counter days">00 </span>
                                            <span class="tk_text">Days</span>
                                        </span>
                                        <span class="counter_box">
                                            <span class="tk_counter days">00 </span>
                                            <span class="tk_text">Days</span>
                                        </span>
                                    </div>    
                                    <div class="progress animation" data-animation="fadeInUp" data-animation-delay="1.3s">
                                    <div class="progress-bar progress-bar-striped gradient" role="progressbar" aria-valuenow="46" aria-valuemin="0" aria-valuemax="100" style={{width:"46%"}}> 46% </div>
                                        <span class="progress_label bg-white" style={{left: "30%"}}> <strong> 46,000 BCC </strong></span>
                                        <span class="progress_label bg-white" style={{left: "75%"}}> <strong> 90,000 BCC </strong></span>
                                        <span class="progress_min_val">Sale Raised</span>
                                        <span class="progress_max_val">Soft-caps</span>
                                    </div>
                                    <a href="index-dark-modern.html#" class="btn btn-primary btn-radius animation" data-animation="fadeInUp" data-animation-delay="1.4s">Buy Tokens <i class="fa fa-arrow-right"></i></a>
                                    <ul class="icon_list list_none d-flex justify-content-center list-unstyled">
                                        <li class="animation" data-animation="fadeInUp" data-animation-delay="1.5s"><i class="fa-brands fa-cc-visa"></i></li>
                                        <li class="animation" data-animation="fadeInUp" data-animation-delay="1.6s"><i class="fa-brands fa-cc-mastercard"></i></li>
                                        <li class="animation" data-animation="fadeInUp" data-animation-delay="1.7s"><i class="fa-brands fa-bitcoin"></i></li>
                                        <li class="animation" data-animation="fadeInUp" data-animation-delay="1.8s"><i class="fa-brands fa-paypal"></i></li>
                                    </ul>                        
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div class="col-lg-3">
                        <div class="pr_box">
                            <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Low - High 24h :</h6>
                            <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">$ 6,455.83 - $ 7,071.42</p>
                        </div>
                        <div class="pr_box">
                            <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.6s">Total tokens sale</h6>
                            <p class="animation" data-animation="fadeInUp" data-animation-delay="0.8s">850,000 BCC (8%)</p>
                        </div>
                        <div class="pr_box">
                            <h6 class="animation" data-animation="fadeInUp" data-animation-delay="1s">Acceptable Currency :</h6>
                            <p class="animation" data-animation="fadeInUp" data-animation-delay="1.2s">BTC, Eth, Ltc, XRP</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 res_md_mb_40">
                        <div class="title_default_light title_border text-center">
                            <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Token Sale Proceeds</h4>
                        </div>
                        <div class="lg_pt_20 res_sm_pt_0 text-center animation" data-animation="fadeInRight" data-animation-delay="0.2s"> 
                            <img  src="images/sale-proceeds3.png" alt="sale-proceeds3" /> 
                        </div>
                        <div class="divider small_divider"></div>
                        <ul class="list_none list_chart text-center">
                            <li>
                                <span class="chart_bx color1"></span>
                                <span>Addvisers</span>
                            </li>
                            <li>
                                <span class="chart_bx color2"></span>
                                <span>Marketing</span>
                            </li>
                            <li>
                                <span class="chart_bx color3"></span>
                                <span>Public Sale</span>
                            </li>
                            <li>
                                <span class="chart_bx color4"></span>
                                <span>Pre Sale</span>
                            </li>
                            <li>
                                <span class="chart_bx color5"></span>
                                <span>Projects</span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="title_default_light title_border text-center">
                            <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Token Distribution</h4>
                        </div>
                        <div class="lg_pt_20 res_sm_pt_0 text-center animation" data-animation="fadeInLeft" data-animation-delay="0.2s"> 
                            <img  src="images/distribution3.png" alt="distribution3" /> 
                        </div>
                        <div class="divider small_divider"></div>
                        <ul class="list_none list_chart text-center">
                            <li>
                                <span class="chart_bx color1"></span>
                                <span>ICO Sale</span>
                            </li>
                            <li>
                                <span class="chart_bx color4"></span>
                                <span>Build Out</span>
                            </li>
                            <li>
                                <span class="chart_bx color2"></span>
                                <span>Team & Advisers</span>
                            </li>
                            <li>
                                <span class="chart_bx color5"></span>
                                <span>Private Investors</span>
                            </li>
                            <li>
                                <span class="chart_bx color3"></span>
                                <span>Bounty</span>
                            </li>
                        </ul>
                    </div>
                </div>    
            </div>
        </section>



        {/* <section id="mobileapp" class="bg_light_dark" data-z-index="1" data-parallax="scroll" data-image-src="assets/images/app_bg.png">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 col-md-12 col-sm-12">
                    <div class="title_default_light title_border text_md_center">
                        <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Download Mobile App</h4>
                        <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">The use of crypto-currencies has become more widespread, and they are now increasingly accepted as a legitimate currency for transactions. Bitcoin is the first ever cryptocurrency and is used like other assets in exchange for goods and services.</p>
                        <p class="animation" data-animation="fadeInUp" data-animation-delay="0.6s">Send, receive, and exchange Bitcoin, Ethereum, & Bitcoin Cash instantly with anyone in the world. Securely buy and sell bitcoin alongside your already safely stored cryptocurrency. </p>
                    </div>
                    <div class="btn_group text_md_center animation" data-animation="fadeInUp" data-animation-delay="0.8s"> 
                        <a href="index-dark-modern.html#" class="btn btn-primary btn-radius"><em class="fa-brands fa-android"></em> Google Store </a> 
                        <a href="index-dark-modern.html#" class="btn btn-primary btn-radius ms-2"><em class="fa-brands fa-apple"></em> Apple Store</a> 
                    </div>
                    </div>
                    <div class="col-lg-5 col-md-12 col-sm-12">
                        <div class="res_md_mt_50 res_sm_mt_30 text-center animation" data-animation="fadeInRight" data-animation-delay="0.2s"> 
                            <img src="images/mobile_app3.png" alt="mobile_app3"/> 
                        </div>
                    </div>
                </div>
            </div>
        </section> */}



        <section id="roadmap" class="small_pb">
            <div class="container">
                <div class="row text-center">
                    <div class="col-lg-8 col-md-12 offset-lg-2">
                        <div class="title_default_light title_border text-center">
                            <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Roadmap</h4>
                            <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">The use of cryptocurrencies has become more widespread, The origin platform idea. Development of the concept and business plan.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 timeline-side-wrap">
                        <Slider className="timeline owl-carousel small_space" {...settings}>
                            <div class="item">
                                <div class="timeline_box complete">
                                    <div class="timeline_inner">
                                        <div class="timeline_circle"></div>
                                        <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">Aprile 2018</h6>
                                        <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Inotial Coin Distribution &amp; maketing</p>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="timeline_box complete current">
                                    <div class="timeline_inner">
                                    <div class="timeline_circle"></div>
                                    <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">February 2018</h6>
                                    <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Exchange Cryptocash to Bitcoin</p>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="timeline_box">
                                    <div class="timeline_inner">
                                    <div class="timeline_circle"></div>
                                    <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">March 2018</h6>
                                    <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">BTCC mode of payment in Cryptocash </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="timeline_box">
                                    <div class="timeline_inner">
                                    <div class="timeline_circle"></div>
                                    <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">June 2018</h6>
                                    <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Send-Receive coin Cryptocash & mobile</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="timeline_box">
                                    <div class="roadmap_inner">
                                    <div class="timeline_circle"></div>
                                    <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">October 2018</h6>
                                    <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Coin Marketcap, World Coin Index</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="timeline_box">
                                    <div class="timeline_inner">
                                    <div class="timeline_circle"></div>
                                    <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">December 2018</h6>
                                    <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Online & Trading ICO Token Sale</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="timeline_box">
                                    <div class="timeline_inner">
                                    <div class="timeline_circle"></div>
                                    <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">December 2018</h6>
                                    <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Deposit Bitcoin from your account</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>

                        
                    </div>
                </div>
            </div>
        </section>



        <section id="team" class="section_team small_pt">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 offset-lg-2">
                        <div class="title_default_light title_border text-center">
                            <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Leadership Team</h4>
                            <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">we are proud of our great team. He is one of the most motivated and enthusiastic people we have, and is always ready and willing to help out where needed. </p>
                        </div>
                    </div>

                    <div class="row small_space">

                        <div class="col-lg-3 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                            <div class="bg_light_dark position-relative radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                <div class="text-center"> 
                                    <img src="images/team_img1.png" alt="team1"/>
                                    <div class="team_social_s2 list_none">
                                        <ul className="list-unstyled">
                                            <li><a href="index-dark-modern.html#"><i class="fa-brands fa-facebook"></i></a></li>
                                            <li><a href="index-dark-modern.html#"><i class="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="index-dark-modern.html#"><i class="fa-brands fa-linkedin"></i></a></li>
                                            <li><a href="index-dark-modern.html#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="team_info text-center">
                                    <h4><a href="index-dark-modern.html#team1" class="content-popup">Derek Castro</a></h4>
                                    <p>Head Of Marketing</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                            <div class="bg_light_dark position-relative radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                <div class="text-center"> 
                                    <img src="images/team_img2.png" alt="team1"/>
                                    <div class="team_social_s2 list_none">
                                        <ul className="list-unstyled">
                                            <li><a href="index-dark-modern.html#"><i class="fa-brands fa-facebook"></i></a></li>
                                            <li><a href="index-dark-modern.html#"><i class="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="index-dark-modern.html#"><i class="fa-brands fa-linkedin"></i></a></li>
                                            <li><a href="index-dark-modern.html#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="team_info text-center">
                                    <h4><a href="index-dark-modern.html#team1" class="content-popup">Jessica Bell</a></h4>
                                    <p>Head Of Sales</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                            <div class="bg_light_dark position-relative radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                <div class="text-center"> 
                                    <img src="images/team_img3.png" alt="team1"/>
                                    <div class="team_social_s2 list_none">
                                        <ul className="list-unstyled">
                                            <li><a href="index-dark-modern.html#"><i class="fa-brands fa-facebook"></i></a></li>
                                            <li><a href="index-dark-modern.html#"><i class="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="index-dark-modern.html#"><i class="fa-brands fa-linkedin"></i></a></li>
                                            <li><a href="index-dark-modern.html#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="team_info text-center">
                                    <h4><a href="index-dark-modern.html#team1" class="content-popup">Alvaro Martin</a></h4>
                                    <p>Blockchain App Developer</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                            <div class="bg_light_dark position-relative radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                <div class="text-center"> 
                                    <img src="images/team_img4.png" alt="team1"/>
                                    <div class="team_social_s2 list_none">
                                        <ul className="list-unstyled">
                                            <li><a href="index-dark-modern.html#"><i class="fa-brands fa-facebook"></i></a></li>
                                            <li><a href="index-dark-modern.html#"><i class="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="index-dark-modern.html#"><i class="fa-brands fa-linkedin"></i></a></li>
                                            <li><a href="index-dark-modern.html#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="team_info text-center">
                                    <h4><a href="index-dark-modern.html#team1" class="content-popup">Maria Willium</a></h4>
                                    <p>Community Manager</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div class="divider large_divider"></div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="title_default_light title_border text-center">
                            <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Invester Board</h4>
                            </div>
                        </div>
                    </div>

                    <div class="row small_space justify-content-center">
                        <div class="col-lg-9 col-md-12">
                            <div class="row">

                                <div class="col-lg-4 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                                    <div class="bg_light_dark position-relative radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                        <div class="text-center"> 
                                            <img src="images/team_img5.png" alt="team5"/>
                                            <div class="team_social_s2 list_none">
                                            <ul className="list-unstyled">
                                                <li><a href="index-dark-modern.html#"><i class="fa-brands fa-facebook"></i></a></li>
                                                <li><a href="index-dark-modern.html#"><i class="fa-brands fa-twitter"></i></a></li>
                                                <li><a href="index-dark-modern.html#"><i class="fa-brands fa-linkedin"></i></a></li>
                                                <li><a href="index-dark-modern.html#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                            </ul>
                                        </div>
                                        </div>
                                        <div class="team_info text-center">
                                            <h4><a href="index-dark-modern.html#team5" class="content-popup">Tricia Diyana</a></h4>
                                            <p>Invester</p>
                                        </div>
                                        
                                    </div>
                                </div>


                                <div class="col-lg-4 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                                    <div class="bg_light_dark position-relative radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                        <div class="text-center"> 
                                            <img src="images/team_img6.png" alt="team5"/>
                                            <div class="team_social_s2 list_none">
                                            <ul className="list-unstyled">
                                                <li><a href="index-dark-modern.html#"><i class="fa-brands fa-facebook"></i></a></li>
                                                <li><a href="index-dark-modern.html#"><i class="fa-brands fa-twitter"></i></a></li>
                                                <li><a href="index-dark-modern.html#"><i class="fa-brands fa-linkedin"></i></a></li>
                                                <li><a href="index-dark-modern.html#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                            </ul>
                                        </div>
                                        </div>
                                        <div class="team_info text-center">
                                            <h4><a href="index-dark-modern.html#team5" class="content-popup">Kent Pierce</a></h4>
                                            <p>Invester</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                                    <div class="bg_light_dark position-relative radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                        <div class="text-center"> 
                                            <img src="images/team_img7.png" alt="team5"/>
                                            <div class="team_social_s2 list_none">
                                            <ul className="list-unstyled">
                                                <li><a href="index-dark-modern.html#"><i class="fa-brands fa-facebook"></i></a></li>
                                                <li><a href="index-dark-modern.html#"><i class="fa-brands fa-twitter"></i></a></li>
                                                <li><a href="index-dark-modern.html#"><i class="fa-brands fa-linkedin"></i></a></li>
                                                <li><a href="index-dark-modern.html#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                            </ul>
                                        </div>
                                        </div>
                                        <div class="team_info text-center">
                                            <h4><a href="index-dark-modern.html#team5" class="content-popup">Rose Morgen</a></h4>
                                            <p>Invester</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


        <section id="faq" class="bg_light_dark">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 offset-lg-2">
                        <div class="title_default_light title_border text-center">
                            <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Have Any Questions?</h4>
                            <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Frequently asked questions (FAQ) or Questions and Answers (Q&A), are listed questions and answers, all supposed to be commonly asked in some context</p>
                        </div>
                    </div>
                </div>
                
                <div class="row">
        	        <div class="col-lg-12 col-md-12 faq-tabs-wrapper">
                        <Tabs justify variant="pills" className="tab_nav_s2 tab_color_white justify-content-center" defaultActiveKey="tab-1">
                            <Tab eventKey="tab-1" title="General">
                                
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <Accordion defaultActiveKey="0">
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Q. What is cryptocurrency?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Q. Which cryptocurrency is best to buy today?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>Q. How about day trading crypto?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>Q. When to sell a cryptocurrency?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>

                                        <div className="col-lg-6">
                                            <Accordion defaultActiveKey="4">
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header>Q. How does one acquire bitcoins?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="5">
                                                    <Accordion.Header>Q. Can I make money with Bitcoin?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="6">
                                                    <Accordion.Header>Q. What happens when bitcoins are lost?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="7">
                                                    <Accordion.Header>Q. Where is the invest my bitcoin?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>


                                    </div>
                                </div>

                            </Tab>
                            <Tab eventKey="tab-2" title="Pre-ICO & ICC">
                                
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <Accordion defaultActiveKey="0">
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Q. What is cryptocurrency?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Q. Which cryptocurrency is best to buy today?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>Q. How about day trading crypto?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>Q. When to sell a cryptocurrency?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>

                                        <div className="col-lg-6">
                                            <Accordion defaultActiveKey="4">
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header>Q. How does one acquire bitcoins?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="5">
                                                    <Accordion.Header>Q. Can I make money with Bitcoin?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="6">
                                                    <Accordion.Header>Q. What happens when bitcoins are lost?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="7">
                                                    <Accordion.Header>Q. Where is the invest my bitcoin?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>


                                    </div>
                                </div>

                            </Tab>
                            <Tab eventKey="tab-3" title="ICO Tokens">
                                
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <Accordion defaultActiveKey="0">
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Q. What is cryptocurrency?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Q. Which cryptocurrency is best to buy today?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>Q. How about day trading crypto?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>Q. When to sell a cryptocurrency?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>

                                        <div className="col-lg-6">
                                            <Accordion defaultActiveKey="4">
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header>Q. How does one acquire bitcoins?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="5">
                                                    <Accordion.Header>Q. Can I make money with Bitcoin?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="6">
                                                    <Accordion.Header>Q. What happens when bitcoins are lost?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="7">
                                                    <Accordion.Header>Q. Where is the invest my bitcoin?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>


                                    </div>
                                </div>

                            </Tab>  
                            <Tab eventKey="tab-4" title="Legal">
                                
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <Accordion defaultActiveKey="0">
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Q. What is cryptocurrency?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Q. Which cryptocurrency is best to buy today?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>Q. How about day trading crypto?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>Q. When to sell a cryptocurrency?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>

                                        <div className="col-lg-6">
                                            <Accordion defaultActiveKey="4">
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header>Q. How does one acquire bitcoins?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="5">
                                                    <Accordion.Header>Q. Can I make money with Bitcoin?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="6">
                                                    <Accordion.Header>Q. What happens when bitcoins are lost?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="7">
                                                    <Accordion.Header>Q. Where is the invest my bitcoin?</Accordion.Header>
                                                    <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>


                                    </div>
                                </div>

                            </Tab>
                        </Tabs>
                    </div>
                </div>


            </div>
        </section>



        <section class="small_pb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 offset-lg-2">
                        <div class="title_default_light title_border text-center">
                            <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Latest News</h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">

                    <Slider className="blog_slider owl-carousel owl-theme" {...blogSlideSettings}>
                        <div class="item">
                            <div class="blog_item animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                <div class="blog_img">
                                    <a href="index-dark-modern.html#">
                                        <img src="images/blog_small_img1.jpg" alt="blog_small_img1" />
                                    </a>
                                </div>
                                <div class="blog_content">
                                    <div class="blog_text">
                                        <h6 class="blog_title"><a href="index-dark-modern.html#">Bitcoin Price Slightly Recovers as Ripple Market Cap</a></h6>
                                        <p>The crypto markets continued to build on April's gains this week, with alternative cryptocurrencies like nano, VeChain and bytecoin leading the way.</p>
                                        <a href="index-dark-modern.html#" class="text-capitalize">Read More</a>
                                    </div>
                                    <ul class="list_none blog_meta">
                                        <li><a href="index-dark-modern.html#"><i class="fa fa-clock"></i> April 14, 2018</a></li>
                                        <li><a href="index-dark-modern.html#"><i class="fa-solid fa-message"></i> 2 Comment</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="blog_item animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                <div class="blog_img">
                                    <a href="index-dark-modern.html#">
                                        <img src="images/blog_small_img2.jpg" alt="blog_small_img2" />
                                    </a>
                                </div>
                                <div class="blog_content">
                                    <div class="blog_text">
                                        <h6 class="blog_title"><a href="index-dark-modern.html#">The Year Cryptocurrencies Seized the Mainstream Spotlightp</a></h6>
                                        <p>The crypto markets continued to build on April's gains this week, with alternative cryptocurrencies like nano, VeChain and bytecoin leading the way.</p>
                                        <a href="index-dark-modern.html#" class="text-capitalize">Read More</a>
                                    </div>
                                    <ul class="list_none blog_meta">
                                        <li><a href="index-dark-modern.html#"><i class="fa fa-clock"></i> April 14, 2018</a></li>
                                        <li><a href="index-dark-modern.html#"><i class="fa-solid fa-message"></i> 2 Comment</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="blog_item animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                <div class="blog_img">
                                    <a href="index-dark-modern.html#">
                                        <img src="images/blog_small_img3.jpg" alt="blog_small_img3" />
                                    </a>
                                </div>
                                <div class="blog_content">
                                    <div class="blog_text">
                                        <h6 class="blog_title"><a href="index-dark-modern.html#">Bitcoin Facing Decisive Year in 2018, Says Legendary Investor</a></h6>
                                        <p>The crypto markets continued to build on April's gains this week, with alternative cryptocurrencies like nano, VeChain and bytecoin leading the way.</p>
                                        <a href="index-dark-modern.html#" class="text-capitalize">Read More</a>
                                    </div>
                                    <ul class="list_none blog_meta">
                                        <li><a href="index-dark-modern.html#"><i class="fa fa-clock"></i> April 14, 2018</a></li>
                                        <li><a href="index-dark-modern.html#"><i class="fa-solid fa-message"></i> 2 Comment</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="blog_item animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                <div class="blog_img">
                                    <a href="index-dark-modern.html#">
                                        <img src="images/blog_small_img1.jpg" alt="blog_small_img1" />
                                    </a>
                                </div>
                                <div class="blog_content">
                                    <div class="blog_text">
                                        <h6 class="blog_title"><a href="index-dark-modern.html#">Bitcoin Price Slightly Recovers as Ripple Market Cap</a></h6>
                                        <p>The crypto markets continued to build on April's gains this week, with alternative cryptocurrencies like nano, VeChain and bytecoin leading the way.</p>
                                        <a href="index-dark-modern.html#" class="text-capitalize">Read More</a>
                                    </div>
                                    <ul class="list_none blog_meta">
                                        <li><a href="index-dark-modern.html#"><i class="fa fa-clock"></i> April 14, 2018</a></li>
                                        <li><a href="index-dark-modern.html#"><i class="fa-solid fa-message"></i> 2 Comment</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </Slider>


                        
                    </div>
                </div>
            </div>
        </section>



        <section class="client_logo small_pt small_pb">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="title_default_light title_border text-center">
                            <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Our Clients</h4>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center text-center overflow_hide small_space">
                    <div class="col-lg-3 col-md-4 col-6 logo_border">
                        <div class="d-flex flex-wrap align-items-center justify-content-center h-100 animation" data-animation="fadeInUp" data-animation-delay="0.3s"> 
                            <img src="images/client_logo_wt1.png" alt="client_logo_wt1" /> 
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6 logo_border">
                        <div class="d-flex flex-wrap align-items-center justify-content-center h-100 animation" data-animation="fadeInUp" data-animation-delay="0.4s"> 
                            <img src="images/client_logo_wt2.png" alt="client_logo_wt2" /> 
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6 logo_border">
                        <div class="d-flex flex-wrap align-items-center justify-content-center h-100 animation" data-animation="fadeInUp" data-animation-delay="0.5s"> 
                            <img src="images/client_logo_wt3.png" alt="client_logo_wt3" /> 
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6 logo_border">
                        <div class="d-flex flex-wrap align-items-center justify-content-center h-100 animation" data-animation="fadeInUp" data-animation-delay="0.6s"> 
                            <img src="images/client_logo_wt4.png" alt="client_logo_wt4" /> 
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6 logo_border">
                        <div class="d-flex flex-wrap align-items-center justify-content-center h-100 animation" data-animation="fadeInUp" data-animation-delay="0.7s"> 
                            <img src="images/client_logo_wt5.png" alt="client_logo_wt5" /> 
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6 logo_border">
                        <div class="d-flex flex-wrap align-items-center justify-content-center h-100 animation" data-animation="fadeInUp" data-animation-delay="0.8s"> 
                            <img src="images/client_logo_wt6.png" alt="client_logo_wt6" /> 
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6 logo_border">
                        <div class="d-flex flex-wrap align-items-center justify-content-center h-100 animation" data-animation="fadeInUp" data-animation-delay="0.8s"> 
                            <img src="images/client_logo_wt7.png" alt="client_logo_wt7" /> 
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6 logo_border">
                        <div class="d-flex flex-wrap align-items-center justify-content-center h-100 animation" data-animation="fadeInUp" data-animation-delay="0.8s"> 
                            <img src="images/client_logo_wt8.png" alt="client_logo_wt8" /> 
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section id="contact" class="contact_section small_pt">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 offset-lg-2">
                    <div class="title_default_light title_border text-center">
                        <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Get In Touch!</h4>
                    </div>
                    </div>
                </div>
                <div class="row align-items-center small_space">
                    <div class="col-lg-4 col-md-6 offset-lg-2">
                        <div class="bg_light_dark  contact_box_s2 animation" data-animation="fadeInLeft" data-animation-delay="0.1s">
                            <div class="contact_title">
                                <h5 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Contact With Us</h5>
                                <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Our office is located in a beautiful building and garden</p>
                            </div>
                            <ul class="list_none contact_info mt-margin ist-unstyled">
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s"> 
                                    <i class="fa fa-map-marker"></i>
                                    <div class="contact_detail"> <span>Address</span>
                                        <p>22 International Division Via G.B. Pirelli</p>
                                    </div>
                                </li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.5s"> 
                                    <i class="fa fa-phone"></i>
                                    <div class="contact_detail"> <span>Phone</span>
                                        <p>+23 0123 4567</p>
                                    </div>
                                </li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.6s"> 
                                    <i class="fa fa-envelope"></i>
                                    <div class="contact_detail"> <span>Email-id</span>
                                        <p>Yourmail@gmail.com</p>
                                    </div>
                                </li>
                        </ul>
                        <div class="contct_follow pt-2 pt-md-4">
                            <span class="text-uppercase animation" data-animation="fadeInUp" data-animation-delay="0.2s">Follow Us</span>
                            <ul class="list_none social_icon list-unstyled">
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s"><a href="index-dark-modern.html#"><i class=" fa-brands fa-facebook"></i></a></li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.5s"><a href="index-dark-modern.html#"><i class=" fa-brands fa-twitter"></i></a></li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.6s"><a href="index-dark-modern.html#"><i class=" fa-brands fa-google-plus"></i></a></li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.7s"><a href="index-dark-modern.html#"><i class=" fa-brands fa-pinterest"></i></a></li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.8s"><a href="index-dark-modern.html#"><i class=" fa-brands fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6">
                        <div class="pt-4 pt-md-0 animation" data-animation="fadeInRight" data-animation-delay="0.1s">
                            <form method="post" name="enq" class="field_form contact-form-home">
                                <div class="row">
                                    <div class="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                        <input type="text" required="required" placeholder="Enter Name *" id="first-name" class="form-control" name="name" />
                                    </div>
                                    <div class="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                        <input type="email" required="required" placeholder="Enter Email *" id="email" class="form-control" name="email" />
                                    </div>
                                    <div class="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                        <input type="text" required="required" placeholder="Enter Subject" id="subject" class="form-control" name="subject" />
                                    </div>
                                    <div class="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="1s">
                                        <textarea required="required" placeholder="Message *" id="description" class="form-control" name="message" rows="2"></textarea>
                                    </div>
                                    <div class="col-md-12 text-center animation" data-animation="fadeInUp" data-animation-delay="1.2s">
                                        <button type="submit" title="Submit Your Message!" class="w-100 btn btn-primary btn-radius btn-block" id="submitButton" name="submit" value="Submit">Submit <i class="fa fa-arrow-right"></i></button>
                                    </div>
                                    <div class="col-md-12">
                                        <div id="alert-msg" class="alert-msg text-center"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        


        </>
    );
}

export default Home;