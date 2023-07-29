import { Component } from 'react';

import styles from './header.module.css';



/* eslint-disable-next-line */
export interface HeaderProps {}

export class Header extends Component<HeaderProps> {
  override render() {
    return (
      <div className={styles['container']}>
        <p>Welcome to Header!</p>
      </div>
    );
  }
}

export default Header;
