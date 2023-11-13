function showDetails(model) {
    var modal = document.getElementById('details-modal');
    var content = document.getElementById('modal-content');

    if (model === 'chiron') {
        content.innerHTML = 'Двигатель W16 с четырехступенчатым турбонаддувом мощностью 1500 л.с. - Bugatti Chiron является настоящим шедевром инженерной мысли.';
    } else if (model === 'veyron') {
        content.innerHTML = 'Двигатель W16 с четырьмя турбонаддувами, 1001 л.с. - Bugatti Veyron устанавливает новые стандарты скорости и производительности.';
    }

    modal.style.display = 'block';
}

function closeDetails() {
    document.getElementById('details-modal').style.display = 'none';
}


function showLogin() {
    window.location.href = 'index2.html';
}

function showRegistration() {
    window.location.href = 'index3.html';
}

// Добавляем функцию для отображения модального окна
function showConfiguration(model) {
    // Получаем доступ к модальному окну и отображаем его
    var modal = document.getElementById('configModal');
    modal.style.display = 'block';
}

// Добавляем функцию для закрытия модального окна
function closeModal() {
    // Получаем доступ к модальному окну и скрываем его
    var modal = document.getElementById('configModal');
    modal.style.display = 'none';
}

// Добавляем функцию для покупки машины
function buyCar() {
    // Здесь вы можете добавить логику для обработки покупки
    alert('Спасибо за покупку!');
    closeModal(); // Закрываем модальное окно после покупки
}
