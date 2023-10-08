import { Link } from "react-router-dom";

const Service = ({ services }) => {
    const { id,name, image, price, description, button } = services;
    return (
        <div>
            <div className="flex">
            <div className="card w-[400px] h-[600px] mt-16 bg-base-100 shadow-xl">
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