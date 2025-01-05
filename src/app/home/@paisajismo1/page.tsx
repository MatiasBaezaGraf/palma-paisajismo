import Link from "next/link";

export default function Paisajismo1() {
	return (
		<div id="paisajismo">
			<div className="min-h-[70vh] flex center bg-black/[0.02]">
				<div className="flex flex-row items-start justify-center max-w-[1120px] text-accent-secondary">
					<div className="flex flex-col justify-center items-start gap-12">
						<h2 className="text-5xl">¿Que es el Paisajismo?</h2>
						<p className="text-xl w-1/2 leading-9 text-accent-secondary/50">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
							nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
							erat volutpat.
						</p>

						<Link
							href={"#paisajismo2"}
							className="border-accent-secondary hover:bg-black/10 text-xl border-2 px-12 py-6"
						>
							Aprende más
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
