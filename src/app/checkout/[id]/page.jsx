"use client";
import React, { useEffect, useRef, useState } from "react";
import { getServicesDetails } from "@/services/getServicesAll";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { stringify } from "postcss";
import { toast } from "react-toastify";

const Checkout = ({ params }) => {
  const { data } = useSession();
  const [service, setService] = useState({});
  const form = useRef();

  const loadService = async () => {
    const details = await getServicesDetails(params.id);
    setService(details);
  };
  const { title, price, img } = service.service || {};

  useEffect(() => {
    loadService();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newBooking = {
      name: data?.user?.name,
      email: data?.user?.email,
      date: event.target.date.value,
      address: event.target.address.value,
      phone: event.target.phone.value,
      ...service,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/checkout/new-booking`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(newBooking),
    });

    const NextResponse = await res.json();
    toast.success(NextResponse.message);
    form.current.reset();
  };

  return (
    <div className="container mx-auto">
      <div>
        <div className="bg-red-400 rounded-lg h-60 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${img})` }}>
          <h1 className="pt-24 px-24 font-bold text-white text-2xl lg:text-4xl">Checkout {title} </h1>
          <div className="flex justify-center mt-[55px] lg:mt-[85px] p-1  bg-[#FF3811] rounded-t-full font-bold text-xl text-white w-56 mx-auto ">
            <Link href={"/"}>Home/</Link>
            <Link href={"#"}>Checkout</Link>
          </div>
        </div>
      </div>
      {/*Form*/}
      <div className="bg-[#F3F3F3] p-12 my-12 rounded-lg lg:px-32 ">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5 w-full">
            <input
              className="px-4 py-2 rounded-lg outline-none"
              type="text"
              defaultValue={data?.user?.name}
              placeholder="Your Name"
            />
            <input
              className="px-4 py-2 rounded-lg outline-none"
              defaultValue={new Date().toISOString().split("T")[0]}
              type="date"
              name="date"
              placeholder="Date"
            />
            <input
              className="px-4 py-2 rounded-lg outline-none"
              type="text"
              defaultValue={data?.user?.email}
              placeholder="Your Email"
            />
            <input className="px-4 py-2 rounded-lg outline-none" type="number" name="phone" placeholder="Your Phone" />
            <input className="px-4 py-2 rounded-lg outline-none" type="text" name="address" placeholder="Present Address" />
            <input
              className="px-4 py-2 rounded-lg outline-none"
              type="text"
              defaultValue={price}
              readOnly
              name="amount"
              placeholder="Due Amount"
            />
          </div>
          <textarea
            className="w-full rounded-lg mt-6 text-stone-500 pl-2 pt-2 h-44"
            name="Message"
            id=""
            placeholder="Message"
          ></textarea>
          <input className="btn btn-primary text-white w-full" type="submit" value="Order Confirm" />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
