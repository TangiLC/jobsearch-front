import React, { useEffect, useState } from "react";

const IframeProxy = ({ url, scale }) => {
	const [proxyUrl, setProxyUrl] = useState("");
	const [transformScale, setTransformSale] = useState(`scale(${scale})`);
	const [frameWidth, setFrameWidth] = useState(
		`${((1 / scale) * 100).toString()}%`
	);
	const [frameHeight, setFrameHeight] = useState(
		`${((1 / scale) * 100).toString()}%`
	);

	useEffect(() => {
		if (url) {
			console.log("url", url);
			setProxyUrl(
				`http://localhost:3003/api/proxy?url=${encodeURIComponent(url)}`
			);
		}
	}, [url]);

	useEffect(() => {
		setTransformSale(`scale(${scale})`);
		setFrameWidth(`${((1 / scale) * 100).toString()}%`);
		setFrameHeight(`${((1 / scale) * 100).toString()}%`);
	}, [scale]);

	return (
		<div>
			{proxyUrl ? (
				<div
					style={{
						overflow: "hidden",
						width: "100%",
						height: "15rem",
						position: "relative",
					}}
				>
					<iframe
						src={proxyUrl}
						width={frameWidth}
						height={frameHeight}
						title="Proxy Iframe"
						style={{
							border: "1px solid #ccc",
							transform: transformScale,
							transformOrigin: `-${150}% 0`,
							position: "absolute",
						}}
					></iframe>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default IframeProxy;
