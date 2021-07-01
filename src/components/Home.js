import React from 'react';
import './Home.css'
import Product from './Product';


const Home = () => {
    return (
        <div className="home">
            <img className="home_img"
            src="./f1.jpg" 
            alt="" />
            <div className="home_row">
                <Product
                    id="121314"
                    tile="The Lean Startup: How Contan Innovation"
                    price={11.96}
                    rating={4}
                    image="https://rigid.althemist.com/wp-content/uploads/2017/08/prod_fs_18_1.jpg"
                />
                <Product
                    id="121314"
                    tile="The Lean Startup: How Contan Innovation"
                    price={11.96}
                    rating={4}
                    image="https://rigid.althemist.com/wp-content/uploads/2017/08/prod_fs_18_1.jpg"
                />
                <Product
                    id="121314"
                    tile="The Lean Startup: How Contan Innovation"
                    price={11.96}
                    rating={4}
                    image="https://rigid.althemist.com/wp-content/uploads/2017/08/prod_fs_18_1.jpg"
                />
                
            </div>
            <div className="home_row">
                <Product
                    id="121314"
                    tile="The Lean Startup: How Contan Innovation"
                    price={11.96}
                    rating={4}
                    image="https://rigid.althemist.com/wp-content/uploads/2017/08/prod_fs_18_1.jpg"
                />
                <Product
                    id="121314"
                    tile="The Lean Startup: How Contan Innovation"
                    price={11.96}
                    rating={4}
                    image="https://rigid.althemist.com/wp-content/uploads/2017/08/prod_fs_18_1.jpg"
                />
                <Product
                    id="121314"
                    tile="The Lean Startup: How Contan Innovation"
                    price={11.96}
                    rating={4}
                    image="https://rigid.althemist.com/wp-content/uploads/2017/08/prod_fs_18_1.jpg"
                />
            </div>
            
            
        </div>
    );
};

export default Home;