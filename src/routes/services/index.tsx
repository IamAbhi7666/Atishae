import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import styles from './services.css?inline'

export default component$(()=>{
    useStylesScoped$(styles);

    return (
        <>
            <header class="header">
                <section class="heroImg2">
                    <div class="container mx-auto">
                        <div class="row">
                            <div class="col-6">
                                <p class="animated animatedFadeInUp fadeInUp mb-5 text-[33px] text-gray-300">
                                        <strong class="text-[44px]  text-white">We offer our clients tailored solutions to ensure a successful outcome every time.</strong><br />
                                        In today's rapidly evolving technology world, clients engage us to help them make the best use of the latest technology in their enterprises!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </header>

            <section class="ml-section-border ml-section-2 pb-5 pt-28">
                <div class="container-fluid">
                    <div class="row">
                        <div class="offset-lg-1 col-lg-10">
                            <div class="row">
                                <div class="col-lg-4 col-sm-6 portfolio-item mb-4 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                    <a>
                                        <div class="card h-100">
                                            <div class="card-body p-12">
                                                <h4 class="card-title font-bold flex items-center">
                                                    <img src="src/components/images/isc-icon.png"/> IT Strategy &amp;
                                                    Consulting
                                                </h4>
                                                <p class="card-text">
                                                    To enforce your decision-making, ATISHAE delivers
                                                    tailored consulting services, including technology and
                                                    product roadmapping, legacy audit, workflows
                                                    formalization, programs for technology refreshment and
                                                    expansion.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-4 col-sm-6 portfolio-item mb-4 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    <a>
                                        <div class="card h-100">
                                            <div class="card-body p-12">
                                                <h4 class="card-title font-bold flex items-center">
                                                    <img src="src/components/images/ad-icon.png"/> Application
                                                    Development
                                                </h4>
                                                <p class="card-text">
                                                    We develop, customize, migrate and modernize custom apps
                                                    for specific business needs such as data, workflows and
                                                    infrastructure management, customer engagement,
                                                    analytics, digital content, and omnichannel ecommerce.
                                                </p>
                                            </div>
                                    </div>
                                    </a>
                                </div>
                                <div class="col-lg-4 col-sm-6 portfolio-item mb-4 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                    <a>
                                        <div class="card h-100">
                                            <div class="card-body p-12">
                                                <h4 class="card-title font-bold flex items-center">
                                                    <img src="src/components/images/pe-icon.png"/> Products
                                                    Engineering
                                                </h4>
                                                <p class="card-text">
                                                    We assist you through the entire product lifecycle, from
                                                    ideation to featuring on application stores and managing
                                                    updates, addressing critical issues, such as idea
                                                    feasibility, store compliance, monetization and
                                                    licensing.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-4 col-sm-6 portfolio-item mb-4 aos-item aos-init" data-aos="fade-up" data-aos-delay="100">
                                    <a>
                                        <div class="card h-100">
                                            <div class="card-body p-12">
                                                <h4 class="card-title font-bold flex items-center">
                                                    <img src="src/components/images/qat-icon.png"/> QA &amp; Testing
                                                </h4>
                                                <p class="card-text">
                                                    To ensure hassle-free and secure operation of your IT
                                                    systems, ATISHAE offers all-round maintenance,
                                                    enhancement and configuration services. We deploy stable
                                                    solutions for 24/7 application monitoring and
                                                    management.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-4 col-sm-6 portfolio-item mb-4 aos-item aos-init" data-aos="fade-up" data-aos-delay="200">
                                    <a>
                                        <div class="card h-100">
                                            <div class="card-body p-12">
                                                <h4 class="card-title font-bold flex items-center">
                                                    <img src="src/components/images/ms-icon.png"/> Maintainence &amp;
                                                    Support
                                                </h4>
                                                <p class="card-text">
                                                    We offer 1st, 2nd and 3rd level support services for
                                                    applications developed by Itransition or by any third
                                                    party vendor. ATISHAE team will help you with troubles
                                                    of any complexity level — from providing workarounds and
                                                    hot fixes to security audit and application
                                                    customization and enhancement.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-4 col-sm-6 portfolio-item mb-4 aos-item aos-init" data-aos="fade-up" data-aos-delay="300">
                                    <a>
                                        <div class="card h-100">
                                            <div class="card-body p-12">
                                                <h4 class="card-title font-bold flex items-center">
                                                    <img src="src/components/images/ra-icon.png"/> Resource
                                                    Augmentation
                                                </h4>
                                                <p class="card-text">
                                                    ATISHAE can setup a dedicated team of extra engineering
                                                    hands to get your product to market faster or to support
                                                    your existing apps. Salesforce, Oracle apps, e10x ERP
                                                    and more.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-4 col-sm-6 portfolio-item mb-5 aos-item aos-init" data-aos="fade-up" data-aos-delay="100">
                                    <a href="contact.html" style="
                                        background: #391335;
                                        background: -moz-linear-gradient(
                                        45deg,
                                        #391335 0%,
                                        #040d36 67%,
                                        #391335 100%
                                        );
                                        background: -webkit-linear-gradient(
                                        45deg,
                                        #391335 0%,
                                        #040d36 67%,
                                        #391335 100%
                                        );
                                        background: linear-gradient(
                                        45deg,
                                        #391335 0%,
                                        #040d36 67%,
                                        #391335 100%
                                        );
                                        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#391335', endColorstr='#391335',GradientType=1 );
                                        width: 100%;
                                        float: left;
                                        border: 1px solid rgba(0, 0, 0, 0.125);
                                        border-radius: 5px;
                                    ">
                                    <img src="src/components/images/services-img.png" class="talktous"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="about-section-4">
                <div class="container-fluid home-section-6 pt-4 pb-4">
                    <div class="row">
                        <div class="offset-lg-1 col-lg-10 pt-5 pb-5">
                            <h1 class="pb-4 aos-item aos-init aos-animate font-bold" data-aos="fade-up">Technology We Use</h1>
                            <div class="row">
                                <div class="col-6 col-xs-6 col-md-3 col-lg-2 mb-3 aos-item aos-init aos-animate " data-aos="fade-up">
                                    <div class="pt-3 pb-3">
                                        <img src="src/components/images/java.png"/>
                                        <p class="">Java</p>
                                    </div>
                                </div>
                                <div class="col-6 col-xs-6 col-md-3 col-lg-2 mb-5 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="50">
                                    <div class="pt-3 pb-3">
                                        <img src="src/components/images/python.png"/>
                                        <p>Python</p>
                                    </div>
                                </div>
                                <div class="col-6 col-xs-6 col-md-3 col-lg-2 mb-5 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                    <div class="pt-3 pb-3">
                                        <img src="src/components/images/salesforce.png"/>
                                        <p>Salesforce</p>
                                    </div>
                                </div>
                                <div class="col-6 col-xs-6 col-md-3 col-lg-2 mb-5 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
                                    <div class="pt-3 pb-3">
                                        <img src="src/components/images/perl.png"/>
                                        <p>Perl</p>
                                    </div>
                                </div>
                                <div class="col-6 col-xs-6 col-md-3 col-lg-2 mb-5 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    <div class="pt-3 pb-3">
                                        <img src="src/components/images/javascript.png"/>
                                        <p>Javascript</p>
                                    </div>
                                </div>
                                <div class="col-6 col-xs-6 col-md-3 col-lg-2 mb-5 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="250">
                                    <div class="pt-3 pb-3">
                                        <img src="src/components/images/angular.png"/>
                                        <p>Angular</p>
                                    </div>
                                </div>
                                <div class="col-6 col-xs-6 col-md-3 col-lg-2 mb-5 aos-item aos-init aos-animate" data-aos="fade-up">
                                    <div class="pt-3 pb-3">
                                        <img src="src/components/images/ionic.png"/>
                                        <p>Ionic</p>
                                    </div>
                                </div>
                                <div class="col-6 col-xs-6 col-md-3 col-lg-2 mb-5 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="50">
                                    <div class="pt-3 pb-3">
                                        <img src="src/components/images/nativescript.png"/>
                                        <p>Nativescript</p>
                                    </div>
                                </div>
                                <div class="col-6 col-xs-6 col-md-3 col-lg-2 mb-5 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                    <div class="pt-3 pb-3">
                                        <img src="src/components/images/react.png"/>
                                        <p>React</p>
                                    </div>
                                </div>
                                <div class="col-6 col-xs-6 col-md-3 col-lg-2 mb-5 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
                                    <div class="pt-3 pb-3">
                                        <img src="src/components/images/elasticsearch.png"/>
                                        <p>Elasticsearch</p>
                                    </div>
                                </div>
                                <div class="col-6 col-xs-6 col-md-3 col-lg-2 mb-5 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    <div class="pt-3 pb-3">
                                        <img src="src/components/images/django.png"/>
                                        <p>Django</p>
                                    </div>
                                </div>
                                <div class="col-6 col-xs-6 col-md-3 col-lg-2 mb-5 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="250">
                                    <div class="pt-3 pb-3">
                                        <img src="src/components/images/firebase.png"/>
                                        <p>Firebase</p>
                                    </div>
                                </div>
                                <div class="col-6 col-xs-6 col-md-3 col-lg-2 mb-5 aos-item aos-init" data-aos="fade-up">
                                    <div class="pt-3 pb-3">
                                        <img src="src/components/images/cassandra.png"/>
                                        <p>Cassandra</p>
                                    </div>
                                </div>
                                <div class="col-6 col-xs-6 col-md-3 col-lg-2 mb-5 aos-item aos-init" data-aos="fade-up" data-aos-delay="50">
                                    <div class="pt-3 pb-3">
                                        <img src="src/components/images/my-sql.png"/>
                                        <p>My SQL</p>
                                    </div>
                                </div>
                                <div class="col-6 col-xs-6 col-md-3 col-lg-2 mb-5 aos-item aos-init" data-aos="fade-up" data-aos-delay="100">
                                    <div class="pt-3 pb-3">
                                        <img src="src/components/images/oracle.png"/>
                                        <p>Oracle</p>
                                    </div>
                                </div>
                                <div class="col-6 col-xs-6 col-md-3 col-lg-2 mb-5 aos-item aos-init" data-aos="fade-up" data-aos-delay="150">
                                    <div class="pt-3 pb-3">
                                        <img src="src/components/images/postgre.png"/>
                                        <p>Postgre SQL</p>
                                    </div>
                                </div>
                                <div class="col-6 col-xs-6 col-md-3 col-lg-2 mb-5 aos-item aos-init" data-aos="fade-up" data-aos-delay="200">
                                    <div class="pt-3 pb-3">
                                        <img src="src/components/images/mongo.png"/>
                                        <p>Mongo DB</p>
                                    </div>
                                </div>
                                <div class="col-6 col-xs-6 col-md-3 col-lg-2 mb-5 aos-item aos-init" data-aos="fade-up" data-aos-delay="250">
                                    <span>
                                        <img src="src/components/images/and-more.gif" class="p-4 mt-2"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
})