// add to cart
const productCountEl =document.getElementById("product-count");
const addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
    productCountEl.textContent = +productCountEl.textContent + 1;
    /*let prevProductsCount = +productCountEl.textContent;
    productCountEl.textContent = prevProductsCount + 1;*/
});
};

// modal
const modal = document.querySelector(".modal");
const moreDetailsBtns = document.querySelectorAll(".btn-more-details");

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
  }
  
  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
  }
  

moreDetailsBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        modal.classList.add("show");
    });
});

const btnClose = document.querySelector(".btn-close");

btnClose.addEventListener("click", function(){
    modal.classList.add("hide");
});

modal.addEventListener("click", function(e){
    if(e.target === modal){
        closeModal();
    }
});

/*function showModalByScroll(){
    if (window.pageYOffset > document.body.scrollHeight / 2) {
        openModal();
        window.removeEventListener("scroll", showModalByScroll);
    }
}

window.addEventListener("scroll", showModalByScroll);*/

/* like
const likeBtns = document.querySelectorAll(".like");

likeBtns.forEach(item) => {
    item.addEventListener("click", function(){
        item.classList.toggle("liked")
    });
}
*/
/*slick*/

$(".slider").slick({
    dots: true,
});

/*change product quantity
const decrementBtns = document.querySelectorAll(".decrement-button");
const incrementBtns = document.querySelectorAll(".increment-button");
const quantityInputs = document.querySelectorAll(".product-quantity input");


const currentValue = +quantityInput.value;
toggleButtonState(currentValue)

    function toggleButtonState(count) {
    decrementBtns.disabled = count <= 1;
    incrementBtns.disabled = count >= 5;
  }
  
incrementBtns.forEach(incrementBtns, i)

incrementBtns.addEventListener("click", function () {
    const nextValue = +quantityInput.value + 1;
    quantityInput.value = nextValue;

    if (nextValue <= 1) {
        decrementBtns.disabled = true;
    } else {
        decrementBtns.disabled - false;
    }
});
decrementBtns.addEventListener("click", function () {
    const nextValue = +quantityInput.value + 1;
    quantityInput.value = nextValue;

    if (nextValue <= 1) {
        decrementBtns.disabled = true;
    } else {
        decrementBtns.disabled - false;
    }
});
*/

const decrementBtns = document.querySelectorAll(".decrement-button");
const incrementBtns = document.querySelectorAll(".increment-button");
const quantityInputs = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, quantityInput, minCount = 1, maxCount = 5){
 this.domRefs = {
     incrementBtn,
     decrementBtn,
     quantityInput,
    };




 this.toggleButtonState = function () {
    const count = this.domRefs.quantityInput.value;
    this.domRefs.decrementBtn.disabled = count <= minCount;
    this.domRefs.incrementBtn.disabled = count >= maxCount;
 };

 this.toggleButtonState();



this.increment = function () {
    this.domRefs.quantityInput.value = +this.domRefs.quantityInput.value + 1;
    this.toggleButtonState();
  };

  this.decrement = function () {
    this.domRefs.quantityInput.value = +this.domRefs.quantityInput.value - 1;
    this.toggleButtonState();
  };

  this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));

  this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
}

const counter1 = new Counter(
    incrementBtns[0],
    decrementBtns[0],
    quantityInputs[0]
);

console.log(counter1);