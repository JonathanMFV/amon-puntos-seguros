export default function MapaLayout({
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
