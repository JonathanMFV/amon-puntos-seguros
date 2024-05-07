import { Providers } from "@/app/providers";
export default function PreguntasFrecuentesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<div>
				<Providers>
					{children}
				</Providers>
			</div>
		</section>
	);
}
