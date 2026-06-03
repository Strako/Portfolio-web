import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GithubSection from "@/components/GithubSection";
import Footer from "@/components/Footer";
import * as amplitude from "@amplitude/unified";
import { useEffect } from "react";

const AMPLITUDE_KEY = import.meta.env.VITE_AMPLITUDE_KEY;

export default function App() {
  useEffect(() => {
    amplitude.initAll(AMPLITUDE_KEY, {
      analytics: {
        autocapture: {
          attribution: { trackingMethod: ["userProperty", "eventProperty"] },
          fileDownloads: true,
          formInteractions: true,
          pageViews: true,
          sessions: true,
          elementInteractions: true,
          networkTracking: true,
          webVitals: true,
          frustrationInteractions: {
            thrashedCursor: true,
            errorClicks: true,
            deadClicks: true,
            rageClicks: true,
          },
        },
      },
      sessionReplay: { sampleRate: 1 },
    });
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ marginTop: "64px" }}>
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
