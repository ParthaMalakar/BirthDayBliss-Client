import Navbar from "../../shared/navbar/Navbar";

const Gallery = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-10 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <img className="w-[400px] h-[400px]" src="https://i.ibb.co/YDmK9h7/5599485-56725.jpg" alt="" />
                <img className="w-[400px] h-[400px]" src="https://i.ibb.co/r02WZqp/7172050-3561202.jpg" alt="" />
                <img className="w-[400px] h-[400px]" src="https://i.ibb.co/BZMh2Bz/dinner-table-with-fried-meat-dishes-sauces.jpg" alt="" />
                <img className="w-[400px] h-[400px]" src="https://i.ibb.co/1Tdktsb/2271231-292654-P6-SJNY-544.jpg" alt="" />
                <img className="w-[400px] h-[400px]" src="https://i.ibb.co/R20J53f/caramel-cake-chocolate-nuts-decorations.jpg" alt="" />
                <img className="w-[400px] h-[400px]" src="https://i.ibb.co/MGzwx4v/10782656-19197190.jpg" alt="" />
            </div>
        </div>
    );
};

export default Gallery;