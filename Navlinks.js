import { Link } from 'react-router-dom';
import React from 'react';

import './Navlinks.css'
function Navlinks() {
    return (
        <div className="navlinks">
            <div className="navlinks_outer">
                <Link>
                    Women
                </Link>
                <Link>
                    Men
                </Link>
                <Link>
                    Shirt
                </Link>
                <Link>
                    Shoes
                </Link>
                <Link>
                    Contact
                </Link>
                
            </div>
            
        </div>
    );
}

export default Navlinks;