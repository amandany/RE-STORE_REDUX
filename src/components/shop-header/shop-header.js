import React from 'react';
import './shop-header.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const ShopHeader = ({cartItems = {}, orderTotal}) => {

    let countTotal = 0;
    for(let i = 0; i < cartItems.length; i++){
        countTotal+= cartItems[i].count;
    }
    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="logo text-dark"> ReStore</div>
            </Link>
            <Link to="/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart"/>
                    {countTotal} items (${orderTotal})
                </div>
            </Link>
        </header>
    );
};

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
    return {cartItems, orderTotal}
};

export default connect(mapStateToProps)(ShopHeader);
