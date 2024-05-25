import { Props } from "./interfaces";
import { Link } from "react-router-dom";


export const Button = ({
    isLink,
    clickHandler,
    className,
    text,
    linkHref = "/",
    buttonStyle = "primary"
}: Props): JSX.Element => {

    const { label, ariaLabel } = text;
    const ariaProps: Record<string, string> = ariaLabel ? { "aria-label": ariaLabel } : {};

    const generatedClassNames = {
        primary: "bg-pure-yellow text-pure-green",
        secondary: "bg-pure-purple text-pure-grey",
        tertiary: "bg-pure-green text-pure-grey",
    };

    return (
        isLink ?
            <Link to={linkHref} className={`py-2 px-4 font-bold rounded-lg no-underline hover:shadow-lg ${generatedClassNames[buttonStyle]} ${className}`}>{label}</Link>
            :
            <button onClick={clickHandler} className={`py-2 px-4 font-bold rounded-lg hover:shadow-lg ${generatedClassNames[buttonStyle]} ${className}`} {...ariaProps}>{label}</button>
    )

}