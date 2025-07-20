import Image from "next/image";
import ContactForm from "./ui/contact";

export default function HomePage() {

  return (
    <main>
      <header>
        <h1></h1>
        <nav className="flex gap-2">
          <a href="#about">about</a>
          <a href="#profile">profile</a>
          <a href="#service">service</a>
          <a href="#portfo">portfo</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      <section id="about">
        <p></p>
      </section>

      <section id="profile">
        <p></p>
      </section>

      <section id="service">

      </section>

      <section id="portfo">
        <h1>section portfolio</h1>
        <a
          href="https://ebooking-eight.vercel.app"
          target="_blank"
          rel="noopener norefferer"
          className=""
        >
          ebooking web app
        </a>
        <Image
          src="/globe.svg"
          alt=""
          width={100}
          height={100}
          className=""
        />

        <a
          href="https://ariiq.my.id"
          target="_blank"
          rel="noopener norefferer"
          className=""
        >
          portfolio web site
        </a>
        <Image
          src="/window.svg"
          alt=""
          width={100}
          height={100}
          className=""
        />

        <a
          href="https://ariiq.my.id"
          target="_blank"
          rel="noopener norefferer"
          className=""
        >
          presence web app
        </a>
        <Image
          src="/file.svg"
          alt=""
          width={100}
          height={100}
          className=""
        />

      </section>

      <section id="contact" className="p-4">
        <ContactForm />
      </section>
      <footer></footer>
    </main>
  )
}
