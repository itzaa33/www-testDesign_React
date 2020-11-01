import React, { useState } from 'react'
import Styles from './index.module.css'
import Description from './Description'
import Payment from './Payment'
import Chat from './Chat'
import Review from './Review'
import CourseSliderBar from './CourseSliderBar'

const Comp = () =>
{

    const [state, setState] = useState<number>(1)

    return (
        <div className={Styles.container}>
            <div className={Styles.container_content}>
                <ul className={Styles.list_tap}>
                    <li
                        className={state === 1 ? Styles.active : ''}
                        onClick={() => { setState(1) }}
                    >
                        <span>รายละเอียด</span>
                    </li>
                    <li
                        className={state === 2 ? `${Styles.active} ${Styles.render_desktop}` : Styles.render_desktop}
                        onClick={() => { setState(2) }}
                    >
                        <span>วิธีการชำระเงิน</span>
                    </li>
                    <li
                        className={state === 3 ? `${Styles.active} ${Styles.render_desktop}` : Styles.render_desktop}
                        onClick={() => { setState(3) }}
                    >
                        <span>ห้องสนทนา</span>
                    </li>
                    <li
                        className={state === 4 ? `${Styles.active} ${Styles.render_mobile}` : Styles.render_mobile}
                        onClick={() => { setState(4) }}
                    >
                        <span>ผู้สอน</span>
                    </li>
                    <li
                        className={state === 5 ? Styles.active : ''}
                        onClick={() => { setState(5) }}
                    >
                        <span>รีวิว</span>
                    </li>
                </ul>

                <div className={Styles.content_tap}>
                    {
                        (state === 1) &&
                        <Description />
                    }

                    {
                        (state === 2) &&
                        <Payment />
                    }

                    {
                        (state === 3) &&
                        <Chat />
                    }

                    {
                        (state === 4) &&
                        <Review />
                    }
                </div>
            </div>
            <div className={`${Styles.render_desktop} ${Styles.container_slidebar}`}>
                <CourseSliderBar />
            </div>
        </div>
    )
}

export default Comp