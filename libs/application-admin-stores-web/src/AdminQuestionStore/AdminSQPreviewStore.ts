import { injectable } from "inversify";

@injectable()
export class AdminSQPreviewStore {
  private questionPreview: any;
  mcqs: any[];

  constructor() {
    this.questionPreview = {};
    this.mcqs = [];
  }

  setQuestionPreview(qData: any) {
    const sqTable1 = this.parseJsonData(qData?.sqTable1);
    const sqTable2 = this.parseJsonData(qData?.sqTable2);

    this.questionPreview = {
      sqTitle: qData.sqTitle,
      sqDesc1: qData.sqDesc1,
      sqDesc2: qData.sqDesc2,
      sqDesc3: qData.sqDesc3,
      sqBoxComponentOrder: qData.sqBoxComponentOrder,
      sqTable1: sqTable1,
      sqTable2: sqTable2,
      sqType: qData.sqType,
      sqId: qData.sqId,
    };
  }

  private parseJsonData(data: string): any {
    try {
      if (!data) {
        return null;
      }
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error parsing JSON data: ${data}`, error);
      return null;
    }
  }

  addMCQ(mcq: any) {
    this.mcqs.push(mcq);
  }

  getSqid() {
    return this.questionPreview.sqId ? this.questionPreview.sqId : null;
  }

  getQPreview() {
    return this.questionPreview;
  }
}
