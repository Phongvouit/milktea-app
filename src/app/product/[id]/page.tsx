import Price from "@/components/Price";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className="w-full">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full rounded border border-gray-200">
            <div className="w-2/3 mx-auto my-4 relative pt-[80%] md:pt-[100%]">
              <Image
                alt="ecommerce"
                className="object-cover"
                src="/images/product.png"
                fill
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-green-800 text-3xl title-font font-medium mb-6">
              Trà sữa Matcha
            </h1>
            <p className="leading-relaxed font-normal text-base">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <Price />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
