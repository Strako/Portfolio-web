import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import GithubSection from '@/components/GithubSection';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '64px' }}>
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
        <GithubSection />
      </main>
      <Footer />
    </>
  );
}
