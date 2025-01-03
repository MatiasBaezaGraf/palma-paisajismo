import { SocialIcon } from "@/components/SocialIcon";
import Image from "next/image";

export default function Section4() {
	return (
		<div>
			<div className="min-h-screen flex center">
				<div className="flex flex-row items-start justify-center max-w-[1120px] text-accent-secondary">
					<div className="flex flex-col justify-center items-start gap-12 w-1/2 text-xl">
						<h2 className="text-5xl">Sobre Mí</h2>

						<div className="flex flex-col  items-start gap-1">
							<span className="font-bold">Lorem ipsum dolor sit amet.</span>
							<p className=" w-2/3 leading-9 text-accent-alternative">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna
								aliquam erat
							</p>
						</div>

						<div className="flex flex-col  items-start gap-1">
							<span className="font-bold">Lorem ipsum dolor sit amet.</span>
							<p className=" w-2/3 leading-9 text-accent-alternative">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna
								aliquam erat
							</p>
						</div>
					</div>

					<div className="flex flex-col items-start justify-center w-min mx-1 gap-1">
						<SocialIcon
							className="fill-accent-alternative"
							social="facebook"
							link="https://facebook.com"
						/>
						<SocialIcon
							className="fill-accent-alternative"
							social="linkedin"
							link="https://linkedin.com"
						/>
						<SocialIcon
							className="fill-accent-alternative"
							social="x"
							link="https://linkedin.com"
						/>
					</div>

					<div className="flex flex-col items-start justify-center gap-4 w-1/2">
						<div className="aspect-square relative w-full">
							<Image
								src="/images/image_me.jpg"
								alt="Landscape"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
