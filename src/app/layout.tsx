import { Lora } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

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
			<body className={`${lora.className} antialiased  bg-background`}>
				{children}
			</body>
		</html>
	);
}
