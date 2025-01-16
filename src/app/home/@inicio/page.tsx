import { Logo } from "@/components/Logo";
import Image from "next/image";

export default function Inicio() {
	return (
		<div id="inicio">
			<div className="py-8 md:min-h-screen flex center">
				<div className="flex flex-col md:flex-row items-start justify-center max-w-[1120px] text-accent-primary px-4 gap-6 md:gap-0">
					<div className="flex flex-col justify-center items-start gap-4 md:w-1/2">
						<div className="hidden md:block">
							<Logo size={80} />
						</div>
						<div className="md:hidden">
							<Logo size={30} />
						</div>
						<p className="text-base md:text-xl md:w-2/3 leading-8 md:leading-9">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
							nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
							erat volutpat.
						</p>

						<p className="text-base md:text-xl md:w-2/3 leading-8 md:leading-9">
							Ut wisi enim ad minim veniam, quis nostrud exerci tation
							ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
							consequat.
						</p>
					</div>

					<div className="flex flex-col items-start justify-center gap-1 md:gap-4 md:w-1/2">
						<Image
							src="/images/image_landing.jpg"
							alt="Landscape"
							width={800}
							height={800}
						/>
						<p className="text-base">
							<span className="font-bold">HEIDI IGNATOV</span>{" "}
							<span className="italic">Paisajista</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
