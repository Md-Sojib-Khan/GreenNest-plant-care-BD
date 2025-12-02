import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router";

const PlantOfTheWeek = ({ data }) => {
  const bestPlant = data.reduce((prev, current) =>
    prev.rating > current.rating ? prev : current
  );

  return (
    <section className="w-11/12 mx-auto bg-gradient-to-r from-emerald-50 via-green-100 to-emerald-50 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-10 shadow-lg overflow-x-hidden mb-16">
      <div data-aos="fade-right" className="md:w-1/2">
        <img
          src={bestPlant.image}
          alt={bestPlant.plantName}
          className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-md hover:scale-[1.02] transition-transform duration-300"
        />
      </div>

      <div data-aos="fade-left" className="md:w-1/2 text-center md:text-left space-y-4">
        <h3 className="text-emerald-600 font-semibold uppercase tracking-wide">
          🌿 Plant of the Week
        </h3>

        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">
          {bestPlant.plantName}
        </h2>

        <p className="text-green-700 font-medium italic">
          {bestPlant.category} • {bestPlant.careLevel} Care
        </p>

        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          {bestPlant.description.slice(0, 150)}...
        </p>

        <div className="flex items-center justify-center md:justify-start gap-1 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={
                i < Math.round(bestPlant.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="ml-2 text-gray-600 text-sm">
            {bestPlant.rating}/5
          </span>
        </div>

        <Link to={'/plants'} className="mt-4 bg-gradient-to-r from-green-400 to-emerald-600 text-white font-medium px-6 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-[1.03] transition-all">
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default PlantOfTheWeek;
