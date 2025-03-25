import { ArrowDownTrayIcon, ArrowUpTrayIcon, WalletIcon, UserIcon, ShieldExclamationIcon, QuestionMarkCircleIcon, DocumentTextIcon, IdentificationIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const stats = [
  { id: 1, name: 'Link Wallet', icon: WalletIcon, nav: '/linkWallet' },
  { id: 2, name: 'Employee ID', icon: IdentificationIcon, nav: '/empId' },
  { id: 3, name: 'Support', icon: UserIcon, nav: '/support' },
  { id: 4, name: 'About us', icon: ShieldExclamationIcon, nav: '/about' },
  { id: 5, name: 'Withdrawal', icon: ArrowUpTrayIcon, nav: '/withdrawal' },
  { id: 6, name: 'Deposit', icon: ArrowDownTrayIcon, nav: '/deposit' },
  { id: 7, name: 'FAQs', icon: QuestionMarkCircleIcon, nav: '/faq' },
  { id: 8, name: 'T&C', icon: DocumentTextIcon, nav: '/tc' },
];

export default function FuturisticButtons() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4">
      <dl className="grid grid-cols-2 gap-5 mb-6 sm:grid-cols-4 lg:gap-6">
        {stats.map((item) => (
          <div
            onClick={() => navigate(item.nav)}
            key={item.id}
            className="group relative flex flex-col items-center p-6 transition-all duration-300 bg-gradient-to-br from-[#f0f4ff] to-[#e6f0ff] rounded-xl cursor-pointer hover:shadow-xl hover:-translate-y-1 border border-gray-200/80 hover:border-blue-300 overflow-hidden"
          >
            {/* Floating gradient orb background */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-200/40 to-cyan-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-blue-100/0 group-hover:bg-blue-100/20 transition-all duration-500 pointer-events-none"></div>
            
            {/* Icon container with futuristic gradient */}
            <div className="relative z-10 p-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full shadow-md group-hover:shadow-blue-400/30 transition-all duration-300">
              <item.icon aria-hidden="true" className="text-white w-7 h-7" />
              {/* Subtle reflection effect */}
              <div className="absolute top-1 right-1 w-3 h-3 rounded-full bg-white/30"></div>
            </div>
            
            {/* Text with modern styling */}
            <p className="relative z-10 mt-4 text-base font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
              {item.name}
            </p>
            
            {/* Futuristic corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </dl>
    </div>
  );
}