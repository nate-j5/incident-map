"use strict";
import React from "react";
import { FaCity, FaFire, FaUsers } from "react-icons/fa";

function CityDetails({ city }) {
  if (!city) {
    return (
      <div className="fixed top-28 right-6 z-20 bg-gray-900 text-white p-4 rounded-lg shadow-lg w-[380px]">
        <h3 className="text-lg font-semibold flex items-center">
          <FaCity className="mr-2 text-red-400" />
          City Details
        </h3>
        <p className="text-gray-400 text-sm mt-2">
          Select a city to explore its details.
        </p>
      </div>
    );
  }

  return (
    <div className="fixed top-28 right-6 z-20 bg-zinc-900 text-white p-6 rounded-lg shadow-lg w-[380px] max-h-[80vh] overflow-y-auto">
      <div className="mb-4">
        <h3 className="text-xl text-gray-30 mb-2">
          {city.city}, {city.state}
        </h3>
        <p className="text-sm text-gray-400"></p>
        <p className="text-sm text-gray-300 mt-1">
          Population:{" "}
          <span className="text-sm text-gray-300 ml-0.5 font-light">
            {city.population.toLocaleString()}{" "}
          </span>
        </p>
      </div>

      {/* Popular Sectors */}
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-3">Popular Sectors</h4>
        <div className="space-y-3">
          {city.popular_sectors.map((sector, index) => (
            <div key={sector.name} className="bg-gray-800 rounded-md p-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{sector.name}</span>
                <span className="text-sm text-white font-extralight">
                  {sector.incident_rate}% Incident Rate
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Incident IO Accuracy */}
      <div className="flex items-center text-gray-400 text-sm">
        <FaFire className="mr-2 text-red-600" />
        Incident IO Accuracy Estimate: {city.incident_io_accuracy_estimate}%
      </div>
    </div>
  );
}

export default CityDetails;
