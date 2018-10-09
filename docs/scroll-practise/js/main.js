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
    .to('.line-1 > *', 1, {autoAlpha: 0}, '-=0.75')
    .to('.line-2 > *', 1, {autoAlpha: 0}, '-=0.5')
    .to('.line-3 > *:not(.name)', 1, {autoAlpha: 0}, '-=0.25')
    .to('.line-3', 1, { css: { transform: ' skew(0) scaleY(1)'}})
    .to('.line-3', 1, { x: 800,  })
    .to('.line-3', 1, { y: 700,  }, '+=0.5')
    .to('.name', 1, { autoAlpha: 0 }, '-=0.25')
    


    const scene = new ScrollMagic.Scene({
        triggerElement: '.wrapper',
        offset: -200,
        triggerHook: 0,
        duration: '80%'
    }).setTween(tween).addTo(controller);

   
}