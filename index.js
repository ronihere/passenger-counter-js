let inceremnt_btn = document.getElementById('increment-btn');
let save_el = document.querySelector('#save-el');
let save_btn = document.querySelector('#save-btn');
let count = document.getElementById('count');
let number_of_passenger = 0;
inceremnt_btn.addEventListener('click', function () {
    number_of_passenger++;
    console.log('click');
    count.textContent = number_of_passenger;
});

save_btn.addEventListener('click', function () {
    let saved_ans = number_of_passenger;
    number_of_passenger = 0;
    count.textContent = number_of_passenger;
    save_el.textContent += saved_ans + ' - ';
});

