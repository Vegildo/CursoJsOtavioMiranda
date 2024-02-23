// XMLHttpRequest

const request = obj => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest(); // xhr = Xml Http Request. É o nome padrao utilizado

		xhr.open(obj.method, obj.url, true);
		xhr.send();

		xhr.addEventListener("load", () => {
			if (xhr.status >= 200 && xhr.status < 300) {
				resolve(xhr.responseText);
			} else {
				reject(xhr.statusText);
			}
		});
	});
};

// const request = obj => {
// 	const xhr = new XMLHttpRequest(); // xhr = Xml Http Request. É o nome padrao utilizado

// 	xhr.open(obj.method, obj.url, true);
// 	xhr.send();

// 	xhr.addEventListener("load", () => {
// 		if (xhr.status >= 200 && xhr.status < 300) {
// 			obj.success(xhr.responseText);
// 		} else {
// 			obj.error(xhr.statusText);
// 			// obj.error({
// 			//     code: xhr.status,
// 			//     msg: xhr.statusText,
// 			// })
// 		}
// 	});
// };

document.addEventListener("click", e => {
	const el = e.target;
	const tag = el.tagName.toLowerCase();

	// console.log(el);

	if (tag === "a") {
		e.preventDefault();
		loadPag(el);
	}
});

let loadPag = async el => {
	const href = el.getAttribute("href");
	// console.log(href);

	const objConfig = {
		method: "GET",
		url: href,
		// success(response) {
		// 	loadRes(response);
		// },
		// error(errorText) {
		// 	console.log(errorText);
		// },
	};

	// 	request(objConfig)
	// 		.then(response => {
	// 			loadRes(response);
	// 		})
	// 		.catch(er => console.log(er));
	// };
    
	try {
		const response = await request(objConfig);
		loadRes(response);
	} catch (e) {
		console.log("Error:", e);
	}
};

const loadRes = response => {
	const res = document.querySelector("#res");
	res.innerHTML = response;
};
