document.addEventListener("click", e => {
	const el = e.target;
	const tag = el.tagName.toLowerCase();

	// console.log(el);

	if (tag === "a") {
		e.preventDefault();
		loadPag(el);
	}
});

async function loadPag(el) {
	try {
		const href = el.getAttribute("href");

		const resp = await fetch(href);

		if (resp.status < 200 && resp.status >= 300)
			throw new Error("Error 404 - MEU");

		const html = await resp.text();

		loadRes(html);
	} catch (e) {
		console.error(e);
	}
}

// function loadPag(el) {
// 	const href = el.getAttribute("href");

// 	fetch(href)
// 		.then(resp => {
// 			if (resp.status < 200 && resp.status >= 300)
// 				throw new Error("Error 404 - MEU");
// 			return resp.text();
// 		})
// 		.then(html => loadRes(html))
// 		.catch(e => {
// 			console.error(e);
// 		});
// }

const loadRes = response => {
	const res = document.querySelector("#res");
	res.innerHTML = response;
};

// fetch("pagina1.html")
// 	.then(resp => {
// 		if (resp.status !== 200) throw new Error("Error 404 - MEU");
// 		return resp.text();
// 	})
// 	.then(html => console.log(html))
// 	.catch(e => {
// 		console.log(e);
// 		console.warn(e);
// 		console.error(e);
// 	});

// fetch("pagina4.html")
// 	.then(resp => {
// 		if (resp.status !== 200) throw new Error("Error 404 - MEU");
// 		return resp.text();
// 	})
// 	.then(html => console.log(html))
// 	.catch(e => {
// 		console.log(e);
// 		console.warn(e);
// 		console.error(e);
// 	});
