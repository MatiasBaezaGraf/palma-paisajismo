import { Lora } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Logo } from "@/components/Logo";

const lora = Lora({
	display: "swap",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Palma Paisajismo",
	description: "Diseño de paisajes con sentido",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${lora.className} antialiased relative  bg-background`}>
				<div className="px-4 opacity-70 z-20 left-1/2 transform -translate-x-1/2 fixed w-full max-w-[640px] xl:max-w-[1220px]  ">
					<Logo size={36} />
				</div>
				{children}
			</body>
		</html>
	);
}
