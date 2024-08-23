function calculateAge(e) {
	let t = new Date(),
		a = new Date(e);
	if (a > t) return "Invalid";
	if (1990 > a.getFullYear() || a.getFullYear() > 2010) return "Birthdate out of range";
	let n = t.getFullYear() - a.getFullYear(),
		l = t.getMonth() - a.getMonth();
	return (l < 0 || (0 === l && t.getDate() < a.getDate())) && n--, n;
}
document.addEventListener("DOMContentLoaded", () => {
	let e = document.getElementById("birthday"),
		t = e.getAttribute("datetime"),
		a = calculateAge(t);
	document.getElementById("age").textContent = a;
});
console.log("age.js loaded");