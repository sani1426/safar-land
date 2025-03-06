import HeaderCarousel from "@/components/Header/HeaderLider";
import Header from "@/components/Header/header";



export default function Home() {
  return (
    <div>
<div className="hidden md:block">
    <Header />
</div>
<div className="md:hidden">
    <HeaderCarousel />
</div>
</div>
  );
}
