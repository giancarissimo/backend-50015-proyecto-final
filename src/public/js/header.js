const page = document.title
const body = document.body
const header = document.querySelector('#header_global')
const hamburguerMenu = document.querySelector('.menu-icon-container')
const iconBagNotification = document.querySelector('.header_icons_bag_notification')
let isHeaderOpened = false

Number(iconBagNotification.textContent) > 0 ? iconBagNotification.classList.add('active') : iconBagNotification.classList.remove('active')

const handleHamburguerMenu = () => {
    hamburguerMenu.addEventListener('click', () => {
        if (isHeaderOpened) {
            body.classList.remove('active')
            header.classList.remove('active')
            hamburguerMenu.classList.remove('active')
            isHeaderOpened = false
        } else {
            body.classList.add('active')
            header.classList.add('active')
            hamburguerMenu.classList.add('active')
            isHeaderOpened = true
        }
    })
}

if (page === 'Home') {
    header.className = 'home-header'
    handleHamburguerMenu()
} else if (page === 'iStore' | page === 'Admin Hub') {
    body.classList.add('store-body')
    header.className = 'store-header'
    handleHamburguerMenu()
} else {
    header.className = 'global-header'
    body.classList.add('global-body')
    handleHamburguerMenu()
}