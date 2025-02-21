"use client";

import {
	FolderKanban,
	House,
	Menu,
	MessageCircle,
	TreeDeciduous,
	UserRound,
	X,
} from "lucide-react";
import { useState } from "react";

export const SideMenu = () => {
	const [openMenu, setOpenMenu] = useState<boolean>(false);

	const closeMenu = () => setOpenMenu(false);

	return (
		<>
			<div className="hidden xl:flex flex-col center right-0 h-screen fixed z-20">
				<a
					href="#inicio"
					className="flex flex-row justify-start gap-2 w-full px-8 py-4 hover:bg-accent-alternative/10"
				>
					<House className="text-accent-alternative/40" size={24} />
					<p className="text-base text-accent-alternative">Inicio</p>
				</a>
				<a
					href="#paisajismo"
					className="flex flex-row justify-start gap-2 w-full px-8 py-4 hover:bg-accent-alternative/10"
				>
					<TreeDeciduous className="text-accent-alternative/40" size={24} />
					<p className="text-base text-accent-alternative">Paisajismo</p>
				</a>
				<a
					href="#trabajo"
					className="flex flex-row justify-start gap-2 w-full px-8 py-4 hover:bg-accent-alternative/10"
				>
					<FolderKanban className="text-accent-alternative/40" size={24} />
					<p className="text-base text-accent-alternative">Trabajos</p>
				</a>
				<a
					href="#sobremi"
					className="flex flex-row justify-start gap-2 w-full px-8 py-4 hover:bg-accent-alternative/10"
				>
					<UserRound className="text-accent-alternative/40" size={24} />
					<p className="text-base text-accent-alternative">Sobre mi</p>
				</a>
				<a
					href="#contacto"
					className="flex flex-row justify-start gap-2 w-full px-8 py-4 hover:bg-accent-alternative/10"
				>
					<MessageCircle className="text-accent-alternative/40" size={24} />
					<p className="text-base text-accent-alternative">Contacto</p>
				</a>
			</div>

			{/* Botón para abrir el menú */}
			<button
				onClick={() => setOpenMenu(!openMenu)}
				className="xl:hidden flex flex-row justify-end p-4 m-4 bg-white/10 gap-2 fixed right-0 top-0 z-20"
			>
				<Menu className="text-accent-alternative" size={24} />
			</button>

			{/* Backdrop */}
			<div
				onClick={closeMenu}
				className={`fixed inset-0 bg-black/50 transition-opacity ${
					openMenu ? "opacity-100 visible" : "opacity-0 invisible"
				} z-10`}
			/>

			{/* Menú lateral */}
			<div
				className={`fixed  top-0 right-0 h-full bg-white shadow-lg z-20 transition-transform duration-300 ${
					openMenu ? "translate-x-0" : "translate-x-full"
				}`}
				style={{ width: "300px" }} // 4/3 de la pantalla
			>
				{/* Contenido del menú */}
				<div className="flex flex-col">
					<button
						onClick={() => setOpenMenu(!openMenu)}
						className="xl:hidden m-4 p-4 bg-accent-secondary/10 gap-2 right-0 top-0 z-20 w-min self-end"
					>
						<X className="text-accent-alternative" size={24} />
					</button>
					<ul className="space-y-2">
						<a
							href="#inicio"
							className="flex flex-row justify-start gap-2 w-full px-8 py-4 hover:bg-accent-alternative/10"
							onClick={closeMenu}
						>
							<House className="text-accent-alternative/40" size={24} />
							<p className="text-base text-accent-alternative">Inicio</p>
						</a>
						<a
							href="#paisajismo"
							className="flex flex-row justify-start gap-2 w-full px-8 py-4 hover:bg-accent-alternative/10"
							onClick={closeMenu}
						>
							<TreeDeciduous className="text-accent-alternative/40" size={24} />
							<p className="text-base text-accent-alternative">Paisajismo</p>
						</a>
						<a
							href="#trabajo"
							className="flex flex-row justify-start gap-2 w-full px-8 py-4 hover:bg-accent-alternative/10"
							onClick={closeMenu}
						>
							<FolderKanban className="text-accent-alternative/40" size={24} />
							<p className="text-base text-accent-alternative">Trabajos</p>
						</a>
						<a
							href="#sobremi"
							className="flex flex-row justify-start gap-2 w-full px-8 py-4 hover:bg-accent-alternative/10"
							onClick={closeMenu}
						>
							<UserRound className="text-accent-alternative/40" size={24} />
							<p className="text-base text-accent-alternative">Sobre mi</p>
						</a>
						<a
							href="#contacto"
							className="flex flex-row justify-start gap-2 w-full px-8 py-4 hover:bg-accent-alternative/10"
							onClick={closeMenu}
						>
							<MessageCircle className="text-accent-alternative/40" size={24} />
							<p className="text-base text-accent-alternative">Contacto</p>
						</a>
					</ul>
				</div>
			</div>
		</>
	);
};
