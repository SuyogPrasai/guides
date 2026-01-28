import ContactSection1 from "@/components/hero/contact-section-1";
import FaqBlock from "@/components/hero/faq-block";
import Footer from "@/components/layout/footer7";
import Navbar from "@/components/layout/header";
import LogoCloud1 from "@/components/hero/logo-cloud-1";
import PricingSection1 from "@/components/hero/pricing-section-1";
import StorefrontHero1 from "@/components/hero/storefront-hero-1";
import Testimonial1 from "@/components/hero/testimonial-1";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <StorefrontHero1 />
      <FaqBlock />
      <Testimonial1 />
      <LogoCloud1 />
      <ContactSection1 />
      <Footer />
    </div>
  );
}
