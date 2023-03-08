import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { HiMenuAlt1 } from 'react-icons/hi'
import { BsCart3 } from 'react-icons/bs'
import { IoNotificationsOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchProducts, showSideBar } from '../actions'
import zoomy from '../assests/zoomy.png'
import Spinner from './Spinner'
const Header = ({ data, show }) => {
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const search = useSelector(state => state.search)
    const dispatch = useDispatch()
    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(searchProducts(name))
        navigate(`/search?=${name}`)

    }
    const cartItems = useSelector(state => state.cart.cartItems)
    const user = useSelector(state => state.user)
    const [showNoti, setShow] = useState(false)
    return (
        <div className='header'>
            <div className="logo">
                <div className="burger" onClick={() => dispatch(showSideBar(true))}>
                    <HiMenuAlt1 />
                </div>
                <Link to="/"><img src={zoomy} alt="logo" /></Link>
            </div>
            {show && <Link to="/add-product"> <button style={{ marginRight: "10px" }}>Add Product</button></Link>}
            {show ? null : (<div className="user-info">
                {
                    user?.user ? (
                        <Link to="/profile"> <div className='user-profile-icon'>{user.user.name.charAt(0)}</div></Link>
                    ) : (
                        <Link to="/signin"> <button>Login</button></Link>
                    )
                }
            </div>)}
            {show ? null : (<Link to="/cart"><div className="icon">
                <span>{cartItems ? cartItems?.length : 0}</span>
                <BsCart3 />
            </div></Link>)}
            <div className="icon" onClick={() => setShow(!showNoti)} >

                {data?.length === undefined ? null : <span>{data?.filter(item => item.inStockItem <= 3).length} </span>}
                <IoNotificationsOutline />

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


            <form onSubmit={handleSearch} className="search-bar">
                <div className="input">
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Search For Food' />
                    {search?.loading ? (<div>
                        <Spinner />
                    </div>) : <FiSearch onClick={handleSearch} />}
                </div>
            </form>
        </div>
    )
}

export default Header
