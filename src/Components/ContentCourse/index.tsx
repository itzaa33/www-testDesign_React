import React from 'react'
import Styles from './index.module.css' 

import Image from '../../Images/image.jpg'

const Comp = () =>
{

    return (
        <div>
            <div className={Styles.image}>
                <img src={Image} />
            </div>
        </div>
    )
}

export default Comp