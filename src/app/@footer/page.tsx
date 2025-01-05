import { Logo } from "@/components/Logo";
import { SocialIcon } from "@/components/SocialIcon";

export default function Footer() {
	return (
		<div>
			<div className="h-[20vh] flex center bg-black/[0.02]">
				<div className="flex flex-row  w-full items-start justify-center max-w-[1120px] text-accent-primary text-sm ">
					<div className="w-1/4">
						<Logo size={30} />
					</div>
					<div className="flex flex-col items-start justify-center gap-2 w-1/4">
						<h5 className="font-bold">DIRECCIÓN</h5>
						<p>
							Bv. de los Pioneros 996, PB Depto. 3, Libertador San Martín, ER,
							Arg.
						</p>
					</div>
					<div className="flex flex-col items-start justify-center w-1/4">
						<h5 className="font-bold mb-2">CONTACTO</h5>
						<p>heidi@palmapaisajismo.com.ar</p>
						<p>+54 (9) 343 4 510940</p>
					</div>
					<div className="flex flex-col items-start justify-center  w-1/4">
						<div className="flex flex-row items-center justify-center gap-2">
							<SocialIcon
								link="/"
								social="linkedin"
								className="fill-accent-primary"
							/>
							<p>Linkedin</p>
						</div>
						<div className="flex flex-row items-center justify-center gap-2">
							<SocialIcon
								link="/"
								social="facebook"
								className="fill-accent-primary"
							/>
							<p>Facebook</p>
						</div>
						<div className="flex flex-row items-center justify-center gap-2">
							<SocialIcon link="/" social="x" className="fill-accent-primary" />
							<p>X</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
