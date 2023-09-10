import { AdminMCQStore, AdminSQStore, IAdminMCQStore, IAdminSQStore } from "@edthewise/application-admin-stores-web";
import { InputValidator } from "@edthewise/application-fairness-web";
import { Alert, Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouterStore } from "mobx-state-router";
import { container } from "@edthewise/common-admin-inversify";
import { ADMIN_TOKENS } from "@edthewise/common-admin-token";

export interface IAdminSQEntryFormProps {
  title: string;
}

export const AdminSQEntryForm = (props: IAdminSQEntryFormProps) => {
  const routerStore = useRouterStore();
  const [formData, setFormData] = useState({
    sqTitle: "",
    sqDesc1: "",
    sqDesc2: "",
    sqDesc3: "",
    sqTable1: "",
    sqTable2: "",
    sq1Options: "",
    year: "",
    q1Answer: "",
    sqBoxComponentOrder: "",
  });

  const [error, setError] = useState("");

  const collectionTitle = props.title;

  const adminQStore: IAdminSQStore = container.get<AdminSQStore>(ADMIN_TOKENS.AdminSQStoreToken);

  const inputValidator = new InputValidator();

  const handleNavigateToSQEntryForm = (event: any) => {
    event?.preventDefault();

    routerStore.goTo("home");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!formData.sqTitle || !formData.sqBoxComponentOrder || !formData.sqDesc1) {
      setError("The highlighted fields are required, if you don't have the data, enter 'NA'");
      return;
    }

    adminQStore.setCurrentFormData(formData);

    const validatedFormData = inputValidator.validateAdminSQData(formData, collectionTitle);

    const questionCreated = await adminQStore.createQuestionDocument(validatedFormData, collectionTitle);

    if (questionCreated) {
      routerStore.goTo("sqPreview");
    }
    // Do something with the form data
  };

  useEffect(() => {
    if (adminQStore.shouldGetDataFromStore()) {
      const currentFormData = adminQStore.getCurrentFormData();
      setFormData(currentFormData);
    }
  }, [adminQStore]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          backgroundColor: "#fff",
          zIndex: 1,
          paddingBottom: "2rem",
        }}
      >
        <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
          EdTheWise
        </Typography>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Q form for{" "}
          <span
            style={{
              color: "#3f51b5",
            }}
          >
            ({collectionTitle})
          </span>
        </Typography>
      </Box>
      <Button
        variant="contained"
        onClick={handleNavigateToSQEntryForm}
        sx={{ mt: 2, position: "fixed", top: "7rem", left: "70%" }}
      >
        Go to MCQ Entry Form
      </Button>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          position: "sticky",
          backgroundColor: "#f5f5f5",
          height: "auto",
          borderRadius: "1rem",
          marginTop: "11rem",
        }}
        elevation={3}
      >
        <TextField
          multiline
          label="SQTitle"
          name="sqTitle"
          value={formData?.sqTitle}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
          error={error && !formData?.sqTitle ? true : false}
          helperText={error && !formData?.sqTitle ? "This field is required" : null}
        />
        <TextField
          multiline
          label="SqDesc1"
          name="sqDesc1"
          value={formData?.sqDesc1}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
          error={error && !formData?.sqDesc1 ? true : false}
          helperText={error && !formData?.sqDesc1 ? "This field is required" : null}
        />
        <TextField
          multiline
          label="SqDesc2"
          name="sqDesc2"
          value={formData?.sqDesc2}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          multiline
          label="SqDesc3"
          name="sqDesc3"
          value={formData?.sqDesc3}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          multiline
          label="SqBoxComponentOrder"
          name="sqBoxComponentOrder"
          value={formData?.sqBoxComponentOrder}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
          error={error && !formData?.sqBoxComponentOrder ? true : false}
          helperText={error && !formData?.sqBoxComponentOrder ? "This field is required" : null}
        />
        <TextField
          multiline
          label="SQTable1"
          name="sqTable1"
          value={formData?.sqTable1}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          multiline
          label="SQTable2"
          name="sqTable2"
          value={formData?.sqTable2}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        <TextField
          multiline
          label="Year"
          name="year"
          value={formData?.year}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          sx={{ width: "50%", height: "100%" }}
        />
        {/* SQ Q1 */}

        {error && <Alert severity="error">{error}</Alert>}
        <Button
          style={{
            marginBottom: "2rem",
          }}
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Paper>
    </Box>
  );
};
