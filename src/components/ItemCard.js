import React from 'react'

const ItemCard = (props) => {

    // console.log(props.itemData)
    const { itemData } = props

    return (
        <>
            {itemData.map((sitem) => {
                return <div className="card col-md-3 my-2 mx-4 px-0" style={{ width: "24rem" }} key={sitem.id}>
                    <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary">
                        {sitem.time}
                        <span class="visually-hidden">unread messages</span>
                    </span>
                    <img src={sitem.imagesrc} className="card-img-top" height="270" alt="Not Found" />
                    <div className="card-body">
                        <h5 className="card-title">{sitem.id}. {sitem.title}</h5>
                        <h6 className='card-title'>&#8377;{sitem.prize}</h6>
                        <p className="card-text">{sitem.desc}</p>
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            })}
        </>
    )
}

export default ItemCard