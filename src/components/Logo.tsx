import Image from "next/image";

export const Logo = ({ size = 16 }: { size?: number }) => {
	return (
		<div
			style={{
				width: `${size * 4}px`,
				height: `${size * 2.5}px`,
			}}
			className="relative"
		>
			<Image
				src={"/images/logo_simple.svg"}
				alt="Logo de la tienda"
				layout="fill"
				fill
				style={{ objectFit: "contain" }}
			/>
		</div>
	);
};
