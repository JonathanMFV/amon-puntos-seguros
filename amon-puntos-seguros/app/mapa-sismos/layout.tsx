export default function MapaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section data-theme="black">
            <div>{children}</div>
        </section>
    );
}
