// import { Logo } from "@/components/Logo";
import Image from "next/image";

export default function Inicio() {
	return (
		<div id="inicio">
			<div className="py-12 xl:min-h-screen flex center pt-24">
				<div className="flex flex-col xl:flex-row items-start justify-center max-w-[640px] xl:max-w-[1220px] text-accent-primary px-4 gap-6 xl:gap-0">
					<div className="flex flex-col justify-center items-start gap-4 xl:w-3/5">
						{/* <div className="hidden xl:block">
							<Logo size={80} />
						</div>
						<div className="xl:hidden">
							<Logo size={30} />
						</div> */}
						<p className="text-base xl:text-lg xl:w-[90%] leading-8 xl:leading-[34px]">
							Soy Heidi Ignatov, actualmente vivo en Entre Ríos, donde las
							colinas y los humedales son mi lugar e inspiración. Inicié mi
							formación como paisajista en el Instituto Superior de Diseño
							Integral y posteriormente en la Escuela de Diseño John Brookes
							School of Garden Design – Pampa Infinita.
						</p>
						<p className="text-base xl:text-lg xl:w-[90%] leading-8 xl:leading-[34px]">
							Desde hace 15 años, ejerzo la profesión y dedico tiempo para
							conocer e interpretar la singularidad de cada paisaje. Durante
							este tiempo, he recorrido parques nacionales, reservas y jardines
							históricos, lo que me ha permitido estudiar cada ecosistema y
							aprender de paisajistas que han marcado historia en el diseño del
							paisaje. También he visitado jardines emblemáticos y me he
							perfeccionado en diversas áreas del paisajismo a través de
							posgrados en diferentes escuelas de diseño. En estos años he
							desarrollado proyectos de distintas escalas en varias provincias
							de Argentina y en Uruguay.
						</p>
						<p className="text-base xl:text-lg xl:w-[90%] leading-8 xl:leading-[34px]">
							Me apasiona diseñar y crear espacios exteriores que invitan a ser
							contemplados, disfrutados, sentidos y, sobre todo, habitados.
						</p>
					</div>

					<div className="flex flex-col items-start justify-center gap-1 xl:gap-4 xl:w-2/5">
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
