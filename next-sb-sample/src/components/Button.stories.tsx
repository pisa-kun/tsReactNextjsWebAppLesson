import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button} from './Button';

export default{
    title: 'Sample/HogeButton',
    component:Button,
} as ComponentMeta<typeof Button>

export const Template: ComponentStory<typeof Button> = (props) => {
    return <Button bgCol='#b33e5c' col={props.col} />
}