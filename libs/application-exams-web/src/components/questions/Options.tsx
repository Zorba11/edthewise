import { Box, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { IOption } from "../examcards/IQOptions";
import { useState } from "react";
import { QuestionsStore } from "@edthewise/application-stores-web";
import { container } from "@edthewise/common-inversify";
import { TOKENS } from "@edthewise/common-tokens-web";

interface IOptionsProps {
  options: IOption[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Options = ({ options, onChange }: IOptionsProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const questionsStore = container.get<QuestionsStore>(TOKENS.QuestionsStoreToken);

  const numOptions = options.length;
  // const numColumns = numOptions % 2 === 0 ? 2 : 1;
  // const numRows = numOptions / numColumns;

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    const selectedOption = JSON.parse(event.target.value);
    questionsStore.setSelectedOption(selectedOption);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <FormControl component="fieldset">
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={handleOptionChange}
        >
          <Grid container justifyContent="space-between">
            <Grid container item xs={6} spacing={6}>
              {options.slice(0, numOptions / 2).map((option) => (
                <Grid
                  sx={{
                    position: "relative",
                    left: "2rem",
                    marginRight: "20%",
                    right: "4rem",
                    width: "50%",
                  }}
                  item
                  xs={12}
                  key={option.value}
                >
                  <FormControlLabel
                    value={JSON.stringify({ label: option.label, value: option.value })}
                    control={<Radio />}
                    label={`${option.label}) ${option.value}`}
                    sx={{
                      textAlign: "left",
                    }}
                    labelPlacement="end"
                  />
                </Grid>
              ))}
            </Grid>
            <Grid container item xs={6} spacing={6}>
              {options.slice(numOptions / 2).map((option) => (
                <Grid
                  sx={{
                    position: "relative",
                    width: "50%",
                  }}
                  item
                  xs={12}
                  key={option.value}
                >
                  <FormControlLabel
                    value={JSON.stringify({ label: option.label, value: option.value })}
                    control={<Radio />}
                    label={`${option.label}) ${option.value}`}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
