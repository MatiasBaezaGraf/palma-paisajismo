import { GardenShow } from "@/components/GardenShow";

export default function Trabajo() {
	return (
		<div id="trabajo">
			<div className="py-12 xl:min-h-[80vh] flex center bg-black/[0.02]">
				<div className="flex flex-row justify-start max-w-[640px] xl:max-w-[1120px] w-full text-accent-secondary px-4">
					<div className="flex flex-col justify-center items-start gap-8 flex-1">
						<h2 className="text-2xl xl:text-5xl">Un poco de mi trabajo</h2>

						<div className="w-full grid grid-cols-2 gap-3 xl:h-[70%]">
							<GardenShow
								// id={1}
								title="Jardín 1"
								imageUrl="/images/jardines/1/image_jardin1_3.jpg"
							/>
							<GardenShow
								// id={2}
								title="Jardín 2"
								imageUrl="/images/jardines/2/image_jardin2_1.jpg"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
