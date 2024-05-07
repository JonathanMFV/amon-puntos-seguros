export default function PuntosSegurosLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section data-theme="black">
			<div className="flex">
				{children}
			</div>
		</section>
	);
}
