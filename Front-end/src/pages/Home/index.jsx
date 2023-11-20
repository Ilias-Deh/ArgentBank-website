import Banner from "../../components/Banner"
import Features from "../../components/Features"
import Chat from "../../assets/icon-chat.png"
import Money from "../../assets/icon-money.png"
import Security from "../../assets/icon-security.png"
import "./style.scss"

function Home() {
  return (
    <>
    <Banner />
    <section className="section-Feature">
      <Features 
        imageSrc={Chat}
        imageAlt="icon chat"
        title="You are our #1 priority"
        text="Need to talk to a representative? You can get in touch through our24/7 chat or through a phone call in less than 5 minutes."
      />
      <Features 
        imageSrc={Money}
        imageAlt="icon argent"
        title="More savings means higher rates"
        text="The more you save with us, the higher your interest rate will be!"
      />
      
      <Features 
        imageSrc={Security}
        imageAlt="icon Sécurité"
        title="Security you can trust"
        text="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
    </>
  )
}
export default Home;