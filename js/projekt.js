/*home*/
function shfaqDialogun(){
     var emri1 =window.prompt("How many people are you");
     var emri2 =window.prompt("At what time would you like to be at our restaurant");
     if(emri1 !=null && emri2 !=null){
        var teksti="Your reservation is ready.You are welcome!";
        window.alert(teksti);
     }
    }


    /*contact us*/
    function sayHello(){
        alert("Your message has been sent.Wait for our answer")
    }


    /*footer online order*/
    function online(){

        var food=window.prompt("What do you want to order? ");
        switch(food){

            case"chicken burger":
            window.alert("Your order is taken");
            break;
            case"beer":
            window.alert("your order is taken");
            break;
            case"grilled meat":
            window.alert("your order is taken");
            break;
            case"french fries":
            window.alert("Your order is taken");
            break;
            case"pasta":
            window.alert("Your order is taken");
            break;
            case"salads":
            window.alert("Your order is taken");
            break;
            case"dessert":
            window.alert("Your order is taken");
            break;
            case"wine":
            window.alert("Your order is taken");
            break;
            default:
                window.alert("sorry we do not have " + food +" in our menu.");}
    

    }


    