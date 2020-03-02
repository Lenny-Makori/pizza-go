var price , crustPrice, toppingsPrice ;
// let pizzaName, pizzaSize, pizzaCrust, pizzaToppings
let total = 0;
// let toppingsTotal = 0;
function Order(name, size, crust, toppings, total){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.total = total;
}


  // pizzaToppings.forEach(function(pizzaTopping, index, _pizzaToppings){
  //   _pizzaToppings[index] = pizzaTopping * 50;
  //   toppingsTotal += pizzaTopping;
  //   console.log(pizzaToppings)
  // })
  

// User Interface Logic
$(document).ready(function(){
  
  $(".placeOrder").click(function(event){
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
       price = 1000;
       console.log("Large:"+price);
     break;
     case "medium":
       price = 800;
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
        crustPrice = 150;
      break;
      case "thick":
        crustPrice = 200;
      break;
      case "crispy":
        crustPrice = 280;
      break;
      case "glutenFree":
        crustPrice = 230;
      break;
      default:
        console.log("No price"); 
    }
    toppingsTotal = pizzaToppings.length*50;
  console.log("toppins value" + toppingTotal);
  total = price + crustPrice + toppingsTotal;
  console.log(total);

   
    // let topping_value = ptopping.length*50;
    // console.log("toppins value" + topping_value);


    if((pizzaSize == "0") && (pizzaCrust == "0")){
      console.log("nothing selected");
      $("placeOrder").show();
      $("div.choise").hide();
      alert("Please select your pizza size and crust"); 
    }
    else{
      $("placeOrder").hide();
      $("div.choise").slideDown(1000);
    }
  })

    let total = price + crustPrice + toppingsTotal;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);

    
      let pizzaName = $(".pizzaName option:selected").val();
      let pizzaSize = $(".pizzaSize option:selected").val();
      let pizzaCrust = $(".pizzaCrust option:selected").val();
      let pizzaToppings = [];
      $.each($("input[name='toppings']:checked"), function(){            
      pizzaToppings.push($(this).val());
    })
    
  let newTotal = price + crustPrice + toppingsTotal;
  console.log(total);
  checkoutTotal = checkoutTotal + newTotal;
})
})