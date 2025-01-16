import Image from "next/image";

export default function Paisajismo2() {
	return (
		<div id="paisajismo2" className="bg-pool bg-cover">
			<div className="py-12 xl:min-h-screen flex center bg-black/60">
				<div className="flex flex-row items-start justify-center max-w-[640px] xl:max-w-[1120px] text-accent-alternative px-4">
					<div className="flex flex-col justify-center items-start gap-8 xl:gap-2">
						<h2 className="text-2xl xl:text-5xl">El diseño de sensaciones</h2>
						<p className="text-base xl:text-xl leading-8 xl:leading-9">
							En el diseño de paisajes se tiene como eje principal las emociones
							y sensaciones que el jardin transmite
						</p>

						<div className="flex flex-col gap-2">
							<div className="flex w-full xl:mt-8 gap-2 xl:gap-0">
								<div className="basis-1/2 xl:basis-1/3 relative aspect-square">
									<Image
										src={"/images/image_plants.jpg"}
										alt="Plants"
										fill
										className="object-cover"
									/>
								</div>
								<div className="hidden xl:flex basis-1/3 center aspect-square bg-white/60">
									<p className="text-xl leading-9 p-8 text-accent-primary">
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
										sed diam nonummy nibh euismod tincidunt ut laoreet dolore
										magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
										quis nostrud
									</p>
								</div>
								<div className="basis-1/2 xl:basis-1/3 relative aspect-square">
									<Image
										src={"/images/image_window.jpg"}
										alt="Window"
										fill
										className="object-cover"
									/>
								</div>
							</div>
							<p className="text-base xl:hidden leading-8 text-accent-secondary/50 bg-white/60 p-2">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna
								aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
								nostrud
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
