const Herosection = () =>{
    return(
<main>
        <div className="hero-section">
            <div className="left-side">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-buttons">
                    <div className="shop-know">
                        <button>Shop know</button>
                    </div>
                    <div className="Category">
                        <button>Category</button>
                    </div>
                </div>
                <div className="extras">
                    <p>
                      Also Available On
                    </p>
                    <div className="images">
                        <img src="/images/flipkart.svg" alt="flipkart" />
                        <img src="/images/amazon.svg" alt="flipkart" />
                    </div>
                </div>
            </div>
            <div className="right-side">
                <img src="/images/shoe_image.png" alt="shoes" />
            </div>
        </div>
       </main>
    );
};

export default Herosection;