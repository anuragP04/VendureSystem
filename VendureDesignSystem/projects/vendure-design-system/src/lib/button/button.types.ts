export type ButtonProps = {
    label: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'filled' | 'outlined' | 'text';
    size?: 'small' | 'default';
    disabled?: boolean;
    className?: string;
    startIcon?: string | undefined;
    endIcon?: string | undefined;
    icon?: string | undefined;
    iconButton?: boolean;
}