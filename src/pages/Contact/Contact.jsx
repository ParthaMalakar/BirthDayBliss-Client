import Navbar from "../../shared/navbar/Navbar";

const Contact = () => {
    return (
        <div>
        <Navbar></Navbar> 
        <div className="bg-[#009CDB26] mt-5">
            <h2 className="text-center font-bold text-xl pt-9">Contact Us</h2>
      <p className="text-center">If you have any questions, suggestions, or if you'd like to collaborate with us, please don't hesitate to get in touch:</p>
      
      <address className="text-center pb-11 mb-11">
        Email: <a href="parthamalakar4321@gmail.com">parthamalakar4321@gmail.com</a><br />
        Phone: +8801888121411<br />
        Address: 123 Birthday Avenue, Celebration Town, CA 98765
      </address>
        </div>
        </div>
    );
};

export default Contact;