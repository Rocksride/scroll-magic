document.addEventListener('DOMContentLoaded', run)

function run () {
    const controller = new ScrollMagic.Controller();

    const timelineTM = new TimelineMax();
    timelineTM
        .from('.container2 ', 1, {autoAlpha: 0})
        .to('body', 5, {backgroundColor: 'purple'})
        .to('.container2 ', 2, {left: -100, top: -80})
        .to('.container1 ', 0.3, {autoAlpha: 0})
        .from('.container3 ', 0.3, {autoAlpha: 0}, '-=0.1')
        .to('.container3 ', 2, {left: -230, top: -135}, '+=1')
        .to('.container2 ', 1, { autoAlpha: 0 }, '-=1')
        .to('body', 5, { backgroundColor: '#ddffcc' })

        
    const scene = new ScrollMagic.Scene({
        triggerElement: '.container1',
        offset: -150,
        triggerHook: 0,
        duration: '50%'
    }).setTween(timelineTM)
        // .addIndicators({
        //     colorStart: '#0ff',
        //     colorEnd: '#0ff',
        // })
        .addTo(controller);

}