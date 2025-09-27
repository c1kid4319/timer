import React, { useState } from 'react';
import { Menu, X, ChevronDown, Stethoscope } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { name: 'Home', href: '#' },
    {
      name: 'About',
      href: '#',
      submenu: [
        'About TIMER',
        'Vision & Mission',
        'Trinity Foundation',
        'Trinity Health Group',
        'Leadership Team',
        'Our Faculty',
        'Campus Gallery',
        'Accreditation Partners',
        'Careers'
      ]
    },
    {
      name: 'Academics',
      href: '#',
      submenu: [
        'Medical Programs',
        'Curriculum',
        'Clinical Training',
        'Library & Resources',
        'Academic Calendar',
        'Examination System'
      ]
    },
    {
      name: 'Students',
      href: '#',
      submenu: [
        'Current Students',
        'Alumni Network',
        'Student Life',
        'Hostel Facilities',
        'Student Support',
        'Downloads'
      ]
    },
    {
      name: 'Admissions',
      href: '#',
      submenu: [
        'Programs Offered',
        'Admission Process',
        'Eligibility Criteria',
        'Fee Structure 2024-25',
        'Scholarships',
        'Application Form'
      ]
    },
    {
      name: 'Research',
      href: '#',
      submenu: [
        'Research Centers',
        'Publications',
        'Ongoing Projects',
        'Research Collaborations',
        'Ethics Committee'
      ]
    },
    {
      name: 'Healthcare',
      href: '#',
      submenu: [
        'Hospital Services',
        'Specialty Clinics',
        'Community Outreach',
        'Health Camps',
        'Patient Care'
      ]
    },
    { name: 'News & Events', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Stethoscope className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">TIMER</h1>
              <p className="text-sm text-gray-600">Trinity Institute of Medical Education & Research</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 text-sm"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
                
                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            {menuItems.map((item) => (
              <div key={item.name} className="py-2">
                <a
                  href={item.href}
                  className="block text-gray-700 hover:text-emerald-600 font-medium"
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block text-sm text-gray-600 hover:text-emerald-600 py-1"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;