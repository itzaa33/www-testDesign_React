import React from 'react'
import Styles from './index.module.css'
import { ReactSVG } from 'react-svg'

// image
import IconStar from '../../../../Images/svg/star.svg'
import IconChat from '../../../../Images/svg/chat.svg'
import IconPlay from '../../../../Images/svg/play.svg'

type Props = {
    name: string;
    image: string;
    rating: number;
    review: number;
    course: number;
    detail: string[];
}

const Compe: React.FC<Props> = (
    {
        name,
        image,
        rating,
        review,
        course,
        detail
    }
) =>
{
    return (
        <div className={Styles.container}>
            <div className={Styles.head}>
                <img src={image} />
                <div className={Styles.title}>
                    <div className={Styles.name}>
                        {name}
                    </div>
                    <div className={Styles.rating}>
                        <ReactSVG src={IconStar} className={Styles.icon} />
                        <span>
                            {rating}คะแนนเฉลี่ย
                        </span>
                    </div>
                    <div className={Styles.rating}>
                        <ReactSVG src={IconChat} className={Styles.icon} />
                        <span>
                            {new Intl.NumberFormat().format(review)} รีวิว
                        </span>
                    </div>
                    <div className={Styles.rating}>
                        <ReactSVG src={IconPlay} className={Styles.icon} />
                        <span>
                            {new Intl.NumberFormat().format(course)} คอร์ส
                        </span>
                    </div>
                </div>
            </div>
            <ul className={Styles.detail}>
                {
                    (!!detail && detail.length > 0) &&
                    detail.map((item, index) =>
                    {
                        return (
                            <li key={index}>
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Compe;
