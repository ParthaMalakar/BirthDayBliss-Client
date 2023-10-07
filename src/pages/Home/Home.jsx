import Slider1 from '../../../src/assets/slider1.jpg';
import Slider2 from '../../../src/assets/slider2.jpg';
import Slider3 from '../../../src/assets/slider3.jpg';
import Slider4 from '../../../src/assets/slider4.jpg';
const Home = () => {
  return (
    <div>
      <div className="carousel w-full lg:h-[550px] bg-[#E76F511A]">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="flex flex-col lg:flex-row gap-20 p-4 lg:p-24">
            <div className="space-y-7 flex-1">
              <h2 className="text-2xl lg:text-6xl font-bold">
              Thematic Magic
              </h2>
              <p>
              Experience the enchantment with our Thematic Magic package. Immerse yourself in a world of wonder as we bring your chosen theme to life with captivating decor and entertainment.
              </p>
              <button className="btn bg-red-400 text-white">Purchase</button>
            </div>
            <div className="flex-1">
              <img src={Slider1} className="w-[500px] h-[400px]" />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
       
        <div id="slide2" className="carousel-item relative w-full">
          <div className="flex flex-col lg:flex-row gap-20 p-4 lg:p-24">
            <div className="space-y-7 flex-1">
              <h2 className="text-2xl lg:text-6xl font-bold">
              Sweet Treats Galore
              </h2>
              <p>
              Indulge in a sugary paradise with our Sweet Treats Galore option. From candy buffets to chocolate fountains, satisfy your sweet tooth and create a dessert wonderland
              </p>
              <button className="btn bg-red-400 text-white">Purchase</button>
            </div>
            <div className="flex-1 ">
              <img src={Slider2} className="w-[500px] h-[400px]" />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="flex flex-col lg:flex-row gap-20 p-4 lg:p-24">
            <div className="space-y-7 flex-1">
              <h2 className="text-2xl lg:text-6xl font-bold">
              Adventure Quest
                
              </h2>
              <p>
              Embark on an Adventure Quest like never before! Dive into thrilling scavenger hunts, treasure hunts, and interactive games that will keep your young explorers entertained
              </p>
              <button className="btn bg-red-400 text-white">Purchase</button>
            </div>
            <div className="flex-1">
              <img src={Slider3} className="w-[500px] h-[400px]" />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="flex flex-col lg:flex-row gap-20 p-4 lg:p-24">
            <div className="space-y-7 flex-1">
              <h2 className="text-2xl lg:text-6xl font-bold">
              VIP Party Package
  
              </h2>
              <p>
              Roll out the red carpet with our VIP Party Package. Treat your guests like celebrities with exclusive perks, premium services, and a memorable party experience.
              </p>
              <button className="btn bg-red-400 text-white">Purchase</button>
            </div>
            <div className="flex-1">
              <img src={Slider4} className="w-[500px] h-[400px]" />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;