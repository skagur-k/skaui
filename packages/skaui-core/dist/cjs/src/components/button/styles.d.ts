import { ButtonProps } from './button.types';
interface btnClassProps {
    variant: ButtonProps['variant'];
    type: ButtonProps['type'];
    size: ButtonProps['size'];
    disabled: ButtonProps['disabled'];
    loading: ButtonProps['loading'];
    rounded: ButtonProps['rounded'];
}
export declare const useButtonClass: ({ variant, type, size, disabled, loading, rounded, }: btnClassProps) => string;
export {};
