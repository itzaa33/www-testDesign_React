import React from 'react'
import Styles from './index.module.css'
import Course from './Course'

// image
import Image from '../../Images/image.jpg'

// data
import { ContentCourse } from '../../_Data/ContentCourse.json'

const Comp = () =>
{
    return (
        <div className={Styles.container}>
            <div className={Styles.image}>
                <img src={Image} />
            </div>
            <div className={Styles.container_course}>
                {
                    (!!ContentCourse && ContentCourse.length > 0) &&
                    ContentCourse.map((item, index) =>
                    {
                        return (
                            <div key={index} className={Styles.card}>
                                <Course
                                    price={item.price}
                                    textButton={item.textButton}
                                    lists={item.lists}
                                    style={item.style}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Comp