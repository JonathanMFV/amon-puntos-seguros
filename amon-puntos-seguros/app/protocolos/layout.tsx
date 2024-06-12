export default function ProtocolosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <div data-theme="black" className="bg-black">
                {children}
            </div>
        </section>
    );
}
