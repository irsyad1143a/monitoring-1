function showLocation(locationNumber) {
  const locations = document.querySelectorAll(".location");
  const buttons = document.querySelectorAll(".btn-group .btn");
  locations.forEach((location, index) => {
    if (index + 1 === locationNumber) {
      location.classList.remove("d-none");
      buttons[index].classList.remove("btn-light");
      buttons[index].classList.add("btn-primary");
    } else {
      location.classList.add("d-none");
      buttons[index].classList.remove("btn-primary");
      buttons[index].classList.add("btn-light");
    }
  });
}
