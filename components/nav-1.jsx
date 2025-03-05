import Link from "next/link";


const NavInfo = () => {
    return ( 
        <div class="nav-head">
        <ul>
          <li><Link href="/aboutus">درباره ما</Link></li>
          <li><Link href="#">قوانین</Link></li>
          <li><Link href="#">تماس با ما</Link></li>
        </ul>
        <h4>سفر به تمام نقاط ایران با <span class="nav-head-title">سفر لند</span></h4>

        <Link href="call to:09914318174">09914318174</Link>
      </div>
     );
}
 
export default NavInfo;