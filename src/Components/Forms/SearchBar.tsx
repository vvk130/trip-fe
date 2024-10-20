import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type OnSearchType = (query: string) => void;

type SearchBarProps = {
  onSearch: OnSearchType;
};

const validationSchema = yup.object({
  searchQuery: yup
    .string()
    .min(2, "Minimum 2 characters required")
    .required("Search query is required"),
});

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const formik = useFormik({
    initialValues: {
      searchQuery: "Search by name or address...",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSearch(values.searchQuery);
      formik.resetForm();
    },
  });

  return (
    <div className="login-container">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          variant="filled"
          id="searchQuery"
          name="searchQuery"
          label="Search Query"
          type="text"
          placeholder="Type to search..."
          value={formik.values.searchQuery}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.searchQuery && Boolean(formik.errors.searchQuery)
          }
          helperText={formik.touched.searchQuery && formik.errors.searchQuery}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
