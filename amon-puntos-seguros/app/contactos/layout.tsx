export default function ContactosLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section data-theme="black">
			<div>
				{children}
			</div>
		</section>
	);
}
