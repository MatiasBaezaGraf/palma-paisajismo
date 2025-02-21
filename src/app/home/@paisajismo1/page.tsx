import Link from "next/link";

export default function Paisajismo1() {
	return (
		<div id="paisajismo">
			<div className="py-12 xl:min-h-[70vh] flex center bg-black/[0.02]">
				<div className="flex flex-row items-start justify-center max-w-[640px] xl:max-w-[1220px] text-accent-secondary px-4">
					<div className="flex flex-col justify-center items-start gap-8 xl:gap-12">
						<h2 className="text-2xl xl:text-5xl">¿Que es el Paisajismo?</h2>
						<p className="text-base xl:text-lg xl:w-1/2 leading-8 xl:leading-[34px] text-accent-secondary/50">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
							nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
							erat volutpat.
						</p>

						<Link
							href={"#paisajismo2"}
							className="border-accent-secondary hover:bg-black/10 text-base xl:text-lg border-2 px-8 py-4 xl:px-12 xl:py-6"
						>
							Metodología de trabajo
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
