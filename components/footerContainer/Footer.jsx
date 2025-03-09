import Link from "next/link";
import SocialIcons from "../social-icons/socialIcons";




const FooterElem = () => {
    return ( 
        <>
           <div className='bg-gray-200 p-12'>
        <div className='grid grid-cols-1 text-center md:grid-cols-2'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='mb-8 text-2xl'>دسترسی سریع</h2>
              <ul className='flex flex-col gap-4'>
                <li>
                  <Link href='/'>خانه</Link>
                </li>
                <li>
                  <Link href='/aboutus' >درباره ما</Link>
                </li>
                <li>
                  <Link href='contact'>تماس با ما</Link>
                </li>
                <li>
                  <Link href='/destination'>اقامتگاه ها</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-8 text-2xl'>حامیان سفرلند</h2>
              <ul className='flex flex-col gap-4'>
                <li>
                  <Link href='/'>آقای تشریفات</Link>
                </li>
                <li>
                  <Link href='/'>سامان کریمی</Link>
                </li>
                <li>
                  <Link href='/'>سجاد کریمی</Link>
                </li>
                <li>
                  <Link href='/'>مهدی کریمی</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-8 text-2xl'>حامیان سفرلند</h2>
              <ul className='flex flex-col gap-4'>
                <li>
                  <Link href='/'>آقای تشریفات</Link>
                </li>
                <li>
                  <Link href='/'>سامان کریمی</Link>
                </li>
                <li>
                  <Link href='/'>سجاد کریمی</Link>
                </li>
                <li>
                  <Link href='/'>مهدی کریمی</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='mx-auto my-auto'>
            <SocialIcons />
          </div>
        </div>
      </div>
      <div className='flex h-12 w-full items-center justify-center rounded-md bg-orange-400'>
        <h1>کلیه حقوق این وبسایت متعلق به سامان کریمی است</h1>
      </div>
        </>
     );
}
 
export default FooterElem;