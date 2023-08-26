export const SubjectList: string[] = [
  "Financial Management (FM)",
  "Business And Technology (BT)",
  "Management Accounting (MA)",
  "Corporate and Law (LW)",
  "Performance Management (PM)",
  "Taxation (TX)",
  "Financial Reporting (FR)",
  "Audit and Assurance (AA)",
  "Strategic Business Reporting (SBR)",
  "Strategic Business Leader (SBL)",
  "Advanced Financial Management (AFM)",
  "Advanced Performance Management (APM)",
  "Advanced Taxation (ATX)",
  "Advanced Audit and Assurance (AAA)",
];

/***
 * MCQ: Multiple Choice Questions
 * SQ: Scenario Questions
 * LQ: Long Questions
 */

export const FMQuestions = {
  SubjectTitle: "Financial Management (FM)",
  QuestionsOrder: ["MCQ", "SQ", "LQ"],
  QuestionsPool: [
    {
      MCQ: [
        {
          Qid: "1",
          QComponentOrder: ["QP1", "QTable", "QP2", "QPBold", "OP"],
          QP1: `The owners of a private company wish to dispose 
          of their entire investment in the company.
          The company has an issued share capital of $1m of $0·50 nominal value ordinary shares.
          The owners have made the following valuations of the company's assets and liabilities.`,
          QTable: [
            { label: "Non-current assets (book value)", value: "$30m" },
            { label: "Current assets", value: "$18m" },
            { label: "Non-current liabilities", value: "$12m" },
            { label: "Current liabilities", value: "$10m" },
          ],
          QP2: `The net realisable value of the non-current assets exceeds their book value by $4m. The current assets include $2m
          of accounts receivable which are thought to be irrecoverable.`,
          QP3: `What is the minimum price per share which the owners should accept for the company ?`,
          Options: [
            { label: "A", value: "$14" },
            { label: "B", value: "$25" },
            { label: "C", value: "$28" },
            { label: "D", value: "$13" },
          ],
          Answer: [
            {
              label: "A",
              desc: `They should not accept less than NRV: (30m + 18m + 4m – 2m – 12m – 10m)/2m = $14 per share`,
            },
          ],
        },
        {
          Qid: "FM-2",
          QComponentOrder: ["QP1", "OP"],
          QP1: `Which of the following financial instruments will NOT be traded on a money market?`,
          Options: [
            { label: "A", value: "Commercial paper" },
            { label: "B", value: "Convertible loan notes" },
            { label: "C", value: "Treasury bills" },
            { label: "D", value: "Certificates of deposit" },
          ],
          Answer: [
            { label: "B", desc: `Convertible loan notes are long-term finance and are not traded on a money market.` },
          ],
        },
        {
          Qid: "FM-3",
          QComponentOrder: ["QP1", "QP2", "OP"],
          QP1: `Andrew Co is a large listed company financed by both equity and debt`,
          QP2: `In which of the following areas of financial management will the impact of working capital management be
          smallest?`,
          Options: [
            { label: "A", value: "Liquidity Management" },
            { label: "B", value: "Interest rate management " },
          ],
          Answer: [
            {
              label: "C",
              desc: `Basis risk is the possibility that movements in the currency futures price and spot price will be different. It is one of the reasons
              for an imperfect currency futures hedge.`,
            },
          ],
        },
        {
          Qid: "FM-4",
          QComponentOrder: ["QP", "OP"],
          QP: "Which of the following are descriptions of basis risk?",
          Options: [
            { label: "A", value: "1 only" },
            { label: "B", value: "1 and 3" },
            { label: "C", value: "2 and 4 only" },
            { label: "D", value: "2, 3 and 4" },
          ],
          Answer: [
            {
              label: "C",
              desc: `Basis risk is the possibility that movements in the currency futures price and spot price will be different. It is one of the reasons
                for an imperfect currency futures hedge.`,
            },
          ],
        },
        {
          Qid: "FM-5",
          QComponentOrder: ["QP", "QTable", "OP"],
          QP: "Crag Co has sales of $200m per year and the gross profit margin is 40%. Finished goods inventory days vary throughout the year within the following range:\n\nMaximum Minimum\nInventory (days) 120 90\nAll purchases and sales are made on a cash basis and no inventory of raw materials or work in progress is carried.\nCrag Co intends to finance permanent current assets with equity and fluctuating current assets with its overdraft.\nIn relation to finished goods inventory and assuming a 360-day year, how much finance will be needed from the overdraft?",
          QTable: [
            { label: "Maximum Inventory (days)", value: "120" },
            { label: "Minimum Inventory (days)", value: "90" },
          ],
          Options: [
            { label: "A", value: "$10m" },
            { label: "B", value: "$17m" },
            { label: "C", value: "$30m" },
            { label: "D", value: "$40m" },
          ],
          Answer: [
            {
              label: "A",
              desc: `$200m x 30/360 x 0·6 = $10m`,
            },
          ],
        },
        {
          Qid: "FM-6",
          QComponentOrder: ["QP", "Options"],
          QP: "In relation to an irredeemable security paying a fixed rate of interest, which of the following statements is correct?",
          Options: [
            {
              label: "A",
              value:
                "As risk rises, the market value of the security will fall to ensure that investors receive an increased yield",
            },
            {
              label: "B",
              value:
                "As risk rises, the market value of the security will fall to ensure that investors receive a reduced yield",
            },
            {
              label: "C",
              value:
                "As risk rises, the market value of the security will rise to ensure that investors receive an increased yield",
            },
            {
              label: "D",
              value:
                "As risk rises, the market value of the security will rise to ensure that investors receive a reduced yield",
            },
          ],
          Answer: [
            {
              label: "A",
              desc: "As risk rises, the market value of the security will fall to ensure that investors receive an increased yield",
            },
          ],
        },
        {
          Qid: "FM-7",
          QComponentOrder: ["QP", "Options"],
          QP: "Pop Co is switching from using mainly long-term fixed rate finance to fund its working capital to using mainly short-term variable rate finance.\nWhich of the following statements about the change in Pop Co’s working capital financing policy is true?",
          Options: [
            { label: "A", value: "Finance costs will increase" },
            { label: "B", value: "Re-financing risk will increase" },
            { label: "C", value: "Interest rate risk will decrease" },
            { label: "D", value: "Overcapitalisation risk will decrease" },
          ],
          Answer: [
            {
              label: "B",
              desc: "Pop Co is moving to an aggressive funding strategy which will increase refinancing risk.",
            },
          ],
        },
        {
          Qid: "FM-8",
          QComponentOrder: ["QP", "Options"],
          QP: "In relation to an operating lease, which of the following statements is correct?",
          Options: [
            { label: "A", value: "All the risks and rewards of ownership transfer to the lessee" },
            {
              label: "B",
              value: "The asset and lease obligation will be recorded in the statement of financial position",
            },
            {
              label: "C",
              value: "The lease period will cover almost all of the leased asset’s useful economic life",
            },
            { label: "D", value: "The lessor will be responsible for repairs and maintenance of the leased asset" },
          ],
          Answer: [
            {
              label: "D",
              desc: "Under an operating lease, the lessor is responsible for repairs and maintenance of the leased asset.",
            },
          ],
        },
        {
          Qid: "FM-9",
          QComponentOrder: ["QP", "Options"],
          QP: "A company has annual after-tax operating cash flows of $2 million per year which are expected to continue in perpetuity. The company has a cost of equity of 10%, a before-tax cost of debt of 5% and an after-tax weighted average cost of capital of 8% per year. Corporation tax is 20%.\nWhat is the theoretical value of the company?",
          Options: [
            { label: "A", value: "$20m" },
            { label: "B", value: "$40m" },
            { label: "C", value: "$50m" },
            { label: "D", value: "$25m" },
          ],
          Answer: [
            {
              label: "D",
              desc: "Theoretical value = 2m/0·08 = $25m",
            },
          ],
        },
        {
          Qid: "FM-10",
          QComponentOrder: ["QP", "Options"],
          QP: "Which of the following would you expect to be the responsibility of financial management?",
          Options: [
            { label: "A", value: "Producing annual accounts" },
            { label: "B", value: "Producing monthly management accounts" },
            { label: "C", value: "Advising on investment in non-current assets" },
            { label: "D", value: "Deciding pay rates for staff" },
          ],
          Answer: [
            {
              label: "C",
              desc: "Advising on investments in non-current assets is a key role of financial management.",
            },
          ],
        },
        {
          Qid: "FM-11",
          QComponentOrder: ["QP", "Options"],
          QP: "Lane Co has in issue 3% convertible loan notes which are redeemable in five years’ time at their nominal value of $100 per loan note. Alternatively, each loan note can be converted in five years’ time into 25 Lane Co ordinary shares. The current share price of Lane Co is $3·60 per share and future share price growth is expected to be 5% per year. The before-tax cost of debt of these loan notes is 10% and corporation tax is 30%. What is the current market value of a Lane Co convertible loan note?",
          Options: [
            { label: "A", value: "$82·71" },
            { label: "B", value: "$73·47" },
            { label: "C", value: "$67·26" },
            { label: "D", value: "$94·20" },
          ],
          Answer: [
            {
              label: "A",
              desc: `Conversion value = 3·60 x 1·055 x 25 = $114·87.
                Discounting at 10%, loan note value = (3 x 3·791) + (114·87 x 0·621) = $82·71`,
            },
          ],
        },
        {
          Qid: "FM-12",
          QComponentOrder: ["QP1", "QP2", "QP3", "QTable", "Options"],
          QP1: "Country X uses the dollar as its currency and country Y uses the dinar.",
          QP2: "Country X’s expected inflation rate is 5% per year, compared to 2% per year in country Y. Country Y’s nominal interest rate is 4% per year and the current spot exchange rate between the two countries is 1·5000 dinar per $1.",
          QP3: "According to the four-way equivalence model, which of the following statements is/are true?",
          QTable: [
            { label: "(1)", value: "Country X’s nominal interest rate should be 7·06% per year" },
            { label: "(2)", value: "The future (expected) spot rate after one year should be 1·4571 dinar per $1" },
            { label: "(3)", value: "Country X’s real interest rate should be higher than that of country Y" },
          ],
          Options: [
            { label: "A", value: "1 only" },
            { label: "B", value: "1 and 2 only" },
            { label: "C", value: "2 and 3 only" },
          ],
          Answer: [
            {
              label: "",
              desc: "",
            },
          ],
        },
        {
          Qid: "FM-13",
          QComponentOrder: ["QP1", "QTable", "Options"],
          QP1: "Which of the following government actions would lead to an increase in aggregate demand?",
          QTable: [
            { label: "(1)", value: "Increasing taxation and keeping government expenditure the same" },
            { label: "(2)", value: "Decreasing taxation and increasing government expenditure" },
            { label: "(3)", value: "Decreasing money supply" },
            { label: "(4)", value: "Decreasing interest rates" },
          ],
          Options: [
            { label: "A", value: "1 only" },
            { label: "B", value: "1 and 3" },
            { label: "C", value: "2 and 4 only" },
            { label: "D", value: "2, 3 and 4" },
          ],
          Answer: [
            {
              label: "",
              desc: "",
            },
          ],
        },
        {
          Qid: "FM-14",
          QComponentOrder: ["QP1", "QTable1", "QP2", "QTable2", "Options"],
          QP1: `Peach Co’s latest results are as follows:`,
          QTable1: [
            { label: "Profit before interest and taxation", value: "$2,500" },
            { label: `Profit before taxation`, value: `$2,000` },
            { label: `Profit after tax`, value: `$1,400` },
          ],
          QP2: `In addition, extracts from its latest statement of financial position are as follows: `,
          QTable2: [
            {
              label: `Equity`,
              value: `$10,000`,
            },
            {
              label: `Non-current liabilities`,
              value: `$2,500`,
            },
          ],
          QP3: `What is Peach Co’s return on capital employed (ROCE)?`,
          Options: [
            { label: "A", value: "14%" },
            { label: "B", value: "18%" },
            { label: "C", value: "20%" },
            { label: "D", value: "25%" },
          ],
          Answer: [
            {
              label: "C",
              desc: "Operating profit/(D + E) = 100 x 2,500/(10,000 + 2,500) = 20%",
            },
          ],
        },
        {
          Qid: "FM-15",
          QComponentOrder: ["QP1", "Options"],
          QP1: "Drumlin Co has $5m of $0·50 nominal value ordinary shares in issue. It recently announced a 1 for 4 rights issue at $6 per share. Its share price on the announcement of the rights issue was $8 per share.\nWhat is the theoretical value of a right per existing share?",
          Options: [
            { label: "A", value: "$1·60" },
            { label: "B", value: "$0·40" },
            { label: "C", value: "$0·50" },
            { label: "D", value: "$1·50" },
          ],
          Answer: [
            { label: "B", desc: "Value of a right = ((5m x $8 + 1·25m x $6)/6·25 m – $6)/4 shares = $0·4 per share" },
          ],
        },
      ],
      SQ: [
        {
          SQid: "SQ-1",
          SQDesc: `The following scenario relates to questions 16 to 20`,
          ScenarioComponentOrder: ["QSP1", "Questions"],
          QSP1: `Herd Co is based in a country whose currency is the dollar ($). The company expects to receive €1,500,000 in six
          months’ time from Find Co, a foreign customer. The finance director of Herd Co is concerned that the euro (€) may
          depreciate against the dollar before the foreign customer makes payment and she is looking at hedging the receipt.
          Herd Co has in issue loan notes with a total nominal value of $4 million which can be redeemed in 10 years’ time. The
          interest paid on the loan notes is at a variable rate linked to LIBOR. The finance director of Herd Co believes that interest
          rates may increase in the near future.
          The spot exchange rate is €1·543 per $1. The domestic short-term interest rate is 2% per year, while the foreign
          short-term interest rate is 5% per year.`,
          Questions: [
            {
              Qid: "FM-16",
              SQComponentOrder: ["QP1", "OP"],
              Options: [
                { label: "A", value: "€1·499 per $1" },
                { label: "B", value: "€1·520 per $1" },
                { label: "C", value: "€1·566 per $1" },
                { label: "D", value: "€1·588 per $1" },
              ],
              Answer: [{ label: "C", desc: "Forward rate = 1·543 x (1·025/1·01) = €1·566 per $1" }],
            },
            {
              Qid: "FM-17",
              SQComponentOrder: ["QP1", "OP"],
              QP1: "As regards the euro receipt, what is the primary nature of the risk faced by Herd Co?",
              Options: [
                { label: "A", value: "Transaction risk" },
                { label: "B", value: "Economic risk" },
                { label: "C", value: "Translation risk" },
                { label: "D", value: "Business risk" },
              ],
              Answer: [{ label: "A", desc: "The euro receipt is subject to transaction risk.s" }],
            },
            {
              Qid: "FM-18",
              SQComponentOrder: ["QP1", "OP"],
              QP1: "Which of the following hedging methods will NOT be suitable for hedging the euro receipt?",
              Options: [
                { label: "A", value: "Forward exchange contract" },
                { label: "B", value: "Money market hedge" },
                { label: "C", value: "Currency futures" },
                { label: "D", value: "Currency swap" },
              ],
              Answer: [
                { label: "D", desc: "A currency swap is not a suitable method for hedging a one-off transaction." },
              ],
            },
            {
              Qid: "FM-19",
              SQComponentOrder: ["QP1", "OP"],
              QP1: `Which of the following statements support the finance director’s belief that the euro will depreciate against the
              dollar?`,
              QTable: [
                { label: "(1)", value: " The dollar inflation rate is greater than the euro inflation rate" },
                { label: "(2)", value: "The dollar nominal interest rate is less than the euro nominal interest rate" },
              ],
              Options: [
                { label: "A", value: "1 only" },
                { label: "B", value: "2 only" },
                { label: "C", value: "Both 1 and 2" },
                { label: "D", value: "Neither 1 nor 2" },
              ],
              Answer: [
                {
                  label: "B",
                  value: `If the dollar nominal interest rate is less than the euro nominal interest rate, interest rate parity indicates that the euro will depreciate
                against the dollar.
                If the dollar inflation rate is less than the euro inflation rate, purchasing power parity indicates that the euro will appreciate against
                the dollar.`,
                },
                {
                  Qid: "FM-20",
                  SQComponentOrder: ["QP1", "OP"],
                  QP1: "As regards the interest rate risk faced by Herd Co, which of the following statements is correct?",
                  Options: [
                    {
                      label: "A",
                      value:
                        "In exchange for a premium, Herd Co could hedge its interest rate risk by buying interest rate options",
                    },
                    { label: "B", value: "Buying a floor will give Herd Co a hedge against interest rate increases" },
                    {
                      label: "C",
                      value:
                        "Herd Co can hedge its interest rate risk by buying interest rate futures now in order to sell them at a future date",
                    },
                    {
                      label: "D",
                      value:
                        "Taking out a variable rate overdraft will allow Herd Co to hedge the interest rate risk through matching",
                    },
                  ],
                  Answer: [
                    {
                      label: "A",
                      desc: "In exchange for a premium, Herd Co could hedge its interest rate risk by buying interest rate options is correct.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          SQid: "SQ-2",
          SQDesc: `The following scenario relates to questions 21 to 25`,
          ScenarioComponentOrder: ["QSP1", "QScTable", "QSP2", "QSP3", "QSP4", "Questions"],
          QSP1: `Ring Co has in issue ordinary shares with a nominal value of $0·25 per share. These shares are traded on an efficient
          capital market. It is now 20X6 and the company has just paid a dividend of $0·450 per share. Recent dividends of the
          company are as follows:`,
          QScTable: [
            {
              columName: "Year",
              values: [
                {
                  columnName: "Year",
                  values: ["20X6", "20X5", "20X4", "20X3", "20X2"],
                },
                {
                  columnName: "Dividend per share ($)",
                  values: ["0·450", "0·428", "0·408", "0·389", "0·370"],
                },
              ],
            },
          ],
          QSP2: `Ring Co also has in issue loan notes which are redeemable in seven years’ time at their nominal value of $100 per loan
          note and which pay interest of 6% per year`,
          QSP3: `The finance director of Ring Co wishes to determine the value of the company`,
          QSP4: `Ring Co has a cost of equity of 10% per year and a before-tax cost of debt of 4% per year. The company pays corporation
          tax of 25% per year`,
          Questions: [
            {
              Qid: "FM-21",
              SQComponentOrder: ["QP1", "OP"],
              QP1: "Using the dividend growth model, what is the market value of each ordinary share?",
              Options: [
                { label: "A", value: "$8·59" },
                { label: "B", value: "$9·00" },
                { label: "C", value: "$9·45" },
                { label: "D", value: "$7·77" },
              ],
              Answer: [
                {
                  label: "C",
                  desc: `Historical dividend growth rate = 100 x ((0·450/0·370)0·25 – 1) = 5%
              Share price = (0·450 x 1·05)/(0·1 – 0·05) = $9·45`,
                },
              ],
            },
            {
              Qid: "FM-22",
              SQComponentOrder: ["QP1", "OP"],
              QP1: "What is the market value of each loan note?",
              Options: [
                { label: "A", value: "$109·34" },
                { label: "B", value: "$112·01" },
                { label: "C", value: "$116·57" },
                { label: "D", value: "$118·68" },
              ],
              Answer: [{ label: "B", desc: "Market value = (6 x 6·002) + (100 x 0·760) = 36·01 + 76·0 = $112·01" }],
            },
            {
              Qid: "FM-23",
              SQComponentOrder: ["QP1", "OP"],
              QP1: "The finance director of Ring Co has been advised to calculate the net asset value (NAV) of the company.\nWhich of the following formulae calculates correctly the NAV of Ring Co?",
              Options: [
                { label: "A", value: "Total assets less current liabilities" },
                { label: "B", value: "Non-current assets plus net current assets" },
                { label: "C", value: "Non-current assets plus current assets less total liabilities" },
                { label: "D", value: "Non-current assets less net current assets less non-current liabilities" },
              ],
              Answer: [
                {
                  label: "C",
                  desc: "Non-current assets plus current assets less total liabilities is the correct formula.",
                },
              ],
            },
            {
              Qid: "FM-24",
              SQComponentOrder: ["QP1", "OP"],
              QP1: "Which of the following statements about valuation methods is true?",
              Options: [
                { label: "A", value: "The earnings yield method multiplies earnings by the earnings yield" },
                {
                  label: "B",
                  value:
                    "The equity market value is number of shares multiplied by share price, plus the market value of debt",
                },
                {
                  label: "C",
                  value:
                    "The dividend valuation model makes the unreasonable assumption that average dividend growth is constant",
                },
                { label: "D", value: "The price/earnings ratio method divides earnings by the price/earnings ratio" },
              ],
              Answer: [{ label: "", desc: "" }],
            },
            {
              Qid: "FM-25",
              SQComponentOrder: ["QP1", "QTable", "OP"],
              QP1: "Which of the following statements about capital market efficiency is/are correct?",
              QTable: [
                {
                  label: "(1)",
                  value: `Insider information cannot be used to make abnormal gains in a strong form efficient capital market`,
                },
                {
                  label: "(2)",
                  value: ` In a weak form efficient capital market, Ring Co’s share price reacts to new information the day after it is
                  announced`,
                },
                {
                  label: "(3)",
                  value: `Ring Co’s share price reacts quickly and accurately to newly-released information in a semi-strong form efficient
                  capital market`,
                },
              ],
              Options: [
                { label: "A", value: "1 and 2 only" },
                { label: "B", value: "1 and 3 only" },
                { label: "C", value: "3 only" },
                { label: "D", value: "1, 2 and 3" },
              ],
              Answer: [
                {
                  label: "B",
                  value: `Insider information cannot be used to make abnormal gains in a strong form efficient capital market and Ring Co’s share price
                  reacts quickly and accurately to newly-released information in a semi-strong form efficient capital market are correct.`,
                },
              ],
            },
          ],
        },
        {
          SQid: "SQ-3",
          SQDesc: `The following scenario relates to questions 26 to 30`,
          ScenarioComponentOrder: ["QSP1", "QScTable", "QSP2", "QSP3", "QSP4", "Questions"],
          QSP1: `The following information relates to an investment project which is being evaluated by the directors of Fence Co, a listed
          company. The initial investment, payable at the start of the first year of operation, is $3·9 million.`,
          QScTable: [
            {
              columName: "Year",
              values: [1, 2, 3, 4],
            },
            {
              columName: "Net operating cash flow ($000)",
              values: ["1,200", "1,500", "1,600", "1,580"],
            },
            {
              columName: "Scrap value ($000)",
              values: ["", "", "", "100"],
            },
          ],
          QSP2: `The directors believe that this investment project will increase shareholder wealth if it achieves a return on capital
          employed greater than 15%. As a matter of policy, the directors require all investment projects to be evaluated using both
          the payback and return on capital employed methods. Shareholders have recently criticised the directors for using these
          investment appraisal methods, claiming that Fence Co ought to be using the academically-preferred net present value
          method.`,
          QSP3: `The directors have a remuneration package which includes a financial reward for achieving an annual return on capital
          employed greater than 15%. The remuneration package does not include a share option scheme.`,
          Questions: [
            {
              Qid: "FM-26",
              SQComponentOrder: ["QP1", "OP"],
              QP1: "What is the payback period of the investment project?",
              Options: [
                { label: "A", value: "2·75 years" },
                { label: "B", value: "1·50 years" },
                { label: "C", value: "2·65 years" },
                { label: "D", value: "1·55 years" },
              ],
              Answer: [{ label: "A", desc: "Payback period = 2 + (1,200/1,600) = 2·75 years" }],
            },
            {
              Qid: "FM-27",
              SQComponentOrder: ["QP1", "OP"],
              QP1: "Based on the average investment method, what is the return on capital employed of the investment project?",
              Options: [
                { label: "A", value: "13·3%" },
                { label: "B", value: "26·0%" },
                { label: "C", value: "52·0%" },
                { label: "D", value: "73·5%" },
              ],
              Answer: [
                {
                  label: "B",
                  desc: `Average annual accounting profit = (5,880 – 3,800)/4 = $520,000 per year
              Average investment = (3,900 + 100)/2 = $2,000,000
              ROCE = 100 x 520/2,000 = 26%`,
                },
              ],
            },
            {
              Qid: "FM-28",
              SQComponentOrder: ["QP1", "OP"],
              QP1: "Which of the following statements about investment appraisal methods is correct?",
              Options: [
                { label: "A", value: "The return on capital employed method considers the time value of money" },
                {
                  label: "B",
                  value:
                    "Return on capital employed must be greater than the cost of equity if a project is to be accepted",
                },
                { label: "C", value: "Riskier projects should be evaluated with longer payback periods" },
                { label: "D", value: "Payback period ignores the timing of cash flows within the payback period" },
              ],
              Answer: [
                {
                  label: "D",
                  desc: "Payback period ignores the timing of cash flows within the payback period is correct.",
                },
              ],
            },
            {
              Qid: "FM-29",
              SQComponentOrder: ["QP1", "QTable", "OP"],
              QP1: `Which of the following statements about Fence Co is/are correct?`,
              QTable: [
                {
                  label: "(1)",
                  value:
                    "Managerial reward schemes of listed companies should encourage the achievement of stakeholder objectives",
                },
                {
                  label: "(2)",
                  value: `Requiring investment projects to be evaluated with return on capital employed is an example of dysfunctional
                behaviour encouraged by performance-related pay`,
                },
                {
                  label: "(3)",
                  value: `Fence Co has an agency problem as the directors are not acting to maximise the wealth of shareholders`,
                },
              ],
              Options: [
                { label: "A", value: "1 and 2 only" },
                { label: "B", value: "1 only" },
                { label: "C", value: "2 and 3 only" },
                { label: "D", value: "1, 2 and 3" },
              ],
              Answer: [
                {
                  label: "D",
                  value: "All the statements are correct.",
                },
              ],
            },
            {
              Qid: "FM-30",
              SQComponentOrder: ["QP1", "QTable", "OP"],
              QP1: `Which of the following statements about Fence Co directors’ remuneration package is/are correct?`,
              QTable: [
                {
                  label: "(1)",
                  value: "Directors’ remuneration should be determined by senior executive directors",
                },
                {
                  label: "(2)",
                  value: `Introducing a share option scheme would help bring directors’ objectives in line with shareholders’ objectives`,
                },
                {
                  label: "(3)",
                  value: `Linking financial rewards to a target return on capital employed will encourage short-term profitability and
                  discourage capital investment`,
                },
              ],
              Options: [
                { label: "A", value: "2 only" },
                { label: "B", value: "1 and 3 only" },
                { label: "C", value: "2 and 3 only" },
                { label: "D", value: "1, 2 and 3" },
              ],
              Answer: [
                {
                  label: "C",
                  value: `Introducing a share option scheme would help bring directors’ objectives in line with shareholders’ objectives and linking financial
                  rewards to a target return on capital employed will encourage short-term profitability and discourage capital investment are correct.`,
                },
              ],
            },
          ],
        },
      ],
      LQ: [
        {
          Qid: "FM-31",
          QComponentOrder: ["QP1", "QP2", "QP3", "QP4"],
          Requirements: [
            {
              label: "(a)",
              value: " Evaluate whether Nesud Co should accept the early settlement discount offered by its supplier.",
              marks: "4 marks",
            },
            {
              label: "(b)",
              value:
                "Evaluate whether Nesud Co should adopt an economic order quantity approach to ordering Component K",
              marks: "6 marks",
            },
            {
              label: "(c)",
              value: "Critically discuss how Nesud Co could improve the management of its trade receivables",
              marks: "10 marks",
            },
          ],
          Answer: [],
        },
        {
          Qid: "FM-32",
          QComponentOrder: ["QP1", "QTable", "QP2", "QP3", "QP4", "QP5", "QP6"],
          QP1: `Hebac Co is preparing to launch a new product in a new market which is outside its current business operations. The
          company has undertaken market research and test marketing at a cost of $500,000, as a result of which it expects
          the new product to be successful. Hebac Co plans to charge a lower selling price initially and then increase the selling
          price on the assumption that the new product will establish itself in the new market. Forecast sales volumes, selling
          prices and variable costs are as follows:`,
          QTable: [
            {
              columName: "Year",
              values: ["1", "2", "3", "4", "5"],
            },
            {
              columName: "Sales volume (units/year)",
              values: ["200,000", "800,000", "900,000", "400,000"],
            },
            {
              columName: "Selling price ($/unit)",
              values: ["15", "18", "22", "22"],
            },
          ],
          QP2: `Selling price and variable cost are given here in current price terms before taking account of forecast selling price
          inflation of 4% per year and variable cost inflation of 5% per year.`,
          QP3: `Incremental fixed costs of $500,000 per year in current price terms would arise as a result of producing the new
          product. Fixed cost inflation of 8% per year is expected.`,
          QP4: `The initial investment cost of production equipment for the new product will be $2·5 million, payable at the start of
          the first year of operation. Production will cease at the end of four years because the new product is expected to have
          become obsolete due to new technology. The production equipment would have a scrap value at the end of four years
          of $125,000 in future value terms.`,
          QP5: `Investment in working capital of $1·5 million will be required at the start of the first year of operation. Working capital
          inflation of 6% per year is expected and working capital will be recovered in full at the end of four years.`,
          QP6: `Hebac Co pays corporation tax of 20% per year, with the tax liability being settled in the year in which it arises. The
          company can claim tax-allowable depreciation on a 25% reducing balance basis on the initial investment cost,
          adjusted in the final year of operation for a balancing allowance or charge. Hebac Co currently has a nominal
          after-tax weighted average cost of capital (WACC) of 12% and a real after-tax WACC of 8·5%. The company uses its
          current WACC as the discount rate for all investment projects.`,
          Requirements: [
            {
              label: "(a)",
              value: `Calculate the net present value of the investment project in nominal terms and comment on its financial
              acceptability`,
              marks: "12 marks",
            },
            {
              label: "(b)",
              value: `Discuss how the capital asset pricing model can assist Hebac Co in making a better investment decision with
              respect to its new product launch.`,
              marks: "8 marks",
            },
          ],
          Answer: [],
        },
      ],
    },
  ],
};
