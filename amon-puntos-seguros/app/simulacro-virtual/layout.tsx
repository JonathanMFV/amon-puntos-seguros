export default function SimulacroVirtualLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section data-theme="black">
                {children}
        </section>
    );
}
