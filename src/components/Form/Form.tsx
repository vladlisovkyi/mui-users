import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  TextField,
  Autocomplete,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Alert,
  Snackbar,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useUserContext } from "../../context/userContext";
import { jobOptions, radioOptions, skillOptions } from "../../data";
import { SkillOption } from "../../types";

interface FormData {
  name: string;
  job: string;
  preference: string;
  skills: string[];
  date: string | null | undefined;
}

const initialState = {
  name: "",
  job: "",
  preference: radioOptions[0].value,
  skills: [],
  date: null,
};

const Form: React.FC = () => {
  const { setUser } = useUserContext();
  const [formData, setFormData] = useState<FormData>(initialState);
  const [formValidated, setFormValidated] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  useEffect(() => {
    const isFormFilled =
      formData.name.trim() !== "" &&
      formData.job.trim() !== "" &&
      formData.skills.length > 0 &&
      formData.date !== null;

    setFormValidated(isFormFilled);
  }, [formData]);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formValidated) return;

    setFormSubmitted(true);
    handleReset();
    setUser((prev) => [...prev, formData]);
    setFormSubmitted(false);
  };

  const handleReset = () => {
    setFormData(initialState);
  };

  const handleSkillsChange = (_event: object, newValues: SkillOption[]) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: newValues.map((option) => option.value),
    }));
  };

  return (
    <Container maxWidth="xl">
      <form>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              options={jobOptions}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => <TextField {...params} label="Job" />}
              value={
                formData.job
                  ? jobOptions.find((option) => option.value === formData.job)
                  : null
              }
              onChange={(_, newValue) =>
                setFormData((prevData) => ({
                  ...prevData,
                  job: newValue ? newValue.value : "",
                }))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              multiple
              options={skillOptions}
              getOptionLabel={(option) => option?.label}
              isOptionEqualToValue={(option, value) =>
                option.value === value.value || value.value === ""
              }
              renderInput={(params) => <TextField {...params} label="Skills" />}
              value={formData.skills.map((skill) => ({
                value: skill,
                label: skill,
              }))}
              onChange={handleSkillsChange}
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              label="Date"
              views={["year", "month", "day"]}
              value={formData.date}
              onChange={(newDate) =>
                setFormData((prevData) => ({ ...prevData, date: newDate }))
              }
              sx={{
                width: "100%",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Preference</FormLabel>
              <RadioGroup
                row
                aria-label="preference"
                name="preference"
                sx={{ flexDirection: "column" }}
                value={formData.preference}
                onChange={handleChange}
              >
                {radioOptions.map((radio) => (
                  <FormControlLabel
                    key={radio.value}
                    value={radio.value}
                    control={<Radio />}
                    label={radio.value}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              disabled={!formValidated}
              onClick={handleSubmit}
              sx={{
                "&.Mui-disabled": {
                  background: "#eaeaea",
                  color: "#c0c0c0",
                },
              }}
            >
              Submit
            </Button>{" "}
            <Button type="button" variant="contained" onClick={handleReset}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={formSubmitted}
        autoHideDuration={1500}
        onClose={() => setFormValidated(false)}
        message="Note archived"
      >
        <Alert severity="success">Submitted!</Alert>
      </Snackbar>
    </Container>
  );
};
export default Form;
