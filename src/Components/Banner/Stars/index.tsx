import React, { ReactElement } from 'react'
import Styles from './index.module.css'

type Props =
    {
        review: number;
    }

const Comp: React.FC<Props> = ({ review }) =>
{
    if (review <= 0)
    {
        return null
    }

    const srtValue = review.toString()
    const integer = parseInt(srtValue)
    const fraction = parseInt(srtValue.split('.')[1], 10)

    let array = []

    if (!!integer && integer > 0)
    {
        for (let i = 0; i < integer; i++)
        {
            const element = (
                <div key={i} className={Styles.icon}>
                    <img src="https://www.skilllane.com/assets/raty/star-filled-625a2874bb73bbd9bc05639104f21c4e5563a3a5f3b933180ff4be08adeb9aad.svg" />
                </div>
            )
            array.push(element)
        }
    }

    if (!!fraction && fraction > 0)
    {
        const element = (
            <div key={integer} className={Styles.icon}>
                <img
                    src="https://www.skilllane.com/assets/raty/star-filled-625a2874bb73bbd9bc05639104f21c4e5563a3a5f3b933180ff4be08adeb9aad.svg"
                    style={{ clipPath: `inset(0px ${fraction}px 0px 0px)` }}
                />
            </div>
        )
        array.push(element)
    }

    return (
        <div className={Styles.icon_container}>
            {
                array.length > 0 &&
                array.map( item => {
                    return item
                })
            }
        </div>
    )
}

export default Comp