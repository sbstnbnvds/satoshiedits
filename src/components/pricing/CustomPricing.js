import React, { useState } from 'react'
import { useEffect } from 'react'

const CustomPricing = () => {
    let [price, setPrice] = useState(23)
    let [buttonOne, setButtonOne] = useState(false)
    let [buttonTwo, setButtonTwo] = useState(false)
    let [buttonThree, setButtonThree] = useState(false)


    function buttonOneClick() {
        setButtonOne(!buttonOne);
        if (!buttonOne) {
            setPrice(price + 15)
        } else {
            setPrice(price - 15)
        }
    }

    function buttonTwoClick() {
        setButtonTwo(!buttonTwo);
        if (!buttonTwo) {
            setPrice(price + 15)
        } else {
            setPrice(price - 15)
        }
    }

    function buttonThreeClick() {
        setButtonThree(!buttonThree);
        if (!buttonThree) {
            setPrice(price + 15)
        } else {
            setPrice(price - 15)
        }
    }

    return (
        <div className="pricing-box" id="gold-plan">
            <h3>CUSTOM</h3>
            <div className="custom-main">
            <div className="row but-1">
                <div className="col-lg-6 col-md-12 col-sm-6 text-center">
                <button onClick={buttonOneClick}>Video Editing</button>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-6 text-center">
                <button onClick={buttonTwoClick}>Thumbnail</button>
                </div>
                
                <div className="col-lg-6 col-md-12 col-sm-6 text-center">
                <button onClick={buttonThreeClick}>Reformat</button>
                </div>
            </div>
            </div>
            <p>{price}</p>
        </div>
    )
}

export default CustomPricing