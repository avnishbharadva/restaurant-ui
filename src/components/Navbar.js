import React from 'react'

const Navbar = (props) => {

    const {filterItem , navItem} = props

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            
                            {
                                navItem.map((curElm) => {
                                    return <li className="nav-item">
                                    <button className="nav-link bg-dark border-0 fs-5 mx-2" aria-current="page" onClick={() => filterItem(curElm)}>{curElm}</button>
                                </li>
                                })
                            }
                        
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
