import { House, MessageCircle, TreeDeciduous, UserRound } from "lucide-react";

export const SideMenu = () => {
	return (
		<div className="flex flex-col gap-8 center right-0 h-screen fixed z-20 px-8 ">
			<a href="/" className="flex flex-row justify-start gap-2 w-full">
				<House className="text-accent-alternative/40" size={24} />
				<p className="text-base text-accent-alternative">Inicio</p>
			</a>
			<a href="/" className="flex flex-row justify-start gap-2 w-full">
				<TreeDeciduous className="text-accent-alternative/40" size={24} />
				<p className="text-base text-accent-alternative">Paisajismo</p>
			</a>
			<a href="/" className="flex flex-row justify-start gap-2 w-full">
				<UserRound className="text-accent-alternative/40" size={24} />
				<p className="text-base text-accent-alternative">Sobre mi</p>
			</a>
			<a href="/" className="flex flex-row justify-start gap-2 w-full">
				<MessageCircle className="text-accent-alternative/40" size={24} />
				<p className="text-base text-accent-alternative">Contacto</p>
			</a>
		</div>
	);
};
