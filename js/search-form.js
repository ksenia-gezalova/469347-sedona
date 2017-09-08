var btn = document.querySelector(".btn-search-appartments");
var searchForm = document.querySelector(".search-form");
var dateCheckIn = searchForm.querySelector("[name=check-in-date]");
var dateCheckOut = searchForm.querySelector("[name=check-out-date]");
var adults = searchForm.querySelector("[name=adults]");
var children = searchForm.querySelector("[name=children]");

window.addEventListener("load", function () {
    searchForm.classList.add("hide-search")
});

btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchForm.classList.toggle("hide-search");
    dateCheckIn.focus();
});

searchForm.addEventListener("submit", function (evt) {
    if (!dateCheckIn.value || !dateCheckOut.value || !adults.value) {
        evt.preventDefault();
        console.log("Нужно указать дату заезда и дату выезда, а также количество гостей");
    } else {
        localStorage.setItem("adults", adults.value);
        localStorage.setItem("children", children.value);
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        searchForm.classList.add("hide-search");
    }
});
