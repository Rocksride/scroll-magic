const run = () => {
    TweenMax.set('.part3', {y: -572})
    TweenMax.set('.part4', {y: -557}) // 289 - 846
    TweenMax.set('.part5', {y: -726}) // 120 - 846 = 726
    TweenMax.set('.part6', {y: -846})

    // TweenMax.set(['.parts h2, .parts p'], {autoAlpha: 0})

    const bodyToStart = TweenMax.to('.part3', 1, {y: 0, ease: Linear.easeNone});
    const p4ToStart = TweenMax.to('.part4', 1, { y: 0, ease: Linear.easeNone });
    const p5ToStart = TweenMax.to('.part5', 1, { y: 0, ease: Linear.easeNone });
    const p6ToStart = TweenMax.to('.part6', 1, { y: 0, ease: Linear.easeNone });

    const controller = new ScrollMagic.Controller()

    const bodyToStartScene = new ScrollMagic.Scene({
        triggerElement: '.part1',
        triggerHook: 1,
        offset: 287,
        duration: 572
    })
    .setTween(bodyToStart)
    .addTo(controller);


    const p4Scene = new ScrollMagic.Scene({
        triggerElement: '.part1',
        triggerHook: 1,
        offset: 1250,
        duration: 557
    })
    .setTween(p4ToStart)
    .addTo(controller);

    const p5Scene = new ScrollMagic.Scene({
        triggerElement: '.part1',
        triggerHook: 1,
        offset: 1250,
        duration: 726
    })
    .setTween(p5ToStart)
    .addTo(controller);

    const p6Scene = new ScrollMagic.Scene({
        triggerElement: '.part1',
        triggerHook: 1,
        offset: 1250,
        duration: 846
    })
    .setTween(p6ToStart)
    .addTo(controller);	

    const $$ = document.querySelectorAll.bind(document);
    [...$$('.parts li')].forEach(li => {
            const scene = new ScrollMagic.Scene({
                triggerElement: li,
                triggerHook: 0.55
            })
            .setClassToggle(li, 'fade-in')
            .addTo(controller)
    })
}

document.addEventListener("DOMContentLoaded", run)