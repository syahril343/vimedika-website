import { layananData, teamData, techStack } from "../assets/dummy.js";

// Gambar
import kantorVimedika from "../assets/images/kantor.png";
import layananImage from "../assets/images/komisaris.png";
import mockupLaptop from "../assets/images/PixelBook.png";

// Icon
import { FaArrowRight } from "react-icons/fa";
import { FaReact, FaLaravel, FaHtml5, FaRedis } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
  SiRubyonrails,
} from "react-icons/si";

const techStack = [
  { name: "React JS", icon: <FaReact size={32} /> },
  { name: "Ruby on Rails", icon: <SiRubyonrails size={32} /> },
  { name: "Laravel", icon: <FaLaravel size={32} /> },
  { name: "Postgresql", icon: <SiPostgresql size={32} /> },
  { name: "Redis", icon: <FaRedis size={32} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
  { name: "HTML 5", icon: <FaHtml5 size={32} /> },
  { name: "Firebase", icon: <SiFirebase size={32} /> },
];


const Tentang = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full px-4 md:px-20 py-16 bg-gradient-to-br from-white via-slate-100 to-green-50 rounded-3xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Gambar Kantor */}
          <div className="md:w-1/2">
            <img
              src={kantorVimedika}
              alt="Kantor Vimedika"
              className="rounded-2xl shadow-md w-full object-cover"
            />
          </div>

          {/* Konten Teks */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Melayani dengan Teknologi, <br /> Tumbuh dengan Visi
            </h2>
            <p className="text-sm md:text-base mb-6 leading-relaxed text-justify text-gray-700">
              Vimedika hadir untuk membantu apotek, klinik, dan pelaku usaha
              kesehatan dengan solusi digital yang efisien dan terintegrasi.
              Kami percaya bahwa teknologi bukan hanya alat, tapi jembatan untuk
              memberikan pelayanan yang lebih baik dan berkelanjutan. Bersama
              mitra, kami tumbuh dengan visi membangun ekosistem kesehatan
              digital Indonesia.
            </p>

            <div className="flex justify-center md:justify-start">
              <button className="bg-primary hover:bg-secondary duration-200 group text-white font-semibold px-6 py-2 rounded-full shadow-md flex items-center gap-3">
                More
                <span className="bg-white/20 p-2 rounded-full transition-transform duration-300 transform -rotate-45 group-hover:rotate-90 translate-x-4">
                  <FaArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Layanan Kami */}
      <section className="py-20 px-4 md:px-20 bg-white mt-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
          <p className="text-sm md:text-base max-w-xl mx-auto">
            Kami memberikan layanan pembuatan sistem digital yang modern,
            inovatif, dan mudah digunakan sesuai dengan kebutuhan anda.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Kiri */}
          <div className="space-y-10">
            {layananData.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gray-100 rounded-xl"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h4 className="text-lg font-semibold text-primary">
                    {item.title}
                  </h4>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Gambar Tengah */}
          <div className="relative rounded-2xl overflow-hidden shadow-md max-w-[90%] mx-auto group">
            <img
              src={layananImage}
              alt="Layanan"
              className="w-full h-full object-cover transform transition duration-700 ease-in-out group-hover:scale-105"
            />

            <div className="absolute p-4 inset-0 bg-black/50 items-center justify-center opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out">
              <p className="text-white text-lg font-semibold">Komisaris</p>
              <p className="text-white text-lg font-semibold">
                Tulisan Hover Muncul
              </p>
            </div>
          </div>

          {/* Kanan */}
          <div className="space-y-10">
            {layananData.slice(2, 4).map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gray-100 rounded-xl"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h4 className="text-lg font-semibold text-primary">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 max-w-7xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="inline-block border-t-2 border-primary w-[30rem] absolute top-1/2 left-0 transform -translate-y-1/2 hidden md:inline-block"></span>
          Our Team
          <span className="inline-block border-t-2 border-primary w-[30rem] absolute top-1/2 right-0 transform -translate-y-1/2 hidden md:inline-block"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-6 rounded-2xl"
            >
              <div className="max-w-[65%]">
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{member.title}</p>
                <p className="text-sm text-black italic">“{member.quote}”</p>
              </div>
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Mockup Laptop dan Keterangan Teknologi*/}
      <section className="py-20 px-4 max-w-7xl mx-auto mt-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Teks */}
          <h1 className="font-bold text-3xl md:text-5xl leading-tight md:leading-snug text-center md:text-left">
            Teknologi Terbaru & <br className="hidden md:block" />{" "}
            <span className="text-primary">Desain Modern</span>
          </h1>

          {/* Gambar */}
          <img
            src={mockupLaptop}
            alt="Mockup Laptop"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Deskripsi */}
        <div className="bg-primary/10 p-6 md:p-8 rounded-xl mt-8 md:mt-[-2rem] mx-auto w-full md:max-w-2xl text-sm text-justify">
          <p>
            Kami berkomitmen untuk selalu mengikuti perkembangan teknologi
            terbaru dalam setiap solusi yang kami kembangkan. Dengan
            memanfaatkan framework dan tools terkini, kami menghadirkan sistem
            yang lebih cepat, responsif, aman, dan efisien. Kami tidak hanya
            membangun aplikasi — kami menciptakan pengalaman digital yang
            intuitif, menarik, dan mudah digunakan oleh berbagai jenis pengguna.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">
          Our Tech <span className="text-orange-500">Stack</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="border border-orange-400 rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md transition text-orange-500"
            >
              {tech.icon}
              <span className="text-sm font-medium text-gray-800 mt-2">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Tentang;
