"use client"

import { useAppContext } from '@/context/AppContext';
import { AiOutlineClose } from 'react-icons/ai';

const Sidebar = () => {
  const {CloseMenu , activeMenu} = useAppContext()
  return (
    <aside className={`sidebar ${activeMenu ? 'show-sidebar' : ''}`} >
      <div>
        <button onClick={CloseMenu} className='close-button'>
          <AiOutlineClose />
        </button>
      </div>
      <div className='nav-side  hover:bg-amber-600 hover:text-white'>
        <ul className='nav_list_side'>
          <li className='nav-item nav_item_side'>
            <a href='#'>خانه</a>
          </li>
          <li className='nav-item nav_item_side'>
            <a href='#'>درباره ما</a>
          </li>
          <li className='nav-item nav_item_side'>
            <a href='#'>تماس با ما</a>
          </li>
          <li className='nav-item dropdown nav_item_side'>
            <a href='#'>اجاره ساختمان</a>
            <div class='dropdown_container'>
              <div class='dropdown_img_container'>
          
              </div>
              <div>
                <ul>
                  <li>
                    <a href='#'>شماره 1</a>
                  </li>
                  <li>
                    <a href='#'>شماره 2</a>
                  </li>
                  <li>
                    <a href='#'>شماره 3</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
