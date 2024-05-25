export interface Props {
    text: {
        label: string;
        ariaLabel?: string;
    };
    isLink?: boolean;
    linkHref?: string;
    clickHandler?: () => void;
    buttonStyle?: 'primary' | 'secondary' | 'tertiary';
    className?: string;
}