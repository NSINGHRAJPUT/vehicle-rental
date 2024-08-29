import Image from "next/image";

const TestimonialCard = ({ imageSrc, title, description, customerName }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg">
      <Image
        src={imageSrc}
        alt={title}
        layout="responsive"
        width={400}
        height={300}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-white mb-4">{description}</p>
        <p className="text-white font-semibold">— {customerName}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
