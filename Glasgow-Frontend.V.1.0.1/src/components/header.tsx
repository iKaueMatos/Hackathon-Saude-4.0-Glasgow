import { useState } from 'react';
import { Activity, BarChart4, FilePenLine, FileUp, Headset, Home, Utensils } from 'lucide-react';
import { ThemeToggle } from './theme/theme-toggle';
import { NavLink } from './nav-link';
import { Separator } from './ui/separator';
import { AccountSignIn } from './account-sign-in';
import { AccountMenu } from './account-menu';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="border-b">
            <div className="flex items-center justify-start h-16 px-4 lg:hidden">
                <Activity className="w-6 h-6" />
                <h1 className="ml-4 font-medium">PrimarIA</h1>
                <Separator orientation="vertical" className="mx-2 h-7" />
                <button
                    onClick={toggleMenu}
                    className="ml-auto focus:outline-none"
                    aria-label={menuOpen ? 'Fechar Menu' : 'Abrir Menu'}
                >
                    <svg
                        className="w-6 h-6 text-gray-600 hover:text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
                <nav className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} bg-white shadow-lg absolute top-16 left-0 w-full z-10`}>
                    <div className="px-4 py-2">
                        <NavLink to="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                            <Home className="inline-block w-4 h-4 mr-2" />
                            Início
                        </NavLink>
                        <NavLink to="/register-date" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                            <BarChart4 className="inline-block w-4 h-4 mr-2" />
                            Registrar Dados
                        </NavLink>
                        <NavLink to="/upload" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                            <FileUp className="inline-block w-4 h-4 mr-2" />
                            Upload de exames
                        </NavLink>
                        <NavLink to="/manager-receiver" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                            <FilePenLine className="inline-block w-4 h-4 mr-2" />
                            Gerenciamento de Receitas
                        </NavLink>
                        <NavLink to="/food-recommendation" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                            <Utensils className="inline-block w-4 h-4 mr-2" />
                            Recomendação Alimentares
                        </NavLink>
                        <NavLink to="/virtual-assistant" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                            <Headset className="inline-block w-4 h-4 mr-2" />
                            Atendimento
                        </NavLink>
                        <AccountSignIn />
                    </div>
                </nav>
            </div>

            <div className="items-center justify-start hidden h-16 lg:flex px-7">
                <Activity className="w-6 h-6" />
                <h1 className="ml-4 font-medium">PrimarIA</h1>
                <Separator orientation="vertical" className="h-6 mx-2" />
                <nav className="flex items-center space-x-4">
                    <NavLink to="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                        <Home className="inline-block w-4 h-4 mr-2" />
                        Início
                    </NavLink>
                    <NavLink to="/register-date" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                        <BarChart4 className="inline-block w-4 h-4 mr-2" />
                        Registrar Dados
                    </NavLink>
                    <NavLink to="/upload" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                        <FileUp className="inline-block w-4 h-4 mr-2" />
                        Upload de exames
                    </NavLink>
                    <NavLink to="/manager-receiver" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                        <FilePenLine className="inline-block w-4 h-4 mr-2" />
                        Gerenciamento de Receitas
                    </NavLink>
                    <NavLink to="/food-recommendation" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                        <Utensils className="inline-block w-4 h-4 mr-2" />
                        Recomendação Alimentares
                    </NavLink>
                    <NavLink to="/virtual-assistant" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                        <Headset className="inline-block w-4 h-4 mr-2" />
                        Atendimento
                    </NavLink>
                </nav>
                <div className="items-center hidden gap-1 ml-auto lg:flex">
                    <ThemeToggle />
                    <AccountMenu />
                </div>
            </div>
        </div>
    );
}
