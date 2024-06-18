// import { Routes, Route } from "react-router-dom";
import ButtonFixed from "./components/ButtonFixed";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar";
import SectionClient from "./components/Sections/SectionClient/SectionClient";
import SectionContact from "./components/Sections/SectionContact/SectionContact";
import SectionMobile from "./components/Sections/SectionMobile/SectionMobile";
import SectionPopular from "./components/Sections/SectionPopular/SectionPopular";
import SectionProject from "./components/Sections/SectionProject/SectionProject";
import SectionResume from "./components/Sections/SectionResume/SectionResume";
import SectionSkill from "./components/Sections/SectionSkill/SectionSkill";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <SectionClient />
      <SectionSkill />
      <SectionProject />
      <SectionResume />
      <SectionMobile />
      <SectionPopular />
      <SectionContact />
      <Footer />
      <ButtonFixed />
    </>
  );
}

export default App;
