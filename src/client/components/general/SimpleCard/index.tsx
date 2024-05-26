import { PropsWithChildren } from "react"
import { Props } from "./interfaces"

/**
 * Basic reusable card wrapper to keep shadow and border radius consistent and defined in one place.
 * Styles can be extended/adjusted via the className prop when needed.
 */

export const SimpleCard = ({ children, className }: PropsWithChildren<Props>): JSX.Element => {
    return (
        <div className={`p-4 rounded-2xl drop-shadow-md bg-white ${className}`}>
            {children}
        </div>
    )
}