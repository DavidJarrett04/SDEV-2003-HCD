document.addEventListener("DOMContentLoaded", function() {
const rating_card=document.querySelectorAll(".ratings span");
const submit_button = document.querySelector(".submit_button");
const rate_point=document.getElementById("rate")
const rating_section = document.querySelector(".rating_section");
const thank_section = document.querySelector(".thankyou-section-hidden");

let rate = null;

rating_card.forEach((rating_card) => {
    rating_card.addEventListener("click", (e) => {
        const active = document.querySelector('.checked');
        if (active) {
            active.classList.remove("checked")
        }
        const card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;
    });
});
submit_button.addEventListener("click", () => {
    if (rate) {
        rate_point.innerText = rate;
        rating_section.classList.add("hidden");
        thank_section.classList.remove("hidden");
    }
    }
)});
