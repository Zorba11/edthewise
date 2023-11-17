export enum EQuizStatus {
  ONGOING = "ongoing",
  COMPLETED = "completed",
  NOT_STARTED = "not_started",
}

export class Quiz {
  id: string;
  title: string;
  starttime: string;
  endtime: string;
  score: number;
  duration: number;
  questions?: string;
  status: EQuizStatus;
  username: string;
}

export class Question {
  id: number;
  description: string;
  options: string[]; //e.g. ["option1", "option2", "option3", "option4"]
  answer: string; //e.g. "option1"
}
