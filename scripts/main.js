$(function(){

    var basketTotal = 0;

    function getBasketTotal(){
        return "£" + basketTotal.toFixed(2);
    }

    //press a button to add price to shopping cart
    $(".buy").on('click', function(){
        console.log(basketTotal);
        var cost = $(this).data('price');
        basketTotal = basketTotal + cost;
        console.log(basketTotal);
        $("#basketTotal").text(getBasketTotal());
    });


    //write total into the page
    $("#basketTotal").text(getBasketTotal());
});

// $(function(){
//
//   var basketTotal=0;
//
//   //Press a buy button and
//   $('.buy').on('click.buy', function(){
//     var price, newBasketTotal;
//
//     //get the price from the button's data attribute
//     price = $(this).data('price'); //string
//     price = parseFloat(price);
//
//     //increase the basket total by that amount
//     basketTotal = basketTotal + price;
//
//     //basket total increases (on the page)
//     //write the new basket total into the page
//     $('#basketTotal').text('£' + basketTotal.toFixed(2));
//   });
//
//   $('#basketTotal').text('£' + basketTotal.toFixed(2));
//
// });


// $(function() {
//   window.chocolateMachine = (function(){
//
//     //ENTITIES (or 'things')
//     //WALLET
//     var _wallet = {
//       total: 0, //set Initial walletTotal
//       getWalletTotal: function getWalletTotal(){
//         return _walletTotal.toFixed(2);
//       }
//     };
//
//     //BASKET
//     var _basket = {
//       items: [],
//       getTotal: function(){
//         var subTotal = 0;
//         this.items.forEach(function(item){
//           subTotal += item.cost;
//         });
//         return subTotal;
//       }
//     };
//
//     //PRODUCTS
    // var shopProducts = [{
    //   _id: 0,
    //   name: 'Mars Bar',
    //   images: {
    //     thumbnail: 'http://img.tesco.com/Groceries/pi/476/5000159470476/IDShot_110x110.jpg',
    //     fullsize: ''
    //   },
    //   description: 'Chocolate Fondant, topped with caramel, all wrapped in chocolate!',
    //   cost: 0.6
    // }, {
    //   _id: 1,
    //   name: 'Twix',
    //   images: {
    //     thumbnail: 'http://img.tesco.com/Groceries/pi/228/5000159459228/IDShot_110x110.jpg',
    //     fullsize: ''
    //   },
    //   description: 'Butter Biscuit base, topped with caramel, all wrapped in chocolate!',
    //   cost: 0.7
    // }, {
    //   _id: 2,
    //   name: 'Galaxy Caramel',
    //   images: {
    //     thumbnail: 'http://img.tesco.com/Groceries/pi/710/5900951027710/IDShot_110x110.jpg',
    //     fullsize: ''
    //   },
    //   description: 'Silky smooth galaxy milk chocolate!',
    //   cost: 0.8
    // }, {
    //   _id: 5,
    //   name: 'Aero (Mint)',
    //   images: {
    //     thumbnail: 'http://img.tesco.com/Groceries/pi/347/7613035058347/IDShot_110x110.jpg',
    //     fullsize: ''
    //   },
    //   description: 'Chocolate-covered mint bubble heaven!',
    //   cost: 0.6
    // }, {
    //   _id: 4,
    //   name: 'Rolos',
    //   images: {
    //     thumbnail: 'http://img.tesco.com/Groceries/pi/179/0000050251179/IDShot_110x110.jpg',
    //     fullsize: ''
    //   },
    //   description: 'Chunks of soft caramel covered in chocolate!',
    //   cost: 0.6
    // }, {
    //   _id: 5,
    //   name: 'Bounty',
    //   images: {
    //     thumbnail: 'http://img.tesco.com/Groceries/pi/216/0000040111216/IDShot_110x110.jpg',
    //     fullsize: ''
    //   },
    //   description: 'Coconut blocks covered in chocolate!',
    //   cost: 0.6
    // }, {
    //   _id: 6,
    //   name: 'Turkish Delight',
    //   images: {
    //     thumbnail: 'http://img.tesco.com/Groceries/pi/105/0000050201105/IDShot_110x110.jpg',
    //     fullsize: ''
    //   },
    //   description: 'Turkish delight covered in chocolate!',
    //   cost: 0.6
    // }];
//
//
//     //Templates for updating the UI
//     // var shopItemTemplate = '<li class="item col-lg-4 col-md-6">'
//     //   + '<img src="" alt="" height="110" width="110">'
//     //   +  '<div class="blurb">'
//     //   +   '<h2></h2>'
//     //   +   '<p></p>'
//     //   +   '<button type="button" class="buy btn btn-primary" data-chocolate="">Buy</button>'
//     //   +  '</div>'
//     //   + '</li>';
//     //
//     // var boughtItemTemplate = '<li class="item col-lg-4 col-md-6">'
//     //   + '<img src="" alt="" height="110" width="110">'
//     //   +  '<div class="blurb">'
//     //   +   '<h2></h2>'
//     //   +   '<p></p>'
//     //   +   '<button type="button" class="eat btn btn-danger" data-index="">Eat</button>'
//     //   +  '</div>'
//     //   + '</li>';
//
//       var productSource   = $("#product-template").html();
//       var productTemplate = Handlebars.compile(productSource);
//
//       var boughtSource   = $("#bought-template").html();
//       var boughtTemplate = Handlebars.compile(boughtSource);
//
//
//     function template(tmpl, obj, i){
//       //var container = document.createElement('DIV'), $container;
//       //$container = $(container).append(template);
//       // $container
//       //   .find('img')
//       //   .attr({
//       //     'src': obj.images.thumbnail,
//       //     'alt': obj.name + ' Thumbnail'
//       //   })
//       //   .end()
//       //   .find('h2')
//       //   .text(obj.name)
//       //   .end()
//       //   .find('p')
//       //   .text(obj.description)
//       //   .end()
//       //   .find('button')
//       //   .attr({
//       //     'data-chocolate': obj._id,
//       //     'data-purchase-id': i
//       //   });
//       //
//       //  return $container.html();
//
//       //Handlebars way
//       return tmpl(obj);
//     }
//
//
//     //Deal with money
//     function charge(amount){
//       var walletTotal = _wallet.total;
//       //handle lack of funds
//       if(_wallet.total - amount < 0){
//         alert('Sorry, you do not have sufficient funds! :\'(');
//         return false;
//       }
//
//       //if sufficient funds then debit balance
//       _wallet.total -= amount;
//
//       //and update the UI
//       updateDisplay('funds');
//       return _wallet.total;
//     }
//
//     //Determine cost and buy
//     function buy(id){
//       var item, cost;
//       //find the item
//       item = _.find(shopProducts, {_id: id});
//
//       //find its cost
//       cost = item.cost;
//
//       //charge user money
//       charge(cost);
//
//       //give them choccie
//       item.purchaseId = _basket.items.length;
//       _basket.items.push(item);
//
//       //save
//       save('bought', _basket.items);
//
//       //update the display to let them know they've got it.
//       updateDisplay('bought');
//     }
//
//     //Eat choccie
//     function eat(id){
//       //remove from users chocolates list
//       _basket.items.splice(id, 1);
//
//       //refresh the UI to show that
//       updateDisplay('bought');
//
//       //save
//       save('bought', _basket.items);
//     }
//
//     //function to update parts of the display
//     function updateDisplay(type, value){
//       var $itemsContainer, currentTemplate;
//       $itemsContainer = $('<div />').eq(0);
//       currentTemplate = null;
//
//       function createHTML(i, item){
//         var itemHTML;
//         itemHTML = template(currentTemplate, item, i);
//         $itemsContainer.append(itemHTML);
//       }
//
//       switch (type) {
//         case 'funds':
//           $('#fundsAvailable').text('£' + getWalletTotal());
//           break;
//         case 'basket':
//           $('#fundsAvailable').text('£' + _basket.getTotal());
//           break;
//         case 'bought':
//           if(_basket.items.length === 0){
//             $('#items-bought').html('<li class="item no-hover col-xs-12"><p class="text-danger">Nothing!! You\'re all out of choccie!!!!</p></li>')
//           } else {
//             //currentTemplate = boughtItemTemplate;
//             currentTemplate = boughtTemplate
//             $itemsContainer.html("");
//             $(_basket.items).each(createHTML);
//             $('#items-bought').html($itemsContainer.html());
//           }
//           break;
//         case 'shop-products':
//           if(shopProducts.length === 0){
//             $('#products').html('<li class="item no-hover col-xs-12"><p>The shop is out of stock!!!!</p></li>')
//           } else {
//             //currentTemplate = shopItemTemplate;
//             currentTemplate = productTemplate;
//             $itemsContainer.html("");
//             $(shopProducts).each(createHTML);
//             $('#products').html($itemsContainer.html());
//           }
//           break;
//         default:
//           console.warn('No matching update method', arguments);
//       }
//     }
//
//     //add funds
//     function addFunds(amount){
//       if(typeof amount === 'string'){
//         amount = parseFloat(amount);
//       }
//
//       if(amount <= 0){
//         console.warn('Amount must be greater than zero!')
//         return;
//       }
//       _walletTotal += amount;
//       save('funds', _wallet.total);
//       updateDisplay('funds');
//     }
//
//     function loadFromMemory(){
//       _walletTotal = parseFloat(localStorage.getItem('funds')) || 0;
//       _basket.items = JSON.parse(localStorage.getItem('bought')) || [];
//     }
//
//     function save(field, value){
//       switch(field){
//         case 'funds':
//         localStorage.setItem(field, value);
//         break;
//         case 'bought':
//         localStorage.setItem(field, JSON.stringify(value));
//         break;
//       }
//
//     }
//
//     //APP INITIALISER FUNCTION
//     function init(){
//       //If persisted information is present then load it.
//       loadFromMemory()
//
//       //Show products
//       updateDisplay('shop-products');
//
//       //Show funds available
//       updateDisplay('funds');
//
//       //show bought Items
//       updateDisplay('bought');
//     }
//
//     //initialise the APP
//     init();
//
//     return {
//       init: init,
//       buy: buy,
//       eat: eat,
//       addFunds: addFunds
//     };
//
//   }());
//
//
//   // APP EVENTS
//   $('#products').on('click.buy', '.buy', function buy(){
//     var $this = $(this), $chocolate;
//     $chocolate = $this.data('chocolate');
//     console.log($chocolate);
//
//     chocolateMachine.buy($chocolate);
//     return false;
//   });
//
//   $('#items-bought').on('click.eat', '.eat', function eat(){
//     var $this = $(this), $item;
//     $item = $this.data('purchase-id');
//     console.log($item);
//
//     chocolateMachine.eat($item);
//     return false;
//   });
//
//   $('#addFunds').on('click.addFunds', function addFunds(){
//     var $newFunds, $newFundsInput;
//     $newFundsInput = $('#newFunds');
//     $newFunds = $newFundsInput.val();
//     $newFundsInput.val("");
//     console.log($newFunds);
//
//     chocolateMachine.addFunds($newFunds);
//     return false;
//   });
//
//
//   //JQuery Validate
//   jQuery.validator.setDefaults({
//     debug: true,
//     success: "valid"
//   });
//
//   $.validator.addMethod('posNumsOnly', function (value, el, param) {
//     console.log(arguments);
//       return value > param;
//   }, 'Please specify a number greater than 0.');
//
//   $( "#addFundsForm" ).validate({
//     rules: {
//       newFunds: {
//         required: true,
//         number: true,
//         posNumsOnly: 0
//       }
//     }
//   });
//
//
//
// });
