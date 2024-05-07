export default function PuntosSegurosLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<div className="flex">
				{children}
			</div>
		</section>
	);
}
