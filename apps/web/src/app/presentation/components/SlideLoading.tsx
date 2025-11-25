export function SlideLoading() {
	return (
		<div
			style={{
				position: "absolute",
				inset: 0,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				background: "#f5f5f5",
			}}
		>
			<div
				style={{
					width: "40px",
					height: "40px",
					border: "3px solid #e0e0e0",
					borderTop: "3px solid #666",
					borderRadius: "50%",
					animation: "spin 1s linear infinite",
				}}
			/>
			<style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
		</div>
	);
}
