const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', event => {
    const x = event.clientX
    const y = event.clientY

    /* 
        스타일을 지정할 때는 px를 붙어야한다.
        .style.left : 수직에 있는 선을 좌우로 움직일 때 사용
    */
    vertical.style.left = `${x}px`;

    /* 
        style.top : 수평에 있는 선을 위 아래로 움직일 때 사용
    */
    horizontal.style.top = `${y}px`;

    // target
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;

    //tag
    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;
    tag.innerHTML = `${x}px, ${y}px`;

});