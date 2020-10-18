import React, {useEffect} from 'react'
import pilkarz from "../../assets/pilkarz.png"
import {useDispatch, useSelector} from 'react-redux'
import {authActions, userActions} from '../../actions'

import PropTypes from "prop-types";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";


 function Register() {  

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.authentication);
    const isUsernameAvailable = useSelector(
      (state) => state.user.isUsernameAvailable
    );
    const isEmailAvailable = useSelector((state) => state.user.isEmailAvailable);
  
    const registering = useSelector((state) => state.registration.registration);
    const isAvailable = useSelector((state) => state.user.isUsernameAvailable);

    useEffect(() => {
        dispatch(authActions.logout());
      }, [])

    function validateUsername(value) {
        dispatch(userActions.checkUsernameAvailability(value));
        if (isAvailable) return isAvailable;
      }
    
      function validateEmail(value) {
        dispatch(userActions.checkEmailAvailability(value));
        if (isEmailAvailable) return isEmailAvailable;
      }

    function register(name, username, email, password) {
        const newUser = {
          name,
          username,
          email,
          password,
        };
    
        dispatch(authActions.register(newUser));
      }

    return (
        <main> 
                <div className="App">
                    <div className="box">
                        <div className="obrazek">
                        <img id="cien" src={pilkarz} alt=""></img>
                        </div>
                        <h1 id="start">DOŁĄCZ DO NAS</h1>
                        <h2 id="konto">Posiadasz już konto?</h2>
                        <h2 id="zaloguj">Zaloguj się</h2>
                     
                        <Formik
        className="hero-body"
        initialValues={{
          username: "",
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          acceptTerms: false
        }}
        validationSchema={Yup.object().shape({
          acceptTerms: Yup.bool().oneOf([true], 'Zgoda jest wymagana'),
          password: Yup.string().required("Hasło jest wymagane"),
          username: Yup.string()
            .required("Nazwa użytkownika jest wymagana")
            .min(6, "Hasło musi mieć więcej niż 6 znaków")
            .test("Check username", "Nazwa użytkownika już istnieje", (value) =>
              validateUsername(value)
            ),
          name: Yup.string()
            .required("Imie i nazwisko jest wymagane")
            .min(3, "Imie i nazwisko muszą mieć przynajmniej 3 znaki"),
          email: Yup.string()
            .email()
            .min(6, "Adres email musi mieć przynajmniej 6 znaków")
            .test("validate email", "Adres email już istnieje", (value) =>
              validateEmail(value)
            )
            .required("Adres email jest wymagany"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Hasła muszą być takie same")
            .required("Wpisz ponownie swoje hasło"),
        })} 
        onSubmit={(fields) => {
          register(fields.name, fields.username, fields.email, fields.password);
        }}
        render={({   isSubmitting,
          isValid,
          setFieldValue,
          values,
          handleChange,
          handleBlur,
          touched,
          errors }) => (
          <Form className="res">
          
                             <Field
                              name="username"
                              type="text"
                              placeholder="Nazwa Użytkownika"
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
                             <Field
                              name="name"
                              type="text"
                              placeholder="Imie i Nazwisko"
                              className={
                                "input" +
                                (errors.name && touched.name ? " is-danger" : "")
                              }
                            />
                            <ErrorMessage
                              name="name"
                              component="div"
                              className="help is-danger"
                            />
                              <Field
                              name="email"
                              type="text"
                              placeholder="Adres Email"
                              className={
                                "input" +
                                (errors.email && touched.email ? " is-danger" : "")
                              }
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="help is-danger"
                            />
                            <i class="far fa-envelope"></i>
                                          <Field
                              name="password"
                              type="password"
                              placeholder="Hasło"
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
                                          <Field
                              name="confirmPassword"
                              type="password"
                              placeholder="Powtórz hasło"
                              className={
                                "input" +
                                (errors.confirmPassword && touched.confirmPassword ? " is-danger" : "")
                              }
                            />
                            <ErrorMessage
                              name="confirmPassword"
                              component="div"
                              className="help is-danger"
                            />
                                <div className="checkbox">
                                    <Field type="checkbox" name="acceptTerms" className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                                     <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback is-danger" />
                                    <h4> Wyrażam zgode na przetwarzanie moich danych osobowych.</h4>
                            </div>
            <button type="submit">Stwórz konto</button>
          </Form>
        )}
      />
                    </div>
                </div>
            </main>
    )
}


export default Register;