import Navbar from "@/components/layouts/navbar/navbar";
import Header from "@/components/layouts/header/header";
import About from "@/components/layouts/about/about";
import Skills from "@/components/layouts/skills/skills";
import Project from "@/components/layouts/project/project";
import Footer from "@/components/layouts/footer/footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Skills />
      <Project />
      <About />
      <Footer />
    </div>
  )
}
