import { AppContextProvider } from '@/context/AppContext';
import './globals.css';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import NavInfo from '@/components/Header/nav-1';
import Navigation from '@/components/Header/navigation';

import localFont from 'next/font/local';
import Sidebar from '@/components/Sidebar/Sidebar';
import FooterElem from '@/components/footerContainer/Footer';

const myFont = localFont({
  src: [
    {
      path: '../public/Dirooz.woff',
      weight: '400',
      style: 'normal',
    },

    {
      path: '../public/Dirooz.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
});

export const metadata = {
  title: 'سفرلند',
  description: 'طراحی و برنامه نویسی وبسایت توسط سامن کریمی انجام شده است',
};

export default function RootLayout({ children }) {
  return (
    <html lang='fa' dir='rtl' className={myFont.className}>
      <AppContextProvider>
        <body>
          <NavInfo />
          <Navigation />
          <AntdRegistry>{children}</AntdRegistry>
          <Sidebar />
          <FooterElem />
        </body>
      </AppContextProvider>
    </html>
  );
}
