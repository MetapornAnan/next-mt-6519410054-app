'use client';
import { Home, User, GraduationCap, Grid, Briefcase, Cpu, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideMenu() {
  const pathname = usePathname();

  const menuItems = [
    { icon: Home, href: '/', label: 'Home' },
    { icon: User, href: '/aboutme', label: 'About' },
    { icon: GraduationCap, href: '/eduexp', label: 'Education' },
    { icon: Grid, href: '/spec', label: 'Services' },
    { icon: Briefcase, href: '/projects', label: 'Projects' },
    { icon: Cpu, href: '/skills', label: 'Skills' },
    { icon: Mail, href: '/contactme', label: 'Contact' },
  ];

  return (
    <div className="fixed right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 p-4 border border-[#333333] rounded-full bg-black/20 backdrop-blur-sm">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link key={item.href} href={item.href} className="relative group">
            <div className="absolute right-full mr-4 px-3 py-1 bg-[#333333] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-[#333333]"></div>
            </div>

            <Icon 
              className={`w-6 h-6 transition-colors duration-300 ${
                isActive ? 'text-[#ff5722]' : 'text-[#8c8c8c] hover:text-white'
              }`} 
              strokeWidth={1.5}
            />
          </Link>
        );
      })}
    </div>
  );
}