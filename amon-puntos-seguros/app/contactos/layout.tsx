export default function ContactosLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
        <section data-theme="black" className="bg-black">
            <div>{children}</div>
        </section>
    );
}
