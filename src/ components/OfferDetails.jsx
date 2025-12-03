import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const OfferDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    document.title = "Offer Details | GameHub";
  }, []);

  // Example Offer Data (Replace with backend data)
  const offerData = {
    1: {
      title: "Winter Sale – Up to 50% OFF",
      description:
        "Enjoy massive discounts during our Winter Sale! Get up to 50% OFF on top-rated action, adventure, and strategy games. Limited time only!",
      banner:
        "https://i.ibb.co/dQ4nPfJ/winter-sale.jpg",
      validity: "Valid until 30 December 2025",
      offerList: [
        "Up to 50% off on selected games",
        "Exclusive winter bundle deals",
        "Buy 2 get 1 free on select items",
      ],
      discountCode: "WINTER50",
    },

    2: {
      title: "Bundle Deal – Buy 2 Get 1 Free",
      description:
        "The best bundle deal of the season! Buy any 2 games and get 1 absolutely free. Offer available for selected titles only.",
      banner:
        "https://i.ibb.co/xgfsh7p/bundle-sale.jpg",
      validity: "Valid until 10 January 2026",
      offerList: [
        "Buy 2 games, get 1 free",
        "Applicable on RPG & Adventure categories",
        "Free game must be lower/equal value",
      ],
      discountCode: "BUNDLEFREE",
    },

    3: {
      title: "Top Games Under $10",
      description:
        "Play budget-friendly and top-rated games for under $10! Don't miss out on these exclusive price drops.",
      banner:
        "https://i.ibb.co/vBVvQ12/games-sale.jpg",
      validity: "Valid until 5 January 2026",
      offerList: [
        "Premium games at very low prices",
        "100+ games included in the offer",
        "Discount applies automatically at checkout",
      ],
      discountCode: "NO_CODE_REQUIRED",
    },
  };

  const offer = offerData[id];

  if (!offer) {
    return (
      <div className="text-center text-white py-20 text-xl">
        Offer not found
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white px-5 py-10">
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl mx-auto mb-8"
      >
        <img
          src={offer.banner}
          alt={offer.title}
          className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          {offer.title}
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center">
          {offer.description}
        </p>

        <div className="bg-gray-900 p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-3">Offer Details</h2>

          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {offer.offerList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="mt-4 text-yellow-400 font-semibold">
            Validity: {offer.validity}
          </p>
        </div>

        {/* Discount Code */}
        <div className="bg-blue-600 p-4 rounded-xl text-center mb-6">
          <p className="text-lg font-bold">Discount Code</p>
          <h3 className="text-2xl font-extrabold mt-1">{offer.discountCode}</h3>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link to="/allgames">
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-orange-600 transition"
            >
              Browse Games →
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
