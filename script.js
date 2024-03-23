let lastScrollTop = 0;

        window.addEventListener("scroll", function() {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > lastScrollTop) {
                document.getElementById("top-bar").style.top = "-80px"; // Adjust height of top bar as needed
            } else {
                document.getElementById("top-bar").style.top = "0";
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
        });
        