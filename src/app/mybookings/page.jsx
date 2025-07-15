"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import swal from "sweetalert";

const Page = () => {
  const session = useSession();
  const [bookings, setBookings] = useState([]);

  const loadData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/mybookings/api/${session?.data?.user?.email}`);
    const data = await res.json();
    setBookings(data);
  };

  useEffect(() => {
    loadData();
  }, [session]);

  {
    /*Delete*/
  }
  const handleDelete = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete your booking?",
      icon: "warning",
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const deleted = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/mybookings/api/delete-booking/${id}`, {
          method: "DELETE",
        });
        swal("Deleted!", "Your booking has been deleted!", "success");
        loadData();
      }
    });
  };

  return (
    <div className="container mx-auto mt-20">
      <div
        className="bg-red-400 rounded-lg rounded-t-none h-60 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/assets/images/about_us/parts.jpg')` }}
      >
        <h1 className="pt-24 px-24 font-bold  text-2xl lg:text-4xl">My Bookings</h1>
        <div className="flex justify-center mt-[55px] lg:mt-[85px] p-1  bg-[#FF3811] rounded-t-full font-bold text-xl text-white w-56 mx-auto ">
          <Link href={"/"}>Home/</Link>
          <Link href={"#"}>Service Details</Link>
        </div>
      </div>
      {/*Table*/}
      <div className="mt-6 mb-12">
        <div className="overflow-x-auto">
          <div className="flex flex-col items-center justify-center mb-4 font-semibold ">
            <Image
              src={session?.data?.user?.image || "/assets/icons/avater.png"}
              alt="User Profile"
              className="w-16 h-16 rounded-full border-2 border-gray-300 shadow-lg"
              width={40}
              height={40}
            />
            <h1>Email: {session.data?.user?.email}</h1>
            <h1>User: {session.data?.user?.name}</h1>
            <h1 className="text-purple-400">Total Bookings:{bookings.length}</h1>
          </div>

          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Booking Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookings?.map((booking, index) => (
                <tr key={booking._id} className="bg-base-200 rounded-lg">
                  <th>{index + 1}</th>
                  <td>{booking.service.title}</td>
                  <td>{booking.service.price}</td>
                  <td>{booking.date}</td>
                  <td>
                    <div className="flex space-x-4">
                      <Link href={`/mybookings/update/${booking._id}`}>
                        <button className="">
                          <FaEdit className="text-2xl  text-[#007bff]" />
                        </button>
                      </Link>
                      <button onClick={() => handleDelete(booking._id)} className="">
                        <MdDelete className="text-2xl  text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
