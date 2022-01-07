import React from "react";

function MenuItem({image, name, price}) {
    return (
        <div className="menu-item">
            <div className="pizza-image" style={{backgroundImage: `url(${image})` }}></div>
            <h1 className="pizza-name">{name}</h1>
            <p className="price">$ {price}</p>
        </div>
    )
}


export default MenuItem;