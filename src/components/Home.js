import React from 'react';
import './Home.css'
import Product from './Product';


function Home (){
    return (
        <div className="home">
            <img className="home_img"
            src="./f1.jpg" 
            alt="" />
            <div className="home_row">
                <Product
                    id="121314"
                    title="Men’s classic stretch suit"
                    price={690.00}
                    rating={4}
                    image="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/01/50.jpg"
                />
                <Product
                    id="124"
                    title="Raw denim short with sequins"
                    price={69.00}
                    rating={4}
                    image="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/01/2.jpg"
                />
                <Product
                    id="135"
                    title="The Lean Startup: How Contan Innovation"
                    price={15}
                    rating={4}
                    image="https://rigid.althemist.com/wp-content/uploads/2017/08/prod_fs_18_1.jpg"
                />
                
            </div>
            <div className="home_row">
                <Product
                    id="250"
                    title="The Lean Startup: How Contan Innovation"
                    price={12}
                    rating={4}
                    image="https://rigid.althemist.com/wp-content/uploads/2017/08/prod_fs_18_1.jpg"
                />
                <Product
                    id="456"
                    title="Woman laptop tote bag"
                    price={195.00}
                    rating={4}
                    image="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/01/40.jpg"
                />
                <Product
                    id="1678"
                    title="Essentials men’s blend heavyweight coat"
                    price={77.00}
                    rating={4}
                    image="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/01/49.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="36"
                    title="Blue classic long sleeves shirt"
                    price={89.00}
                    rating={4}
                    image="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/01/16.jpg"
                />
                <Product
                    id="65"
                    title="The Lean Startup: How Contan Innovation"
                    price={11}
                    rating={4}
                    image="https://rigid.althemist.com/wp-content/uploads/2017/08/prod_fs_18_1.jpg"
                />
                <Product
                    id="12444"
                    title="Men’s classic stretch suit"
                    price={13}
                    rating={4}
                    image="https://yobazar-be87.kxcdn.com/yobazar/wp-content/uploads/2021/01/6.jpg"
                />
            </div>
            
            
        </div>
    );
};

export default Home;