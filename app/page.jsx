import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Proces from "./components/Proces"
import Contact from "./components/Contact";
import ChatWidget from "./components/chat";
export default function Home() {
    return (<>
        <Header />
        <ChatWidget />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Proces />
        <Contact />
    </>)
}