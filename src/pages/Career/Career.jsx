import Navbar from "../../shared/navbar/Navbar";

const Career = () => {
    return (
        <div>
            <Navbar></Navbar> 
           <div className="container mx-auto py-8 bg-[#009CDB26] mb-8 mt-3">
      <h1 className="text-3xl font-semibold mt-4 mb-4 pt-8 text-center">Join Our Team</h1>
      <p className="text-gray-600 mb-8 text-center">
        We are always looking for talented individuals to join our team and contribute to the success of BirthdayBliss.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  pb-12 ">
       
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Frontend Developer</h2>
          <p className="text-gray-600 mb-4">Location: Dhaka</p>
          <p className="text-gray-800">
            We are seeking an experienced Frontend Developer to help us build beautiful and user-friendly interfaces for our website.
          </p>
          <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
            Apply Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Backend Developer</h2>
          <p className="text-gray-600 mb-4">Location: Dhaka</p>
          <p className="text-gray-800">
            We are looking for a Backend Developer who is passionate about server-side technologies and can help us optimize our website's performance.
          </p>
          <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
            Apply Now
          </button>
        </div>
      </div>
    </div> 
        </div>
    );
};

export default Career;