import heroImage from "../assets/images/Hero.png";

const Home = () => {
  return (
    <div className="bg-gradient-to-r mt-4 from-green-100 via-purple-100 to-orange-100 py-12 px-4 sm:px-8 md:px-16 lg:px-24 rounded-3xl shadow-lg">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Smart Web & <br /> App Solutions
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-lg mb-6 max-w-xl mx-auto md:mx-0">
            Kami adalah mitra terpercaya dalam membangun sistem aplikasi
            berbasis Web, Desktop, dan Android — cepat, andal, dan sesuai
            kebutuhan bisnis Anda.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-md flex items-center gap-2">
              More
              <span className="text-xl">↗</span>
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Hero Illustration"
            className="w-68 sm:w-72 md:w-80 lg:w-96 max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
