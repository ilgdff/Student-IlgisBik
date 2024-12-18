document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productElement = this.parentElement;
        const stockElement = productElement.querySelector('.card__stock');
        const counterElement = productElement.querySelector('.card__counter');
        // Получаем текущее количество в наличии и количество, выбранное пользователем
        let card__stock = parseInt(stockElement.textContent);
        let quantity = parseInt(counterElement.value);

        // Проверяем, достаточно ли товара на складе
        if (quantity <= card__stock) {
            // Уменьшаем количество в наличии
            card__stock -= quantity;
            stockElement.textContent = card__stock;
            if (card__stock===0) {
            stockElement.textContent = 'Нет в наличии';
            }
            // Выводим сообщение о покупке
            alert(`Вы купили ${quantity} пар кроссовок!`);
            counterElement.value = 1; 
        } 
        else {
            alert('Недостаточно товара в наличии.');
        }
    });
    
});