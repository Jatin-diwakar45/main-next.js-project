import Hero from '@/components/Hero';
import HomeAbout from '@/components/HomeAbout';
import Projects from '@/components/Projects';
import Industries from '@/components/Industries';
import Contact from '@/components/Contact';
import Testimonial from '@/components/Testimonial';
import Blog from '@/components/Blog';

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeAbout />
      <Projects />
      <Industries />
      <Contact />
      <Testimonial />
      <Blog />
    </main>
  );
}
