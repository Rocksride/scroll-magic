document.addEventListener('DOMContentLoaded', run)

function run () {
    const controller = new ScrollMagic.Controller();
    const $ = document.querySelector.bind(document);
    const tween = new TimelineMax();
    tween
    .to('.line-1 > *', 1, {css: {
        transform: 'translateY(-80px)',
    }})
    .to('.line-2 > *', 1, {css: {
        transform: 'translateY(-80px)',
    }}, '-=1')
    .to('.line-3 > *', 1, {css: {
        transform: 'translateY(-80px)',
    }}, '-=1')


    const scene = new ScrollMagic.Scene({
        triggerElement: '.wrapper',
        offset: -200,
        triggerHook: 0,
        duration: '50%'
    }).setTween(tween).addTo(controller);

   
}