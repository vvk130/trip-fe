import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Station from "../../Types/Station";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import baseUrl from "../../Utils/urls";

// Only id field is a required, as specified in the assignment. Additional fields can be filled out after initialization.

const validationSchema = yup.object({
  id: yup.number().positive().required("Id is required"),
  stationName: yup.string(),
  stationAddress: yup.string(),
  coordinateX: yup
    .string()
    .matches(/^-?([0-8]?[0-9]|90)(\.[0-9]{1,16})$/, "Invalid coordinate"),
  coordinateY: yup
    .string()
    .matches(
      /^-?([0-9]{1,2}|1[0-7][0-9]|180)(\.[0-9]{1,16})$/,
      "Invalid coordinate"
    ),
});

const StationForm = () => {
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: (newStation: Station) =>
      axios.post(`${baseUrl}/api/stations`, newStation),
    onSuccess: (res) => {
      console.log("Station added successfully:", res.data);
      alert("Station added successfully");
    },
    onError: (err) => {
      console.error("Error adding station:", err);
      alert("Error adding station");
    },
  });

  const formik = useFormik<Station>({
    initialValues: {
      id: 533,
      stationName: "Keilaranta",
      stationAddress: "Keilaranta 13",
      coordinateX: "24.835132",
      coordinateY: "60.174144",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <div className="login-container">
      <h1>Add Station</h1>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          variant="filled"
          id="id"
          name="id"
          label="id"
          value={formik.values.id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.id && Boolean(formik.errors.id)}
          helperText={formik.touched.id && formik.errors.id}
        />
        <TextField
          fullWidth
          variant="filled"
          id="stationName"
          name="stationName"
          label="stationName"
          type="stationName"
          value={formik.values.stationName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.stationName && Boolean(formik.errors.stationName)
          }
          helperText={formik.touched.stationName && formik.errors.stationName}
        />
        <TextField
          fullWidth
          variant="filled"
          id="stationAddress"
          name="stationAddress"
          label="stationAddress"
          type="stationAddress"
          value={formik.values.stationAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.stationAddress &&
            Boolean(formik.errors.stationAddress)
          }
          helperText={
            formik.touched.stationAddress && formik.errors.stationAddress
          }
        />
        <TextField
          fullWidth
          variant="filled"
          id="coordinateX"
          name="coordinateX"
          label="coordinateX"
          type="coordinateX"
          value={formik.values.coordinateX}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.coordinateX && Boolean(formik.errors.coordinateX)
          }
          helperText={formik.touched.coordinateX && formik.errors.coordinateX}
        />
        <TextField
          fullWidth
          variant="filled"
          id="coordinateY"
          name="coordinateY"
          label="coordinateY"
          type="coordinateY"
          value={formik.values.coordinateY}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.coordinateY && Boolean(formik.errors.coordinateY)
          }
          helperText={formik.touched.coordinateY && formik.errors.coordinateY}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit"}
        </Button>
        {isError && (
          <p style={{ color: "red" }}>
            Failed to submit the form. Please try again.
          </p>
        )}
        {isSuccess && (
          <p style={{ color: "green" }}>Station added successfully!</p>
        )}
      </form>
    </div>
  );
};

export default StationForm;
