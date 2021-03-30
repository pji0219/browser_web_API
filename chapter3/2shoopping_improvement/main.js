const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

// main
function onAdd() {
    // 1. 사용자가 입력한 텍스트를 받아옴 
    // 만약 입력이 없을 시 포커스를 유지한 채 함수를 나감
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }

    // 2. 새로운 아이템을 만듦 ( 텍스트 + 삭제 버튼 )
    const item = createItem(text);

    // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);

    // 4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({ block: 'center' });

    // 5. 인풋을 초기화 한다.
    input.value = '';
    input.focus();
}

let id = 0; // 프로덕션 레벨의 어플이면 UUID 같은 라이브러리를 사용하는 것이 좋으나
// 간단한 미니 프로젝트이기 때문에 간단하게 글로벌 숫자 변수로 함

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">
                <i class="fas fa-trash-alt" data-id=${id}></i>
            </button>
        </div>
        <div class="item__divider"></div>
    `;
    id++;

    return itemRow;
}

addBtn.addEventListener('click', onAdd);

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
});

// 아이템 삭제
items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if (id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});