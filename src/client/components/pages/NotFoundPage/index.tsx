import { Button } from "../../general/Button"
import { PageLayout } from "../../layout/PageLayout"

export const NotFound = (): JSX.Element => {

    return (
        <PageLayout>
            <div className="flex flex-col justify-center items-center gap-4 h-full">
                <h1 className="text-4xl font-bold font-roboto">Page not found</h1>
                <Button isLink={true} linkHref="/" text={{ label: "Back to home" }} className="w-fit" />
            </div>
        </PageLayout >
    )

}