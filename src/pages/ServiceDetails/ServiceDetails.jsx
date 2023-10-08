import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const services = useLoaderData();
    const {id} = useParams();
    const service = services.find(service => service.id == id);
    return (
        <div>
            <div className="max-w-7xl ">
            
            <div className="card mx-auto w-[800px] h-[600px] mt-16 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={service.image} alt="Shoes" className="rounded-xl h-[400px] w-[450px]" />
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