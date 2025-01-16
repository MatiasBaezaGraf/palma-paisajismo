import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

export const GardenShow = ({
	// id,
	title,
	imageUrl,
}: {
	// id: number;
	title: string;
	imageUrl: string;
}) => {
	return (
		<a
			href={`#inicio`}
			className="relative flex center col-span-1 bg-transparent group overflow-hidden aspect-square xl:aspect-video"
		>
			<h3 className="flex center gap-2 xl:block text-xl xl:text-3xl z-10 text-accent-primary xl:text-transparent group-hover:text-accent-primary transition-colors duration-300">
				{title}
				<SquareArrowOutUpRight size="14" className="xl:hidden" />
			</h3>
			<Image
				src={imageUrl}
				alt="proyecto"
				fill
				className="object-cover transition-opacity duration-300 opacity-[0.5] xl:opacity-100 group-hover:opacity-[0.1]"
			/>
		</a>
	);
};
