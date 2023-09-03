import React from "react"
import { Helmet } from "react-helmet"

export const Layout: React.SFC<any> = ({ children }) => (
  <>
    <Helmet
      title="Luc Succès"
      meta={[
        { name: "description", content: "Luc Succès - Blog" },
        { name: "keywords", content: "" },
      ]}
    ></Helmet>
    {children}
  </>
)
