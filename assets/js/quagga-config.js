if (
	navigator.mediaDevices &&
	typeof navigator.mediaDevices.getUserMedia === "function"
) {
	// safely access `navigator.mediaDevices.getUserMedia`
	console.log(navigator.mediaDevices.getUserMedia);
}

Quagga.init(
	{
		inputStream: {
			name: "Live",
			type: "LiveStream",
			target: document.querySelector("#camera"), // Or '#yourElement' (optional)
		},
		decoder: {
			readers: ["code_128_reader"],
		},
	},
	function (err) {
		if (err) {
			console.log(err);
			return;
		}
		console.log("Initialization finished. Ready to start");
		Quagga.start();
	}
);

Quagga.onDetected(function (data) {
	console.log(data.codeResult.code);
	document.querySelector("#resultado").innerText = data.codeResult.code;
});
