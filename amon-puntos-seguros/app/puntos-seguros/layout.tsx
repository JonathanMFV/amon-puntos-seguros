export default function PuntosSegurosLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section data-theme="black" className="bg-black">
			{children}
		</section>
	);
}
