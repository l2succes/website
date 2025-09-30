import React from "react"
import Head from "next/head"
import { Footer } from "../Footer"

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Head>
      <title>Luc Succès</title>
      <meta name="description" content="Luc Succès - Blog" />
      <meta name="keywords" content="" />
    </Head>
    {children}
    <Footer />
  </>
)
