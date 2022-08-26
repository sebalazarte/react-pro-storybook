import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/MyLabel',
    component: MyLabel
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/> 

export const Basic = Template.bind({});
Basic.args = {
    label: 'Ejemplo',
    size: 'h1'
}

export const AllCaps = Template.bind({});
export const Secondary = Template.bind({});


