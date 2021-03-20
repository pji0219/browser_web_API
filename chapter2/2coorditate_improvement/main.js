const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () => {
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;

    const body = document.querySelector('body');
    const h1 = document.createElement('h1');
    h1.setAttribute('class', 'title');
    h1.setAttribute('style', 'color: white;');
    h1.textContent = 'coorditate';
    body.append(h1);

    document.addEventListener('mousemove', event => {
        const x = event.clientX
        const y = event.clientY

        vertical.style.transform = `translateX(${x}px)`;
        horizontal.style.transform = `translateY(${y}px)`;

        target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;

        tag.style.transform = `translate(${x}px, ${y}px)`;
        tag.innerHTML = `${x}px, ${y}px`;

    });
});