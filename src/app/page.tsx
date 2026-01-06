import Hero from "@/components/hero";
import Alfajores from "@/components/alfajores";
import Packs from "@/components/packs";
import Contact from "@/components/contact";
import Oro from "@/components/oro";
import Platino from "@/components/platino";
import Historia from "@/components/historia";
import Nuevo from "@/components/nuevo";
import { alfajoresSimples, alfajoresTriples } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <Alfajores data={alfajoresSimples} right={0} />
      <Packs />
      <Alfajores data={alfajoresTriples} right={1} />
      <Oro />
      <Platino />
      <Nuevo />
      <Historia />
      <Contact />
    </>
  );
}
