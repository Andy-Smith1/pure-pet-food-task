import { Props } from "./interfaces"

export const Image = ({
    altText = "",
    imgSrc,
    className
}: Props): JSX.Element => {


    return (
        <img alt={altText} src={imgSrc} className={className} />
    )

}