import React, { useState } from 'react'
import '../styles/leftside.css'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'
import { ImCart } from 'react-icons/im'
import { FaBoxOpen } from 'react-icons/fa'
// import { AiFillSetting } from 'react-icons/ai'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import { FaAddressCard } from 'react-icons/fa'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import { MdNotifications } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CartItemCard from './CartItemCard'
import { useDispatch } from 'react-redux'
import pizza from '../assests/pizza.png'
import { RiLogoutCircleRFill } from 'react-icons/ri'
import { logout } from '../actions/auth'
const LeftSide = ({ data, show }) => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const user = useSelector(state => state.user)
    const [showNoti, setShow] = useState(false)
    // console.log(cartItems)


    const dispatch = useDispatch()
    // const user = useSelector(state=>state.user.user)
    // const show =useSelector(state=>state.sidebar.show)

    const location = useLocation()
    const path = location.pathname

    const handleSignOut = () => {
        dispatch(logout())
    }

    return (
        <div className='leftside'>
            <div className="header">
                <div>
                    <Link to="/"><div className={`icon ${path === '/' && 'active'}`}>
                        <SiHomeassistantcommunitystore />
                    </div></Link>
                </div>
                <Link to="/orders"><div className={`icon ${path === '/orders' && 'active'}`}>
                    <FaBoxOpen />
                </div></Link>
                <Link to='/wishlist'> <div className={`icon ${path === '/wishlist' && 'active'}`}>
                    <BsFillBookmarkHeartFill />
                </div></Link>
                <Link to="/your-address"> <div className={`icon ${path === '/your-address' && 'active'}`}>
                    <FaAddressCard />
                </div></Link>

                {/* <Link to='/profile'><div className={`icon ${path === '/profile' && 'active'}`}>
                    <AiFillSetting />
                </div></Link> */}

                {/* {show && <Link to="/add-product"> <button style={{ marginRight: "10px" }}>Add Product</button></Link>} */}
                {/* {show ? null : (<div className="user-info">
                    {
                        user?.user ? (
                            <Link to="/profile"> <div className='user-profile-icon'>{user.user.name.charAt(0)}</div></Link>
                        ) : (
                            <Link to="/signin"> <button>Login</button></Link>
                        )
                    }
                </div>)} */}
                {show ? null : (<Link to="/cart"><div className="icon">
                    <span>{cartItems ? cartItems?.length : 0}</span>
                    <ImCart />
                </div></Link>)}
                <div className="icon" onClick={() => setShow(!showNoti)} >

                    {data?.length === undefined ? null : <span>{data?.filter(item => item.inStockItem <= 3).length} </span>}
                    <MdNotifications />

                </div>
                {showNoti && (<div className='waring-noti'>
                    {
                        data?.map((item, i) => {
                            if (item.inStockItem <= 3) {
                                return <div key={i}>{item.name} has came to end</div>
                            }

                        })
                    }
                </div>)}
                <div className="bottom-icon">
                    {user && (<div className="icon" onClick={handleSignOut}>
                        <RiLogoutCircleRFill />
                    </div>)}
                </div>

            </div>
            {show ? null : (<div className="sidebar-msg">
                <div className="img">
                    <img src={pizza} alt="" />
                </div>
                {/* <div className="text">
                    <h2>Safe Delivery <span>@</span> your doors</h2>
                </div> */}
            </div>)}
            {show ? null : (<div className="side-cart-area">
                <div className="text">
                    <h4>Order Menu</h4>
                    <Link to='/cart'><p>Veiw All <BsFillArrowRightSquareFill /></p></Link>
                </div>
                <div className='cart-area'>
                    <div className="all-items side-cart">
                        {cartItems.slice(0, 3).map((item) => (
                            <CartItemCard key={item.product} item={item} />
                        ))}
                        {cartItems.length > 0 && <Link to="/cart"><button>PROCEED TO CHECKOUT</button></Link>}
                    </div>
                </div>
            </div>)}


        </div>
    )
}

export default LeftSide
