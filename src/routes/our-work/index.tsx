import { component$, useStylesScoped$ } from  '@builder.io/qwik';
import Footer from '~/components/footer/footer';
import style from './our-work.css?inline'

export default component$(()=>{
    useStylesScoped$(style);

    return (
        <>
           <Footer/>
        </>
    )
})