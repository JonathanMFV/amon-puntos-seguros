export default function ContactosLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section data-theme="forest">
			<div>
				{children}
			</div>
		</section>
	);
}
