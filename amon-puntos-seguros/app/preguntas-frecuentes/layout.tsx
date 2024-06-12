export default function PreguntasFrecuentesLayout({
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
