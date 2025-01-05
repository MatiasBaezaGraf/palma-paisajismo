import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { SideMenu } from "@/components/SideMenu";
import { usePathname } from "next/navigation";

const lora = Lora({
	display: "swap",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Palma Paisajismo",
	description: "Diseño de paisajes con sentido",
};

export default function RootLayout({
	inicio,
	paisajismo1,
	paisajismo2,
	trabajo,
	acerca,
	procesos1,
	procesos2,
	footer,
}: Readonly<{
	inicio: React.ReactNode;
	paisajismo1: React.ReactNode;
	paisajismo2: React.ReactNode;
	trabajo: React.ReactNode;
	acerca: React.ReactNode;
	procesos1: React.ReactNode;
	procesos2: React.ReactNode;
	footer: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${lora.className} antialiased  bg-background`}>
				<SideMenu />
				{inicio}
				{paisajismo1}
				{paisajismo2}
				{trabajo}
				{acerca}
				{procesos1}
				{procesos2}
				{footer}
			</body>
		</html>
	);
}
