import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  duration: 1000, 
  once: true,    
});
const Service = ({ services }) => {
    const { id,name, image, price, description, button } = services;
    return (
        <div>
            <div  className="flex">
            <div data-aos="fade-down-right" className="card w-[400px] h-[600px] md:mt-16 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-[300px] w-[350px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price:{price}</p>
                    <div className="card-actions ">
                        <Link to={`/services/${id}`}><button className="btn btn-primary flex-grow">View Detail</button></Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Service;