import Header from "@/components /header"
import Hero from "@/components /hero"
import Our_rooms from "@/components /Our_rooms"
import Our_events from "@/components /Our_events"
import Our_cuisines from "@/components /Our_cuisines"
import Contact_Us from "@/components /Contact_Us"
import Footer from "@/components /Footer"
 


export default function page() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Our_rooms/>
      <Our_events/>
      <Our_cuisines/>
      <Contact_Us/>
       <Footer/>
      
    </div>
  )
}


