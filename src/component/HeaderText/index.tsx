import React from 'react';
import {styles} from './styles';
import {Heading} from '../Heading';

export default function HeaderText({title}) {
  return <Heading type={2} title={title} style={styles.headerText} />;
}
