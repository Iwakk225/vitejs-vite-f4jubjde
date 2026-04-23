//Home
import Navbar from "../layouts/Navbar";
import Hero from "../layouts/Hero";
import Service from "../layouts/Service";
import Footer from "../layouts/Footer";
import FAQ from "../layouts/FAQ";
import ButtonParallax from "../layouts/ButtonParallax";
import ProcessSection from "../layouts/ProcessSection";

import BackToTop from "../features/BackToTop";

import SEO from "../SEO/SEO";


export default function Home() {
  return (
    <>
      <SEO 
        title="Jasa Pembuatan Website Surabaya | Averant Team"
        description="Averant Team - Jasa pembuatan website profesional di Surabaya. Company profile, toko online, landing page, & portfolio. Harga mulai 500rb. Konsultasi gratis!"
        url="https://averantteam.com/"
      />
      <Navbar />
      <Hero />
      <ButtonParallax />
      <Service />
      <ProcessSection />
      <FAQ />
      <Footer />
      <BackToTop />
    </>
  );
}