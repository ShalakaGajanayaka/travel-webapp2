import { ArrowPathIcon, CalendarIcon, TruckIcon } from '@heroicons/react/24/outline';

const perks = [
  { name: '10-year all-inclusive warranty', description: 'We’ll replace it with a new one', icon: CalendarIcon },
  { name: 'Free shipping on returns', description: 'Send it back for free', icon: ArrowPathIcon },
  { name: 'Free, contactless delivery', description: 'The shipping is on us', icon: TruckIcon },
];

export default function FuturisticIncentives() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-12 px-6 rounded-2xl shadow-xl border border-blue-200/60">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8 tracking-tight">
        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Premium</span> Perks
      </h2>
      
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl sm:grid-cols-3 lg:gap-10">
        {perks.map((perk, perkIdx) => (
          <div 
            key={perkIdx} 
            className="relative group flex items-start bg-white/90 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-blue-100/60 hover:border-blue-300/50 backdrop-blur-sm overflow-hidden"
          >
            {/* Gradient highlight on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 to-cyan-100/0 group-hover:from-blue-100/30 group-hover:to-cyan-100/20 transition-all duration-500"></div>
            
            {/* Floating orb effect */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-200/30 to-cyan-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            {/* Icon container with modern gradient */}
            <div className="relative z-10 flex-shrink-0 p-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl shadow-md group-hover:shadow-blue-400/40 transition-all duration-300">
              <perk.icon aria-hidden="true" className="w-8 h-8 text-white" />
              {/* Reflection dot */}
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white/50"></div>
            </div>
            
            <div className="ml-6 relative z-10">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {perk.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {perk.description}
              </p>
            </div>
            
            {/* Futuristic corner accents */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}