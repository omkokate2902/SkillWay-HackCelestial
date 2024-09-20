import React from 'react'

export default function LandingPage() {


    return (

        <div id="main-wrapper" class="main-wrapper">

            <header>
                <nav class="main-menu">
                    <div class="container">
                        <div class="main-menu__block">
                            <div class="main-menu__left">

                                <div class="main-menu__logo">
                                    <a href="index.html">
                                        <img src="assets/media/logo.png" alt="Educate" />
                                    </a>
                                </div>

                                <div class="main-menu__nav">
                                    <ul class="main-menu__list">

                                        <li>
                                            <a href="javascript:void(0);" class="active">Home</a>

                                        </li>
                                        <li class="dropdown">
                                            <a href="javascript:void(0);">Online Examination</a>
                                            <ul>
                                                <li><a href="courses.html">Assessment Page</a></li>
                                                <li><a href="course-detail.html">Assessment Detail</a></li>
                                            </ul>
                                        </li>


                                        <li>
                                            <a href="javascript:void(0);">Pricing</a>
                                        </li>



                                        <li class="dropdown ">
                                            <a href="javascript:void(0);">Resources</a>
                                            <ul>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="team.html">Our Teacher</a></li>
                                                <li><a href="team-detail.html">Teacher Detail</a></li>
                                                <li><a href="join.html">Become Teacher</a></li>
                                                <li><a href="gallery.html">Gallery 1</a></li>
                                                <li><a href="gallery.html">Gallery 2</a></li>
                                                <li><a href="faq.html">Faq's</a></li>
                                                <li><a href="login.html">Login</a></li>
                                                <li><a href="register.html">Register</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="main-menu__right">
                                <a href="#" class="main-menu__search search-toggler">
                                    <i class='fas fa-search'></i>
                                </a>
                                <a href="login.html" class="main-menu__login">
                                    <i class="fal fa-user"></i>
                                </a>
                                <a href="contact.html" class="educate-btn sm d-xl-flex d-none"><span class="educate-btn__curve"></span>Get
                                    Started</a>
                                <a href="#" class="main-menu__toggler mobile-nav__toggler">
                                    <i class="fa fa-bars"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <div class="stricky-header stricked-menu main-menu">
                <div class="sticky-header__content"></div>
            </div>



            <section class="hero-banner-1">
                <div class="container">
                    <div class="icons">
                        <img src="assets/media/shapes/dollar.png" alt="" class="dollar wow zoomIn" data-wow-delay="400ms" />
                        <img src="assets/media/shapes/mic.png" alt="" class="mic wow zoomIn" data-wow-delay="500ms" />
                        <img src="assets/media/shapes/light.png" alt="" class="light wow zoomIn" data-wow-delay="600ms" />
                        <img src="assets/media/shapes/camera.png" alt="" class="camera wow zoomIn" data-wow-delay="700ms" />
                    </div>
                    <div class="content">
                        <div class="text_block wow fadeInUp" data-wow-delay="800ms">
                            <div class="row">
                                <div class="col-xl-6 col-lg-8">
                                    <img src="assets/media/shapes/tag.png" alt="" class="mb-24 tag wow slideInDown" data-wow-delay="550ms" />
                                    <h1 class="mb-16 title">Best Online Practicing <span class="fm-sec">Platform! <img
                                        src="assets/media/shapes/rocket.png" alt="" class="rocket wow zoomIn"
                                        data-wow-delay="700ms" /></span></h1>
                                    <h4 class="mb-48">Make Your Free Account & Get Discounts</h4>
                                    <div class="btn_block">
                                        <a href="contact.html" class="educate-btn sec"><span class="educate-btn__curve"></span>Get a free
                                            Trail
                                        </a>
                                        <img src="assets/media/shapes/arrow.png" alt="" class="arrow" />
                                    </div>
                                    <div class="video-btn wow zoomIn" data-wow-delay="700ms">
                                        <img src="assets/media/banners/hero-banner-1/round-text.png" alt="" class="text-vector" />
                                        <a href="https://www.youtube.com/watch?v=8nXX1WOuvrk" class="play-btn video-popup"><i
                                            class="fas fa-play"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="banner_feature_card">
                        <div class="card_block">
                            <h6 class="mb-4p">Award Winning Milestones</h6>
                            <p>Based on Latest Knowledge</p>
                            <img src="assets/media/shapes/target-2.png" alt="" class="target_icon" />
                        </div>
                    </div>
                    <img src="assets/media/banners/hero-banner-1/main-img.png" alt="" class="main-img" />
                </div>
            </section>



            <section class="py-60">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-sm-6 wow fadeInUp" data-wow-delay="200ms">
                            <div class="feature__card mb-24 mb-xl-0">
                                <div class="feature__icon">
                                    <img src="assets/media/icons/Pricing.png" alt="" />
                                </div>
                                <div class="feature__content">
                                    <h5 class="mb-8">Free Trials</h5>
                                    <p>Users can enjoy up to a 3-month free trial for an exclusive experience!</p>
                                    <img src="assets/media/shapes/feture-bg-shape.png" alt="" class="feature-bg-shape" />
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 wow fadeInUp" data-wow-delay="400ms">
                            <div class="feature__card mb-24 mb-xl-0">
                                <div class="feature__icon">
                                    <img src="assets/media/icons/Quality.png" alt="" />
                                </div>
                                <div class="feature__content">
                                    <h5 class="mb-8">Unlimited Access</h5>
                                    <p>With unlimited access, users can explore all examinations without any restrictions.</p>
                                    <img src="assets/media/shapes/feture-bg-shape.png" alt="" class="feature-bg-shape" />
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                            <div class="feature__card mb-24 mb-sm-0">
                                <div class="feature__icon">
                                    <img src="assets/media/icons/Check-mark.png" alt="" />
                                </div>
                                <div class="feature__content">
                                    <h5 class="mb-8">Accuracy </h5>
                                    <p>Each exam boasts an impressive 99% accuracy, ensuring reliable and consistent performance.</p>
                                    <img src="assets/media/shapes/feture-bg-shape.png" alt="" class="feature-bg-shape" />
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 wow fadeInUp" data-wow-delay="800ms">
                            <div class="feature__card">
                                <div class="feature__icon">
                                    <img src="assets/media/icons/Support.png" alt="" />
                                </div>
                                <div class="feature__content">
                                    <h5 class="mb-8">24/7 Access</h5>
                                    <p>Educators benefit from 24/7 access, providing continuous support and flexibility.</p>
                                    <img src="assets/media/shapes/feture-bg-shape.png" alt="" class="feature-bg-shape" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section class="py-60">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 mb-48 mb-lg-0">
                            <div class="heading mb-16">
                                <h6 class="color-primary mb-8">–––– About Us</h6>
                                <h2>Cultivating a Digital Learning <span class="fm-sec">Ecosystem.</span></h2>
                            </div>
                            <p class="mb-32">Building a thriving digital learning ecosystem to foster engaging and effective
                                educational experiences.</p>
                            <div class="about__card mb-24 wow fadeInLeft" data-wow-delay="200ms">
                                <div class="about__card__icon">
                                    <img src="assets/media/icons/Clock.png" alt="" />
                                </div>
                                <div class="about__card__content">
                                    <h5 class="mb-4p">Latest Courses</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus. Volutpat tortor
                                        tincidunt egestas sit risus.</p>
                                </div>
                            </div>
                            <div class="about__card mb-24 wow fadeInLeft" data-wow-delay="400ms">
                                <div class="about__card__icon">
                                    <img src="assets/media/icons/WiFi.png" alt="" />
                                </div>
                                <div class="about__card__content">
                                    <h5 class="mb-4p">Latest Courses</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus. Volutpat tortor
                                        tincidunt egestas sit risus.</p>
                                </div>
                            </div>
                            <div class="text-end wow fadeInUp" data-wow-delay="600ms">
                                <a href="about.html" class="educate-btn"><span class="educate-btn__curve"></span>Learn More</a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="educate-tilt"
                                data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 2, "speed": 700, "scale": 1 }'>
                                <img src="assets/media/resources/about-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section class="py-60 ">
                <div class="container">
                    <div class="section-title mb-48">
                        <div class="heading">
                            <h6 class="color-primary mb-8">–––– Assessment Categories</h6>
                            <h2>Begin Your Learning,<br /> Something For <span class="fm-sec">Everyone</span></h2>
                        </div>
                        <a href="courses.html" class="educate-btn d-md-block d-none"><span class="educate-btn__curve"></span>View
                            All</a>
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="150ms">
                            <div class="course__category__card_1 mb-24">
                                <div class="course__category__card_text">
                                    <a href="courses.html" class="course__category__card_title h4 mb-16">Language Proficiency</a>
                                    <p class="mb-40">Tests to assess language skills, such as TOEFL or IELTS.</p>
                                    <ul class="category__info p-0 mb-8">
                                        <li><i class="fas fa-star"></i>5</li>
                                        <li><i class="fal fa-graduation-cap"></i>10 Teachers</li>
                                        <li><i class="fal fa-clock"></i>60+</li>
                                    </ul>
                                </div>
                                <img src="assets/media/courses/categories/c-1.png" alt="" class="image" />
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div class="course__category__card_1 mb-24">
                                <div class="course__category__card_text">
                                    <a href="courses.html" class="course__category__card_title h4 mb-16">Economic & Finances</a>
                                    <p class="mb-40">Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus.</p>
                                    <ul class="category__info p-0 mb-8">
                                        <li><i class="fas fa-star"></i>5</li>
                                        <li><i class="fal fa-graduation-cap"></i>10 Teachers</li>
                                        <li><i class="fal fa-clock"></i>60+</li>
                                    </ul>
                                </div>
                                <img src="assets/media/courses/categories/c-2.png" alt="" class="image" />
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="450ms">
                            <div class="course__category__card_1 mb-24">
                                <div class="course__category__card_text">
                                    <a href="courses.html" class="course__category__card_title h4 mb-16">Creative Arts</a>
                                    <p class="mb-40">Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus.</p>
                                    <ul class="category__info p-0 mb-8">
                                        <li><i class="fas fa-star"></i>5</li>
                                        <li><i class="fal fa-graduation-cap"></i>10 Teachers</li>
                                        <li><i class="fal fa-clock"></i>60+</li>
                                    </ul>
                                </div>
                                <img src="assets/media/courses/categories/c-4.png" alt="" class="image" />
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                            <div class="course__category__card_1 mb-24 mb-xl-0">
                                <div class="course__category__card_text">
                                    <a href="courses.html" class="course__category__card_title h4 mb-16">Graphic Design</a>
                                    <p class="mb-40">Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus.</p>
                                    <ul class="category__info p-0 mb-8">
                                        <li><i class="fas fa-star"></i>5</li>
                                        <li><i class="fal fa-graduation-cap"></i>10 Teachers</li>
                                        <li><i class="fal fa-clock"></i>60+</li>
                                    </ul>
                                </div>
                                <img src="assets/media/courses/categories/c-3.png" alt="" class="image" />
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="750ms">
                            <div class="course__category__card_1 mb-24 mb-xl-0">
                                <div class="course__category__card_text">
                                    <a href="courses.html" class="course__category__card_title h4 mb-16">Artificial Intelligence</a>
                                    <p class="mb-40">Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus.</p>
                                    <ul class="category__info p-0 mb-8">
                                        <li><i class="fas fa-star"></i>5</li>
                                        <li><i class="fal fa-graduation-cap"></i>10 Teachers</li>
                                        <li><i class="fal fa-clock"></i>60+</li>
                                    </ul>
                                </div>
                                <img src="assets/media/courses/categories/c-5.png" alt="" class="image" />
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="900ms">
                            <div class="course__category__card_1 mb-24 mb-xl-0">
                                <div class="course__category__card_text">
                                    <a href="courses.html" class="course__category__card_title h4 mb-16">Computer Sciences</a>
                                    <p class="mb-40">Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus.</p>
                                    <ul class="category__info p-0 mb-8">
                                        <li><i class="fas fa-star"></i>5</li>
                                        <li><i class="fal fa-graduation-cap"></i>10 Teachers</li>
                                        <li><i class="fal fa-clock"></i>60+</li>
                                    </ul>
                                </div>
                                <img src="assets/media/courses/categories/c-6.png" alt="" class="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section class="courses-1 py-60">
                <div class="container">
                    <div class="section-title mb-48">
                        <div class="heading">
                            <h6 class="color-primary mb-8">–––– Test Our Free Libary</h6>
                            <h2>Free Assessments Presented To <br /> You By <span class="fm-sec">Experts</span></h2>
                        </div>
                        <a href="courses.html" class="educate-btn d-md-block d-none"><span class="educate-btn__curve"></span>View
                            All</a>
                    </div>
                </div>
                <div class="courses-slider">

                    <div class="course__card mb-24">
                        <div class="course__card__icon">
                            <img src="assets/media/icons/ps.png" alt="" />
                        </div>
                        <div class="course__card__content">
                            <div class="left__block">
                                <img src="assets/media/courses/tag-1.png" alt="" class="course_tag" />
                                <h4 class="mb-4p"><a href="course-detail.html">Photoshop Course</a></h4>
                                <p class="h6 mb-24">Graphics Design</p>
                                <ul class="course_info p-0 mb-32">
                                    <li><i class="fal fa-presentation"></i>45 Videos</li>
                                    <li><i class="fal fa-clock"></i>05+ Hours</li>
                                </ul>
                                <div class="author_card">
                                    <img src="assets/media/courses/authors/a-1.png" alt="" class="author_img" />
                                    <div class="author_text_block">
                                        <a href="team-detail.html" class="h6 mb-4p">Benny Martin</a>
                                        <p>Adobe Embassador</p>
                                    </div>
                                </div>
                            </div>
                            <div class="right__block">
                                <div class="price_block mb-16">
                                    <div class="price_vector">
                                        <img src="assets/media/shapes/vector-group.png" alt="" />
                                    </div>
                                    <span class="h3 color-white">$45</span>
                                </div>
                                <a href="course-detail.html" class="educate-btn sm mx-xl-auto me-2"><span
                                    class="educate-btn__curve"></span>Buy Now</a>
                            </div>
                            <img src="assets/media/shapes/vector-1.png" alt="" class="bottom_vector" />
                        </div>
                    </div>

                    <div class="course__card mb-24">
                        <div class="course__card__icon">
                            <img src="assets/media/icons/ai.png" alt="" />
                        </div>
                        <div class="course__card__content">
                            <div class="left__block">
                                <img src="assets/media/courses/tag-2.png" alt="" class="course_tag" />
                                <h4 class="mb-4p"><a href="course-detail.html">Artificial Intelligence</a></h4>
                                <p class="h6 mb-24">Graphics Design</p>
                                <ul class="course_info p-0 mb-32">
                                    <li><i class="fal fa-presentation"></i>45 Videos</li>
                                    <li><i class="fal fa-clock"></i>05+ Hours</li>
                                </ul>
                                <div class="author_card">
                                    <img src="assets/media/courses/authors/a-2.png" alt="" class="author_img" />
                                    <div class="author_text_block">
                                        <a href="team-detail.html" class="h6 mb-4p">Ethan Wilson</a>
                                        <p>AI Expert</p>
                                    </div>
                                </div>
                            </div>
                            <div class="right__block">
                                <div class="price_block mb-16">
                                    <div class="price_vector">
                                        <img src="assets/media/shapes/vector-group.png" alt="" />
                                    </div>
                                    <span class="h3 color-white">$40</span>
                                </div>
                                <a href="course-detail.html" class="educate-btn sm mx-xl-auto me-2"><span
                                    class="educate-btn__curve"></span>Buy Now</a>
                            </div>
                            <img src="assets/media/shapes/vector-1.png" alt="" class="bottom_vector" />
                        </div>
                    </div>

                    <div class="course__card mb-24">
                        <div class="course__card__icon">
                            <img src="assets/media/icons/desktop.png" alt="" />
                        </div>
                        <div class="course__card__content">
                            <div class="left__block">
                                <img src="assets/media/courses/tag-1.png" alt="" class="course_tag" />
                                <h4 class="mb-4p"><a href="course-detail.html">Web Design Course</a></h4>
                                <p class="h6 mb-24">Graphics Design</p>
                                <ul class="course_info p-0 mb-32">
                                    <li><i class="fal fa-presentation"></i>45 Videos</li>
                                    <li><i class="fal fa-clock"></i>05+ Hours</li>
                                </ul>
                                <div class="author_card">
                                    <img src="assets/media/courses/authors/a-3.png" alt="" class="author_img" />
                                    <div class="author_text_block">
                                        <a href="team-detail.html" class="h6 mb-4p">Ava Johnson</a>
                                        <p>Web Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="right__block">
                                <div class="price_block mb-16">
                                    <div class="price_vector">
                                        <img src="assets/media/shapes/vector-group.png" alt="" />
                                    </div>
                                    <span class="h3 color-white">$45</span>
                                </div>
                                <a href="course-detail.html" class="educate-btn sm mx-xl-auto me-2"><span
                                    class="educate-btn__curve"></span>Buy Now</a>
                            </div>
                            <img src="assets/media/shapes/vector-1.png" alt="" class="bottom_vector" />
                        </div>
                    </div>

                    <div class="course__card mb-24">
                        <div class="course__card__icon">
                            <img src="assets/media/icons/figma.png" alt="" />
                        </div>
                        <div class="course__card__content">
                            <div class="left__block">
                                <img src="assets/media/courses/tag-2.png" alt="" class="course_tag" />
                                <h4 class="mb-4p"><a href="course-detail.html">Figma Course</a></h4>
                                <p class="h6 mb-24">Graphics Design</p>
                                <ul class="course_info p-0 mb-32">
                                    <li><i class="fal fa-presentation"></i>45 Videos</li>
                                    <li><i class="fal fa-clock"></i>05+ Hours</li>
                                </ul>
                                <div class="author_card">
                                    <img src="assets/media/courses/authors/a-4.png" alt="" class="author_img" />
                                    <div class="author_text_block">
                                        <a href="team-detail.html" class="h6 mb-4p">Emma Mitchell</a>
                                        <p>Ui Engineer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="right__block">
                                <div class="price_block mb-16">
                                    <div class="price_vector">
                                        <img src="assets/media/shapes/vector-group.png" alt="" />
                                    </div>
                                    <span class="h3 color-white">$45</span>
                                </div>
                                <a href="course-detail.html" class="educate-btn sm mx-xl-auto me-2"><span
                                    class="educate-btn__curve"></span>Buy Now</a>
                            </div>
                            <img src="assets/media/shapes/vector-1.png" alt="" class="bottom_vector" />
                        </div>
                    </div>

                    <div class="course__card mb-24">
                        <div class="course__card__icon">
                            <img src="assets/media/icons/ai2.png" alt="" />
                        </div>
                        <div class="course__card__content">
                            <div class="left__block">
                                <img src="assets/media/courses/tag-1.png" alt="" class="course_tag" />
                                <h4 class="mb-4p"><a href="course-detail.html">Illustrator Course</a></h4>
                                <p class="h6 mb-24">Graphics Design</p>
                                <ul class="course_info p-0 mb-32">
                                    <li><i class="fal fa-presentation"></i>45 Videos</li>
                                    <li><i class="fal fa-clock"></i>05+ Hours</li>
                                </ul>
                                <div class="author_card">
                                    <img src="assets/media/courses/authors/a-5.png" alt="" class="author_img" />
                                    <div class="author_text_block">
                                        <a href="team-detail.html" class="h6 mb-4p">Benny Martin</a>
                                        <p>Adobe Embassador</p>
                                    </div>
                                </div>
                            </div>
                            <div class="right__block">
                                <div class="price_block mb-16">
                                    <div class="price_vector">
                                        <img src="assets/media/shapes/vector-group.png" alt="" />
                                    </div>
                                    <span class="h3 color-white">$45</span>
                                </div>
                                <a href="course-detail.html" class="educate-btn sm mx-xl-auto me-2"><span
                                    class="educate-btn__curve"></span>Buy Now</a>
                            </div>
                            <img src="assets/media/shapes/vector-1.png" alt="" class="bottom_vector" />
                        </div>
                    </div>

                    <div class="course__card mb-24">
                        <div class="course__card__icon">
                            <img src="assets/media/icons/ai3.png" alt="" />
                        </div>
                        <div class="course__card__content">
                            <div class="left__block">
                                <img src="assets/media/courses/tag-2.png" alt="" class="course_tag" />
                                <h4 class="mb-4p"><a href="course-detail.html">After Effects Course</a></h4>
                                <p class="h6 mb-24">Graphics Design</p>
                                <ul class="course_info p-0 mb-32">
                                    <li><i class="fal fa-presentation"></i>45 Videos</li>
                                    <li><i class="fal fa-clock"></i>05+ Hours</li>
                                </ul>
                                <div class="author_card">
                                    <img src="assets/media/courses/authors/a-6.png" alt="" class="author_img" />
                                    <div class="author_text_block">
                                        <a href="team-detail.html" class="h6 mb-4p">Miller Noah</a>
                                        <p>Senior Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="right__block">
                                <div class="price_block mb-16">
                                    <div class="price_vector">
                                        <img src="assets/media/shapes/vector-group.png" alt="" />
                                    </div>
                                    <span class="h3 color-white">$45</span>
                                </div>
                                <a href="course-detail.html" class="educate-btn sm mx-xl-auto me-2"><span
                                    class="educate-btn__curve"></span>Buy Now</a>
                            </div>
                            <img src="assets/media/shapes/vector-1.png" alt="" class="bottom_vector" />
                        </div>
                    </div>
                </div>
            </section>


            <section class="py-60 ">
                <div class="container">
                    <div class="contact_banner">
                        <h2 class="mb-8 color-white">Ask Any Questions <br /><span class="fm-sec">You Want!</span></h2>
                        <p class="mb-16 color-white">Contact on this number for any Questions!</p>
                        <div class="mx-auto">
                            <a href="tel:123456789" class="h5 phone_number">+1 234 567 890</a>
                        </div>
                        <div class="icons">
                            <img src="assets/media/shapes/dots-1.png" alt="" class="element-1" />
                            <img src="assets/media/shapes/vector-3.png" alt="" class="element-2" />
                            <img src="assets/media/shapes/paint.png" alt="" class="element-3" />
                            <img src="assets/media/shapes/vector-4.png" alt="" class="element-5" />
                            <img src="assets/media/shapes/dots-1.png" alt="" class="element-4" />
                            <img src="assets/media/shapes/tag.png" alt="" class="element-6" />
                            <img src="assets/media/shapes/errow.png" alt="" class="element-7" />
                            <img src="assets/media/shapes/circle-lines.png" alt="" class="element-8" />
                            <img src="assets/media/shapes/mic-speaker.png" alt="" class="element-9" />
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div class="footer_main py-60">
                    <img src="assets/media/shapes/vector-7.png" alt="" class="vector_shape" />
                    <img src="assets/media/shapes/dots-1.png" alt="" class="dots" />
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 ">
                                <div class="footer_widget">
                                    <a href="index.html" class="mb-8"><img src="assets/media/logo.png" alt="" /></a>
                                    <p class="description_text">Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus.
                                        Volutpat tortor tincidunt egestas sit risus donec.</p>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-3 col-sm-6">
                                <div class="footer_widget">
                                    <h5 class="medium-black mb-16">Quick Links</h5>
                                    <ul class="unstyled list">
                                        <li><a href=""><i class="fad fa-chevron-right"></i>Courses</a></li>
                                        <li><a href=""><i class="fad fa-chevron-right"></i>Join a Career</a></li>
                                        <li><a href=""><i class="fad fa-chevron-right"></i>Upcoming Events</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-3 col-sm-6">
                                <div class="footer_widget">
                                    <h5 class="medium-black mb-16">Explore</h5>
                                    <ul class="unstyled list">
                                        <li><a href="about.html"><i class="fad fa-chevron-right"></i>About Us</a></li>
                                        <li><a href="gallery.html"><i class="fad fa-chevron-right"></i>Gallery</a></li>
                                        <li><a href="team-detail.html"><i class="fad fa-chevron-right"></i>Teacher’s Detail</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-3 col-sm-6">
                                <div class="footer_widget">
                                    <h5 class="medium-black mb-16">Information</h5>
                                    <ul class="unstyled list">
                                        <li><a href="login.html"><i class="fad fa-chevron-right"></i>Login</a></li>
                                        <li><a href="register.html"><i class="fad fa-chevron-right"></i>Register</a></li>
                                        <li><a href="contact.html"><i class="fad fa-chevron-right"></i>Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="footer_widget">
                                    <h5 class="medium-black mb-16">Contact Us</h5>
                                    <ul class="unstyled list">
                                        <li class="mb-16"><i class="fal fa-map-marker-alt"></i>631 Elgin ST. Celina, State 111111</li>
                                        <li class="mb-16"><a href="mailto:info@example.com"><i
                                            class="fal fa-envelope"></i>email@example.com</a></li>
                                        <li><a href="tel:123456789"><i class="fal fa-phone-alt"></i>+1 234 567 890</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="bottom-row">
                            <ul class="unstyled social_icons_list">
                                <li><img src="assets/media/icons/brands/Instagram.png" alt="" /></li>
                                <li><img src="assets/media/icons/brands/Facebook.png" alt="" /></li>
                                <li><img src="assets/media/icons/brands/Twitter.png" alt="" /></li>
                                <li><img src="assets/media/icons/brands/Linkedin.png" alt="" /></li>
                            </ul>
                            <div class="newsletter_block">
                                <h5>Newsletter</h5>
                                <form class="newsletter">
                                    <input type="email" class="form-control" required placeholder="Your email" />
                                    <button type="submit" class="educate-btn sm"><span class="educate-btn__curve"></span>Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright_row">
                    <p>©2024 Educate All Rights Reserved.</p>
                </div>
                <div />
            </footer>


        </div>



    )
}
