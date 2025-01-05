import { House, MessageCircle, TreeDeciduous, UserRound } from "lucide-react";

export const SideMenu = () => {
	return (
		<div className="flex flex-col center right-0 h-screen fixed z-20 ">
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
	);
};
