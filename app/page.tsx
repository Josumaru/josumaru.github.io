import Navbar from "@/components/layouts/navbar/navbar";
import Header from "@/components/layouts/header/header";
import Footer from "@/components/layouts/footer/footer";
import Skills from "@/components/layouts/skills/skills";
import Project from "@/components/layouts/project/project";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Skills />
      {/* <Project />*/}
      <Footer />
    </div>
  )
}
