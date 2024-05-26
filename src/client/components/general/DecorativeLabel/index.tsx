import { Props } from "./interfaces"

export const DecorativeLabel = ({ labelText, labelColor = "teal", className }: Props): JSX.Element => {

    const generatedClassNames = {
        teal: "bg-teal-600",
        purple: "bg-pure-purple",
        red: "bg-red-600",
        yellow: "bg-pure-yellow text-pure-green",
        green: "bg-pure-green",
    };

    return (
        <span className={`font-roboto font-bold text-sm text-white rounded py-1 px-2 ${generatedClassNames[labelColor]} ${className}`}>{labelText.toUpperCase()}</span>
    )

}