import Link from "next/link";
import Image from "next/image";

export const GardenShow = ({
	id,
	title,
	imageUrl,
}: {
	id: number;
	title: string;
	imageUrl: string;
}) => {
	return (
		<Link
			href={`/jardines/${id}`}
			className="relative flex center col-span-1 bg-transparent group overflow-hidden aspect-video"
		>
			<h3 className="text-3xl z-10 text-transparent group-hover:text-accent-primary transition-colors duration-300">
				{title}
			</h3>
			<Image
				src={imageUrl}
				alt="proyecto"
				fill
				className="object-cover transition-opacity duration-300 group-hover:opacity-[0.1]"
			/>
		</Link>
	);
};
