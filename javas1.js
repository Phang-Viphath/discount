function calculateTotal() {
    const qty = parseFloat(document.getElementById('qty').value);
    const price = parseFloat(document.getElementById('price').value);

    const total = qty * price;
    var discount = 0;

    if(total >= 0 && total <10){
        discount = 10
    }else if(total >= 10 && total <20){
        discount = 20
    }else if(total >= 20 && total <30){
        discount = 30
    }else if(total >= 30 && total <40){
        discount = 40
    }else if(total >= 40 && total <50){
        discount = 50
    }else if(total >= 50 && total <60){
        discount = 60
    }else{
        discount = 70
    }

    const finalPayment = total - (total * discount / 100);

    document.getElementById('total').innerText = total;
    document.getElementById('discount').innerText = discount;
    document.getElementById('payment').innerText = finalPayment;
}
