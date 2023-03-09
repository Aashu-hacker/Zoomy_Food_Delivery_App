
const data ={
    products: [
      //----Drinks ---
        {
          
          name: 'RedBull',
          category:'Drink',
          image: 'https://www.kindpng.com/picc/m/138-1383804_red-bull-png-image-background-red-bull-energy.png',
          price: 320,
          countInStock: 10,
          type:'Veg',
          rating: 4.5,
          numReviews: 10,
          description: 'Red Bull is a brand of energy drinks sold by Austrian company Red Bull GmbH. ',
        },
        {
          
          name: 'Mountain Dew',
          category: 'Drink',
          image: 'https://5.imimg.com/data5/SELLER/Default/2022/4/LM/OI/GT/146296450/61eazwdkkil-sl1500--500x500.jpg',
          price: 60,
          countInStock: 20,
          type:'Veg',
          rating: 4.0,
          numReviews: 10,
          description: 'Mountain Dew is a carbonated soft drink brand produced and owned by PepsiCo',
        },
        {
         
          name: 'sting',
          category: 'Drink',
          image: 'https://www.seekpng.com/png/detail/888-8887796_sting-strawberry-sting-energy-drink-india.png',
          price: 20,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'Sting Energy Drink is a carbonated energy drink from PepsiCo International and produced by Rockstar Inc.',
        },
        //----Burger ---
        {
         
          name: 'McChicken Burger',
          category: 'Burger',
          image: 'https://b.zmtcdn.com/data/dish_photos/697/4f886fabf801555ae16bb525b1685697.png?fit=around|130:130&crop=130:130;*,*',
          price: 130,
          countInStock: 10,
          type:'Non-Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'Tender and juicy chicken patty coated in spicy, crispy batter topped with a creamy sauce and crispy shredded lettuce will have you craving for more.',
        },{
         
          name: 'McSpicy Chicken Burger',
          category: 'Burger',
          image: 'https://b.zmtcdn.com/data/dish_photos/31d/def125674685f2dc6d037af9c980931d.png?fit=around|130:130&crop=130:130;*,*',
          price: 185,
          countInStock: 10,
          type:'Non-Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'Tender and juicy chicken patty coated in spicy, crispy batter topped with a creamy sauce and crispy shredded lettuce will have you craving for more.',
        },{
         
          name: 'McAloo Tikki Burger',
          category: 'Burger',
          image: 'https://b.zmtcdn.com/data/dish_photos/1c9/779d7b9c07d174f17bd099d17e83a1c9.png?fit=around|130:130&crop=130:130;*,*',
          price: 58,
          countInStock: 10,
          type:'Non-Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'The Worlds favourite Indian burger! Crunchy potato and peas patty with delicious Tom Mayo & crunchy onions; now with Whole Wheat Bun',
        },{
         
          name: 'McVeggie Burger',
          category: 'Burger',
          image: 'https://b.zmtcdn.com/data/dish_photos/511/4f4aed59ea6e2df22e23c7f36fcca511.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 145,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'An everyday classic burger with a delectable patty filled with potatoes, carrots and tasty Indian spices; topped with crunchy lettuce and mayonaise.',
        },{
         
          name: 'Veg Maharaja Mac.',
          category: 'Burger',
          image: 'https://b.zmtcdn.com/data/dish_photos/aa1/a0f3276d3d577bead9f56ed9e5230aa1.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 220,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'Perfectly fried corn and cheese patty paired along with jalapeo, onion, slice of cheese & crunchy lettuce dressed with cocktail sauce.',
        },
        //----Sandwich ---
        {
         
          name: 'Schezwan Paneer Sandwich',
          category: 'Sandwich',
          image: 'https://b.zmtcdn.com/data/dish_photos/8a6/28286871052053b5465e2807cc4ea8a6.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 269,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'Spiced up with Schezwan, capsicum, onion, and cheese',
        },{
         
          name: 'Paneer Barbeque Sandwich',
          category: 'Sandwich',
          image: 'https://b.zmtcdn.com/data/dish_photos/ce8/11fe916b0ffac3639cdd3f34d0cbece8.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 269,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'The most tingling flavor of all-time – barbeque is now in the house adored with paneer tikka to give you the thrilling flavors',
        },{
         
          name: 'Cheese Macaroni Sandwich',
          category: 'Sandwich',
          image: 'https://b.zmtcdn.com/data/dish_photos/361/30b34fbd16456e17f4dd776000d89361.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 229,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'Enjoy the all-time favorite Maggie flavor in this sandwich',
        },{
         
          name: 'Freshly Club Sandwich',
          category: 'Sandwich',
          image: 'https://b.zmtcdn.com/data/dish_photos/353/f468cd6c2472f2ad688e3df8f1502353.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 269,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'A go-to healthy sandwich filled with a lot of veggies love',
        },
        //----Smoothy ---
        {
         
          name: 'Dry fruit Smoothie',
          category: 'Smoothy',
          image: 'https://b.zmtcdn.com/data/dish_photos/09f/68c85ddc65d3dd1020462ae3718c809f.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 230,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'Dry fruit smoothie is a great way to combine nutritious milk and dry fruits to create a wholesome meal for any time of the day. [Cal: 249, P-8g, C-31g, Fat-12g, Fibre-3g]',
        },{
         
          name: 'Chocolate Peanut Butter ',
          category: 'Smoothy',
          image: 'https://b.zmtcdn.com/data/dish_photos/b1d/032d67af4aa9300ba09f2bb94a71cb1d.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 230,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'Banana, peanut butter, milk, & whey protein. Get a whopping 40 grams protein out of it',
        },{
         
          name: 'Overnight Apple Smoothie',
          category: 'Smoothy',
          image: 'https://b.zmtcdn.com/data/dish_photos/d10/02d9eaf63dfa4e26a1e4c784e10eed10.png?fit=around|130:130&crop=130:130;*,*',
          price: 179,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'However the name came about, this flavor combo just cannot go wrong. Cinnamon, apple sauce and oats work so well together,',
        },
        //----Snaks ---
        {
         
          name: 'Kaccha Chivda ',
          category: 'Snaks',
          image: 'https://b.zmtcdn.com/data/dish_photos/dd8/488a92ad11af31d5c890e89af0787dd8.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 66.15,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          //description: 'Burger Energy Drink is a carbonated energy drink from PepsiCo International and produced by Rockstar Inc.',
        },{
         
          name: 'Samosa',
          category: 'Snaks',
          image: 'https://b.zmtcdn.com/data/dish_photos/150/ded3f7352a701ca513ffd8dfb55c5150.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 20,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'Samosa [8 Pieces]+Chutney]',
        },
       
        {
         
          name: 'Kachori',
          category: 'Snaks',
          image: 'https://b.zmtcdn.com/data/dish_photos/cba/5c266ea74946dccf45b1dd66bd417cba.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 50,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'Kachori [8 Pieces]+Chutney',
        },{
         
          name: 'Bread Pakoda',
          category: 'Snaks',
          image: 'https://b.zmtcdn.com/data/dish_photos/f5e/011133ef9bbc40fb5df973cb8b96bf5e.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 43,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          //description: 'Burger Energy Drink is a carbonated energy drink from PepsiCo International and produced by Rockstar Inc.',
        },{
         
          name: 'Khaman Dhokla',
          category: 'Snaks',
          image: 'https://b.zmtcdn.com/data/dish_photos/bd0/9c92d4c7ea26377f8cff6d502ade2bd0.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 75,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'Khaman is typically made from Chickpeas gram and looks yellow in color.',
        },{
         
          name: 'Sambar Vadi',
          category: 'Snaks',
          image: 'https://b.zmtcdn.com/data/dish_photos/3be/4cfa2077f288dd718ce222bbd42333be.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 43,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          //description: 'Burger Energy Drink is a carbonated energy drink from PepsiCo International and produced by Rockstar Inc.',
        },{
         
          name: 'Jalebi',
          category: 'Snaks',
          image: 'https://b.zmtcdn.com/data/dish_photos/691/4935a4afbb733b62d543586b0ced0691.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 20,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          //description: 'Burger Energy Drink is a carbonated energy drink from PepsiCo International and produced by Rockstar Inc.',
        },

        //-----Biryani--------------
        {
         
          name: 'Veg Dum Biryani',
          category: 'Biryani',
          image: 'https://b.zmtcdn.com/data/dish_photos/399/e20ce73b2cb1db32f8a7e30375590399.jpg?fit=around|130:130&crop=130:130;*,',
          price: 150,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'Veg dum biryani is a flavourful combination of rice and assorted veggies cooked in a fragrant and flavourful masala seasoned with Indian whole spices. Served with salan and salad.',
        },{
         
          name: 'Egg Dum Biryani',
          category: 'Biryani',
          image: 'https://b.zmtcdn.com/data/dish_photos/032/509e45bfc26889f383af0845f8ef4032.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 223,
          countInStock: 10,
          type:'Non-Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'Healthy yet wholesome boiled eggs covered in flavour packed masala and slow cooked rice.',
        },{
         
          name: 'Chicken Tikka Dum Biryani',
          category: 'Biryani',
          image: 'https://b.zmtcdn.com/data/dish_photos/9b9/d96f992da71319ea3f69edf0af0329b9.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 250,
          countInStock: 10,
          type:'Non-Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'Chicken Tikka Dum Biryani',
        },
     
        {
         
          name: 'Tandoori Chicken',
          category: 'Biryani',
          image: 'https://b.zmtcdn.com/data/dish_photos/0fd/d609802fa823a7da45a8795e1bcd40fd.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 320,
          countInStock: 10,
          type:'Non-Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'This baked tandoori chicken features healthy and delicious Indian flavours.',
        },
        //----------Cakes------------------------------------------------------
        {
         
          name: 'Black Forest',
          category: 'Cakes',
          image: 'https://b.zmtcdn.com/data/dish_photos/a76/d9f76f8fb136374231c27e3e97995a76.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 480,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          // description: 'Burger Energy Drink is a carbonated energy drink from PepsiCo International and produced by Rockstar Inc.',
        },
        {
         
          name: 'Pineapple Cake ',
          category: 'Cakes',
          image: 'https://b.zmtcdn.com/data/dish_photos/ff3/f2f8a6e14c69a26658382262e8178ff3.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 120,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'Burger Energy Drink is a carbonated energy drink from PepsiCo International and produced by Rockstar Inc.',
        },
        {
         
          name: 'Strawberry Cake',
          category: 'Cakes',
          image: 'https://b.zmtcdn.com/data/dish_photos/448/8d97ca7ebdf5317b4ed3cb9d6ff2f448.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 260,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'Burger Energy Drink is a carbonated energy drink from PepsiCo International and produced by Rockstar Inc.',
        },

        //----Chicken----
        {
         
          name: 'Chilli Chicken',
          category: 'Chicken',
          image: 'https://b.zmtcdn.com/data/dish_photos/077/4c4b2230e8b814f161b384133a07f077.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 303.81,
          countInStock: 10,
          type:'Non-Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'Burger Energy Drink is a carbonated energy drink from PepsiCo International and produced by Rockstar Inc.',
        },
        {
         
          name: 'Chicken Lollipop',
          category: 'Chicken',
          image: 'https://b.zmtcdn.com/data/dish_photos/5b7/0e68a8a55e3732d92670caca367f15b7.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 284.0,
          countInStock: 10,
          type:'Non-Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'Burger Energy Drink is a carbonated energy drink from PepsiCo International and produced by Rockstar Inc.',
        },
        {
         
          name: 'Tandoori Chicken',
          category: 'Chicken',
          image: 'https://b.zmtcdn.com/data/dish_photos/35e/0928ee4ba47b3f7a4ca3998c72b3b35e.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 284.76,
          countInStock: 10,
          type:'Non-Veg',
          rating: 4.8,
          numReviews: 17,
          description: 'Burger Energy Drink is a carbonated energy drink from PepsiCo International and produced by Rockstar Inc.',
        },
        //------------------Rolls-----------------------------------------------
        {
         
          name: 'Butter Chicken Roll',
          category: 'Rolls',
          image: 'https://b.zmtcdn.com/data/dish_photos/510/4bce9715d90389bcd86267ce46160510.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 149,
          countInStock: 10,
          type:'Non-Veg',
          rating: 4.8,
          numReviews: 17,
          // description: 'Burger Energy Drink is a carbonated energy drink from PepsiCo International and produced by Rockstar Inc.',
        },
        {
         
          name: 'Chicken Bhuna Roll',
          category: 'Rolls',
          image: 'https://b.zmtcdn.com/data/dish_photos/d76/a2c285674e3f8d338376e7850db94d76.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 159,
          countInStock: 10,
          type:'Non-Veg',
          rating: 4.8,
          numReviews: 17,
          // description: 'Burger Energy Drink is a carbonated energy drink from PepsiCo International and produced by Rockstar Inc.',
        },
        {
         
          name: 'Paneer Makhanwala Roll',
          category: 'Rolls',
          image: 'https://b.zmtcdn.com/data/dish_photos/271/2a27eab1acc6d843494cdc2fc67fb271.jpg?fit=around|130:130&crop=130:130;*,*',
          price: 139,
          countInStock: 10,
          type:'Veg',
          rating: 4.8,
          numReviews: 17,
          //description: 'Burger Energy Drink is a carbonated energy drink from PepsiCo International and produced by Rockstar Inc.',
        },
        
      ],

}

export default data