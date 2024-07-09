
window.onload = function () {
    const headerScroll = () => {
        let header = document.querySelector(".header");
        let sticky = header.offsetTop;

        function myFunction() {
            if (window.scrollY > sticky) {
                header.classList.add("sticky");
                header.classList.remove("head");
            } else {
                header.classList.remove("sticky");
                header.classList.add("head");
            }
        }
        window.onscroll = function () { myFunction() };
    }
    headerScroll();
    const animateScroll = () => {
        let secondSection = document.querySelector(".secondSection");
        let foodContainer = document.querySelectorAll(".foodContainer");
        let sticky = secondSection.offsetTop;

        function myFunction() {
            if (window.scrollY > sticky) {
                foodContainer.forEach(function(a){
                    a.classList.add("animate");
                });
               
            } else {
                foodContainer.forEach(function(a){
                    a.classList.remove("animate");
                });
            }
        }
        window.onscroll = function () { myFunction() };
    }
    animate();
    const headerHamburger = () => {
        let hamburger = document.querySelector('.hamburger');
        let mobileMenu = document.querySelector('.navbar-menu');
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('is-active');
            mobileMenu.classList.toggle('is-active');
        });
    }
    headerHamburger();


    const menuOption = () => {
        let menuValue = document.querySelectorAll('.menu-value');
        for (let i = 0; i < menuValue.length; i++) {
            menuValue[i].addEventListener("click", function () {
                let current = document.querySelectorAll(".active");
                current[0].className = current[0].className.replace("active", "");
                this.className += " active";
                let ab = this.innerText.toLowerCase();
                filterSelection(ab);
                updateItemsPerRow(ab);
            });
        }

    };
    menuOption();
    filterSelection("all");
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
        let count = 0;
        for (let i = 0; i < foodContainer.length; i++) {
            RemoveClass(foodContainer[i], "show");
            if (foodContainer[i].classList.contains(menuVals)) {
                foodContainer[i].classList.replace('d-none', 'show');
                count++;
            }
        }

    }
    function updateItemsPerRow(abs) {
        const container = document.querySelector('.foodContainers');
        const items = container.querySelectorAll('.foodContainer');
        const containerWidth = container.clientWidth;
        const containerPadding = parseFloat(getComputedStyle(container).paddingLeft) + parseFloat(getComputedStyle(container).paddingRight);
        const itemWidth = items[0].offsetWidth; // Assuming all items have the same width

        const itemsPerRow = Math.floor((containerWidth - containerPadding) / itemWidth);;
        console.log('Items per row:', itemsPerRow);
        let count = 0;
        let size = 0;
        for (let i = 0; i < items.length; i++) {

            if (items[i].classList.contains(abs)) {
                count++;
            }
        }
        if (count % 2 !== 0) {
            if (count > size) {
              
                if(!items === "Infinity"){
                for (let i = 0; i < itemsPerRow - 1; i++) {
                    let foodContainers = document.querySelector('.foodContainers');
                    let newContainer = document.createElement('div');

                    newContainer.className = 'foodContainers show new';
                    newContainer.style.cssText = 'content: ""; width: 150px; height: 150px; margin: 0 10px 18rem;';
                    foodContainers.appendChild(newContainer);
                    size += itemsPerRow + 1;
                    console.log(size)
                }
                }
            }
        } else {
            let newContainer = document.querySelectorAll('.new');
            newContainer.forEach(function (a) {
                a.remove();
            });
        }

    }

    // Initial call to set the initial number of items per row
    updateItemsPerRow();

    // Listen for the window resize event
    window.addEventListener('resize', updateItemsPerRow);

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
};
