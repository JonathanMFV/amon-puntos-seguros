export default function MapaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <div>{children}</div>
        </section>
    );
}
