
window.onload = function () {
    const scrollHandler = () => {
        let header = document.querySelector(".header");
        let sticky = header.offsetTop;
        if (window.scrollY > sticky) {
            header.classList.add("sticky");
            header.classList.remove("head");
        } else {
            header.classList.remove("sticky");
            header.classList.add("head");
        }
    }
    window.addEventListener("scroll", scrollHandler);

    const headerHamburger = () => {
        let hamburger = document.querySelector('.hamburger');
        let mobileMenu = document.querySelector('.navbar-menu');
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('is-active');
            mobileMenu.classList.toggle('is-active');
        });
    }
    const animate = () =>{
        const foodContainer = document.querySelectorAll(".foodContainer")
        foodContainer.forEach(element => {
            element.classList.add("animateContainer");
            element.addEventListener("animationend", function () {
                this.classList.remove("animateContainer");
            });
        });
    }
   /*const foodContainer = document.querySelectorAll(".foodContainer")
    const observer = new IntersectionObserver(entries => {
        foodContainer.classList.toggle( 'animateContainer', entries[0].isIntersecting );
});

observer.observe(foodContainer);*/
    animate();
    const menuOption = () => {
        let menuValue = document.querySelectorAll('.menu-value');
        for (let i = 0; i < menuValue.length; i++) {
            menuValue[i].addEventListener("click", function () {
                let current = document.querySelectorAll(".active");
                current[0].className = current[0].className.replace("active","");
                this.className += " active";
                let ab = this.innerText.toLowerCase();
                filterSelection(ab);
                animate();
            });
        }

    };
    function filterSelection(menuVals) {
        let foodContainer = document.querySelectorAll(".foodContainer");
        if (menuVals == "all") {
            for (let i = 0; i < foodContainer.length; i++) {
                foodContainer[i].classList.remove("d-none");
            }
        } else {
            for (let i = 0; i < foodContainer.length; i++) {
                foodContainer[i].classList.add("d-none");
            }
        }
        for (let i = 0; i < foodContainer.length; i++) {
            RemoveClass(foodContainer[i], "show");
            if (foodContainer[i].classList.contains(menuVals)) {
                foodContainer[i].classList.replace('d-none', 'show');
              
            }
        }

    }
    function RemoveClass(element, name) {
        let arr1 = element.className.split(" ");
        let arr2 = name.split(" ");
        for (let i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }
  
    // Call the functions
    menuOption();
    filterSelection("all");
    headerHamburger();
};
