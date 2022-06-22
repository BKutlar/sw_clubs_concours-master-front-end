import React, { useState } from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { Avatar, ButtonGroup, colors, Copyright, ExtraText, StyledFormArea, StyledTextInput, StyledTitle, StyledFormButton, TextLink } from '../components/Styles';
import Logo from './../assets/logo.png'


function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeate] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [organisation, setOrganisation] = useState('');

  async function register(event) {
    event.preventDefault();
  const response =  await fetch('http://localhost:8080/authentication/registerUser', {
      method: 'POST',
      headers: {
        'content-type': 'application/json', 
        'accept': 'application/json'
      },

      body: JSON.stringify({
        email,
        password,
        repeatPassword,
        firstName,
        lastName,
        username,
        role,
        organisation
      }),
    });
    const data = await response.json()
    console.log(data)
    if (data.status === 'ok') {
        navigate('/')
    } else {
        alert('Account create')
        navigate('/login')
    }
  }

  return (
    <>
    <div style={{ position: "absolute", top: 0, left: 0, backgroundColor: "transparent", width: "100%", padding: "15fx", display: "flex", justifyContent: "flex-start" }}>
                    <div className='Rnav'>
                        <img src="Collecty'form.png" alt='' className="logo" />
                        <h1>Register</h1>
                    </div>
                </div>
    <StyledFormArea>
      {/* <Avatar image={Logo} /> */}
      <StyledTitle color={colors.theme} size={30}> Inscription au Collecty'Space </StyledTitle>

      <Formik
        initialValues={{
          email: '',
          password: '',
          repeatPassword: '',
          firstName: '',
          lastName: '',
          username: '',
          role: '',
          organisation: 'user',
        }}
        validationSchema={
          Yup.object().shape({
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string()
              .min(8, 'Password is too short')
              .max(30, 'Password is too long')
              .required('Required'),
            repeatPassword: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Password must match'),
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            username: Yup.string().required('Required'),
            role: Yup.string().required('Required'),
            organisation: Yup.string().required('Required'),
          })
        }
        // onSubmit={register}
      >
        {(props) => (
          <Form onSubmit={register}>
            <Field
              as={StyledTextInput}
              type="text"
              name="firstName"
              placeholder="Prénom"
              onChange={(e)=>setFirstName(e.target.value)}
              value={firstName}
            />
            {props.errors.firstName && <p>{props.errors.firstName}</p>}

            <Field
              as={StyledTextInput}
              type="text"
              name="lastName"
              placeholder="Nom"
              onChange={(e)=>setLastName(e.target.value)}
              value={lastName}
            />
            {props.errors.lastName && <p>{props.errors.lastName}</p>}

            <Field
              as={StyledTextInput}
              type="text"
              name="username"
              placeholder="Pseudo"
              onChange={(e)=>setUsername(e.target.value)}
              value={username}
            />
            {props.errors.username && <p>{props.errors.username}</p>}

            <Field
              as={StyledTextInput}
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
            />
            {props.errors.email && <p>{props.errors.email}</p>}

            <Field
              as='select'
              name="role"
              placeholder="Role"
              onChange={(e)=>setRole(e.target.value)}
              value={role}
            >
              <option value="user">Utilisateur</option>
              <option value="admin">Super admin</option>
              <option value="superUser">Super utilisateur</option>
              
            </Field>
            {props.errors.role && <p>{props.errors.role}</p>}

        
            <Field
              as={StyledTextInput}
              type="text"
              name="organisation"
              placeholder="Organisation"
              onChange={(e)=>setOrganisation(e.target.value)}
              value={organisation}
            />
            {props.errors.organisation && <p>{props.errors.organisation}</p>}

            <Field
              as={StyledTextInput}
              type="password"
              name="password"
              placeholder="Mot de passe"
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
            />
            {props.errors.password && <p>{props.errors.password}</p>}

            <Field
              as={StyledTextInput}
              type="password"
              name="repeatPassword"
              placeholder="Confirmation du mot de passe"
              onChange={(e)=>setRepeate(e.target.value)}
              value={repeatPassword}
            />
            {props.errors.repeatPassword && <p>{props.errors.repeatPassword}</p>}

            <ButtonGroup>
              <StyledFormButton type='submit'>
                S'inscrire
              </StyledFormButton>
            </ButtonGroup>
          </Form>
        )}
      </Formik>
      <ExtraText>
        Vous avez deja un <TextLink to='/login'>compte utilisateur</TextLink>
      </ExtraText>
      <Copyright>
        Outil d'entrainement Collecty'Space - 2022
      </Copyright>
    </StyledFormArea>
    </>
  )
};

export default Register;