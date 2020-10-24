import React, {useEffect} from 'react'
import ClearErrorButton from './ClearErrorButton';
import PropTypes from 'prop-types'

import {useDispatch, useSelector} from 'react-redux'
import * as Yup from "yup";

import {authActions, alertActions} from '../../actions'
import { Formik, Form, Field, ErrorMessage } from "formik";

 function Login() {
     
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.authentication.loading);
    const auth = useSelector((state) => state.authentication)

    useEffect(() => {
     dispatch(authActions.clearError());
    }, [])
    
    function clearAlert() {
      dispatch(authActions.clearError());
    }

    function login(usernameOrEmail, password) {
        dispatch(authActions.login({ usernameOrEmail, password }));
      }

    return (
        <div className="sekcja-login">
          <div className="login-box">
            <h1 className="logowanie-napis">Logowanie</h1><Formik
        className="hero-body"
        initialValues={{
          password: "",
          username: "",
        }}
        validationSchema={Yup.object().shape({
          password: Yup.string().required("Hasło jest wymagane"),
          username: Yup.string().required("Nazwa użytkownika jest wymagana"),
        })}
        onSubmit={(fields) => {
          login(fields.username, fields.password);
        }}
        render={({ errors, status, touched }) => (
          <Form>
            <div className="form-group-contener">
            <div className="form-group">
              <label className="login-napisy" htmlFor="username"></label>
              <Field
                placeholder="Nazwa użytkownika"
                name="username"
                type="text"
                className={
                  "input" +
                  (errors.username && touched.username ? " is-danger" : "")
                }
              />
              <ErrorMessage
                name="username"
                component="div"
                className="help is-danger"
              />
            </div>
            </div>

            <div className="form-group">
              <label className="login-napisy" htmlFor="password"></label>
              <Field
                placeholder="Hasło"
                name="password"
                type="password"
                className={
                  "input" +
                  (errors.password && touched.password ? " is-danger" : "")
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="help is-danger"
              />
            </div>

            <div className="form-group">
              <button
                type="submit"
              
              >
                Zaloguj się
              </button>
              {auth.error ? <p>Złe dane </p> : null}
            </div>
          </Form>
        )}
      />
      </div>
        </div>
    )
}

Login.propTypes = {
  loading: PropTypes.bool,
  auth: PropTypes.object,
  authActions: PropTypes.object,
  alertActions: PropTypes.object
}

export default Login;