import Image from "next/image";

interface LargeCardProps {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

const LargeCard: React.FC<LargeCardProps> = ({
  img,
  title,
  description,
  buttonText,
}) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl w-64 mb-3">{title}</h3>
        <p>{description}</p>

        <button className="text-sm text-white bg-gray-900 py-2 px-4 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
