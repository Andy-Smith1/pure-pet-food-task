import { Props } from "./interfaces"

export const DiscountLabel = ({
    labelText,
    className
}: Props): JSX.Element => {



    return (
        <span className={className}>
            <div className="relative">
                <span className="text-white absolute w-max left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-sm tracking-normal">{labelText}</span>
                <svg role="presentation" height="25.7" viewBox="0 0 72.53 27.7" width="72.53" xmlns="http://www.w3.org/2000/svg">
                    <path d="m9582.26 10718.5 54.78.1a4.238 4.238 0 0 1 4.23 4.2l.03 19.3a4.2 4.2 0 0 1 -4.2 4.2l-54.79-.2c-3.69 0-13.5-9.3-13.51-14.2-.01-5 10.25-13.4 13.46-13.4z" fill="#da5f45" fill-rule="evenodd" transform="translate(-9568.78 -10718.5)" />
                </svg>
            </div>
        </span>
    )
}
