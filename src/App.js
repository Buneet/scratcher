import React, { useRef, useEffect } from "react";
import ScratchCard from "react-scratchcard-v2";
import { CUSTOM_BRUSH_PRESET } from "react-scratchcard-v2";

import IMG from "./img.jpg";

const App = () => {
	const ref = useRef < ScratchCard > null;
	useEffect(() => {
		document.addEventListener(
			"touchstart",
			function (e) {
				e.preventDefault();
			},
			{ passive: false }
		);
		document.addEventListener(
			"touchmove",
			function (e) {
				e.preventDefault();
			},
			{ passive: false }
		);
	}, []);

	return (
		<div>
			<ScratchCard
				width={400}
				height={700}
				image={IMG}
				finishPercent={50}
				customBrush={CUSTOM_BRUSH_PRESET}
				onComplete={() => console.log("complete")}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						width: "100%",
						height: "100%",
						alignItems: "center",
						justifyContent: "flex-end",
					}}
				>
					<h1 class="text-xl">We're going to...</h1>
					<h1 class="text-xl pb-40">Amsterdam!</h1>
				</div>
			</ScratchCard>
		</div>
	);
};

export default App;
