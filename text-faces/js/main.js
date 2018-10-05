document.addEventListener('DOMContentLoaded', run)
function run() {
    const controller = new ScrollMagic.Controller();

    const pinScene01 = new ScrollMagic.Scene({
        triggerElement: '#slide01',
        triggerHook: 0,
        duration: '100%'
    }).setPin('#slide01 .pin-wrapper').addTo(controller);

    ['02','03','04','05','06','07','08','09','10'].forEach(num => {
        const prevNum = +num - 1;
        const str = `#slide${num} .pin-wrapper`
        const pinScene = new ScrollMagic.Scene({
            triggerElement: `#slide0${prevNum}`,
            triggerHook: 0,
            duration: '200%'
        }).setPin(str).addTo(controller);
    })
    
    const pinScene11 = new ScrollMagic.Scene({
        triggerElement: '#slide10',
        triggerHook: 0,
        duration: '100%'
    }).setPin('#slide11 .pin-wrapper').addTo(controller);
}