import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import styles from './about.css?inline'

export default component$(()=>{
    useStylesScoped$(styles);

    return (
        <>
            <section class="about-section-2">
                <div class="container-fluid">
                    <div class="row">
                        <div class="offset-lg-1 col-lg-10 pb-5 mt-md-0 mt-lg-5">
                            <div class="row">
                                <div class="col-12 col-sm-6 col-md-12 col-lg-5 mb-4 aos-item aos-init aos-animate" data-aos="fade-up">
                                    <div class="p-md-0 p-lg-4">
                                        <h2 class="pb-3 text-4xl font-bold text-black text-left">
                                            Enterprise Software <br/>Development, 
                                            <label class="text-blue-500">&nbsp;Since 2001</label>
                                        </h2>
                                        <p class="pr-md-0 pr-lg-5 text-black text-left text-[22px]">
                                            <label class="mb-2 text-[20px]  font-bold">ATISHAE Web Private Limited</label> was established
                                            as a Private Limited Company in August 2001. It has its
                                            registered Head Office in Delhi and has development centres
                                            in Surat &amp; Bangalore.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-md-12 col-lg-7 mb-4 aos-item aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
                                    <img src="src/components/images/about-section-2-img.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="expertise-section text-white">
                <div class="container-fluid">
                    <div class="row">
                        <div class="offset-lg-1 col-lg-10 py-[48px]">
                            <h2 class="pb-5 area aos-item aos-init aos-animate text-[32px]" data-aos="fade-up">
                                Areas of Expertise
                            </h2>
                            <div class="row py-[48px] aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                <div class="col-xs-12 col-md-6">
                                    <img src="src/components/images/enterprise-software.png"/>
                                    <h2 class="text-[22px]">Enterprise Software</h2>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <p class="text-[18px]">
                                        From individual processes to the entire business, we help you
                                        benefit from the latest in technology to increase
                                        productivity, performance and accountability leading to a
                                        healthier bottom line.
                                    </p>
                                </div>
                            </div>

                            <div class="row py-[48px] bottomline aos-item aos-init" data-aos="fade-up" data-aos-delay="200">
                                <div class="col-sm-12 col-md-6">
                                    <img src="src/components/images/mobile-applications.png"/>
                                    <h2 class="text-[22px]">Mobile Applications</h2>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <p class="text-[18px]">
                                        Got an idea? We've got the perfect team! Hybrid, Native and
                                        everything in between
                                    </p>
                                </div>
                            </div>

                            <div class="row py-[48px] bottomline aos-item aos-init" data-aos="fade-up" data-aos-delay="300">
                                <div class="col-xs-12 col-md-6">
                                    <img src="src/components/images/machine-learning.png"/>
                                    <h2 class="text-[22px]">Machine Learning</h2>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <p class="text-[18px]">
                                        Building systems that learn and automate repetitive tasks to
                                        aid and super charge your existing teams!
                                    </p>
                                </div>
                            </div>

                            <div class="row py-[48px] bottomline aos-item aos-init" data-aos="fade-up" data-aos-delay="400">
                                <div class="col-xs-12 col-md-6">
                                    <img src="src/components/images/mobicircle-icon.png"/>
                                    <h2 class="text-[22px]">Mobicircles</h2>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <p class="text-[18px]">
                                        Mobicircles is your WORK App mobile based attendance, work
                                        log, reporting and digitisation of all your business processes
                                        including remote and field sales and more!
                                    </p>
                                </div>
                            </div>

                            <div class="row py-[48px] bottomline aos-item aos-init" data-aos="fade-up" data-aos-delay="500">
                                <div class="col-xs-12 col-md-6">
                                    <img src="src/components/images/e10x.png"/>
                                    <h2 class="text-[22px]">E10x</h2>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <p class="text-[18px]">
                                        Web based ERP suite. Complete with FA, Inventory, HR,
                                        Production, Planning and more! GST integrated.
                                    </p>
                                </div>
                            </div>

                            <div class="row py-[48px] bottomline aos-item aos-init" data-aos="fade-up" data-aos-delay="600">
                                <div class="col-xs-12 col-md-6">
                                    <img src="src/components/images/turnkey-projects.png"/>
                                    <h2 class="text-[22px]">Turnkey Projects</h2>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <p class="text-[18px]">
                                        Looking for peace of mind? Need more than just software to
                                        make your dream come alive. Custom Hardware integrations, roll
                                        outs, trainings - Let us make it happen.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="about-section-3 pb-5">
                <div class="container-fluid">
                    <div class="row">
                        <div class="offset-lg-1 col-lg-10 pt-md-5 pt-lg-5 pb-5 mt-5">
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-4">
                                    <div class="p-md-0 p-lg-4">
                                        <h2 class="pb-4 aos-item aos-init aos-animate text-[44px] font-bold" data-aos="fade-up">
                                            Industry Coverage
                                        </h2>
                                        <ul>
                                            <li class="aos-item aos-init aos-animate text-[22px] font-medium" data-aos="fade-up" data-aos-delay="100">
                                            Gems and Jewellery
                                            </li>
                                            <li class="aos-item aos-init aos-animate text-[22px] font-medium" data-aos="fade-up" data-aos-delay="200">
                                            Telecommunicaton
                                            </li>
                                            <li class="aos-item aos-init aos-animate text-[22px] font-medium" data-aos="fade-up" data-aos-delay="300">
                                            Textiles
                                            </li>
                                            <li class="aos-item aos-init aos-animate text-[22px] font-medium" data-aos="fade-up" data-aos-delay="400">
                                            Retail and Wholesale
                                            </li>
                                            <li class="aos-item aos-init aos-animate text-[22px] font-medium" data-aos="fade-up" data-aos-delay="500">
                                            Automobiles
                                            </li>
                                            <li class="aos-item aos-init aos-animate text-[22px] font-medium" data-aos="fade-up" data-aos-delay="600">
                                            Education
                                            </li>
                                            <li class="aos-item aos-init aos-animate text-[22px] font-medium" data-aos="fade-up" data-aos-delay="700">
                                            Finance &amp; Fin Tech
                                            </li>
                                            <li class="aos-item aos-init aos-animate text-[22px] font-medium" data-aos="fade-up" data-aos-delay="800">
                                            Engineering
                                            </li>
                                            <li class="aos-item aos-init aos-animate text-[22px] font-medium" data-aos="fade-up" data-aos-delay="900">
                                            Fashion &amp; Beauty
                                            </li>
                                            <li class="aos-item aos-init aos-animate text-[22px] font-medium" data-aos="fade-up" data-aos-delay="1000">
                                            Manufacturing
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-6 mb-4">
                                <div class="p-md-0 p-lg-4 sizerange">
                                    <h2 class="pb-4 mb-0 aos-item aos-init aos-animate text-[44px] font-bold" data-aos="fade-up" data-aos-delay="100">
                                        Customers Size Range
                                    </h2>
                                    <p class="aos-item aos-init aos-animate" data-aos="fade-up">
                                        Fortune 500 Companies
                                    </p>
                                    <div class="custom-dot">
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="200"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="300"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="400"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="500"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="600"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="700"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="800"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="900"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1000"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1100"></span>
                                        <span class="dot aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1200"></span>
                                        <span class="dot aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1300"></span>
                                        <span class="dot aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1400"></span>
                                        <span class="dot aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1500"></span>
                                        <span class="dot aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1600"></span>
                                        <span class="dot aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1700"></span>
                                        <span class="dot aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1800"></span>
                                        <span class="dot aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1900"></span>
                                        <span class="dot aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="2000"></span>
                                        <span class="dot d-none d-sm-inline-block aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="2100"></span>
                                        <span class="dot d-none d-sm-inline-block aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="2200"></span>
                                    </div>

                                    <p class="aos-item aos-init aos-animate" data-aos="fade-up">
                                        Medium-Sized Businesses
                                    </p>
                                    <div class="custom-dot">
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="200"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="300"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="400"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="500"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="600"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="700"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="800"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="900"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1000"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1100"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1200"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1300"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1400"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1500"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1600"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1700"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1800"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1900"></span>
                                        <span class="dot aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="2000"></span>
                                        <span class="dot d-none d-sm-inline-block aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="2100"></span>
                                        <span class="dot d-none d-sm-inline-block aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="2200"></span>
                                    </div>

                                    <p class="aos-item aos-init aos-animate" data-aos="fade-up">Startup</p>
                                    <div class="custom-dot">
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="200"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="300"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="400"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="500"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="600"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="700"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="800"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="900"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1000"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1100"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1200"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1300"></span>
                                        <span class="dotcolor aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1400"></span>
                                        <span class="dot aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1500"></span>
                                        <span class="dot aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1600"></span>
                                        <span class="dot aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1700"></span>
                                        <span class="dot aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1800"></span>
                                        <span class="dot aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="1900"></span>
                                        <span class="dot aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="2000"></span>
                                        <span class="dot d-none d-sm-inline-block aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="2100"></span>
                                        <span class="dot d-none d-sm-inline-block aos-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="2200"></span>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
});