import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select' },
        size: { control: 'select' },
        fontColor: { control: 'color' }
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
    label: 'Ejemplo',
    size: 'h1',
    allCaps: false
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    label: 'Solo mayuscula',
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Color secundario',
    size: 'normal',
    color: 'secondary'
}


export const Terceary = Template.bind({});
Terceary.args = {
    label: 'Color ternario',
    size: 'normal',
    color: 'tertiary'
}

export const FontColor = Template.bind({});
FontColor.args = {
    label: 'Color personalizado',
    size: 'normal',
    fontColor: '#5517ac'
}


