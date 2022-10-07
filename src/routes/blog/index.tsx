import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import styles from './blog.css?inline'

export default component$(()=>{
    useStylesScoped$(styles);

    return (
        <>
            <header class="about-header">		
                <div class="row bg blog-bg">
                    <div class="offset-lg-1 col-lg-10">
                        <div class="container-fluid my-auto aos-item aos-init aos-animate" data-aos="fade-up">
                            <div class="row">
                                <div class="col-lg-6 animated animatedFadeInUp fadeInUp">
                                    <label class="text-white mb-2">June 2020</label>
                                    <h2 class="mb-2 text-[44px] text-white font-bold">Om Metals awards ERP <br /> implementation to ATISHAE</h2>
                                    <p class="mb-5 text-[33px] text-gray-300">OM Metals, the public listed conglomerate, has awarded its ERP design and implementation to ATISHAE. ATISHAE will be implementing it e10x (Educe 10x) suite of applications with MOBIOffice - ATISHAE Work app platform.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section class="por-section-2">
                <div class="offset-lg-1 col-lg-10 pt-5 pb-5 mt-md-0 mt-lg-5">
                    <div class="card-deck">
                        <div class="card mb-4">
                            <img class="card-img-top" src="src/components/images/sns-platina.jpg" alt="Card image cap"/>
                            <div class="card-body">
                                <span>Apr 11, 2019</span>
                                <h5 class="card-title mb-3 text-xl font-bold">
                                    ATISHAE moves in to their new offices @ SNS Platina...
                                </h5>
                                <p class="card-text font-medium">
                                    ATISHAE moves into its new development center @ SNS Platina.
                                </p>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <img class="card-img-top" src="src/components/images/kgirdharlal.jpg" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title mb-3 text-xl font-bold">
                                    K Girdharlal chooses ATISHAE as its technology partner
                                </h5>
                                <p class="card-text font-medium">
                                    K Girdhar lal - the iconic Diamond polisher and DTC sight
                                    holder, has chosen ATISHAE to rethink and rebuild their sales
                                    and inventory platform.
                                </p>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <img class="card-img-top" src="src/components/images/la-mior.jpg" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title mb-3 text-xl font-bold">
                                    La Mior choose ATISHAE for its latest innovation
                                </h5>
                                <p class="card-text font-medium">
                                    LA Mior is probably one of the first in the country to do live
                                    custom lipstick shades. They partnered with ATISHAE to take that
                                    experience online. Customers will soon be able to mix and match
                                    shades to create their unique colors and have them delivered all
                                    via the La Mior website and technology built by ATISHAE.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="card-deck"></div>

                    <div class="card-deck">
                        <div class="card mb-4">
                            <img class="card-img-top" src="src/components/images/rethink.jpg" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title mb-3 text-xl font-bold">
                                    Rethink Education renews its development and support...
                                </h5>
                                <p class="card-text font-medium">
                                    Rethink Education - (<a href="https://www.rethinkeducation.org/" target="_blank">rethinkeducation.org</a>) has renewed its support and development contract for its
                                    mobile app. The mobile app (both iOS and android) allows
                                    teachers to upload videos for books they are teaching so that
                                    kids can go back to them as and when needed.
                                </p>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <img class="card-img-top" src="src/components/images/insant-cash.jpg" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title mb-3 text-xl font-bold">
                                    Instant Cash ng pilots technology enabled...
                                </h5>
                                <p class="card-text font-medium">
                                    InstantCash Nigeria offers loans without collateral via direct
                                    bank transfers. currently Supports multiple channles: USSD,
                                    Mobile App &amp; Website. ATISHAE developed the entire lending
                                    platform used @ Instant Cash
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
})