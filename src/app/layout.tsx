import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { SideMenu } from "@/components/SideMenu";

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
	section1,
	section2,
	section3,
	section4,
}: Readonly<{
	children: React.ReactNode;
	section1: React.ReactNode;
	section2: React.ReactNode;
	section3: React.ReactNode;
	section4: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${lora.className} antialiased  bg-background`}>
				<SideMenu />
				{section1}
				{section2}
				{section3}
				{section4}
			</body>
		</html>
	);
}
