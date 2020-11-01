import React from 'react'
import Styles from './index.module.css'
import Card from './Card'

// data
import { CourseSliderBar } from '../../../_Data/CourseSliderBar.json'

function Compe()
{
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        <h3>
          ผู้สอน
            </h3>
      </div>
      <div className={Styles.container_card}>
        {
          (!!CourseSliderBar && CourseSliderBar.length > 0) &&
          CourseSliderBar.map((item, index) =>
          {
            const length = CourseSliderBar.length - 1
            return (
              <div className={(index < length) ? Styles.intermediate : ''}>
                <Card
                  key={index}
                  name={item.name}
                  image={item.image}
                  rating={item.rating}
                  review={item.review}
                  course={item.course}
                  detail={item.detail}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Compe;
