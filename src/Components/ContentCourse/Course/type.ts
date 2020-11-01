
export type List =
{
    description: string;
    achieve: boolean;
}

export type Style =
{
    borderColor: string;
    lineColor: string;
    button:
    {
        normal: {
            colorText: string;
            colorBorder: string;
            colorBackground: string;
        }

        hover: {
            colorText: string;
            colorBorder: string;
            colorBackground: string;
        }
    }
}