const add = () => {
    let number = 0;
    return () => {
        number++;
        document.body.textContent = `Aktualne numer kliknięcia to ${number}`;
    }
}
const counter = add()
document.addEventListener('click', counter);