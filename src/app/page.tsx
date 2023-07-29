import { HeroSection } from "@/components/hero-section";
import { QueueListIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection className="lg:px-8 lg:py-52 mt-20" />
      {/* Project Section */}
      <div className="lg:px-8 lg:py-20 mt-20">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-4xl font-medium tracking-tight text-gray-900">
            My Works
          </h2>
          <a
            href="#"
            className="hidden font-medium text-gray-600 hover:text-gray-500 md:flex items-center"
          >
            <span className="whitespace-nowrap">See All</span>
            <QueueListIcon className="h-7 w-7 ml-2" />
          </a>
        </div>

        <div className="mt-10 gap-x-6 xl:gap-x-8 grid grid-rows-8 grid-cols-3">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={clsx("group relative row-span-2", {
                "row-start-1 col-start-1": i + 1 === 1,
                "row-start-2 col-start-2": i + 1 === 2,
                "row-start-3 col-start-3": i + 1 === 3,
              })}
            >
              <div className="relative">
                <div className="aspect-video w-full overflow-hidden rounded-md bg-gray-300 lg:aspect-none group-hover:opacity-75 shadow-lg">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="w-12 h-12 bg-gray-400 flex items-center justify-center absolute -right-5 -bottom-5 rounded-md">
                  {i + 1}
                </div>
              </div>
              <div className="mt-5">{product.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-56"></div>
    </div>
  );
}
