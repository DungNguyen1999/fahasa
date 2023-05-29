// const childrenClothingBtn = document.getElementById("children-clothing-btn");
// const adultClothingBtn = document.getElementById("adult-clothing-btn");
// const clothingListChildren = document.getElementById("clothing-list-children");
// const clothingListAdults = document.getElementById("clothing-list-adults");

// clothingListChildren.style.display = "block";
// clothingListAdults.style.display = "none";

// childrenClothingBtn.addEventListener("click", () => {
//   clothingListChildren.style.display = "block";
//   clothingListAdults.style.display = "none";
// });

// adultClothingBtn.addEventListener("click", () => {
//   clothingListChildren.style.display = "none";
//   clothingListAdults.style.display = "block";
// });
$(document).ready(function () {
  // Ẩn nội dung trong div "trend-list-2" khi trang được tải lần đầu
  $(".trend-list-2").hide();

  // Xử lý sự kiện click cho button "trend-hot-btn"
  $(".trend-hot-btn").click(function () {
    $(".trend-list-1").hide();
    $(".trend-list-2").show();
  });

  // Xử lý sự kiện click cho button "trend-day-btn"
  $(".trend-day-btn").click(function () {
    $(".trend-list-2").hide();
    $(".trend-list-1").show();
  });
});
