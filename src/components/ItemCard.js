import React from 'react'

const ItemCard = (props) => {

    // console.log(props.itemData)
    const {itemData} = props

    return (
        <>
            {itemData.map((sitem) => {
                return <div className="card col-md-3 my-2 mx-2 px-0" style={{width: "18rem"}} key={sitem.id}>
                <img src={sitem.image} className="card-img-top" height="270" alt="Image Not Found"/>
                    <div className="card-body">
                        <h5 className="card-title">{sitem.id}. {sitem.title}</h5>
                        <h6 className='card-title'>&#8377;{sitem.prize}</h6>
                        <p className="card-text">{sitem.desc}</p>
                        <a href="#" className="btn btn-primary">Order Now</a>
                    </div>
            </div>
            })} 
        </>
    )
}

export default ItemCard