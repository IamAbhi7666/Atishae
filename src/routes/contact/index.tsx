import { component$, useStylesScoped$ } from  '@builder.io/qwik';
import style from './contact.css?inline'

export default component$(()=>{
    useStylesScoped$(style);

    return (
        <>
            <section class="ml-section-2">
                <div class="container-fluid">
                    <div class="row">
                        <div class="offset-lg-1 col-lg-10 p-5 mt-md-0 mt-lg-5">
                            <div class="row">
                                <div class="col-12 col-sm-6 col-md-12 col-lg-6 mb-4" style="
                                    background-color: #ffffff;
                                    box-shadow: 0px -1px 20px 0px #e0e0e0;
                                    ">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="p-md-0 p-lg-5 mt-4">
                                                <h2 class="pb-3 text-[44px] font-bold">Get in touch with us</h2>
                                                <p class="pr-md-0 pr-lg-5 text-[22px]">
                                                    Drop us a line about your project at
                                                    <a href="mailto:info@atishae.net" target="_blank" class="text-blue-500"> info@atishae.net</a>
                                                    or via the contact form below, and we will contact you
                                                    within a business day. All submitted information will be
                                                    kept confidential.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-md-12 col-lg-12">
                                            <a class="btn-green" href="https://atisundar.typeform.com/to/tyGA5o" target="_blank">
                                                <button class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-8 rounded-full mt-3 mb-4 ml-5 float-right">
                                                Write to us
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="expertise-section contoffice">
                <div class="container-fluid">
                    <div class="row">
                        <div class="offset-lg-1 col-lg-10 pt-5 pb-2 mt-4">
                            <h2 class="text-white text-[32px] font-bold">Reach out to us at any of the below locations.</h2>
                        </div>
                        <div class="offset-lg-1 col-lg-10 pt-5 pb-5">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-xs-12 col-md-4 p-2">
                                        <img src="src/components/images/office1.jpg" alt="surat office"/>
                                        <div class="p-2">
                                            <h2 class="text-[32px] font-bold text-white mb-2">Surat</h2>
                                            <p class="text-[20px] mb-4">704, SNS Platina, Vesu, <br/>Surat - 395007</p>
                                            <aside class=" text-[22px] font-medium">
                                                <a href="mailto:surat@atishae.net">surat@atishae.net</a>
                                            </aside>
                                            <a href="https://goo.gl/maps/XS5kP1JeUk6HTUDP6" target="_blank"><small>View Map</small></a>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-4 p-2">
                                        <img src="src/components/images/office2.jpg" alt="delhi office"/>
                                        <div class="p-2">
                                            <h2 class="text-[32px] font-bold text-white mb-2">Delhi</h2>
                                            <p class="text-[20px] mb-4">
                                                U-8, Ground Floor, Green Park Main, <br/>New Delhi -
                                                110016
                                            </p>
                                            <aside class=" text-[22px] font-medium">
                                                <a href="mailto:delhi@atishae.net">delhi@atishae.net</a>
                                            </aside>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-4 p-2">
                                        <img src="src/components/images/office3.jpg" alt="bengaluru office"/>
                                        <div class="p-2">
                                            <h2 class="text-[32px] font-bold text-white mb-2">Bengaluru</h2>
                                            <p class="text-[20px] mb-4">Richmond Street, Near Woodlands, <br/>Bengaluru</p>
                                            <aside class=" text-[22px] font-medium">
                                                <a href="mailto:bengaluru@atishae.net">bengaluru@atishae.net</a>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ml-section-2 contcar-bg">
                <div class="container-fluid">
                    <div class="row">
                        <div class="offset-lg-3 col-lg-6 pt-5 pb-5">
                            <div class="">
                                <h3 class="text-3xl font-[600]">Looking for a career @ <span class="text-blue-400">ATISHAE?</span></h3>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 pt-5 pb-5">
                                    <div class="pt-3 pb-3">
                                    <div class="container-fluid ">
                                        <div class="row career-tab">
                                            <div class="col-6 font-bold">
                                                <a href="#">+
                                                <h4 class="mb-[8px]">Angular Developers</h4></a>
                                            </div>
                                            <div class="col-6 font-light text-right mb-4">
                                                <aside>
                                                    <i class="fa fa-map-marker px-[10px] align-middle" aria-hidden="true"></i>
                                                    <p class="mb-[16px] inline-block">Surat</p>
                                                </aside>
                                            </div>
                                        </div>
                                        <div class="row career-tab">
                                            <div class="col-6 font-bold">
                                                <a href="#">+
                                                <h4 class="mb-[8px]">Java Developers</h4></a>
                                            </div>
                                            <div class="col-6 font-light text-right mb-4">
                                                <aside>
                                                <i class="fa fa-map-marker px-[10px] align-middle" aria-hidden="true"></i>
                                                <p class="mb-[16px] inline-block">Surat</p>
                                                </aside>
                                            </div>
                                        </div>
                                        <div class="row career-tab">
                                            <div class="col-6 font-bold">
                                                <a href="#">+
                                                <h4 class="mb-[8px]">QA Engineers</h4></a>
                                            </div>
                                            <div class="col-6 font-light text-right mb-4">
                                                <aside>
                                                <i class="fa fa-map-marker px-[10px] align-middle" aria-hidden="true"></i>
                                                <p class="mb-[16px] inline-block">Surat</p>
                                                </aside>
                                            </div>
                                        </div>
                                        <div class="row career-tab">
                                            <div class="col-6 font-bold">
                                                <a href="#">+
                                                <h4 class="mb-[8px]">Project Managers</h4></a>
                                            </div>
                                            <div class="col-6 font-light text-right mb-4">
                                                <aside>
                                                <i class="fa fa-map-marker px-[10px] align-middle" aria-hidden="true"></i>
                                                <p class="mb-[16px] inline-block">Surat</p>
                                                </aside>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
})