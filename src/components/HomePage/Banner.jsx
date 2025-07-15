import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto mt-[101px]">
      <div className="carousel w-full rounded-xl rounded-t-none">
       {
        slides.map((slide, index) => (
          <div key={index} id={`slide${index+1}`}
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url(/assets/images/banner/${index + 1}.jpg)`
          }}
          
          className="carousel-item relative w-full h-[90vh] bg-top bg-no-repeat">
          <div className="h-full w-full flex items-center lg:pl-36">
             <div className="px-2">
             <h1 className="text-4xl font-bold text-white">{slide.title}</h1>
             <p className="text-white mb-2 lg:w-96">{slide.description}</p>
             <button className="btn btn-primary  text-white">Discover More</button>
             <button className="btn btn-outline text-white ml-4">Latest Project</button>
             </div>
          </div>
           <div className="absolute flex bottom-12 right-12 space-x-4 ">
             <a href={slide.prev}className="btn btn-circle bg-primary outline-none text-white">
               ❮
             </a>
             <a href={slide.next} className="btn btn-circle bg-primary outline-none text-white">
               ❯
             </a>
           </div>
         </div>
        ))
       }
      </div>
    </div>
  );
};

const slides = [
  {
    title: 'Affordable Price For Car Servicing',
    description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
    next: '#slide2',
    prev: '#slide4'
  },
  {
    title: 'Affordable Price For Car Servicing',
    description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
    next: '#slide3',
    prev: '#slide1'
  },
  {
    title: 'Affordable Price For Car Servicing',
    description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
    next: '#slide4',
    prev: '#slide2'
  },
  {
    title: 'Affordable Price For Car Servicing',
    description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
    next: '#slide1',
    prev: '#slide3'
  },
]

export default Banner;
