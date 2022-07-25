AOS.init();
const body = document.querySelector("body");
const loader = document.querySelector(".loader-container");
const email = document.querySelector("#email");
const emailbtn = document.querySelector("#submit");
const form = document.querySelector("form.grid");

body.onload = () => {
	loader.setAttribute("data-aos-duration", "1500");
	loader.setAttribute("data-aos", "slide-left");
};

function ValidateEmail(mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
		return true;
	}
	return false;
}
const span = document.createElement("span");
span.textContent = "Check Your Email Please";

emailbtn.onclick = (e) => {
	e.preventDefault();
	if (email.value === "") {
		email.style.border = `2px solid #f96262`;
		form.append(span);
	}
	// email Validation
	else if (!ValidateEmail(email.value)) {
		email.style.border = `2px solid #f96262`;
		form.append(span);
	} else {
		email.style.border = `1px solid green`;
		span.remove();
	}
};
