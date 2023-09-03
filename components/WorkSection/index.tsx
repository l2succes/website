import { WorkSection } from "./components/WorkSection"

export const Work = () => {
  return (
    <WorkSection>
      <WorkSection.Item
        backgroundColor="#242424"
        color="white"
        deviceColor="silver"
        title="Spotify"
        description="I worked at Spotify for two years starting in 2013 where I joined 
            the discover team which built features like Radio and 
            the now infamous Discover Weekly playlist."
        icon={"/images/spotify/icon.png"}
        images={["/images/spotify/spotify-1.png"]}
      />
      <WorkSection.Item
        backgroundColor="#FFC538"
        color="#FFF"
        title="Drizzy"
        description="I designed and developed an app named Drizzy along with my friend and partner Regy Perlera. This was one of the
            first successful keyboard apps in the app store."
        icon={"/images/drizzy/icon.png"}
        images={["/images/drizzy/screenshots/drizzy-4.png"]}
      />
      <WorkSection.Item
        backgroundColor="black"
        color="#FFF"
        title="October"
        description="October is essentially Drizzy v2. Instead of just having Drake lyrics in the keyboard
            app, we figured a natural evolution would be to open it up to multiple artists"
        icon={"/images/october/icon.png"}
        images={["/images/october/october-2.png"]}
      />
      <WorkSection.Item
        backgroundColor="#F7F7F7"
        color="#000"
        title="Often"
        description="Create your very own keyboard with Photos, GIFS & Quotes."
        icon={"/images/often/icon.png"}
        images={["/images/often/often-1.png"]}
      />
      <WorkSection.Item
        backgroundColor="#FFF"
        color="#000"
        title="Sundial"
        description="What if you could listen to all the music your were listening to on this
            present date but one, two or three years in the past?
            Well I was wondering the same thing, that's why my team built Sundial.
            We started working on a it as project building Often"
        icon={"/images/sundial/icon.png"}
        images={["/images/sundial/sundial-1.png"]}
      />
      <WorkSection.Item
        backgroundColor="#242424"
        deviceColor="silver"
        color="#F7F7F7"
        title="Artsy"
        description="Artsy is the best way to buy and discover art."
        body={
          <div>
            During my time at Artsy, I&apos;ve worked on many projects including the main website and the iOS app.
            Features like Messaging, various UI fixes and the latest projects I&apos;ve had the chance to work on is
            City Guide. <br />
            In the iOS app, we used various libraries including Mapbox GL to complete this feature. There was also a lot
            of work done on the data side.
          </div>
        }
        icon={"/images/artsy/icon.jpg"}
        images={["/images/artsy/artsy-1.png"]}
      />
    </WorkSection>
  )
}
