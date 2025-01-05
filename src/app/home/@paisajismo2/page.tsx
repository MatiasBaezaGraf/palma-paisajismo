import Image from "next/image";

export default function Paisajismo2() {
	return (
		<div id="paisajismo2" className="bg-pool bg-cover">
			<div className="min-h-screen flex center bg-black/60">
				<div className="flex flex-row items-start justify-center max-w-[1120px] text-accent-alternative">
					<div className="flex flex-col justify-center items-start gap-2">
						<h2 className="text-5xl">El diseño de sensaciones</h2>
						<p className="text-xl leading-9 ">
							En el diseño de paisajes se tiene como eje principal las emociones
							y sensaciones que el jardin transmite
						</p>

						<div className="flex w-full mt-8">
							<div className="basis-1/3 relative aspect-square">
								<Image
									src={"/images/image_plants.jpg"}
									alt="Plants"
									fill
									className="object-cover"
								/>
							</div>
							<div className="basis-1/3 flex center aspect-square bg-white/60">
								<p className="text-xl leading-9 p-8 text-accent-primary">
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
									diam nonummy nibh euismod tincidunt ut laoreet dolore magna
									aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
									nostrud
								</p>
							</div>
							<div className="basis-1/3 relative aspect-square">
								<Image
									src={"/images/image_window.jpg"}
									alt="Window"
									fill
									className="object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
