import { component$, Slot } from '@builder.io/qwik';
import Footer from '~/components/footer/footer';
import Lastfooter from '~/components/lastfooter/lastfooter';
import Mainfooter from '~/components/mainfooter/mainfooter';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
        <Header />
<<<<<<< Updated upstream
        <Footer/>
      <main>
          <Slot/>
=======
      <main>
        <Slot/>
>>>>>>> Stashed changes
      </main>
      <footer>
        <Mainfooter/>
        <Lastfooter/>
      </footer>
    </>
  );
});
