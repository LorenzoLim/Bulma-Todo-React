import React from 'react';
import { Level, Progress, Heading, Title } from 'reactbulma';

const Header = ({ totalTasks, title}) => (
  <div>
    <Progress danger value={ totalTasks } max="10">30%</Progress>
    <Level>
      <Level.Item hasTextCentered>
        <div>
          <Heading>{ title }</Heading>
          <Title>{ totalTasks }</Title>
        </div>
      </Level.Item>
    </Level>
  </div>
)

export default Header;
