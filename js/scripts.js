var price , crustPrice, toppingsPrice ;
let total = 0;
let toppingsTotal = 0;
function Order(name, size, crust, toppings, total){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.total = total;
}


// User Interface Logic
$(document).ready(function(){
  // $("button.proceed").click(function(){
  //   $("button.proceed").hide();
  //   $("#information").hide();
  //   $("div.choise").slideDown(1000);
  // });
  $("button.proceed").click(function(event){
   let pizzaName = $(".pizzaName option:selected").val();
   let pizzaSize = $(".pizzaSize option:selected").val();
   let pizzaCrust = $(".pizzaCrust option:selected").val();
   let pizzaToppings = [];
   $.each($("input[name='toppings']:checked"), function(){            
       pizzaToppings.push($(this).val());
   });
   console.log(pizzaToppings.join(", "));

   switch(pizzaSize){
    case "0":
      price =0;
    break;
    case "large":
       price = 1200;
       console.log("Large:"+price);
     break;
     case "medium":
       price = 850;
       console.log("Medium:"+price);
     break;
     case "small":
       price = 600;
       console.log("Small:"+price);
     default:
       console.log("error"); 
   }
   switch(pizzaCrust){
      case "0":
        crustPrice = 0;
      break;
      case "thin":
        crustPrice = 200;
      break;
      case "thick":
        crustPrice = 250;
      break;
      case "crispy":
        crustPrice = 180;
      break;
      case "glutenFree":
        crustPrice = 180;
      break;
      default:
        console.log("No price"); 
    }
    // let topping_value = ptopping.length*50;
    // console.log("toppins value" + topping_value);

    pizzaToppings.forEach(function(pizzaTopping, index, _pizzaToppings){
      _pizzaToppings[index] = pizzaTopping * 50;
      toppingsTotal += pizzaTopping;
    })

    if((pizzaSize == "0") && (pizzaCrust == "0")){
      console.log("nothing selected");
      $("placeOrder").show();
      $("div.choise").hide();
      alert("Please select pizza size and crust"); 
    }
    else{
      $("placeOrder").hide();
      $("div.choise").slideDown(1000);
    }

    total = price + crustPrice + toppingsTotal;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);
}

