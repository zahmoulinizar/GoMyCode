let items = [
    {id:1 , name: 'item 1', price: '30', quantity: 1},
    {id:2 , name: 'item 2', price: '50', quantity: 1},
    {id:3 , name: 'item 3', price: '70', quantity: 1},
]
let shopCart = document.getElementById('container');
for(let i=0;i<items.length;i++){
    shopCart.innerHTML +=`
    <div class="cart">
        <h5>${items[i].name}</h5>
        <h5 class="price">$ ${items[i].price}</h5>
        <button class="plus"> <i class="fa-solclass fa-plus"></i> </button>        
        <h5 class="nb">${items[i].quantity}</h5>
        <button class="moins"><i class="fa-solclass fa-minus"></i></button>
        <span class="totalItem"></span>
        <button class="delete">delete</button>
        <h5><i class="fa-regular fa-heart"></i></h5>        
    </div>` 
}

// ------------- delete ----------------------

let deleBtns = document.querySelectorAll(".delete");

for (let i = 0; i < deleBtns.length; i++) {
    let delbtn = deleBtns[i];
    delbtn.onclick = function (event) {
    var clicked = event.target;
    clicked.parentElement.remove();
    };
}

//---------------------- plus ---------------------

let count = document.querySelectorAll('.price');
let totalItem =document.querySelectorAll('.totalItem');
let nb = document.querySelectorAll('.nb')


let plus =document.querySelectorAll('.plus');

for (let i = 0; i < plus.length; i++) {
    let plusBtn = plus[i];
    let nbr=0;
    let sum=0;
    plusBtn.onclick = function () {
        let Total = 0
        plusBtn.nextElementSibling.innerHTML=nbr+1
        nbr++
        Total = +items[i].price*nbr
        sum+=Total
        plusBtn.nextElementSibling.nextElementSibling.nextElementSibling.style.display='flex';
        plusBtn.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML=`$ ${Total}`;
        document.getElementById('final-total').style.display='flex'
        document.getElementById('final-total').innerHTML=`$ ${sum}`;
    }
}
//-------------------- moins ------------------------

let minus =document.querySelectorAll('.moins');

for (let i = 0; i < minus.length; i++) {
    let minBtn = minus[i];
    minBtn.onclick = function(){
        let res = minBtn.previousElementSibling.innerHTML;
        minBtn.previousElementSibling.innerHTML=+res-1
        if(res>1){
            res--
            Total= +items[i].price*res;
            minBtn.nextElementSibling.innerHTML=`$ ${Total}`;
        }
        else{
            minBtn.nextElementSibling.style.display='none'
            minBtn.previousElementSibling.innerHTML='---'
        }
    }
  
}

