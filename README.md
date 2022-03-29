# SAMSUNG STORE

E-commerce app, created with React, React-Router and Firebase.

### Developed by Daniel Brugioni
- Email: daniel.brugioni@hotmail.com
- GitHub: https://github.com/danielbrugio/flexintegral-brugioni
- LinkedIn: https://www.linkedin.com/in/daniel-brugioni/

![Demo](https://github.com/danielbrugio/flexintegral-brugioni/blob/main/src/components/assets/aa4c88f4-831e-4fb6-b1ec-e154ba718722.gif)


## Project information:

### Setup
To run this app you need to install npm in you local computer:
```
$ cd ../flexintegral-brugioni
$ npx create-react-app app-name
$ npm install
$ npm start
```

After that, you need to install Firebase:
```
$ cd ../flexintegral-brugioni
$ npm install firebase
```

Then you need to configure the enviroment variables that Firebase provides you, such as:
* apiKey
* authDomain
* projectId
* storageBucket
* messagingSenderId
* appId
* measurementId

If you want to add more products to the Firebase database, you'll need to create 2 (two) collections:
**_categories_**: These will render in the NavBar component, and you'll create as many as needed.
**_products_**: Here you'll add the products you want to sell. The format requires 6 (six) key.values, which are (example added):
* category (string) : "notebook-tv-smartphone"
* description (string) : "Color:Mystic Black"
* img (string) : "url link to the image"
* name (string & numbers) : "Galaxy Tab S7+"
* price (number) : "210000"
* stock (number) : "5"

A third collection name **_orders_** will be created automatically by Firebase when someone confirm an order in the cart.

### React Routes and navegability
This app uses React Router, avoiding the page to refresh everytime it changes it's route:

* NavBar:
 Here you will see the categories of the products that were created in Firebase database. Navbar is visible all the time, in every route you choose because is outside the app routes. 

* ItemListContainer:
 It's displayed in the Home page and show all products, but if you click on any category, it will filter and dysplay the products matching this category

* ItemDetailContainer:
 Here you'll see only 1 (one) product, filtering by using productId with useParam hook. In this view, the user have the chance to add the desired quantity of this product in to the cart, suing useState and useContext to store the state in "Cart".

* CartIcon:
 This receives the cart item quantity and displays it in the NavBar. If you click here, it will route you to Cart

* Cart:
 Here are displayed the products added previously in the ItemDetailContainer, showing quantity, unit price, sub-total and total to pay.

* ContacForm:
 Before confirm the order, the user must complete this form with the contact information.

* CartContext:
 This component includes varied functions and the cart state. Using Context Provider wrapping all the app components, these functions and state are global to it's children