import React from "react";
import Shop from "./../images/ShoppingStore.png"
import introSection from "./../images/introSection.png"
import weatherApp from "./../images/weatherApp.png"
import advice from "./../images/advice.png"
import space from "./../images/space.png"
import age from "./../images/ageCalculator.png"
import productList from "./../images/productWithCart.png"
import countries from "./../images/countries.png"

const Projects = () => {
  return (
    <section id="projects" className="my-10 ">
      <h3 className="text-2xl font-semibold mb-4">Projects</h3>
      <div className="bg-white p-6 rounded shadow mb-4">
        <h4 className="text-xl font-bold">Projects preview </h4>
        <div className=" h-70 lg:h-96 overflow-y-scroll  grid grid-cols-1 min-[490px]:grid-cols-2  xl:grid-cols-3  items-center mt-5 gap-4">
          <a target="_blank" rel="noopener noreferrer" href="https://shop-project-self.vercel.app/" className="h-max bg-gray-800 text-gray-200 p-4 rounded-lg w-full flex flex-col  hover:scale-90  cursor-pointer transition-all duration-500">
            <div>
              <img src={Shop} className="w-full h-[95%]" alt="" />
              <p className=" w-full pt-3 text-sm font-medium">Shopping Site</p>
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://rest-countries-sooty-psi.vercel.app/" className="h-max bg-gray-800 text-gray-200 p-4 rounded-lg w-full flex flex-col  hover:scale-90  cursor-pointer transition-all duration-500">
            <div>
              <img src={countries} className="w-full h-[95%]" alt="" />
              <p className=" w-full pt-3 text-sm font-medium">Countries</p>
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://advice-generator-ten-vert.vercel.app/" className="h-max bg-gray-800 text-gray-200 p-4 rounded-lg w-full flex flex-col  hover:scale-90  cursor-pointer transition-all duration-500">
            <div>
              <img src={advice} className="w-full h-[95%]" alt="" />
              <p className=" w-full pt-3 text-sm font-medium">Advice generator App</p>
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://product-list-psi-plum.vercel.app/" className="h-max bg-gray-800 text-gray-200 p-4 rounded-lg w-full flex flex-col  hover:scale-90  cursor-pointer transition-all duration-500">
            <div>
              <img src={productList} className="w-full h-[95%]" alt="" />
              <p className=" w-full pt-3 text-sm font-medium">Product list with cart</p>
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://intro-section-zeta-gold.vercel.app/" className="h-max bg-gray-800 text-gray-200 p-4 rounded-lg w-full flex flex-col  hover:scale-90  cursor-pointer transition-all duration-500">
            <div>
              <img src={introSection} className="w-full h-[95%]" alt="" />
              <p className=" w-full pt-3 text-sm font-medium">Intro Section</p>
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://age-calculator-teal-two.vercel.app/?vercelToolbarCode=2Js41oWuqUdtf7k" className="h-max bg-gray-800 text-gray-200 p-4 rounded-lg w-full flex flex-col  hover:scale-90  cursor-pointer transition-all duration-500">
            <div>
              <img src={age} className="w-full h-[95%]" alt="" />
              <p className=" w-full pt-3 text-sm font-medium">Age calculator</p>
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://weather-app-phi-azure-82.vercel.app/" className="h-max bg-gray-800 text-gray-200 p-4 rounded-lg w-full flex flex-col  hover:scale-90  cursor-pointer transition-all duration-500">
            <div>
              <img src={weatherApp} className="w-full h-[95%]" alt="" />
              <p className=" w-full pt-3 text-sm font-medium">Weather App</p>
            </div>
          </a>
          
          <a target="_blank" rel="noopener noreferrer" href="https://zahra-200.github.io/space-tourism-website/" className="h-max bg-gray-800 text-gray-200 p-4 rounded-lg w-full flex flex-col  hover:scale-90  cursor-pointer transition-all duration-500">
            <div>
              <img src={space} className="w-full h-[95%]" alt="" />
              <p className=" w-full pt-3 text-sm font-medium">Space tourism Website</p>
            </div>
          </a>
          
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
