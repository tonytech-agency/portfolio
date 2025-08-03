import Image from "next/image";
import ContactForm from "./ui/contact";

export default function HomePage() {

  return (
    <main>
      <header>
        <h1></h1>
        <nav className="flex text-center">
          <div className="w-1/2">
            <p>Tony Tech Agency</p>
          </div>
          <div className="w-1/2 flex justify-center gap-x-2">
            <a href="#about">about</a>
            <a href="#profile">profile</a>
            <a href="#service">service</a>
            <a href="#portfo">portfo</a>
            <a href="#contact">contact</a>
          </div>
        </nav>
      </header>

      <section id="about" className="mt-8 mb-8">
        <p>about section</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, consequuntur.</p>
      </section>

      <section id="profile" className="mt-8 mb-8">
        <p>profile section</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, aliquid!</p>
      </section>

      <section id="service" className="mt-8 mb-8">
        <p>service section</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolorem.</p>
      </section>

      <section id="portfo">
        <h1>section portfolio</h1>
        <a
          href="https://ariiq.my.id"
          target="_blank"
          rel="noopener norefferer"
          className=""
        >
          portfolio web site
        </a>
        {/* <Image
          src="/window.svg"
          alt=""
          width={100}
          height={100}
          className=""
        /> */}

        <br />

        <a
          href="https://ebooking-eight.vercel.app"
          target="_blank"
          rel="noopener norefferer"
          className=""
        >
          ebooking web app
        </a>
        {/* <Image
          src="/globe.svg"
          alt=""
          width={100}
          height={100}
          className=""
        /> */}

        <br />

        <a
          href="https://presensi-webapp.vercel.app/"
          target="_blank"
          rel="noopener norefferer"
          className=""
        >
          presence web app
        </a>
        {/* <Image
          src="/file.svg"
          alt=""
          width={100}
          height={100}
          className=""
        /> */}

        <br />

        <a
          href="https://todo-webapp-five.vercel.app"
          target="_blank"
          rel="noopener norefferer"
          className=""
        >
          todo web app
        </a>
        {/* <Image
          src="/file.svg"
          alt=""
          width={100}
          height={100}
          className=""
        /> */}

      </section>

      <section id="contact" className="mt-8 mb-8">
        <ContactForm />
      </section>
      <footer></footer>
    </main>
  )
}
