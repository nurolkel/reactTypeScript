import React from 'react';

// Styles
import { Wrapper, Content } from './Grid.styles';

// Types

type Props = {
    header: string;
}

const Grid: React.FC<Props> = ({ header, children }) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>
            {children}
        </Content>
    </Wrapper>
);

// Don't need to check the Children Prop because it is part of React



export default Grid;