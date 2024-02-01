import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/dashboard/Header";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Sign In Page | Free Next.js Template for Startup and SaaS",
  description: "This is Sign In Page for Startup Nextjs Template",
  // other metadata
};
import LayoutSignIn from "./layout";
const SigninPage = () => {
  return <LayoutSignIn/>;
};

export default SigninPage;
