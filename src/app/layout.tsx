import type { Metadata } from "next";
import { Lora } from "next/font/google";
import localFont from "next/font/local";
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
			<body className={`${lora.className} antialiased`}>
				<Logo size={16} />
				{children}
			</body>
		</html>
	);
}
