//-------------live time-----------------//
window.onload = function() {
        const date = new Date();
        const displayDate = date.toLocaleDateString();
        const displayTime = date.toLocaleTimeString();

        document.getElementById('date').innerHTML = displayDate;
        document.getElementById('time').innerHTML = displayTime;
}

//-----------------login--------------------------

let loginArray = [];

document.getElementById('loginForm').addEventListener('submit', function(event) {
event.preventDefault();

let username = document.getElementById('username').value;
let password = document.getElementById('password').value;
let email = document.getElementById('email').value;

let loginData = {
    username: username,
    password: password,
    email   : email
};

loginArray.push(loginData);

console.log(loginArray);

alert('You are logging successfully!!!');  
    window.location.href = '#home';   
    setTimeout(function() {
        alert('Hi ' + username + ', Enjoy Your Time');
    }, 2000);

});


//----------------logout------------------
function logout() {
alert("Thank you for join us 🤗");
window.location.href = 'index.html';   
}

//-----------------------cart-------------------------
let cart = [];
let total = 0;

function addToCart(item) {
cart.push(item);
updateCart();
}

function updateCart() {
const cartItems = document.getElementById('cart-items');
const totalElement = document.getElementById('total');
cartItems.innerHTML = '';
total = 0;

cart.forEach(cartItem => {
    const row = document.createElement('tr');
    const itemName = document.createElement('td');
    const discount = document.createElement('td');
    const itemPrice = document.createElement('td');

    itemName.textContent = cartItem.name;
    discount.textContent = cartItem.discount;
    itemPrice.textContent = `Rs.${cartItem.netPrice.toFixed(2)}`;

    row.appendChild(itemName);
    row.appendChild(discount);
    row.appendChild(itemPrice);
    cartItems.appendChild(row);

    total += cartItem.netPrice;
});

totalElement.textContent = total.toFixed(2);
}

function Checkout(){
alert("Thank For Your Purchers")
window.location.href = 'index.html';
}


// ---------------item add----------------

function B1001() {
    addToCart({
        id: 'B1001',
        name: 'Classic Burger (Large)',
        imgSrc: './img/burger.jpg',
        unitPrice: 750.00,
        discount: '-',
        netPrice: 750.00
    });
}

function B1002() {
    addToCart({
        id: 'B1002',
        name: 'Classic Burger (Regular)',
        imgSrc: './img/burger.jpg',
        unitPrice: 1500.00,
        discount: '15%',
        netPrice: 1275.00
    });
}

function B1003() {
    addToCart({
        id: 'B1003',
        name: 'Turkey Burger',
        imgSrc: './img/burger.jpg',
        unitPrice: 1600.00,
        discount: '-',
        netPrice: 1600.00
    });
}

function B1004() {
    addToCart({
        id: 'B1004',
        name: 'Chicken Burger (Large)',
        imgSrc: './img/burger.jpg',
        unitPrice: 1400.00,
        discount: '-',
        netPrice: 1400.00
    });
}

function B1005() {
    addToCart({
        id: 'B1005',
        name: 'Chicken Burger (Regular)',
        imgSrc: './img/burger.jpg',
        unitPrice: 1400.00,
        discount: '20%',
        netPrice: 1120.00
    });
}

function B1006() {
    addToCart({
        id: 'B1006',
        name: 'Cheese Burger (Large)',
        imgSrc: './img/burger.jpg',
        unitPrice: 1000.00,
        discount: '-',
        netPrice: 1000.00
    });
}

function B1007() {
    addToCart({
        id: 'B1007',
        name: 'Cheese Burger (Regular)',
        imgSrc: './img/burger.jpg',
        unitPrice: 600.00,
        discount: '-',
        netPrice: 600.00
    });
}

function B1008() {
    addToCart({
        id: 'B1008',
        name: 'Bacon Burger',
        imgSrc: './img/burger.jpg',
        unitPrice: 650.00,
        discount: '15%',
        netPrice: 552.50
    });
}

function B1009() {
    addToCart({
        id: 'B1009',
        name: 'Shawarma Burger',
        imgSrc: './img/burger.jpg',
        unitPrice: 800.00,
        discount: '-',
        netPrice: 800.00
    });
}

function B1010() {
    addToCart({
        id: 'B1010',
        name: 'Olive Burger',
        imgSrc: './img/burger.jpg',
        unitPrice: 1800.00,
        discount: '-',
        netPrice: 1800.00
    });
}

function B1012() {
    addToCart({
        id: 'B1012',
        name: 'Double-Cheese Burger',
        imgSrc: './img/burger.jpg',
        unitPrice: 1250.00,
        discount: '20%',
        netPrice: 1000.00
    });
}

function B1013() {
    addToCart({
        id: 'B1013',
        name: 'Crispy Chicken Burger (Regular)',
        imgSrc: './img/burger.jpg',
        unitPrice: 1200.00,
        discount: '-',
        netPrice: 1200.00
    });
}

function B1014() {
    addToCart({
        id: 'B1014',
        name: 'Crispy Chicken Burger (Large)',
        imgSrc: './img/burger.jpg',
        unitPrice: 1600.00,
        discount: '10%',
        netPrice: 1440.00
    });
}

function B1015() {
    addToCart({
        id: 'B1015',
        name: 'Paneer Burger',
        imgSrc: './img/burger.jpg',
        unitPrice: 900.00,
        discount: '-',
        netPrice: 900.00
    });
}

function B1016() {
    addToCart({
        id: 'B1016',
        name: 'Crispy Chicken Submarine (Large)',
        imgSrc: './img/hamburger.jpg',
        unitPrice: 2000.00,
        discount: '-',
        netPrice: 2000.00
    });
}

function B1017() {
    addToCart({
        id: 'B1017',
        name: 'Crispy Chicken Submarine (Regular)',
        imgSrc: './img/hamburger.jpg',
        unitPrice: 1500.00,
        discount: '-',
        netPrice: 1500.00
    });
}

function B1018() {
    addToCart({
        id: 'B1018',
        name: 'Chicken Submarine (Large)',
        imgSrc: './img/hamburger.jpg',
        unitPrice: 1800.00,
        discount: '3%',
        netPrice: 1746.00
    });
}

function B1019() {
    addToCart({
        id: 'B1019',
        name: 'Chicken Submarine (Regular)',
        imgSrc: './img/hamburger.jpg',
        unitPrice: 1400.00,
        discount: '-',
        netPrice: 1400.00
    });
}

function B1020() {
    addToCart({
        id: 'B1020',
        name: 'Grinder Submarine',
        imgSrc: './img/hamburger.jpg',
        unitPrice: 2300.00,
        discount: '-',
        netPrice: 2300.00
    });
}

function B1021() {
    addToCart({
        id: 'B1021',
        name: 'Cheese Submarine',
        imgSrc: './img/hamburger.jpg',
        unitPrice: 2200.00,
        discount: '-',
        netPrice: 2200.00
    });
}

function B1022() {
    addToCart({
        id: 'B1022',
        name: 'Double Cheese n Chicken Submarine',
        imgSrc: './img/hamburger.jpg',
        unitPrice: 1900.00,
        discount: '16%',
        netPrice: 1596.00
    });
}

function B1023() {
    addToCart({
        id: 'B1023',
        name: 'Special Horgie Submarine',
        imgSrc: './img/hamburger.jpg',
        unitPrice: 2800.00,
        discount: '-',
        netPrice: 2800.00
    });
}

function B1024() {
    addToCart({
        id: 'B1024',
        name: 'MOS Special Submarine',
        imgSrc: './img/hamburger.jpg',
        unitPrice: 3000.00,
        discount: '-',
        netPrice: 3000.00
    });
}

function B1025() {
    addToCart({
        id: 'B1025',
        name: 'Steak Fries (Large)',
        imgSrc: './img/french-fries.jpg',
        unitPrice: 1200.00,
        discount: '-',
        netPrice: 1200.00
    });
}

function B1026() {
    addToCart({
        id: 'B1026',
        name: 'Steak Fries (Medium)',
        imgSrc: './img/french-fries.jpg',
        unitPrice: 600.00,
        discount: '-',
        netPrice: 600.00
    });
}

function B1027() {
    addToCart({
        id: 'B1027',
        name: 'French Fries (Large)',
        imgSrc: './img/french-fries.jpg',
        unitPrice: 800.00,
        discount: '-',
        netPrice: 800.00
    });
}

function B1028() {
    addToCart({
        id: 'B1028',
        name: 'French Fries (Medium)',
        imgSrc: './img/french-fries.jpg',
        unitPrice: 650.00,
        discount: '-',
        netPrice: 650.00
    });
}

function B1029() {
    addToCart({
        id: 'B1029',
        name: 'French Fries (Small)',
        imgSrc: './img/french-fries.jpg',
        unitPrice: 450.00,
        discount: '-',
        netPrice: 450.00
    });
}

function B1030() {
    addToCart({
        id: 'B1030',
        name: 'Sweet Potato Fries (Large)',
        imgSrc: './img/french-fries.jpg',
        unitPrice: 600.00,
        discount: '-',
        netPrice: 600.00
    });
}

function B1031() {
    addToCart({
        id: 'B1031',
        name: 'Chicken n Cheese Pasta',
        imgSrc: './img/pasta.jpg',
        unitPrice: 1600.00,
        discount: '15%',
        netPrice: 1360.00
    });
}

function B1032() {
    addToCart({
        id: 'B1032',
        name: 'Chicken Penne Pasta',
        imgSrc: './img/pasta.jpg',
        unitPrice: 1700.00,
        discount: '15%',
        netPrice: 1700.00
    });
}

function B1033() {
    addToCart({
        id: 'B1033',
        name: 'Ground Turkey Pasta Bake',
        imgSrc: './img/pasta.jpg',
        unitPrice: 2900.00,
        discount: '10%',
        netPrice: 2610.00
    });
}

function B1034() {
    addToCart({
        id: 'B1034',
        name: 'Creamy Shrimp Pasta',
        imgSrc: './img/pasta.jpg',
        unitPrice: 2000.00,
        discount: '-',
        netPrice: 2000.00
    });
}

function B1035() {
    addToCart({
        id: 'B1035',
        name: 'Lemon Butter Pasta',
        imgSrc: './img/pasta.jpg',
        unitPrice: 1950.00,
        discount: '-',
        netPrice: 1950.00
    });
}

function B1036() {
    addToCart({
        id: 'B1036',
        name: 'Tagliatelle Pasta',
        imgSrc: './img/pasta.jpg',
        unitPrice: 2400.00,
        discount: '1%',
        netPrice: 2376.00
    });
}

function B1037() {
    addToCart({
        id: 'B1037',
        name: 'Baked Ravioli',
        imgSrc: './img/pasta.jpg',
        unitPrice: 2000.00,
        discount: '1%',
        netPrice: 1980.00
    });
}

function B1038() {
    addToCart({
        id: 'B1038',
        name: 'Fried Chicken (Small)',
        imgSrc: './img/chicken.jpg',
        unitPrice: 1200.00,
        discount: '-',
        netPrice: 1200.00
    });
}

function B1039() {
    addToCart({
        id: 'B1039',
        name: 'Fried Chicken (Regular)',
        imgSrc: './img/chicken.jpg',
        unitPrice: 2300.00,
        discount: '10%',
        netPrice: 2070.00
    });
}

function B1040() {
    addToCart({
        id: 'B1040',
        name: 'Fried Chicken (Large)',
        imgSrc: './img/chicken.jpg',
        unitPrice: 3100.00,
        discount: '5%',
        netPrice: 2945.00
    });
}

function B1041() {
    addToCart({
        id: 'B1041',
        name: 'Hot Wings (Large)',
        imgSrc: './img/chicken.jpg',
        unitPrice: 2400.00,
        discount: '-',
        netPrice: 2400.00
    });
}

function B1042() {
    addToCart({
        id: 'B1042',
        name: 'Devilled Chicken (Large)',
        imgSrc: './img/chicken.jpg',
        unitPrice: 900.00,
        discount: '-',
        netPrice: 900.00
    });
}

function B1043() {
    addToCart({
        id: 'B1043',
        name: 'BBQ Chicken (Regular)',
        imgSrc: './img/chicken.jpg',
        unitPrice: 2100.00,
        discount: '-',
        netPrice: 2100.00
    });
}

function B1044() {
    addToCart({
        id: 'B1044',
        name: 'Pepsi (330ml)',
        imgSrc: './img/cocktail.jpg',
        unitPrice: 990.00,
        discount: '5%',
        netPrice: 940.50
    });
}

function B1045() {
    addToCart({
        id: 'B1045',
        name: 'Coca-Cola (330ml)',
        imgSrc: './img/cocktail.jpg',
        unitPrice: 1230.00,
        discount: '-',
        netPrice: 1230.00
    });
}

function B1046() {
    addToCart({
        id: 'B1046',
        name: 'Sprite (330ml)',
        imgSrc: './img/cocktail.jpg',
        unitPrice: 1500.00,
        discount: '3%',
        netPrice: 1455.00
    });
}

function B1047() {
    addToCart({
        id: 'B1047',
        name: 'Mirinda (330ml)',
        imgSrc: './img/cocktail.jpg',
        unitPrice: 850.00,
        discount: '7%',
        netPrice: 790.50
    });
}