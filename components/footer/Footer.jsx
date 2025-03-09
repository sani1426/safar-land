import Link from 'next/link';
import SocialIcons from './socialIcons';

const Footer = () => {
  return (
    <>
      <footer className='bg-gray-200 p-12'>
        <div className='grid grid-cols-1 text-center md:grid-cols-2'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='mb-8 text-2xl'>دسترسی سریع</h2>
              <ul className='flex flex-col gap-4'>
                <li>
                  <Link>خانه</Link>
                </li>
                <li>
                  <Link>درباره ما</Link>
                </li>
                <li>
                  <Link>تماس با ما</Link>
                </li>
                <li>
                  <Link>اقامتگاه ها</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-8 text-2xl'>حامیان سفرلند</h2>
              <ul className='flex flex-col gap-4'>
                <li>
                  <Link>آقای تشریفات</Link>
                </li>
                <li>
                  <Link>سامان کریمی</Link>
                </li>
                <li>
                  <Link>سجاد کریمی</Link>
                </li>
                <li>
                  <Link>مهدی کریمی</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-8 text-2xl'>حامیان سفرلند</h2>
              <ul className='flex flex-col gap-4'>
                <li>
                  <Link>آقای تشریفات</Link>
                </li>
                <li>
                  <Link>سامان کریمی</Link>
                </li>
                <li>
                  <Link>سجاد کریمی</Link>
                </li>
                <li>
                  <Link>مهدی کریمی</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='mx-auto my-auto'>
            <SocialIcons />
          </div>
        </div>
      </footer>
      <div className='flex h-12 w-full items-center justify-center rounded-md bg-orange-400'>
        <h1>کلیه حقوق این وبسایت متعلق به سامان کریمی است</h1>
      </div>
    </>
  );
};

export default Footer;
