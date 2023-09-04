export interface IValidatedQData {
  QP1: string;
  QP2: string;
  QP3: string;
  QP4: string;
  QTABLE1: { label: string; value: string }[];
  QTABLE2: { label: string; value: string }[];
  QOPTIONS: { label: string; value: string }[];
  ANSWER: { label: string; value: string }[];
  QId: string;
  QComponent_Order: string[];
  usersSeen: string[];
}
