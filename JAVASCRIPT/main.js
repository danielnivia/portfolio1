const filterButton = document.querySelectorAll("li");

filterButton.forEach(item => {
    const value = item.textContent.toLowerCase();
    const thumbnails = document.querySelectorAll(".gallery a");

    if (value === "all") {
        item.addEventListener("click", () => {
            thumbnails.forEach(item => {
                item.style.display = "block";
            });
        });

    } else {
        item.addEventListener("click", () => {
            thumbnails.forEach(image => {
                if (image.dataset.category === value) {
                    image.style.display = "block";
                }else {
                    image.style.display = "none";
                }
            });
        });
    }
});