import React from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginSchema } from '../../schema';
import { CircularProgress, TextField, Tooltip, Zoom } from '@mui/material';

const Login = () => {
  const onSubmit = async (values, actions) => {
    console.log('Login form submited Successfully.');
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
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit,
  });
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLeftTitle">Facebook Login</h3>
          <span className="loginLeftDesc">
            Contact with world wide friends.
          </span>
        </div>
        <div className="loginRight">
          <form onSubmit={handleSubmit} autoComplete="off" className="loginBox">
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

            <button className="loginBtn" disabled={!isValid} type="submit">
              {isSubmitting ? (
                <CircularProgress sx={{ color: 'white' }} size={30} />
              ) : (
                'Log In'
              )}
            </button>
            <span className="forgotPassword">Forgotten account?</span>
            <hr />
            <div className="loginRegister">
              <Link to={'/register'}>
                <button className="loginRegisterBtn">Create new account</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
