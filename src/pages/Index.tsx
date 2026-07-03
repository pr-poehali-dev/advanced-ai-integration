import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { AboutSection } from "@/components/AboutSection"

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <AboutSection />
      <footer className="py-8 text-center text-sm text-gray-400">
        LinkUp — начни бесплатно, управляй деньгами{" "}
        <span className="font-medium text-white">со свободой нового поколения.</span>
      </footer>
    </main>
  )
}