import Header from "@/components/Header";
import Image from "next/image";
import '../styles/HeroPage.css'
import heroImage from '../../public/images/cms-hero-image.png'
import SectionTwo from "@/components/SectionTwo";
import FreeTrial from "@/components/FreeTrial";
import Help from "@/components/Help";
import PrimaryButton from "@/ui/PrimaryButton";
export default function Home() {
  return (
<>
<div className="hero-section-two">
<div className="md:container md:mx-auto ">
    <Header/>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 ">
    <div
     className="mt-20"
     >
<h1 className="text-[48px] w-[85%] text-start font-bold text-[#2c3e4f] leading-[1.4]">
{/* Streamline Your Sales and Inventory Management */}
The Ultimate CMS for Sales and Inventory Optimization
</h1>

<p className="text-[20px] text-[#213F50] w-[80%] mt-8 leading-8">Our CMS simplifies sales and inventory management with intuitive dashboards, automated reporting, and seamless integrations for enhanced efficiency.</p>


<div className="btn-box">

<PrimaryButton/>
</div>

    </div>
    <div className="flex items-end justify-end">

<Image
      src={heroImage}
      alt="Picture of the author"
      width={500} automatically provided
      height={500} 
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
    </div>

  </div>
  </div>
  </div>

  <SectionTwo/>
  <FreeTrial/>

  <Help/>
  </>
  );
}
