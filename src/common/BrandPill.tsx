import Image from "next/image";
export const BrandPill = ({ brand }: { brand: string }) => (
  <div className="px-8 py-4 mx-4 flex items-center justify-center flex-shrink-0">
    <Image
      width={100}
      height={100}
      src={`/logos/${brand.toLowerCase().replace(/\s+/g, "-")}.png`}
      alt={brand}
      className="h-12 object-contain"
    />
  </div>
);
