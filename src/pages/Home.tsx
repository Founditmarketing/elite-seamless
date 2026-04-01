import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import About from '../components/About';
import ColorInteractive from '../components/ColorInteractive';
import Projects from '../components/Projects';
import CTA from '../components/CTA';

interface HomeProps {
  isRevealed: boolean;
  setIsRevealed: (val: boolean) => void;
}

export default function Home({ isRevealed, setIsRevealed }: HomeProps) {
  return (
    <main>
      {/* Pass animation control down to Hero section */}
      <Hero isRevealed={isRevealed} setIsRevealed={setIsRevealed} />
      
      {/* Lock scroll bounds until Hero completely finishes shimmering */}
      <div className={`transition-all duration-1000 ease-in-out ${isRevealed ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden pointer-events-none'}`}>
        <TrustBar />
        <Services />
        <About />
        <ColorInteractive />
        <Projects />
        <CTA />
      </div>
    </main>
  );
}
