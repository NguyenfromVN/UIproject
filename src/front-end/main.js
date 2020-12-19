selectCategory = () => {
  const category = document.getElementById("category");
  const publisher = document.getElementById("publisher");
  category.style.display = "block";
  publisher.style.display = "none";
  const tabCategory = document.getElementById("tabCategory");
  tabCategory.classList.remove("profile__left__tabs--active");
  tabCategory.classList.remove("profile__left__tabs");
  tabCategory.classList.add("profile__left__tabs--active");
  const tabPublisher = document.getElementById("tabPublisher");
  tabPublisher.classList.remove("profile__left__tabs--active");
  tabPublisher.classList.remove("profile__left__tabs");
  tabPublisher.classList.add("profile__left__tabs");
};

selectPublisher = () => {
  const category = document.getElementById("category");
  const publisher = document.getElementById("publisher");
  category.style.display = "none";
  publisher.style.display = "block";
  const tabPublisher = document.getElementById("tabPublisher");
  tabPublisher.classList.remove("profile__left__tabs--active");
  tabPublisher.classList.remove("profile__left__tabs");
  tabPublisher.classList.add("profile__left__tabs--active");
  const tabCategory = document.getElementById("tabCategory");
  tabCategory.classList.remove("profile__left__tabs--active");
  tabCategory.classList.remove("profile__left__tabs");
  tabCategory.classList.add("profile__left__tabs");
};

selectBurger = () => {
  const burger = document.getElementById("burger");
  console.log(burger.style.display);
  if (burger.style.display === "none") {
    burger.style.display = "block";
  } else {
    burger.style.display = "none";
  }
};

select