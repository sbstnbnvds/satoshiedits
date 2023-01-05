import CustomPricing from "./CustomPricing"
/* background made with https://www.magicpattern.design/tools/seamless-patterns */

const Pricing = () => {
    return (
        <div className="pricing">
            <div className="row">
                <div className="col-12 col-md-4 nopadding" id="starter">
                    <div className="pricing-box" id="basic-plan">
                        <h3>STARTER</h3>
                        <ul>
                            <li>Cut and merge clips</li>
                            <li>Stylish and seamless transitions</li>
                            <li>Animated motion text</li>
                            <li>Color correction and grading</li>
                            <li>Background noise reduction</li>
                            <li>Echo removal</li>
                            <li>Sound design</li>
                            <li>Logo reveal animation</li>
                            <li>Slideshow</li>
                            <li>Royalty free music</li>
                        </ul>
                        <p>19</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 nopadding" id="diamond">
                    <div className="pricing-box" id="diamond-plan">
                        <h3>ADVANCE</h3>
                        <ul>
                            <li>Starter Plan</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                            <li>Feature 5</li>
                        </ul>
                        <p>40</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 nopadding" id="custom">
                    <CustomPricing />                   
                </div>
            </div>
        </div>
    )
}

export { Pricing }