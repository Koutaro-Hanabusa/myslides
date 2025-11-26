export default function PresentationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div
			style={{
				width: "100%",
				height: "100vh",
				overflow: "hidden",
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
			}}
		>
			{children}
		</div>
	);
}
