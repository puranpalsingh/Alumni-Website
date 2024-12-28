
export default function Navbar() {
    return (
        <header className="bg-white to-violet-700 shadow top-0 z-50 left-0">
            <div className="container mx-auto px-10 py-1">
                <div className="flex justify-between items-center">
                    
                <div className="text-2xl font-bold text-black hover:text-blue-600 transition-colors hidden sm:block">
                        SAE Alumni
                    </div>

                   
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-black no-underline hover:text-blue-600 transition-colors"
                                >
                                    Autokriti
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-black no-underline hover:text-blue-600 transition-colors"
                                >
                                    Accelerons
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-black no-underline hover:text-blue-600 transition-colors"
                                >
                                    Nitrox
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-black no-underline hover:text-blue-600 transition-colors"
                                >
                                    Sponsor Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-black no-underline hover:text-blue-600 transition-colors"
                                >
                                    Alumni
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
