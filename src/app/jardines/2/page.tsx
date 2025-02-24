export default function GardenPage() {
	return (
		<div id="inicio">
			<div className="min-h-screen flex center">
				<div className="flex flex-row items-start justify-center max-w-[1120px] text-accent-primary">
					<div className="flex flex-col justify-center items-start gap-4 w-1/2">
						<p className="text-xl w-2/3 leading-9">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
							nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
							erat volutpat.
						</p>

						<p className="text-xl w-2/3 leading-9">
							Ut wisi enim ad minim veniam, quis nostrud exerci tation
							ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
							consequat.
						</p>
					</div>

					<div className="flex flex-col items-start justify-center gap-4 w-1/2">
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
