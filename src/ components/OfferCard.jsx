import React from 'react';
import { Link } from 'react-router';

const OfferCard = () => {
  return (
    <div>
      {/* Promo / Offer / Discount Section */}
<section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 px-4 text-white mt-10 rounded-2xl">
  <h2 className="text-3xl font-bold text-center mb-8">🔥 Special Offers & Discounts</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-3">Winter Sale – Up to 50% OFF</h3>
      <p className="text-sm mb-4 text-white/80">Grab the hottest titles at unbelievable prices.</p>
      <Link to="/offer/1" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
        Grab Offer
      </Link>
    </div>

    {/* Card 2 */}
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-3">Bundle Deals – Buy 2 Get 1 Free</h3>
      <p className="text-sm mb-4 text-white/80">Exclusive combo packs for this month only.</p>
      <Link to="/offer/2" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
        View Bundles
      </Link>
    </div>

    {/* Card 3 */}
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-3">Games Under $10</h3>
      <p className="text-sm mb-4 text-white/80">Top-rated budget-friendly games for everyone.</p>
      <Link to="/offer/3" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
        Explore Deals
      </Link>
    </div>
  </div>
</section>

      
    </div>
  );
};

export default OfferCard;