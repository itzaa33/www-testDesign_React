import React from 'react'
import Styled from 'styled-components'
import { Button } from './type'

type Props = {
    text: string;
    style: Button;
}

const Comp: React.FC<Props> = (
    {
        text,
        style
    }
) =>
{
    const Button = Styled.button`

        width: 100%;
        height:50%;

        display: inline-block;
        padding:12px;

        font-size: 18px;
        font-family: 'thaisans_neueregular',sans-serif;

        border-width:1px;
        border-radius:4px;

        overflow:visible;

        line-height:126%;

        cursor:pointer;

        color: ${props => props.normal.colorText};
        border-color: ${props => props.normal.colorBorder};
        background-color: ${props => props.normal.colorBackground};

        &:hover {
            color: ${props => props.hover.colorText};
            border-color: ${props => props.hover.colorBorder};
            background-color: ${props => props.hover.colorBackground};
        }
    `;

    const Span = Styled.span `
        font-size: 1.33em;
    `;

    return (
        <Button
            normal={style.normal}
            hover={style.hover}
        >
            <Span>{text}</Span>
        </Button>
    )
}

export default Comp