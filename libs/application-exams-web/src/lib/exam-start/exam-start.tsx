import { Component } from 'react';

import styles from './exam-start.module.css';

/* eslint-disable-next-line */
export interface ExamStartProps {}

export class ExamStart extends Component<ExamStartProps> {
  override render() {
    return (
      <div className={styles['container']}>
        <p>Welcome to ExamStart!</p>
      </div>
    );
  }
}

export default ExamStart;
