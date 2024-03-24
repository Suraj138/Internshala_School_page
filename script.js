let lastScrollTop = 0;

        window.addEventListener("scroll", function() {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                // Scrolling down
                document.querySelector('.top-bar').classList.add('hidden');
            } else {
                // Scrolling up
                document.querySelector('.top-bar').classList.remove('hidden');
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
        });