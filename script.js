const iconClose = document.querySelector("[data-close-mobile-menu]")
const iconHamburger = document.querySelector("[data-hamburger]")
const mobileMenu = document.querySelector("[data-mobile-menu]")
const overlay = document.querySelector("[data-overlay]")

iconHamburger.addEventListener("click", () => {
    openMobileMenu()
})

iconClose.addEventListener("click", () => {
    closeMobileMenu()
})

overlay.addEventListener("click", () => {
    closeMobileMenu()
})


document.addEventListener("click", e => {
    handleMobileDropDown(e)
    handleDesktopDropDown(e)
})

function openMobileMenu() {
    mobileMenu.classList.add("navbar__menu--open")
    overlay.classList.add("overlay--show")
    document.body.classList.add("remove-scroll")
}

function closeMobileMenu() {
    mobileMenu.classList.remove("navbar__menu--open")
    overlay.classList.remove("overlay--show")
    document.body.classList.remove("remove-scroll")
}

function handleMobileDropDown(e) {
    const isDropDown = e.target.matches("[data-dropdown-link]") ||
        e.target.matches(("[data-dropdown]"))

    if (isDropDown) {
        const currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("menu__item--open")
        document.querySelectorAll("[data-dropdown]").forEach(dropdown => {
            if (dropdown === currentDropdown) return
            dropdown.classList.remove("menu__item--open")
        })
    }
}

function handleDesktopDropDown(e) {
    const isDropDown = e.target.matches("[data-dropdown-link-desktop]") ||
        e.target.matches("[data-dropdown-desktop]")

    // if it's clicked on the submenu do nothing
    if (!isDropDown && e.target.closest("[data-dropdown-desktop]")) return

    let currentDropdown
    if (isDropDown) {
        currentDropdown = e.target.closest("[data-dropdown-desktop]")
        currentDropdown.classList.toggle("menu__item-desktop--open")
    }

    // when it's clicked on anywhere, close all the submenus
    // but if it's clicked on the a dropdown do nothing
    // (remove menu__item-desktop--open class from all the dropdown items except the one that's clicked on it)
    document.querySelectorAll("[data-dropdown-desktop]").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("menu__item-desktop--open")
    })
}