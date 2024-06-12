export default function ProtocolosLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
        <section>
            <div data-theme="black">{children}</div>
        </section>
    );
}
