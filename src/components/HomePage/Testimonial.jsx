import { getTestimonialData } from "@/services/testimonial";
import Image from "next/image";
import { IoIosStarOutline } from "react-icons/io";

const Testimonial = async () => {
  const data = await getTestimonialData();
  console.log(data);

  return (
    <div className="container mx-auto">
      <div className="">
        <h1 className="text-center font-bold text-[#FF3811] mb-4">Testimonial</h1>
        <h1 className="text-center font-bold text-4xl mb-4">What Customer Says</h1>
        <p className="text-center">
          The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even
          slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 mb-12">
        {data.res.map((item) => (
          <div key={item._id} className="card bg-base-100 w-full border-[1px] border-gray-200 rounded-lg h-96 p-12 mx-auto ">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-4">
                <div className="rounded-full overflow-hidden w-[50px] h-[50px] relative">
                  <Image
                    className="object-cover"
                    src={item.image}
                    alt="Image"
                    width={50}
                    height={50}
                    style={{ aspectRatio: "1 / 1" }}
                  />
                </div>

                <div>
                  <h1 className="text-xl font-bold">{item.name}</h1>
                  <h1>{item.designation}</h1>
                </div>
              </div>
              <div className="text-red-500">
                <Image className="brightness-80 invert" src="/assets/icons/quote.png" alt="quote" width={50} height={50} />
              </div>
            </div>
            <p className="text-justify mt-4 mb-12">{item.description}</p>
            <div className="flex gap-2">
              <IoIosStarOutline className="text-xl text-orange-600 font-extrabold" />
              <IoIosStarOutline className="text-xl text-orange-600 font-extrabold" />
              <IoIosStarOutline className="text-xl text-orange-600 font-extrabold" />
              <IoIosStarOutline className="text-xl text-orange-600 font-extrabold" />
              <IoIosStarOutline className="text-xl text-orange-600 font-extrabold" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
