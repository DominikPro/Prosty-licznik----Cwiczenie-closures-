const add = () => {
    let number = 0;
    number++;
    document.body.textContent = `aktualne numer kliknięcia to ${number}`;
}

document.addEventListener('click', add);