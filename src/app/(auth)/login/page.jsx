"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react"; 
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import SocialSignin from "@/components/shared/SocialSignin";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path ? path : "/",
    });

    if (res.status === 200) {
      
      router.push("/");
    } else {
     
      console.log("Login failed: ", res.error);
    }
  };

  return (
    <div className="container mx-auto py-24 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Image src="/assets/images/login/login.svg" alt="Login image" height={540} width={540} />
        </div>
        <div className="border-2 p-12 rounded-lg">
          <h1 className="font-bold text-2xl text-center">Login</h1>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label> <br />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              required
              className="input input-bordered w-full mt-2"
            />
            <br />
            <br />
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              className="input input-bordered w-full mt-2"
            />
            <br />
            <br />
            <button type="submit" className="btn btn-primary w-full text-white">
              Login
            </button>
            <h1 className="mt-4 text-center">Or Sign with</h1>
            <SocialSignin />
            <p className="text-center mt-4 text-sm">
              Don't have an account?
              <Link href={"/signup"} className="text-primary font-bold">
                {" "}
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default function PageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page />
    </Suspense>
  );
}
