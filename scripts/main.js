$(function() {
  window.chocolateMachine = (function(){

    //WALLET
    var _walletTotal = 10.00; //set Initial walletTotal

    //PRODUCTS
    var shopProducts = [{
      _id: 0,
      name: 'Mars Bar',
      images: {
        thumbnail: 'http://img.tesco.com/Groceries/pi/476/5000159470476/IDShot_110x110.jpg',
        fullsize: ''
      },
      description: 'Chocolate Fondant, topped with caramel, all wrapped in chocolate!',
      cost: 0.6
    }, {
      _id: 1,
      name: 'Twix',
      images: {
        thumbnail: 'http://img.tesco.com/Groceries/pi/228/5000159459228/IDShot_110x110.jpg',
        fullsize: ''
      },
      description: 'Butter Biscuit base, topped with caramel, all wrapped in chocolate!',
      cost: 0.7
    }, {
      _id: 2,
      name: 'Galaxy Caramel',
      images: {
        thumbnail: 'http://img.tesco.com/Groceries/pi/710/5900951027710/IDShot_110x110.jpg',
        fullsize: ''
      },
      description: 'Silky smooth galaxy milk chocolate!',
      cost: 0.8
    }, {
      _id: 5,
      name: 'Aero (Mint)',
      images: {
        thumbnail: 'http://img.tesco.com/Groceries/pi/347/7613035058347/IDShot_110x110.jpg',
        fullsize: ''
      },
      description: 'Chocolate-covered mint bubble heaven!',
      cost: 0.6
    }, {
      _id: 4,
      name: 'Rolos',
      images: {
        thumbnail: 'http://img.tesco.com/Groceries/pi/179/0000050251179/IDShot_110x110.jpg',
        fullsize: ''
      },
      description: 'Chunks of soft caramel covered in chocolate!',
      cost: 0.6
    }, {
      _id: 5,
      name: 'Bounty',
      images: {
        thumbnail: 'http://img.tesco.com/Groceries/pi/216/0000040111216/IDShot_110x110.jpg',
        fullsize: ''
      },
      description: 'Coconut blocks covered in chocolate!',
      cost: 0.6
    }, {
      _id: 6,
      name: 'Turkish Delight',
      images: {
        thumbnail: 'http://img.tesco.com/Groceries/pi/105/0000050201105/IDShot_110x110.jpg',
        fullsize: ''
      },
      description: 'Turkish delight covered in chocolate!',
      cost: 0.6
    }];


    var bought = [];

    var shopItemTemplate = '<li class="item col-lg-4 col-md-6">'
      + '<img src="" alt="" height="110" width="110">'
      +  '<div class="blurb">'
      +   '<h2></h2>'
      +   '<p></p>'
      +   '<button type="button" class="buy btn btn-primary" data-chocolate="">Buy</button>'
      +  '</div>'
      + '</li>';

    var boughtItemTemplate = '<li class="item col-lg-4 col-md-6">'
      + '<img src="" alt="" height="110" width="110">'
      +  '<div class="blurb">'
      +   '<h2></h2>'
      +   '<p></p>'
      +   '<button type="button" class="eat btn btn-danger" data-index="">Eat</button>'
      +  '</div>'
      + '</li>';


    //make a getter so that you always get the same value
    function getWalletTotal(){
      return _walletTotal.toFixed(2);
    }

    function template(template, obj, i){
      var container = document.createElement('DIV'), $container;
      $container = $(container).append(template);
      $container
        .find('img')
        .attr({
          'src': obj.images.thumbnail,
          'alt': obj.images.thumbnail + ' Thumbnail'
        })
        .end()
        .find('h2')
        .text(obj.name)
        .end()
        .find('p')
        .text(obj.description)
        .end()
        .find('button')
        .attr({
          'data-chocolate': obj._id,
          'data-purchase-id': i
        });
        return $container.html();
    }


    //Deal with money
    function charge(amount){
      //handle lack of funds
      if(_walletTotal - amount < 0){
        alert('Sorry, you do not have sufficient funds! :\'(');
        return false;
      }

      //if sufficient funds then debit balance
      _walletTotal -= amount;

      //and update the UI
      updateDisplay('funds');
      return _walletTotal;
    }

    //Determine cost and buy
    function buy(id){
      var item, cost;
      //find the item
      item = _.find(shopProducts, {_id: id});

      //find its cost
      cost = item.cost;

      //charge user money
      charge(cost);

      //give them choccie
      bought.push(item);

      //update the display to let them know they've got it.
      updateDisplay('bought');
    }

    //Eat choccie
    function eat(id){
      //remove from users chocolates list
      bought.splice(id, 1);

      //refresh the UI to show that
      updateDisplay('bought');
    }

    //function to update parts of the display
    function updateDisplay(type, value){
      var $itemsContainer, currentTemplate;
      $itemsContainer = $('<div />').eq(0);
      currentTemplate = null;

      function createHTML(i, item){
        var itemHTML;
        itemHTML = template(currentTemplate, item, i);
        $itemsContainer.append(itemHTML);
      }

      switch (type) {
        case 'funds':
          $('#fundsAvailable').text('£' + getWalletTotal());
          break;
        case 'bought':
          if(bought.length === 0){
            $('#items-bought').html('<li class="item no-hover col-xs-12"><p class="text-danger">Nothing!! You\'re all out of choccie!!!!</p></li>')
          } else {
            currentTemplate = boughtItemTemplate;
            $itemsContainer.html("");
            $(bought).each(createHTML);
            $('#items-bought').html($itemsContainer.html());
          }
          break;
        case 'shop-products':
          if(shopProducts.length === 0){
            $('#products').html('<li class="item no-hover col-xs-12"><p>The shop is out of stock!!!!</p></li>')
          } else {
            currentTemplate = shopItemTemplate;
            $itemsContainer.html("");
            $(shopProducts).each(createHTML);
            $('#products').html($itemsContainer.html());
          }
          break;
        default:
          console.warn('No matching update method', arguments);
      }
    }

    //add funds
    function addFunds(amount){
      if(typeof amount === 'string'){
        amount = parseInt(amount, 10);
      }
      _walletTotal += amount;
      updateDisplay('funds');
    }

    //APP INITIALISER FUNCTION
    function init(){
      //Show products
      updateDisplay('shop-products');

      //Show funds available
      updateDisplay('funds');

      //show bought Items
      updateDisplay('bought');
    }

    //initialise the APP
    init();

    return {
      init: init,
      buy: buy,
      eat: eat,
      addFunds: addFunds
    };

  }());


  // APP EVENTS
  $('#products').on('click.buy', '.buy', function(){
    var $this = $(this), $chocolate;
    $chocolate = $this.data('chocolate');
    console.log($chocolate);
    chocolateMachine.buy($chocolate);
    return false;
  });

  $('#items-bought').on('click.buy', '.eat', function(){
    var $this = $(this), $item;
    $item = $this.data('purchase-id');
    console.log($item);
    chocolateMachine.eat($item);
    return false;
  });

  $('#addFunds').on('click.addFunds', function(){
    console.log(arguments);
    var $newFunds, $newFundsInput;
    $newFundsInput = $('#newFunds');
    $newFunds = $newFundsInput.val();
    $newFundsInput.val("");
    chocolateMachine.addFunds($newFunds);
    return false;
  });

});
