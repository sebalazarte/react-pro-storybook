/// <reference types="react" />
import './MyLabel.css';
export interface MyLabelProps {
    /**
     * text that is shown inside the label
     */
    label?: string;
    /**
     * is used to select the size of the label
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalize the text
     */
    allCaps?: boolean;
    /**
     * Set the color of label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Custom color to use
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, ...props }: MyLabelProps) => JSX.Element;
