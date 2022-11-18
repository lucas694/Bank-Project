import "./Footer.css";
import UlFooter from "./UlFooter";

const Footer = () => {
  const LiAbout= [
    {id: 1, name: "Features",Link: "#"},
    {id: 2, name: "Pricing",Link: "#"},
    {id: 3, name: "Support",Link: "#"},
  ]
  const LiBlog= [
    {id: 1, name: "Products",Link: "#"},
    {id: 2, name: "Technology",Link: "#"},
    {id: 3, name: "Crypto",Link: "#"},
  ]
  const LiWebflow= [
    {id: 1, name: "Styleguide",Link: "#"},
    {id: 2, name: "Licensing",Link: "#"},
    {id: 3, name: "Changelog",Link: "#"},
  ]
  const LiSocialMedia= [
    {id: 1, name: "Twitter",Link: "https://twitter.com/home"},
    {id: 2, name: "Facebook",Link: "https://pt-br.facebook.com"},
    {id: 3, name: "Intagram",Link: "https://www.instagram.com/"},
  ]
  return(
    <div className={"FooterContainer"}>

      <div className={"FooterLeft"}>
        <h1 className={"FooterBanquee"}> banquee.</h1>
      </div>

      <div className={"FooterRight"}>
        <section>
          <h1 className={"FooterTittles"}>About</h1>
        {/*Map do LI About*/}
        {LiAbout.map((item) => (
          <UlFooter key={item.id}
                    Li={item.name}
                    Link={item.Link}/>
        ))}
        </section>
        <section>
          <h1 className={"FooterTittles"}>Blog</h1>
          {/*Map do LI Blog*/}
          {LiBlog.map((item) => (
            <UlFooter key={item.id}
                      Li={item.name}
                      Link={item.Link}/>
          ))}
        </section>
        <section>
          <h1 className={"FooterTittles"}>Webflow</h1>
          {/*Map do LI Webflow*/}
          {LiWebflow.map((item) => (
            <UlFooter key={item.id}
                      Li={item.name}
                      Link={item.Link}/>
          ))}
        </section>
        <section>
          <h1 className={"FooterTittles"}>SocialMedia</h1>
          {/*Map do LI SocialMedia*/}
          {LiSocialMedia.map((item) => (
            <UlFooter key={item.id}
                      Li={item.name}
                      Link={item.Link}/>
          ))}
        </section>
      </div>
      <div className={"FooterBott"}>
        <h1> ❮❯ by <a href={"https://github.com/lucas694"} target="_blank" className={"FooterName"}>
          Lucas Cardoso</a> 2022</h1>
      </div>
    </div>

  )
}
export default Footer;