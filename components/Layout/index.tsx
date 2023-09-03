import React from "react"
import { Helmet } from "react-helmet"
import { MediaContextProvider, createMediaStyle } from "./Responsive"

export const Layout: React.SFC<any> = ({ children }) => (
  <MediaContextProvider>
    <Helmet
      title="Luc Succès"
      meta={[
        { name: "description", content: "Luc Succès - Blog" },
        { name: "keywords", content: "" },
      ]}
    >
      <style>{createMediaStyle()}</style>
    </Helmet>
    {children}
  </MediaContextProvider>
)
