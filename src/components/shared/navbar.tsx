'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent p-4 flex justify-between items-center lg:max-w-7xl mx-auto z-50">
            <div className="text-3xl font-semibold text-orange-500">Sourcemediaagency</div>
            <ul className={`lg:flex gap-4 text-xl ${isOpen ? 'flex flex-col items-center justify-center fixed inset-0 bg-black/90 text-white z-50' : 'hidden'}`}>
                <li className="hover:underline hover:text-orange-500 text-white">
                    <Link href="/" onClick={() => setIsOpen(false)}>الصفحة الرئيسية</Link>
                </li>
                <li className="hover:underline hover:text-orange-500 text-white">
                    <Link href="/intelligent-marketing-service" onClick={() => setIsOpen(false)}>ادوات التسويق الذكي</Link>
                </li>
                <li className="hover:underline hover:text-orange-500 text-white">
                    <Link href="/sponsored-ads" onClick={() => setIsOpen(false)}>اعلانات ممولة</Link>
                </li>
                <li className="hover:underline hover:text-orange-500 text-white">
                    <Link href="/video-montage" onClick={() => setIsOpen(false)}>فيديو و مونتاج</Link>
                </li>
                <li className="hover:underline hover:text-orange-500 text-white">
                    <Link href="/designs" onClick={() => setIsOpen(false)}>تصميمات</Link>
                </li>
                <li className="hover:underline hover:text-orange-500 text-white">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>تواصل معنا</Link>
                </li>
                {isOpen && (
                    <li className="hover:underline hover:text-orange-500 text-white z-50 absolute top-4 right-4 cursor-pointer">
                        <button className="text-3xl text-white cursor-pointer" type="button" onClick={() => setIsOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </li>
                )}
            </ul>
            <div className="md:hidden">
                <button className="text-3xl text-white cursor-pointer" type="button" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>
        </nav>
    );
}

