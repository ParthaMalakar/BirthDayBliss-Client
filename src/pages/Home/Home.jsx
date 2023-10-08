import { useLoaderData } from 'react-router-dom';
import Slider1 from '../../../src/assets/slider1.jpg';
import Slider2 from '../../../src/assets/slider2.jpg';
import Slider3 from '../../../src/assets/slider3.jpg';
import Slider4 from '../../../src/assets/slider4.jpg';
import Service from './Service';
import Navbar from '../../shared/navbar/Navbar';
const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <Navbar></Navbar> 
      <div className=" carousel w-full lg:h-[550px] bg-[#E76F511A]">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="flex flex-col lg:flex-row lg:gap-20 p-4 lg:p-24">
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
              <img src={Slider1} className="md:w-full lg:w-[500px] lg:h-[400px]" />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <div className="flex flex-col lg:flex-row lg:gap-20 p-4 lg:p-24">
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
              <img src={Slider2} className=" md:w-full lg:w-[500px] lg:h-[400px]" />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="flex flex-col lg:flex-row lg:gap-20 p-4 lg:p-24">
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
              <img src={Slider3} className="md:w-full lg:w-[500px] lg:h-[400px]" />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="flex flex-col lg:flex-row lg:gap-20 p-4 lg:p-24">
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
              <img src={Slider4} className="md:w-full lg:w-[500px] lg:h-[400px]" />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-center text-2xl md:text-4xl font-bold mt-4 md:mt-16'>Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
          {
            services.map((service, idx) => <Service
              key={idx}
              services={service}
            ></Service>


            )
          }
        </div>
        <div className='bg-[#009CDB26]'>
          <h2 className=' text-center text-4xl pt-7 mb-5 font-bold '>Trending Birthday Ideas</h2>
          <div className='grid grid-cols-2 pl-4 '>

            <div className='text-center font-bold text-lg'>
              <img className='mb-4' src="https://cdn.media.amplience.net/i/partycity/idea-package-girls-birthday-ideas?fmt=auto&qlt=default&fmt.jp2.qlt=85&w=614&sm=aspect&aspect=16:9" alt="" />
              <a href="">Girl's Birthday Ideas </a>
            </div>
            <div className='text-center font-bold text-lg'>
              <img className='mb-4' src="https://cdn.media.amplience.net/i/partycity/idea-package-boys-birthday-ideas-spiderman?fmt=auto&qlt=default&fmt.jp2.qlt=85&w=614&sm=aspect&aspect=16:9" alt="" />
              <a className='text-center font-bold' href="">Boy's Birthday Ideas </a>
            </div>

          </div>
          <div className='items-center text-center'>
            <button className=' text-white bg-black px-7 py-3 mt-10 mb-5 '>View Kids Birthday Ideas</button></div>

        </div>
      </div>
      <div className='bg-[#009CDB26] mt-10'>
      <h2 className=' text-center text-4xl pt-5 font-bold '>Book a Date</h2>
<div>


<div className="  hero min-h-screen ">
  
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <p className="py-6 text-5xl font-bold">It’s your day, make it worth remembering.</p>
      <p>Book your birthday event with us for a hassle-free and unforgettable celebration! Our dedicated team of party planners and event experts is here to turn your special day into a magical experience. From creative themes and delicious catering to captivating entertainment and stunning decorations, we handle every detail, so you can focus on creating cherished memories with loved ones.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input type="text" placeholder="Phone Number" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" placeholder="Pick yor Date" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <input type="text" placeholder="Message" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
      </div>
    </div>
  );
};

export default Home;