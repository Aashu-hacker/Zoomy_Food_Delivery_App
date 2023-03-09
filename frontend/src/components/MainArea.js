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
                            <img src="https://cdn-icons-png.flaticon.com/512/1046/1046874.png" alt="all" />
                        </div>
                        <div className="lebal">
                            All
                        </div>
                    </div>
                    <div className={`cat-icon  ${category === 'Burger' && 'active'} `} onClick={() => setCategory('Burger')}>
                        <div className="img">

                            <img src="https://cdn-icons-png.flaticon.com/512/2933/2933054.png" alt="pizza" />
                        </div>
                        <div className="lebal">
                            Burgers
                        </div>

                    </div>
                    <div className={`cat-icon  ${category === 'Sandwich' && 'active'} `} onClick={() => setCategory('Sandwich')}>
                        <div className="img">

                            <img src="https://cdn-icons-png.flaticon.com/512/669/669856.png" alt="pizza" />
                        </div>
                        <div className="lebal">
                            Sandwich
                        </div>

                    </div>
                    <div className={`cat-icon  ${category === 'Smoothy' && 'active'} `} onClick={() => setCategory('Smoothy')}>
                        <div className="img">

                            <img src="https://cdn-icons-png.flaticon.com/512/4080/4080651.png" alt="pizza" />
                        </div>
                        <div className="lebal">
                            Smoothy
                        </div>

                    </div>
                    <div className={`cat-icon  ${category === 'Snaks' && 'active'} `} onClick={() => setCategory('Snaks')}>
                        <div className="img">

                            <img src="https://cdn-icons-png.flaticon.com/512/7438/7438624.png" alt="pizza" />
                        </div>
                        <div className="lebal">
                            Snaks
                        </div>

                    </div>
                    <div className={`cat-icon  ${category === 'Drink' && 'active'} `} onClick={() => setCategory('Drink')}>
                        <div className="img">

                            <img src="https://cdn-icons-png.flaticon.com/512/2738/2738890.png" alt="pizza" />
                        </div>
                        <div className="lebal">
                            Drinks
                        </div>

                    </div>
                    <div className={`cat-icon  ${category === 'Biryani' && 'active'} `} onClick={() => setCategory('Biryani')}>
                        <div className="img">

                            <img src="https://cdn-icons-png.flaticon.com/512/4034/4034070.png" alt="pizza" />
                        </div>
                        <div className="lebal">
                            Biryani
                        </div>

                    </div>
                    <div className={`cat-icon  ${category === 'Cakes' && 'active'} `} onClick={() => setCategory('Cakes')}>
                        <div className="img">

                            <img src="https://cdn-icons-png.flaticon.com/512/918/918234.png" alt="pizza" />
                        </div>
                        <div className="lebal">
                            Cakes
                        </div>

                    </div>
                    <div className={`cat-icon  ${category === 'Chicken' && 'active'} `} onClick={() => setCategory('Chicken')}>
                        <div className="img">

                            <img src="https://cdn-icons-png.flaticon.com/512/1895/1895685.png" alt="pizza" />
                        </div>
                        <div className="lebal">
                            Chicken
                        </div>

                    </div>
                    <div className={`cat-icon  ${category === 'Rolls' && 'active'} `} onClick={() => setCategory('Rolls')}>
                        <div className="img">

                            <img src="https://cdn-icons-png.flaticon.com/512/2398/2398908.png" alt="pizza" />
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
                    <Product category={category} />
                    }
                
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
