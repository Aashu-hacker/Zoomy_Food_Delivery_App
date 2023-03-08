import React, { useState, useEffect } from 'react'
import '../styles/mainarea.css'
import Header from './Header'
// import pizzaboy from '../assests/pizzaboy.png'
import Product from './products/Product'
import { searchProducts } from '../actions';
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from './products/ProductCard'
import { useLocation } from 'react-router-dom';
// import SkeletonArticle from '../skeleton/SkeletonArticle';
// import Contact from '../pages/Contact.js';
import Section from '../pages/Section.js';
import Footer from '../pages/Footer'
const MainArea = () => {
    const user = useSelector(state => state.user)
    const [category, setCategory] = useState('all')

    const error = useSelector(state => state.search?.error)
    const location = useLocation()
    const query = location.search.split('=')[1]
    const data = useSelector(state => state.search?.allPorducts)
    const loading = useSelector(state => state.search?.loading)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(searchProducts(query))
    }, [query])
  

    return (
        <div className='mainarea'>
            <Header />
            <Section/>
            <div className="banner">
                <div className="img">
                    {/* <img src={pizzaboy} alt="" /> */}
                </div>
                <div className="text">
                    <h2>Hello {user?.user?.name}</h2>
                    <p>Get Free delivery on <span>500 Rs.</span>  and above</p>
                    <button>Order Now!</button>
                    {/* <img className='full circle' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png" alt="" />
                    <img className='small circle' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png" alt="" />
                    <img className='smaller circle' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png" alt="" />
                    <img className='half circle' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png" alt="" /> */}

                </div>
        
            </div>
            {/* category area */}
            <div className='category-area'>
                <h3>Menu</h3>
                <div className="category">
                    <div className={`cat-icon ${category === 'all' && 'active'} `} onClick={() => setCategory('all')}>
                        <div className="img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Z7jQGhw-yMlPenXgCkPGwl2vC2PiteVYIw&usqp=CAU" alt="all" />
                        </div>
                        <div className="lebal">
                            All
                        </div>
                    </div>
                    <div className={`cat-icon  ${category === 'Burger' && 'active'} `} onClick={() => setCategory('Burger')}>
                        <div className="img">

                            <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="pizza" />
                        </div>
                        <div className="lebal">
                            Burgers
                        </div>

                    </div>
                    <div className={`cat-icon  ${category === 'Sandwich' && 'active'} `} onClick={() => setCategory('Sandwich')}>
                        <div className="img">

                            <img src="https://cdn-icons-png.flaticon.com/128/6518/6518098.png" alt="pizza" />
                        </div>
                        <div className="lebal">
                            Sandwich
                        </div>

                    </div>
                    <div className={`cat-icon  ${category === 'Smoothy' && 'active'} `} onClick={() => setCategory('Smoothy')}>
                        <div className="img">

                            <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/2x/external-ice-cream-carnival-vitaliy-gorbachev-flat-vitaly-gorbachev.png" alt="pizza" />
                        </div>
                        <div className="lebal">
                            Smoothy
                        </div>

                    </div>
                    <div className={`cat-icon  ${category === 'Snaks' && 'active'} `} onClick={() => setCategory('Snaks')}>
                        <div className="img">

                            <img src="https://img.icons8.com/color/2x/popcorn.png" alt="pizza" />
                        </div>
                        <div className="lebal">
                            Snaks
                        </div>

                    </div>
                    <div className={`cat-icon  ${category === 'Drink' && 'active'} `} onClick={() => setCategory('Drink')}>
                        <div className="img">

                            <img src="https://img.icons8.com/external-itim2101-flat-itim2101/2x/external-drinking-cafe-itim2101-flat-itim2101.png" alt="pizza" />
                        </div>
                        <div className="lebal">
                            Drinks
                        </div>

                    </div>
                    <div className={`cat-icon  ${category === 'Biryani' && 'active'} `} onClick={() => setCategory('Sabzi')}>
                        <div className="img">

                            <img src="https://cdn-icons-png.flaticon.com/128/6518/6518098.png" alt="pizza" />
                        </div>
                        <div className="lebal">
                            Biryani
                        </div>

                    </div>
                    <div className={`cat-icon  ${category === 'Cakes' && 'active'} `} onClick={() => setCategory('Chapati')}>
                        <div className="img">

                            <img src="https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png" alt="pizza" />
                        </div>
                        <div className="lebal">
                            Cakes
                        </div>

                    </div>
                    <div className={`cat-icon  ${category === 'Chicken' && 'active'} `} onClick={() => setCategory('Chicken')}>
                        <div className="img">

                            <img src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png" alt="pizza" />
                        </div>
                        <div className="lebal">
                            Chicken
                        </div>

                    </div>
                    <div className={`cat-icon  ${category === 'Rolls' && 'active'} `} onClick={() => setCategory('Rolls')}>
                        <div className="img">

                            <img src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png" alt="pizza" />
                        </div>
                        <div className="lebal">
                            Rolls
                        </div>

                    </div>
                </div>

                {category === 'all' &&

                    <div className='all-products'>
                        {loading ? (
                            <>
                                {[1, 2, 3, 4, 5, 6].map(n => <div className='product-card' key={n}><div key={n}/></div>)}
                            </>
                        ) : <ProductCard product={data} />}</div>

                }
                {category === category &&
                    <Product category={category} />}
                
            </div>
        <br></br>
{/* // <!-- How It Works --> */}
<div class="section" id="how-it-works">
      <h2 class="secondary">How It Works</h2>

      <div class="container flex">
        <div class="box">
          <h3>Easy Order</h3>
          <ion-icon name="timer-o   <Section/>utline"></ion-icon>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            non?
          </p>
        </div>

        <div class="box active">
          <h3>Best Quality</h3>
          <ion-icon name="trophy-outline"></ion-icon>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            non?
          </p>
        </div>

        <div class="box">
          <h3>Fast Delivery</h3>
          <ion-icon name="checkmark-done-circle-outline"></ion-icon>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            non?
          </p>
        </div>
      </div>
    </div>
    {/* // <!-- End How It Works --> */}
    {/* // <!-- About --> */}
    <div class="section" id="about">
      <div class="container flex">
        <div class="visual">
          <img src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/about.png" alt="" />
        </div>
        <div class="text">
          <div class="secondary">About Our Restaurant</div>
          <h2 class="primary">150+</h2>

          <h3 class="tertiary">Our Delicious Food</h3>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
            itaque saepe id hic rem doloribus quas esse voluptatibus eius sequi,
            possimus maxime dolores tempore facilis fugit porro mollitia, est
            consequuntur.
          </p>
          <a href="#menu" class="btn">Explore Menu</a>
        </div>
      </div>
    </div>
    {/* // <!-- End About --> */}
            {/* <div  className='contact-section'>
            <Contact/>
            </div> */}
            <br></br>
            <div className='footer-content'>
            <Footer/>
            </div>
        </div>
        
    )
}

export default MainArea
