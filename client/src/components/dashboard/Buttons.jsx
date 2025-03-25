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
      <dl className="grid grid-cols-2 gap-6 mb-6 sm:grid-cols-4 lg:gap-8">
        {stats.map((item) => (
          <div
            onClick={() => navigate(item.nav)}
            key={item.id}
            className="group relative flex flex-col items-center p-6 transition-all duration-300 bg-gray-900 rounded-xl cursor-pointer hover:bg-opacity-90 hover:shadow-2xl hover:-translate-y-1 border border-transparent hover:border-cyan-400/20 overflow-hidden"
          >
            {/* Holographic effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-xl border border-cyan-400/0 group-hover:border-cyan-400/30 transition-all duration-500 pointer-events-none"></div>
            
            {/* Icon container with futuristic styling */}
            <div className="relative z-10 p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
              <item.icon aria-hidden="true" className="text-white w-7 h-7" />
              {/* Subtle glow */}
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Text with futuristic styling */}
            <p className="relative z-10 mt-4 text-base font-medium text-white group-hover:text-cyan-300 transition-colors duration-300 tracking-wider">
              {item.name}
            </p>
            
            {/* Subtle particle effect */}
            <div className="absolute bottom-2 left-4 w-2 h-2 rounded-full bg-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
            <div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-purple-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
          </div>
        ))}
      </dl>
    </div>
  );
}