import React from 'react'

const ItemCard = (props) => {

    const { itemData } = props

    return (
        <>
            {itemData.map((sitem) => {

                const {id, title, prize, imagesrc, desc, time} = sitem

                return <div className="card col-md-3 my-2 mx-4 px-0" style={{ width: "24rem" }} key={id}>
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary">
                        {time}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={imagesrc} className="card-img-top" height="270" alt="Not Found" />
                    <div className="card-body">
                        <h5 className="card-title">{id}. {title}</h5>
                        <h6 className='card-title'>&#8377;{prize}</h6>
                        <p className="card-text">{desc}</p>
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            })}
        </>
    )
}

export default ItemCard