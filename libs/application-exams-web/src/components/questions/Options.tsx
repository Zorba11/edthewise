import { Box, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

interface IOption {
  label: string;
  value: string;
}

interface IOptionsProps {
  option: IOption;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Options = ({ option, onChange }: IOptionsProps) => {
  return (
    <Box>
      <FormControl component="fieldset">
        <RadioGroup aria-label="options" name="options" value={option.value} onChange={onChange}>
          <FormControlLabel value={option.value} control={<Radio />} label={`${option.label + "." + option.value}`} />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
