import React from 'react'
import Styles from './index.module.css'
import { List, Style } from './type'

type Props =
    {
        price: number;
        textButton: string;
        lists: List[];

        style: Style
    }

const Comp: React.FC<Props> = (
    {
        price,
        textButton,
        lists,
        style
    }
) =>
{
    const {
        borderColor,
        lineColor,
        button
    } = style

    return (
        <div style={{borderColor:`${borderColor}`}}>
            <div className={Styles.line} />
            <div>
                1500 บาท
            </div>
            <div>
                <button>ชำระเงินเรียนไม่เก็บหน่วยกิต</button>
            </div>
            <div>
                {
                    (!!lists && lists.length > 0) &&
                    lists.map((item, index) =>
                    {
                        if (item.achieve)
                        {
                            return (
                                <div key={index}>
                                    {/* <img src={} /> */}
                                    <p>{item.description}</p>
                                </div>
                            )
                        }
                        else
                        {
                            return (
                                <div key={index}>
                                    {/* <img src={} /> */}
                                    <p>{item.description}</p>
                                </div>
                            )
                        }
                    })
                }
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Comp