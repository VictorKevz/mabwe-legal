import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";

export default function Home() {
  return (
    <div className="w-full text-[var(--color-text-primary)] relative overflow-hidden">
      <Hero />
      <Services />
    </div>
  );
}
