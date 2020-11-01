import React from 'react'
import Styles from './index.module.css'
import { ReactSVG } from 'react-svg'
import { List, Style } from './type'
import Button from './Button'

// svg
import IconTrue from '../../../Images/svg/true.svg'
import IconFalse from '../../../Images/svg/false.svg'

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
        <div className={Styles.container} style={{ borderColor: `${borderColor}` }}>
            <div className={Styles.line} style={{ backgroundColor: `${lineColor}` }} />
            <div className={Styles.container_content}>
                <div className={Styles.head}>
                    <div className={Styles.price}>
                        <span>
                            {new Intl.NumberFormat().format(price)} บาท
                       </span>
                    </div>
                    <Button
                        text={textButton}
                        style={button}
                    />
                </div>
                <div className={Styles.lists}>
                    {
                        (!!lists && lists.length > 0) &&
                        lists.map((item, index) =>
                        {
                            if (item.achieve)
                            {
                                return (
                                    <div key={index} className={Styles.list}>
                                        <ReactSVG src={IconTrue} className={Styles.icon} style={{fill:"#00532A"}}/>
                                        <p>{item.description}</p>
                                    </div>
                                )
                            }
                            else
                            {
                                return (
                                    <div key={index} className={Styles.list}>
                                        <ReactSVG src={IconFalse} className={Styles.icon} style={{fill:"#676767"}}/>
                                        <p>{item.description}</p>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Comp