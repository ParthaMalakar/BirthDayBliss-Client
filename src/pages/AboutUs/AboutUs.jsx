import Navbar from "../../shared/navbar/Navbar";

const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar> 
            <div className="bg-[#009CDB26] mt-5">
      <h1 className="text-center font-bold text-xl pt-9">About Us</h1>
      <p className="text-center">Welcome to birthdayBliss, your ultimate destination for all things related to birthday celebrations!</p>
      
      <h2 className="text-center font-bold text-xl pt-4">Our Mission</h2>
      <p className="text-center">At birthdayBliss, we're dedicated to making every birthday special and memorable. Our mission is to provide you with inspiration, ideas, and products to create unforgettable birthday experiences.</p>
      
      <h2 className="text-center font-bold text-xl pt-4">Our Team</h2>
      <p className="text-center">We are a passionate team of birthday enthusiasts who believe that every birthday should be a moment of joy, laughter, and love. Meet our team members who work tirelessly to make your birthdays magical:</p>
      
      <ul className="text-center pt-4 pb-10 mb-10 font-bold">
        <li>Partha Malakar - Founder & CEO</li>
        <li>------- - Creative Director</li>
        <li>------- - Marketing Manager</li>
        <li>------- - Customer Support</li>
      </ul>
      
      
    </div>
        </div>
    );
};

export default AboutUs;