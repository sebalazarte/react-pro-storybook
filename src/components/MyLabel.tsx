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

export const MyLabel = ({
    label = 'no label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor,
    ...props }: MyLabelProps) => {
    return (
        <span
            className={['label', {size}, `text-${color}`].join(' ')}
            style={{ color: fontColor }}
            {...props}
        >
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}

export default MyLabel;