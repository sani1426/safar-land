import HeaderCarousel from '@/components/Header/HeaderLider';
import Header from '@/components/Header/header';
import Contact from '@/components/contact/contact';
import PopularDestination from '@/components/destination/popDestination';
import ResContainer from '@/components/residence/ResContainer';

export default function Home() {
  return (
    <div>
      <div className='hidden md:block'>
        <Header />
      </div>
      <div className='md:hidden'>
        <HeaderCarousel />
      </div>
      <div>
        <PopularDestination />
      </div>
      <div>
        <ResContainer />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
