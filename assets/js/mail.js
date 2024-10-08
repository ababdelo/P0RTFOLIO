function showCustomAlert(e, t, a) {
	let n = document.createElement("div");
	n.classList.add("backdrop");
	let l = document.createElement("div");
	l.classList.add("alert-container", "animate-popup");
	let r = document.createElement("div");
	r.classList.add("alert-content");
	let s = document.createElement("h2");
	s.textContent = e;
	let d = document.createElement("p");
	d.textContent = t;
	let m = document.createElement("button");
	(m.textContent = "OK"),
	m.addEventListener("click", () => {
			document.body.removeChild(n), document.body.removeChild(l);
		}),
		r.appendChild(s),
		r.appendChild(d),
		r.appendChild(m),
		l.appendChild(r),
		document.body.appendChild(n),
		document.body.appendChild(l);
}

function sendMail() {
	var e = document.getElementById("contact-name").value.trim(),
		t = document.getElementById("contact-email").value.trim(),
		a = document.getElementById("contact-message").value.trim();
	if (!e || !t || !a) {
		showCustomAlert("Error", "All fields are required. Please fill in the missing information.", "error");
		return;
	}
	var n = document.getElementById("usr-name").innerText.replace(/\s+/g, " ").trim();
	emailjs
		.send("__SERVICE_ID__", "__TEMPLATE_ID__", { // Replace __SERVICE_ID__ and __TEMPLATE_ID__ with your own service ID and template ID
			from_name: e,
			from_email: t,
			message: a,
			to_name: n
		})
		.then((e) => {
			(document.getElementById("contact-name").value = ""),
			(document.getElementById("contact-email").value = ""),
			(document.getElementById("contact-message").value = ""),
			showCustomAlert("Success", "Your message was sent successfully!", "success");
		})
		.catch((e) => {
			console.error(e), showCustomAlert("Error", "Failed to send the message. Please try again later.", "error");
		});
}
console.log("mail.js loaded");