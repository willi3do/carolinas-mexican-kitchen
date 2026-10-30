import { Link } from "react-router-dom";
// Hero slide
import HeroSlides from "../components/HeroSlides.jsx";
// Hours and Location
import HoursAndLocation from "../components/HoursAndLocation.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  const favoritesSection = [
    {
      id: 1,
      name: "Birria Egg Rolls",
      image: `${import.meta.env.BASE_URL}Images/birriaEggRolls1.png`,
    },
    {
      id: 2,
      name: "Ceviche",
      image: `${import.meta.env.BASE_URL}Images/ceviche.png`,
    },
    {
      id: 3,
      name: "key Lime Pie",
      image: `${import.meta.env.BASE_URL}Images/keyLimePie.png`,
    },
    {
      id: 4,
      name: "Quesa Birria Tacos",
      image: `${import.meta.env.BASE_URL}Images/quesaBirriaTacos.png`,
    },
    {
      id: 5,
      name: "Cremita De Coco",
      image: `${import.meta.env.BASE_URL}Images/cremitaDeCoco.png`,
    },
    {
      id: 6,
      name: "Carne Asada Plate",
      image: `${import.meta.env.BASE_URL}Images/asadaPlate1.png`,
    },
  ];
  return (
    <div className=" flex flex-col w-screen h-auto justify-center items-center overflow-x-hidden bg-primary">
      <HeroSlides />

      <section id="PopularSection" className="w-full h-full p-1 ">
        <h1 className="text-5xl text-center font-bold mb-10">
          Popular Menu Items
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 shrink-0">
          {favoritesSection.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-1 ">
              <img
                src={item.image}
                alt={item.name}
                className="w-50 h-50 md:h-100 md:w-100 shrink-0 border-2 object-cover rounded-lg hover:scale-110 "
              />
              <p className="text-2xl font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <HoursAndLocation />

      {/* <section id="aboutRestaurant">
        From our familia to yours. My family immigrated from Michoacán, Mexico,
        and no matter how much or how little we had, there was always a
        homecooked meal made with love. Carolina’s was born from that same
        spirit — authentic, from-scratch cooking passed down from the women who
        raised me. Every dish is made with the freshest ingredients, the highest
        quality meats, and zero seed oils. Siempre hecho con amor. 🤍
      </section> */}

      <section id="footer" className="bg-accent-red h-auto w-full">
        <footer className="text-center  text-black">
          <p className="text-lg">
            © {new Date().getFullYear()} Carolina's Mexican Kitchen
          </p>
          <img
            src={`${import.meta.env.BASE_URL}Images/logoDoll.png`}
            alt="logo doll"
            className="h-20 w-auto mx-auto mb-4"
          />
        </footer>
      </section>
    </div>
  );
}
