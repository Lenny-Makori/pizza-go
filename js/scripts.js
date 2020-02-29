// Business Logic
function Order(size, crust, toppings){
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

// User Interface Logic
$(document).ready(function(){
  $(".placeOrder").submit(function(){
    var pizzasize = [];
    var pizzacrust = [];
    $.each($(".pizzaSize option:selected"), function(){
      pizzasize.push($(this).val());
    })
    $.each($(".pizzaCrust option:selected"), function(){
      pizzacrust.push($(this).val());
    })
    $(".toppings").val();
    if ($(".toppings").is(":checked"))
    {
      getSelection().val()

    }
  })
  $(".addOrder").click(function(){
    $(".pizzaOrder").append('<div class="sizeOfPizza">' +
    '<label for="pizzaSize">Size:</label>' +
    '<select class="pizzaSize" name="">' +
      '<option value="small">Small</option>' +
      '<option value="medium">Medium</option>' +
      '<option value="large">Large</option>' +
    '</select>' +
 '</div>' +

  '<div class="crustOfPizza">' +
    '<label for="pizzaCrust">Please select type of crust:</label>' +
    '<select class="pizzaCrust">' +
      '<option value="thin">Thin</option>' +
      '<option value="thick">Thick</option>' +
      '<option value="crispy">Crispy</option>' +
      '<option value="glutenFree">Gluten Free</option>' +
    '</select>' +

  '</div>' +

  '<div class="toppings">' +
    '<input type="checkbox" id="topping1" name="" value="">' +
    '<label for="topping1">Pepperoni</label>' +
    '<input type="checkbox" id="topping2" name="" value="">' +
    '<label for="topping2">Bacon</label>' +
    '<input type="checkbox" id="topping3" name="" value="">' +
    <label for="topping3">Sausage</label>
    <input type="checkbox" id="topping4" name="" value="">
    <label for="topping4">Extra Cheese</label>
    <input type="checkbox" id="topping5" name="" value="">
    <label for="topping5">Onion</label>
    <input type="checkbox" id="topping6" name="" value="">
    <label for="topping6">Mushroom</label>
    <input type="checkbox" id="topping7" name="" value="">
    <label for="topping7">Green Pepper</label>

  </div>')
  })
})