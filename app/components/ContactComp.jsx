"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import styles from "./ContactComp.module.css";

export default function ContactComp() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Must be 4 characters or more")
        .required("Required"),
      message: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      const name = values.name;
      const message = values.message;

      try {
        const res = await fetch("http://localhost:3000/api/message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            message,
          }),
        });

        if (res.ok) {
          router.push("/");
        } else {
          console.log("message submission failed.");
        }
      } catch (error) {
        console.log("Error message submission: ", error);
      }
    },
  });

  return (
    <div className={styles.formContainer}>
      <h2>שלחו לנו הודעה</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name" className={styles.formLabel}>
          שם מלא
        </label>
        <input
          id="name"
          name="name"
          type="string"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className={styles.formInput}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={styles.error}>{formik.errors.name}</div>
        ) : null}

        <label htmlFor="message" className={styles.formLabel}>
          הודעה
        </label>
        <textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          className={styles.formTextarea} /* Apply custom styling */
        />
        {formik.touched.message && formik.errors.message ? (
          <div className={styles.error}>{formik.errors.message}</div>
        ) : null}

        <button type="submit" className={styles.formButton}>
          שלח
        </button>
      </form>
    </div>
  );
}
