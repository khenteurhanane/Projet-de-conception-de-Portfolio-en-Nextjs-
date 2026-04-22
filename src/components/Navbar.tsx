'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, logout } from '../store';
import { LogOut, User as UserIcon, Code2, Send } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login');
  };

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/#about' },
    { name: 'Compétences', href: '/#skills' },
    { name: 'Projets', href: '/projects' },
    { name: 'Témoignages', href: '/testimonials' },
  ];

  if (pathname === '/login' || pathname === '/register') return null;

  // Determination of style based on page (Dark theme for home hero)
  const isHome = pathname === '/';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isHome ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5' : 'bg-white/80 backdrop-blur-md border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-12">
            <Link href="/" className={`flex items-center gap-2 text-xl font-black font-outfit ${isHome ? 'text-white' : 'text-gray-900'}`}>
              <div className="p-1.5 bg-violet-600 rounded-lg">
                <Code2 size={20} className="text-white" />
              </div>
              <span><span className="text-violet-500">Hanane</span> Khenteur</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-bold transition-all hover:text-violet-500 ${
                    isHome ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            {user ? (
              <div className="flex items-center gap-4">
                <span className={`flex items-center gap-2 text-sm font-bold ${isHome ? 'text-gray-300' : 'text-gray-700'}`}>
                  <UserIcon size={18} />
                  {user.username}
                </span>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/login" className={`text-sm font-bold hover:text-violet-500 transition-colors ${isHome ? 'text-gray-400' : 'text-gray-700'}`}>
                  Connexion
                </Link>
                <Link
                  href="/#contact"
                  className="hidden md:flex px-6 py-3 bg-violet-600 text-white rounded-xl font-bold text-sm items-center gap-2 hover:bg-violet-700 transition-all shadow-lg shadow-violet-600/20"
                >
                  Me contacter <Send size={16} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
