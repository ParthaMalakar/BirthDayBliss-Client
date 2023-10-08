import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";

const ServiceDetails = () => {
    const services = useLoaderData();
    const {id} = useParams();
    const service = services.find(service => service.id == id);
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl ">
            
            <div className="card mx-auto md:w-[800px] md:h-[600px] mt-16 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={service.image} alt="Shoes" className="rounded-xl md:h-[400px] md:w-[450px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service.name}</h2>
                    <p>{service.description}</p>
                    <p>Price:{service.price}</p>
                    <div className="card-actions ">
                        <button className="btn btn-primary flex-grow">{service.button}</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
       
    );
};

export default ServiceDetails;