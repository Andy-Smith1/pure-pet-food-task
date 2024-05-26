export interface Props {
    labelText: string;
    labelColor?: LabelColor;
    className?: string;
}

export type LabelColor = "teal" | "purple" | "red" | "yellow" | "green";