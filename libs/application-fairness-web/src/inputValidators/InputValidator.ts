import { IValidatedQData } from "@edthewise/foundation-communication-admin";

export class InputValidator {
  validateAdminQData(qData: any, collectionTitle: string): any {
    const QOPTIONS = this.convertStringToJson(qData.qOptions);
    const QTABLE1 = this.convertStringToJson(qData.qTable1);
    const QTABLE2 = this.convertStringToJson(qData.qTable2);
    const ANSWER = this.convertStringToJson(qData.qAnswer);

    const Qid = `{Date.now().toPrecision}-${Math.floor(Math.random() * 10000)}`;

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
    };

    return validatedQData;
  }

  private convertStringToJson(str: string): string {
    const lines = str?.split("\n");
    const result = lines?.map((line) => {
      const [label, value] = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);
      return { label: label?.trim(), value: value?.trim() };
    });
    return JSON.stringify(result);
  }

  // private parseToQTable(qTableData: string) {
  //   if (!qTableData || typeof qTableData !== "string") {
  //     return [];
  //   }

  //   const inputArray = qTableData.split(",");

  //   const outputArray = [];

  //   for (let i = 0; i < inputArray.length; i += 2) {
  //     const label = inputArray[i]?.trim();
  //     const value = inputArray[i + 1]?.trim();

  //     if (!label || !value) break;
  //     outputArray.push({ label, value });
  //   }

  //   return outputArray.map((item) => ({
  //     label: item.label,
  //     value: String(item.value),
  //   }));
  // }
}
