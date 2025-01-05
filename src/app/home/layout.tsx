import { SideMenu } from "@/components/SideMenu";

export default function HomeLayout({
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
		<>
			<SideMenu />
			{inicio}
			{paisajismo1}
			{paisajismo2}
			{trabajo}
			{acerca}
			{procesos1}
			{procesos2}
			{footer}
		</>
	);
}
