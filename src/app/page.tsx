import Hero from "@/components/hero";
import Alfajores from "@/components/alfajores";
import Packs from "@/components/packs";
import Contact from "@/components/contact";
import { alfajoresSimples, alfajoresTriples } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <Alfajores data={alfajoresSimples} right={0} />
      <Packs />
      <Alfajores data={alfajoresTriples} right={1} />
      <Contact />
    </>
  );
}
