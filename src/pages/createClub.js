import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {BiArrowBack} from 'react-icons/bi'
import { Avatar, ButtonGroup, colors, Copyright, StyledFormArea, StyledTextInput, StyledTitle, StyledFormButton, Icon } from '../components/Styles';
import Logo from './../assets/logo.png'
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import { decodeToken } from 'react-jwt';

function CreateClub () {
  const navigate = useNavigate();

  const [name, setName] =  useState('');
  const [description, setDescription] = useState('');
  const [region, setRegion ] = useState('');


  async function create(event) {
    event.preventDefault();
    const response =  await fetch('http://localhost:8080/api/createClub', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json', 
            'Authorization' : 'application/json',

        },

        body: JSON.stringify({
          name, 
          description,
          region,
        })
    });
    const data = await response.json()
        console.log(data)
        if(data.user) {
          localStorage.getItem('token', data.user)
            // localStorage.getItem('token')
            console.log(localStorage)
           const user = decodeToken(data.user);
            localStorage.getItem('user', user)
            window.location.href='#'
            navigate('/acceuil')

            
        } 
    
        if(data.status === 'ok') {
          alert('ok')
        }

    // navigate('/acceuil')
}

    return(
    <StyledFormArea>
    <Avatar image={Logo} />
    <StyledTitle color={colors.theme} size={30}> Inscription au Collecty'Space </StyledTitle>
      <Icon to='/acceuil'><BiArrowBack/></Icon>
    <Formik
      initialValues={{
        name: '',
        description: '',
        region: '',
      }}
      validationSchema={
          Yup.object().shape({
            name: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
            region: Yup.string().required('Required'),
          })
      }
      onSubmit={create}
    >
      { (props) => (
        <Form onSubmit={create}>
          <Field 
            as={StyledTextInput} 
            type="text" 
            name="name" 
            placeholder="Nom du Club"
            onChange={(e)=>setName(e.target.value)} 
            value={name}
          /> 
          {props.errors.name && <p>{props.errors.name}</p>} 


          <Field 
            as={StyledTextInput} 
            type="text" 
            name="description"
            placeholder="Description du Club"
            onChange={(e)=>setDescription(e.target.valie)}
            value={description}
            
          />
          {props.errors.name && <p>{props.errors.name}</p>} 

          <Field as='select' name="region" placeholder="Region" onChange={(e)=>setRegion(e.target.value)} value={region}>
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
          {/* <input name='token' style={{}} */}
          <ButtonGroup>
            <StyledFormButton type='submit'>
              Créer le club
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

export default CreateClub;