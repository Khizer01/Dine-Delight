import springRoll from '../../assets/image/spring-roll.jpg';
import garlicBread from '../../assets/image/garlic-bread.jpg';
import mushroom from '../../assets/image/stuffed-mushroom.jpg';
import burschetta from '../../assets/image/bruschetta.jpg';
import buffaloWings from '../../assets/image/buffalo-wings.jpg';
import beefTacos from '../../assets/image/Beef Tacos.jpg';
import chickenAlfredo from '../../assets/image/chicken-alfredo.jpg';
import steak from '../../assets/image/steak.jpg';
import veggieBurger from '../../assets/image/vegge-burger.jpg';
import applePie from '../../assets/image/apple-pie.jpg';
import Cheesecake from '../../assets/image/cheese-cake.jpg';
import grilledSalmon from '../../assets/image/grilled-salmon.jpg';
import iceCream from '../../assets/image/ice-cream-sundae.jpg';
import Brownie from '../../assets/image/brownie.jpg';
import pannaCottta from '../../assets/image/Panna Cotta.jpg';





const  menu = [
    {
      name: 'Appetizers',
      dishes: [
        { id: 1, name: 'Spring Rolls', price: 5.99, image: springRoll },
        { id: 2, name: 'Garlic Bread', price: 3.99, image: garlicBread },
        { id: 3, name: 'Stuffed Mushrooms', price: 6.99, image: mushroom },
        { id: 4, name: 'Bruschetta', price: 4.99, image: burschetta },
        { id: 5, name: 'Buffalo Wings', price: 7.99, image: buffaloWings }
      ]
    },
    {
      name: 'Main Course',
      dishes: [
        { id: 6, name: 'Grilled Salmon', price: 15.99, image: grilledSalmon },
        { id: 7, name: 'Steak', price: 18.99, image: steak },
        { id: 8, name: 'Chicken Alfredo', price: 12.99, image: chickenAlfredo },
        { id: 9, name: 'Beef Tacos', price: 10.99, image: beefTacos },
        { id: 10, name: 'Veggie Burger', price: 9.99, image:  veggieBurger }
      ]
    },
    {
      name: 'Desserts',
      dishes: [
        { id: 11, name: 'Cheesecake', price: 6.99, image:  Cheesecake },
        { id: 12, name: 'Brownie', price: 4.99, image:  Brownie },
        { id: 13, name: 'Ice Cream Sundae', price: 5.99, image:  iceCream },
        { id: 14, name: 'Apple Pie', price: 5.49, image:  applePie },
        { id: 15, name: 'Panna Cotta', price: 6.49, image:  pannaCottta }
      ]
    }
  ];
  export default menu;