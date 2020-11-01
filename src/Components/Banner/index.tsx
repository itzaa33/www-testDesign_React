import React from 'react'
import Styles from './index.module.css'
import Starts from './Stars'

const Comp = () =>
{

    return (
        <div className={Styles.container}>
            <div className={`${Styles.content} content`}>
                <div className={Styles.sub_title}>
                    <img src={"https://skilllane.s3-ap-southeast-1.amazonaws.com/tu/icon-tuxsa.png"} />
                     หลักสูตรปริญญาโทออนไลน์
               </div>
                <div className={Styles.title}>
                    <h1>Design Thinking กระบวนการคิดเชิงออกแบบ</h1>
                </div>
                <div className={Styles.anchor}>
                    <a href="/academic/tuxsa/businessinnovation">
                        ปริญญาโทบริหารธุรกิจ สาขา Business Innovation
                    </a>
                </div>
                <div className={Styles.container_reviews}>
                    <div className={Styles.reviews}>
                        <Starts review={4.7} />
                        <h3>4.7 (455 รีวิว)</h3>
                    </div>
                    <button className={Styles.share}>
                        <span>
                            แชร์คอร์สนี้
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Comp