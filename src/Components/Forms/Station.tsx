import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
  const formik = useFormik({
    initialValues: {
      id: "50050",
      stationName: "",
      stationAddress: "",
      coordinateX: "",
      coordinateY: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
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
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default StationForm;
