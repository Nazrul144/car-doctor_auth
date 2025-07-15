"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Page = ({ params }) => {
  const { data } = useSession();

  const [booking, setBooking] = useState();

  const loadBooking = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/mybookings/api/update-booking/${params.id}`);
    const data = await res.json();
    setBooking(data.response);
  };

  const handleUpdateBooking = async (event) => {
    event.preventDefault();

    const updatedBooking = {
      date: event.target.date.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/mybookings/api/update-booking/${params.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedBooking),
    });
    if (res.status === 200) {
      Swal.fire({
        title: "Updated Successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
    }
  };

  useEffect(() => {
    loadBooking();
  }, []);

  return (
    <div className="container mx-auto">
      <div>
        <div
          className="bg-red-400 rounded-lg h-60 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${booking?.service?.img})` }}
        >
          <h1 className="pt-24 px-24 font-bold text-white text-2xl lg:text-4xl">Update</h1>
          <div className="flex justify-center mt-[55px] lg:mt-[85px] p-1  bg-[#FF3811] rounded-t-full font-bold text-xl text-white w-56 mx-auto ">
            <Link href={"/"}>Home</Link>
          </div>
        </div>
      </div>
      {/*Form*/}
      <div className="bg-[#F3F3F3] p-12 my-12 rounded-lg lg:px-32 ">
        <form onSubmit={handleUpdateBooking}>
          <div className="grid grid-cols-2 gap-5 w-full">
            <input
              className="px-4 py-2 rounded-lg outline-none"
              type="text"
              defaultValue={data?.user?.name}
              readOnly
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
              readOnly
              placeholder="Your Email"
            />
            <input
              className="px-4 py-2 rounded-lg outline-none"
              type="number"
              defaultValue={booking?.phone}
              name="phone"
              placeholder="Your Phone"
            />
            <input
              className="px-4 py-2 rounded-lg outline-none"
              type="text"
              defaultValue={booking?.address}
              name="address"
              placeholder="Present Address"
            />
            <input
              className="px-4 py-2 rounded-lg outline-none"
              type="text"
              defaultValue={booking?.service?.price}
              readOnly
              name="amount"
              placeholder="Due Amount"
            />
          </div>
          <input className="btn btn-primary text-white w-full mt-6" type="submit" value="Update Info" />
        </form>
      </div>
    </div>
  );
};

export default Page;
