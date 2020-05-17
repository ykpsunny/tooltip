const tooltips = document.getElementById("tooltips");
const fragment = document.createDocumentFragment();
const config = [
	{ color: "#f40", text: "淘宝红" },
	{ color: "#0f0", text: "原谅绿" },
	{ color: "#ffb6c1", text: "樱花粉" },
];
for (let i = 0; i < config.length; i++) {
	let li = document.createElement("li");
	let { color, text } = config[i];
	li.style.setProperty("--color", color);
	li.dataset.text = text;
	fragment.appendChild(li);
}
tooltips.appendChild(fragment);
