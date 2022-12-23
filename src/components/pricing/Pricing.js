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
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                            <li>Feature 5</li>
                        </ul>
                        <p>19</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 nopadding" id="diamond">
                    <div className="pricing-box" id="diamond-plan">
                        <h3>DIAMOND</h3>
                        <ul>
                            <li>Feature 1</li>
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