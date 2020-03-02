// Business Logic
var price, crustPrice;
let total = 0;
function Order(name, size, crust, toppings, total){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.total = total;
}


// User Interface logic
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
       console.log("Large: "+price);
     break;
     case "medium":
       price = 800;
       console.log("Medium: "+price);
     break;
     case "small":
       price = 600;
       console.log("Small: "+price);
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
    let toppingsTotal = pizzaToppings.length*50;
    console.log("toppingsTotal: " + toppingsTotal);

    if((pizzaSize == "0") && (pizzaCrust == "0")){
      console.log("nothing selected");
      $(".placeOrder").show();
      $(".details").hide();
      alert("Please select pizza size and crust"); 
    }
    else{
      $(".placeOrder").hide();
      $(".details").slideDown(1000);
    }

    total = price + crustPrice + toppingsTotal;
    console.log(total);
    let checkoutTotal = 0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(pizzaToppings.join(", "));
    $("#totals").html(total);
    
    $("button.addOrder").click(function(){
      let pizzaName = $(".name option:selected").val();
      let pizzaSize = $("#size option:selected").val();
      let pizzaCrust = $("#crust option:selected").val();
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
           console.log("Large: "+price);
         break;
         case "medium":
           price = 800;
           console.log("Medium: "+price);
         break;
         case "small":
           price = 600;
           console.log("Small: "+price);
         default:
           console.log("error"); 
       }
       switch(pizzaCrust){
        case "0":
          crustPrice = 0;
        break;
        case "thin":
          crustPrice = 150;
          console.log("crustPrice: "+crustPrice);
        break;
        case "thick":
          crustPrice = 200;
          console.log("crustPrice: "+crustPrice);
        break;
        case "crispy":
          crustPrice = 280;
          console.log("crustPrice: "+crustPrice);
        break;
        case "glutenFree":
          crustPrice = 230;
          console.log("crustPrice: "+crustPrice);
        break;
          default:
            console.log("No price"); 
        }
        let toppingsTotal = pizzaToppings.length*50;
        console.log("toppingsTotal: " + toppingsTotal);
        total = price + crustPrice + toppingsTotal;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);

      var newOrder = new Order(pizzaName, pizzaSize, pizzaCrust, pizzaToppings, total);

      $(".tablelog").append('<tr><td id="pizzaname">'+newOrder.pizzaName +'</td><td id="pizzasize">' + newOrder.pizzaSize + '</td><td id="pizzacrust">'+newOrder.pizzaCrust + '</td><td id="pizzatopping">'+newOrder.pizzaToppings+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
      
      

    });
    // Checkout button
    $("button.checkout").click(function(){ 
      $("buttoncheckout").hide();
      $("button.addOrder").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is sh. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
    });

    // home delivery button
    $("button#delivery").click(function(){
      $(".pizzalog").hide();
      $(".details").hide();
      $(".delivery").slideDown(1000);
      $("#addedprice").hide();
      $("button#delivery").hide();
      $("#pizzatotal").hide();
      let deliveryCharges= checkoutTotal+150;
      console.log("You will pay sh. "+deliveryCharges+" on delivery");
      $("#totalbill").append("Your bill plus delivery fee is: "+deliveryCharges);
    });

    // when one clicks place order button
    $("button#inclusiveDelivery").click(function(event){
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#inclusiveDelivery").hide();
      let deliveryCharges= checkoutTotal+150;
      console.log("Final Bill is: "+deliveryCharges);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
        $("#finallmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliveryCharges);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
      }
      else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#inclusiveDelivery").show();
      }
    });
   event.preventDefault();
  });
});
