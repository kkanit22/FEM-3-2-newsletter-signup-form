const form = document.getElementById("newsletter-signup");
const emailField = document.getElementById("email");
const errorMessage = document.getElementById("email-error");
const mainPage = document.getElementById("main-page");
const successPage = document.getElementById("success-page");
const dismissButton = document.querySelector(".dismiss-success-card");

const showSuccess = (email) => {
	mainPage.classList.toggle("hidden");
	successPage.classList.toggle("hidden");
	const successText = document.getElementById("success-text");
	successText.innerHTML = "A confirmation email has been sent to <strong>" + email + "</strong>. Please open it and click the button inside to confirm your subscription."
}

const showFailure = () => {
	!emailField.classList.contains("invalid") ? emailField.classList.toggle("invalid") : null;
	errorMessage.classList.contains("hidden") ? errorMessage.classList.toggle("hidden") : null;
}

const validateForm = (data) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	emailRegex.test(data.email) ? showSuccess(data.email) : showFailure();
}

const handleSubmit = (e) => {
	e.preventDefault();
	const formData = new FormData(e.target);
	const data = Object.fromEntries(formData);
	validateForm(data);
}

form.addEventListener('submit', handleSubmit);
dismissButton.addEventListener('click', () => {
	emailField.value = "";
	emailField.classList.contains("invalid") ? emailField.classList.toggle("invalid") : null;
	!errorMessage.classList.contains("hidden") ? errorMessage.classList.toggle("hidden") : null;
	mainPage.classList.toggle("hidden");
	successPage.classList.toggle("hidden");
})