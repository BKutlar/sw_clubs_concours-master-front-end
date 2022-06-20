import React, { useState } from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi';
import { decodeToken } from 'react-jwt'
import { Avatar, ButtonGroup, colors, Copyright, StyledFormArea, StyledTextInput, StyledTitle, StyledFormButton, Icon } from './../components/Styles';
import Logo from './../assets/logo.png'


function CreateOrga() {

  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [description, setDescription] = useState('');
  const [region, setRegion] = useState('');
  // const [token, setToken] = useState(null);
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vaUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4IiwiaWF0IjoxNjU1MjA0NzAzfQ.NqtLbQgfinBuGiD4DhPqwshRVlSVZK9KN8Gu3n_ELPw"
  // const {token} = useParams()
  const navigate = useNavigate()
  async function registerUser(event) {
    // console.log('before fetch')
    event.preventDefault()
    // const token = localStorage.getItem('token')

    // post method for createOrga
    let token = localStorage.getItem('token')
    console.log(token)
    const response = await fetch('http://localhost:8080/authentication/createrOrga', {
        method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`

      },

      body: JSON.stringify({
        name,
        username,
      })

    })
    // console.log(token)

    // console.log('after fetch')
    const data  = await response.json()
    // setToken(data.token)
    console.log(data)
    if (data.user) {
      localStorage.setItem('token', data.user)
      //  const user = decodeToken(data.user);
      // localStorage.setItem('user',JSON.stringify(user))
      // alert('Login successful')
      window.location.href = '#'
      navigate('/acceuil')
    }

  }

  return (
    <StyledFormArea>
      {/* {token} */}
      <Avatar image={Logo} />
      <StyledTitle color={colors.theme} size={30}> Création d'un Organisation </StyledTitle>
      <Icon to='/acceuil'><BiArrowBack /></Icon>
      <Formik
        initialValues={{
          email: '',
          password: '',
          repeatPassword: '',
          name: '',
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
            name: Yup.string().required('Required'),
          })
        }
        // onSubmit={console.log}
      >
        {(props) => (
          <Form onSubmit={registerUser}>
            <Field as={StyledTextInput} onChange={(e)=>setUserName(e.target.value)} type="text"  name="name" value={username} placeholder="Pseudo" />
            <Field as={StyledTextInput} onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} placeholder="Nom de l'Organisation" />
            <Field as='select' type="text" name="region" placeholder="region" style={{ width: '280px', padding: '15px', paddingLeft: '50px', fontSize: '17px', letterSpacing: '1px', color: "#1F2937", backgroundColor: "#E5E7EB", textDecoration: 'none', textAlign: 'center', transition: 'ease-in-out 0.3s', outline: 0 }}>
              <option value="auverge">Auvergne-Rhône-Alpes</option>
              <option value="bourgogne">Bourgogne-Franche-Comté</option>
              <option value="bretagne">bretagne</option>
              <option value="centre">Centre-Val de Loire</option>
              <option value="corse">Corse</option>
              <option value="est">Grand Est</option>
              <option value="guadeloupe">Guadeloupe</option>
              <option value="guyane">Guyane</option>
              <option value="hauts">Hauts-de-France</option>
              <option value="idf">Île-de-France</option>
              <option value="reunion">La Réunion</option>
              <option value="martinique">Martinique</option>
              <option value="mayotte">Mayotte</option>
              <option value="normandie">Normandie</option>
              <option value="aquitaine">Nouvelle-Aquitaine</option>
              <option value="occitanie">Occtianie</option>
              <option value="loire">Pays de la Loire</option>
              <option value="provence">Provence-Alpes-Côte-d'Azur</option>

            </Field>
            {/* <Field as={StyledTextInput} type="password" name="repeatPassword" placeholder="Confirmation du mot de passe"/> */}

            <ButtonGroup>
              <StyledFormButton type='submit'>
                Créer l'organisation
              </StyledFormButton>
            </ButtonGroup>
          </Form>
        )}
      </Formik>
      <Copyright>
        Outil d'entrainement Collecty'Space - 2022
      </Copyright>
    </StyledFormArea>
  )
};

export default CreateOrga;