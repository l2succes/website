import { WorkSection } from "./components/WorkSection"

export const Work = () => {
  return (
    <WorkSection>
      <WorkSection.Item
        backgroundColor="#FAF000"
        color="black"
        title="Blaze"
        description="My current startup venture focused on solving complex problems through innovative technology solutions. Building the next generation of tools that empower teams and individuals to achieve their goals more efficiently."
        icon={"/images/blaze/icon.svg"}
        images={["/images/blaze/feed.png"]}
      />
      <WorkSection.Item
        backgroundColor="#242424"
        color="white"
        deviceColor="silver"
        title="Spotify"
        description="Led development on Spotify's discovery team from 2013-2015, building core features like Radio and the now-famous Discover Weekly playlist. This experience taught me how to scale products to millions of users and the importance of data-driven product decisions."
        icon={"/images/spotify/icon.png"}
        images={["/images/spotify/spotify-1.png"]}
      />
      <WorkSection.Item
        backgroundColor="#FFC538"
        color="#FFF"
        title="Drizzy"
        description="Co-founded and built Drizzy with my partner Regy Perlera, creating one of the first successful keyboard apps in the App Store. This venture taught me valuable lessons about product-market fit, user acquisition, and scaling consumer products."
        icon={"/images/drizzy/icon.png"}
        images={["/images/drizzy/screenshots/drizzy-4.png"]}
      />
      <WorkSection.Item
        backgroundColor="black"
        color="#FFF"
        title="October"
        description="Built October as the natural evolution of Drizzy, expanding from a single-artist keyboard to a multi-artist platform. This pivot demonstrated our ability to iterate based on user feedback and market opportunities."
        icon={"/images/october/icon.png"}
        images={["/images/october/october-2.png"]}
      />
      <WorkSection.Item
        backgroundColor="#F7F7F7"
        color="#000"
        title="Often"
        description="Developed Often as a customizable keyboard platform, allowing users to create personalized keyboards with photos, GIFs, and quotes. This project showcased our technical expertise in mobile development and user customization features."
        icon={"/images/often/icon.png"}
        images={["/images/often/often-1.png"]}
      />
      <WorkSection.Item
        backgroundColor="#FFF"
        color="#000"
        title="Sundial"
        description="Co-created Sundial, a music time-travel app that lets users rediscover their past musical moments. This innovative concept combined data analytics with user experience design, demonstrating our ability to identify unique market opportunities and execute on creative ideas."
        icon={"/images/sundial/icon.png"}
        images={["/images/sundial/sundial-1.png"]}
      />
      <WorkSection.Item
        backgroundColor="#242424"
        deviceColor="silver"
        color="#F7F7F7"
        title="Artsy"
        description="Contributed to Artsy's mission of making art accessible to everyone through innovative technology solutions."
        body={
          <div>
            During my time at Artsy, I worked on multiple projects including the main website and iOS app, focusing on
            features like Messaging and the City Guide functionality. <br />
            The City Guide project involved integrating Mapbox GL and extensive data engineering work, showcasing my
            ability to work with complex mapping technologies and large-scale data systems. This experience reinforced
            my passion for building products that bridge technology and culture.
          </div>
        }
        icon={"/images/artsy/icon.jpg"}
        images={["/images/artsy/artsy-1.png"]}
      />
    </WorkSection>
  )
}
