export class InputValidator {
  validateAdminMCQData(qData: any, collectionTitle: string, sqId?: string): any {
    const QOPTIONS = this.convertStringToJson(qData.qOptions);
    const QTABLE1 = this.convertStringToJson(qData.qTable1);
    const QTABLE2 = this.convertStringToJson(qData.qTable2);
    const ANSWER = this.convertStringToJson(qData.qAnswer);

    const Qid = `${collectionTitle}-${Math.floor(Math.random() * 10000).toString()}`;

    const validatedQData = {
      QP1: qData.qp1,
      QP2: qData.qp2,
      QP3: qData.qp3,
      QP4: qData.qp4,
      QTABLE1: QTABLE1,
      QTABLE2: QTABLE2,
      QOPTIONS: QOPTIONS,
      ANSWER: ANSWER,
      QId: Qid,
      QComponent_Order: qData.qComponentOrder,
      usersSeen: [],
      sqId: sqId ? sqId : null,
    };

    return validatedQData;
  }

  validateAdminSQData(qData: any, collectionTitle: string): any {
    const Qid = `${collectionTitle}-${Math.floor(Math.random() * 10000).toString()}`;

    const sqTable1 = this.convertStringToJson(qData.sqTable1);
    const sqTable2 = this.convertStringToJson(qData.sqTable2);

    const validateAdminSQData = {
      sqId: Qid,
      sqTitle: qData.sqTitle,
      sqDesc1: qData.sqDesc1,
      sqDesc2: qData.sqDesc2,
      sqDesc3: qData.sqDesc3,
      sqBoxComponentOrder: qData.sqBoxComponentOrder,
      sqTable1: sqTable1,
      sqTable2: sqTable2,
      usersSeen: "",
    };

    return validateAdminSQData;
  }

  private convertStringToJson(str: string): string {
    const lines = str?.split("\n");
    const result = lines?.map((line) => {
      const [label, value] = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);
      return { label: label?.trim(), value: value?.trim() };
    });
    return JSON.stringify(result);
  }
}
