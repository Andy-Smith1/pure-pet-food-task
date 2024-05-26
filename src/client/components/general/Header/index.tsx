import { Image } from "../Image"
import { Props } from "./interfaces"

export const Header = ({ headingText, logoUrl }: Props): JSX.Element => {
    return (
        <header className="flex justify-between content-center px-4 py-2 bg-pure-green">
            <a href="/">
                <Image imgSrc={logoUrl} className="h-16 max-w-fit" altText="Logo" />
            </a>
            <a className="block text-white text-l text-right self-center ml-4 no-underline hover:underline" href="/">{headingText}</a>
        </header>
    )
}