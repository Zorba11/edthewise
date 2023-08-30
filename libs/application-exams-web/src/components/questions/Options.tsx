import { Box, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";

interface IOption {
  label: string;
  value: string;
}

interface IOptionsProps {
  options: IOption[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Options = ({ options, onChange }: IOptionsProps) => {
  const numOptions = options.length;
  const numColumns = numOptions % 2 === 0 ? 2 : 1;
  const numRows = numOptions / numColumns;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <FormControl component="fieldset">
        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
          <Grid container justifyContent="space-between">
            <Grid container item xs={6} spacing={2}>
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
                    value={option.value}
                    control={<Radio />}
                    label={`${option.label}) ${option.value}`}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid container item xs={6} spacing={2}>
              {options.slice(numOptions / 2).map((option) => (
                <Grid
                  sx={{
                    position: "relative",
                    left: "22rem",
                    width: "50%",
                  }}
                  item
                  xs={12}
                  key={option.value}
                >
                  <FormControlLabel
                    value={option.value}
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
