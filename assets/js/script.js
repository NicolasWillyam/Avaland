/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.reveal__top`, {
    origin: 'top',
    interval: 100,
})

sr.reveal(`.reveal__left`,{
    origin: 'left',
    interval: 100,
})

sr.reveal(`.reveal__right`,{
    origin: 'right',
    interval: 100,
})