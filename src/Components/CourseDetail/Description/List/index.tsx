import React from 'react'
import Styled from 'styled-components'
import Styles from './index.module.css'

type Props = {
    title: string;
    example: boolean;
    duration: string;
}

const Comp: React.FC<Props> = (
    {
        title,
        example,
        duration
    }
) =>
{

    const Detail = Styled.div`
        height:35px;

        display:flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: -7px;
        right:0;
    `;

    const Example = Styled.span`
        padding: .2em .6em .3em;
        margin-right:8px;

        font-size: 75%;

        border-radius: .25em;

        letter-spacing:0.3px;
        line-height:1;

        text-align:center;
        white-space:nowrap;
        vertical-align:baseline;

        color:#fff;
        background-color:#5cb85c;
    `;

    const Duration = Styled.div`
        width: 71px;

        color:inherit;
        text-align:right;
    `;

    const Icon = Styled.span`
        margin-right:8px;
    `;

    const SVG = Styled.svg`
        width:1.4em;
        height:1.4em;

        display:flex;

        margin: auto;

        fill:${props => props.example ? '#5C7635' : '#676767'};
    `;

    const List = Styled.div`
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;

        position: relative;

        padding-right: 185px;
        margin:8px;

        color:${props => props.example ? '#5C7635' : '#676767'};

        overflow: hidden;

        cursor: ${props => props.example ? 'pointer' : 'default'};

        &:hover{
            color:${props => props.example ? '#04542b' : '#676767'};

            ${Detail} {
                color: ${props => props.example ? '#04542b' : '#676767'};
            }

            ${SVG} {
                fill: ${props => props.example ? '#04542b' : '#676767'};
            }
        }
    `;

    return (
        <List example={example}>
            {title}
            <Detail >
                {
                    example &&
                    <Example example={example}>ดูตัวอย่างฟรี</Example>
                }
                <Icon>
                    <SVG
                        xmlns={"http://www.w3.org/2000/svg"}
                        example={example}
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </SVG>
                </Icon>
                <Duration example={example}>
                    {duration}
                </Duration>
            </Detail>
        </List>
    )
}

export default Comp