import { PropsWithChildren } from "react"
import { LayoutContainer } from "./LayoutContainer"
import { Header } from "../general/Header"

export const PageLayout = (props: PropsWithChildren): JSX.Element => {

    const { children } = props

    return (
        <>
            <Header headingText="Developer Assessment" logoUrl="/assets/logo.png" />
            <LayoutContainer>
                {children}
            </LayoutContainer>
        </>
    )
}