import React, { useState } from 'react'
import Styles from './index.module.css'
import { ReactSVG } from 'react-svg'

import List from './List'

// image
import Icon from '../../../Images/svg/play.svg'

const Comp = () =>
{
    const [seeMore, setSeeMore] = useState<boolean>(false)

    return (
        <div className={Styles.container}>
            <div className={seeMore ? `${Styles.content} ${Styles.hide}` : Styles.content}>
                <p><b>นวัตกรรม (Innovation) เป็นสิ่งที่ทุกคนกำลังมองหา</b> เพราะไม่ว่าคุณจะเป็นพนักงานบริษัท ผู้บริหาร เจ้าของกิจการ หรือไม่ว่าจะทำสายอาชีพอะไรก็ตาม เราต่างอยากทำให้งานของเราออกมาดีขึ้น อยากทำงานให้น้อยแต่ได้ผลมาก และอยากสร้างผลงานที่สร้างผลกระทบที่ดีในวงกว้าง</p>
                <p>ด้วยเหตุนี้เอง Design Thinking หรือ กระบวนการคิดเชิงออกแบบ จึงกลายเป็นเรื่องที่รับความนิยมอย่างแพร่หลายทั่วโลก เพราะ Design Thinking คือกระบวนการที่มุ่งเน้นมนุษย์เป็นศูนย์กลาง เพื่อให้ได้มาซึ่งนวัตกรรมใหม่ และเป็นเครื่องมือที่จะช่วยให้คุณแก้ไขปัญหายากๆ อีกด้วย หากคุณเป็นคนที่ต้องคอยคิดสร้างผลิตภัณฑ์ใหม่ๆ ตลอดเวลา หรือต้องพบเจอกับปัญหาที่แก้ไขยากๆ Design Thinking จะช่วยเหลือคุยได้แน่นอน</p>
                <p>ในคอร์สนี้คุณจะได้เรียนรู้ขั้นตอนทั้งหมดของ Design Thinking อย่างละเอียด รวมถึงตัวอย่างการประยุกต์ใช้ Design Thinking ของบริษัทระดับโลกที่นำวิธีนี้ไปใช้ในการสร้างนวัตกรรมใหม่และแก้ไขปัญหาต่างๆ และสำคัญที่สุด คอร์สนี้จะสอนวิธีการนำ Design Thinking ไปใช้ในชีวิตจริงและชีวิตการงานของทุกคน&nbsp;</p>
                <p><b>สิ่งที่คุณจะได้เรียนรู้</b><br />- กระบวนการและขั้นตอนของ Design Thinking ทั้งหมด อย่างละเอียด<br />- วิธีการนำ Design Thinking ไปประยุกต์ใช้การงาน และการดำรงชีวิตประจำวัน<br />- ตัวอย่างการใช้ Design Thinking ขององค์กรชั้นนำ<br />- ความต่างของ Design Thinking เมื่อเทียบกับ Thinking อื่นๆ</p>
                <p>A 90-100<br />A- 85-89.99<br />B+ 80-84.99<br />B 75-79.99<br />B- 70-74.99<br />C+ 65-69.99<br />C 60-64.99<br />D 50-59.99<br />F 0-49.99</p>
            </div>
            <div className={Styles.see_more} onClick={() => setSeeMore(!seeMore)}>
                <h3>
                    {
                        !seeMore ?
                            "ซ่อน"
                            :
                            "อ่านทั้งหมด"
                    }
                </h3>
            </div>
            <div className={Styles.container_corese}>
                <h3>
                    เนื้อหาของคอร์สนี้
                </h3>
                <div className={Styles.lists}>
                    <div className={Styles.title}>
                        บทนำ
                    </div>
                    <List 
                        title={"แนะนำคอร์สออนไลน์"}
                        example={true}
                        duration={"00:54"}
                    />
                    <div className={Styles.title}>
                        ความสำคัญของ Design Thinking
                    </div>
                    <List 
                        title={"01. อะไรคือ Design Thinking?"}
                        example={true}
                        duration={"22:40"}
                    />
                     <List 
                        title={"02. ความแตกต่างของ Design Thinking กับกระบวนการคิดรูปแบบอื่น"}
                        example={true}
                        duration={"11:13"}
                    />
                      <List 
                        title={"03. ความเป็นมาของ Design Thinking"}
                        example={false}
                        duration={"07:31"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Comp