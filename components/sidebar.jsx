import { AiOutlineClose } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <aside class='sidebar' id='sidebar'>
      <div>
        <button class='close-button'>
          <AiOutlineClose />
        </button>
      </div>
      <div class='nav-side'>
        <ul class='nav_list_side'>
          <li class='nav-item nav_item_side'>
            <a href='#'>خانه</a>
          </li>
          <li class='nav-item nav_item_side'>
            <a href='#'>درباره ما</a>
          </li>
          <li class='nav-item nav_item_side'>
            <a href='#'>تماس با ما</a>
          </li>
          <li class='nav-item dropdown nav_item_side'>
            <a href='#'>اجاره ساختمان</a>
            <div class='dropdown_container'>
              <div class='dropdown_img_container'>
                <img src='./public/heaader.jpg' alt='' />
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
