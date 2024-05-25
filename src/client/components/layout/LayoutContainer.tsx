import { PropsWithChildren } from "react"

export const LayoutContainer = (props: PropsWithChildren): JSX.Element => {

    const { children } = props;

    return (
        <main className="max-w-5xl mx-auto px-4 flex-grow">
            {children}
        </main>
    )
}