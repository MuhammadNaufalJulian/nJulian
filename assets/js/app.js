document.addEventListener("DOMContentLoaded", function () {
    function navigateToPage(url) {
        window.location.href = url;
    }

    // Event listener untuk logo
    document.querySelectorAll(".image-container img").forEach(img => {
        img.addEventListener("click", function () {
            navigateToPage("index.html"); // Mengarahkan ke index.html
        });
    });

    // Event listener untuk navbar
    document.querySelectorAll(".nav-li-button").forEach(navItem => {
        navItem.addEventListener("click", function (event) {
            event.preventDefault(); // Hindari refresh default
            let targetUrl = this.getAttribute("data-url");
            if (targetUrl) {
                navigateToPage(targetUrl);
            }
        });
    });

    // Auto-scroll horizontal dengan efek infinite looping
    function autoScrollImages() {
        const aboutImages = document.querySelector(".about-images");
        if (!aboutImages) return;

        aboutImages.innerHTML += aboutImages.innerHTML; // Gandakan gambar untuk efek loop

        let scrollAmount = 0;
        const scrollStep = 2; // Kecepatan scroll (px)
        const resetScroll = aboutImages.scrollWidth / 2; // Setengah dari total scroll untuk reset

        function scroll() {
            if (scrollAmount >= resetScroll) {
                aboutImages.scrollLeft = 0; // Reset ke awal untuk efek looping
                scrollAmount = 0;
            } else {
                scrollAmount += scrollStep;
                aboutImages.scrollLeft += scrollStep;
            }
        }

        setInterval(scroll, 50); // Waktu per langkah scroll (ms)
    }

    autoScrollImages();
});
