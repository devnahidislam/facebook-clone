import React from 'react';
import './register.scss';
import { Link } from 'react-router-dom';
import { registerSchema } from '../../schema';
import { useFormik } from 'formik';
import { CircularProgress, Tooltip, Zoom, TextField } from '@mui/material';

const Register = () => {
  const onSubmit = async (values, actions) => {
    console.log('Registration form submited Successfully.');
    console.log(values);
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleSubmit}>
            <Tooltip
              title={
                errors.firstname &&
                touched.firstname && <p className="error">{errors.firstname}</p>
              }
              placement="top"
              open={true}
              TransitionComponent={Zoom}
              arrow
            >
              <TextField
                id="firstname"
                label="First Name"
                variant="outlined"
                size="small"
                margin="dense"
                type="text"
                autoComplete="name"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.firstname && touched.firstname}
              />
            </Tooltip>

            <Tooltip
              title={
                errors.surname &&
                touched.surname && <p className="error">{errors.surname}</p>
              }
              placement="top"
              open={true}
              TransitionComponent={Zoom}
              arrow
            >
              <TextField
                id="surname"
                label="Surname"
                variant="outlined"
                size="small"
                margin="dense"
                type="text"
                autoComplete="name"
                value={values.surname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.surname && touched.surname}
              />
            </Tooltip>

            <Tooltip
              title={
                errors.email &&
                touched.email && <p className="error">{errors.email}</p>
              }
              placement="top"
              open={true}
              TransitionComponent={Zoom}
              arrow
            >
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                size="small"
                margin="dense"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email && touched.email}
              />
            </Tooltip>

            <Tooltip
              title={
                errors.password &&
                touched.password && <p className="error">{errors.password}</p>
              }
              placement="top"
              open={true}
              TransitionComponent={Zoom}
              arrow
            >
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                size="small"
                margin="dense"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password && touched.password}
              />
            </Tooltip>

            <Tooltip
              title={
                errors.confirmPassword &&
                touched.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )
              }
              placement="top"
              open={true}
              TransitionComponent={Zoom}
              arrow
            >
              <TextField
                id="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                size="small"
                margin="dense"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.confirmPassword && touched.confirmPassword}
              />
            </Tooltip>

            <button className="registerBtn" disabled={!isValid} type="submit">
              {isSubmitting ? (
                <CircularProgress sx={{ color: 'white' }} size={30} />
              ) : (
                'Sign Up'
              )}
            </button>
            <span className="forgotPassword">
              <Link to={'/login'} className="registerLoginLink">
                Already have an account?
              </Link>
            </span>
          </form>
        </div>
        <div className="registerRight">
          <h3 className="registerRightTitle">Join Facebook</h3>
          <span className="registerRightDesc">
            Contact with world wide friends.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
