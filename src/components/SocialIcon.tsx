import Link from "next/link";

export const SocialIcon = ({
	social,
	link,
	className,
}: {
	social: "x" | "facebook" | "linkedin";
	link: string;
	className?: string;
}) => {
	return (
		<Link className={className} href={link} passHref target="_blank">
			{social === "x" && (
				<svg viewBox="0 0 24 24" width="24px" height="24px">
					<path d="M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,6v12	c0,1.657-1.343,3-3,3H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12C19.657,3,21,4.343,21,6z M17.538,17l-4.186-5.99L16.774,7	h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z" />
				</svg>
			)}

			{social === "facebook" && (
				<svg
					viewBox="0,0,256,256"
					width="24px"
					height="24px"
					fillRule="nonzero"
				>
					<g
						fillRule="nonzero"
						stroke="none"
						strokeWidth="1"
						strokeLinecap="butt"
						strokeLinejoin="miter"
						strokeMiterlimit="10"
						strokeDasharray=""
						strokeDashoffset="0"
						fontFamily="none"
						fontWeight="none"
						fontSize="none"
						textAnchor="none"
					>
						<g transform="scale(10.66667,10.66667)">
							<path d="M19,3h-14c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h7.621v-6.961h-2.343v-2.725h2.343v-2.005c0,-2.324 1.421,-3.591 3.495,-3.591c0.699,-0.002 1.397,0.034 2.092,0.105v2.43h-1.428c-1.13,0 -1.35,0.534 -1.35,1.322v1.735h2.7l-0.351,2.725h-2.365v6.965h3.586c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2z"></path>
						</g>
					</g>
				</svg>
			)}

			{social === "linkedin" && (
				<svg
					viewBox="0,0,256,256"
					width="24px"
					height="24px"
					fillRule="nonzero"
				>
					<g
						fillRule="nonzero"
						stroke="none"
						strokeWidth="1"
						strokeLinecap="butt"
						strokeLinejoin="miter"
						strokeMiterlimit="10"
						strokeDasharray=""
						strokeDashoffset="0"
						fontFamily="none"
						fontWeight="none"
						fontSize="none"
						textAnchor="none"
					>
						<g transform="scale(10.66667,10.66667)">
							<path d="M19,3h-14c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2zM9,17h-2.523v-7h2.523zM7.694,8.717c-0.771,0 -1.286,-0.514 -1.286,-1.2c0,-0.686 0.514,-1.2 1.371,-1.2c0.771,0 1.286,0.514 1.286,1.2c0,0.686 -0.514,1.2 -1.371,1.2zM18,17h-2.442v-3.826c0,-1.058 -0.651,-1.302 -0.895,-1.302c-0.244,0 -1.058,0.163 -1.058,1.302c0,0.163 0,3.826 0,3.826h-2.523v-7h2.523v0.977c0.325,-0.57 0.976,-0.977 2.197,-0.977c1.221,0 2.198,0.977 2.198,3.174z"></path>
						</g>
					</g>
				</svg>
			)}
		</Link>
	);
};
