import AlfajoresItem from "@/components/alfajores-item";

interface Alfajores {
  name: string;
  description: string;
  presentation: string;
  weight: string;
  image: string;
  bgColor: string;
  triple: boolean;
}

interface Props {
  data: Alfajores[];
  right: number;
}
const alfajores = ({ data, right }: Props) => {
  return (
    <section className="py-20 px-4 scroll-mt-20" id="productos">
      <div className="w-full max-w-7xl m-auto flex flex-col gap-y-12">
        {data.map((item, index) => (
          <AlfajoresItem item={item} index={index + right} key={index} />
        ))}
      </div>
    </section>
  );
};

export default alfajores;
