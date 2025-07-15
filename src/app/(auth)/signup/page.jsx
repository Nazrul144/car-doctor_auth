"use client";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";

const Page = () => {
  const handleRegister = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const NextResponse = await fetch("signup/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const result = await NextResponse.json();
      if (NextResponse.status === 201) {
        event.target.reset();
      }

      if (NextResponse.ok) {
        Swal.fire({
          title: result.message,
          text: "Click ok button now",
          icon: "success",
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container mx-auto py-24 lg:px-24 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Image src="/assets/images/login/login.svg" alt="Login image" height={540} width={540} />
        </div>
        <div className="border-2 p-12 rounded-lg">
          <h1 className="font-bold text-2xl text-center">Sign Up</h1>
          <form onSubmit={handleRegister} action="">
            <label htmlFor="email">Name</label> <br />
            <input type="text" name="name" placeholder="Enter your name" required className="input input-bordered w-full  mt-2" />
            <br />
            <br />
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="input input-bordered w-full  mt-2"
            />
            <br />
            <br />
            <label htmlFor="email">Password</label> <br />
            <input
              type="text"
              name="password"
              required
              placeholder="Enter your password"
              className="input input-bordered w-full mt-2"
            />{" "}
            <br /> <br />
            <button type="submit" className="btn btn-primary w-full text-white">
              Sign Up
            </button>
            <h1 className="mt-4 text-center">Or Sign with</h1>
            <div className="flex gap-4 justify-center mt-4">
              <button>
                <FaGoogle className="text-xl" />
              </button>
              <button>
                <FaFacebook className="text-xl" />
              </button>
              <button>
                <FaGithub className="text-xl" />
              </button>
              <button>
                <FaLinkedinIn className="text-xl" />
              </button>
            </div>
            <p className="text-center mt-4 text-sm">
              Already have an account?
              <Link href={"/login"} className="text-primary font-bold">
                {" "}
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
