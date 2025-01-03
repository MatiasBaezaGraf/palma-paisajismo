import Image from "next/image";

export default function Section6() {
	return (
		<div>
			<div className="min-h-screen py-36 flex flex-col center bg-planes bg-center bg-cover gap-40">
				<div className="flex flex-row items-start justify-between max-w-[1120px] text-accent-primary">
					<div className="flex flex-col justify-center items-start gap-4 w-2/5">
						<div>
							<Image
								src="/images/image_hands.jpg"
								alt="Planes"
								width={600}
								height={600}
							/>
						</div>

						<p className="text-xl  leading-9">
							Ut wisi enim ad minim veniam, quis nostrud exerci tation
							ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
							consequat.
						</p>
					</div>
					<div className="flex flex-col justify-center items-start gap-4 w-2/5">
						<div>
							<Image
								src="/images/image_writing.jpg"
								alt="Planes"
								width={600}
								height={600}
							/>
						</div>

						<p className="text-xl  leading-9">
							Ut wisi enim ad minim veniam, quis nostrud exerci tation
							ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
							consequat.
						</p>
					</div>
				</div>

				<div className="flex w-full justify-between max-w-[1120px] ">
					{/* Contact form */}
					<div className="flex flex-col justify-center items-start gap-4 basis-3/5">
						<h2 className="text-5xl text-accent-alternative">Hablemos</h2>

						<div className="flex gap-4 w-full">
							<input
								type="text"
								placeholder="Nombre"
								className="border-2 border-accent-alternative bg-accent-alternative/10 text-accent-secondary px-4 py-2 basis-1/2"
							/>
							<input
								type="email"
								placeholder="Email"
								className="border-2 border-accent-alternative bg-accent-alternative/10 text-accent-secondary px-4 py-2 basis-1/2"
							/>
						</div>

						<textarea
							className="border-2 border-accent-alternative bg-accent-alternative/10 text-accent-secondary px-4 py-2 w-full"
							placeholder="Mensaje"
							rows={10}
						></textarea>
					</div>
					<div className="flex-1 relative aspect-square basis-2/5">
						<Image
							src={"/images/image_me.jpg"}
							alt="Planes"
							fill
							className="object-cover p-8"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
