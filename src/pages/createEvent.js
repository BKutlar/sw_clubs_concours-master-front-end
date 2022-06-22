import React, { useState } from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { Avatar, ButtonGroup, colors, Copyright, ExtraText, StyledFormArea, StyledTextInput, StyledTitle, StyledFormButton, TextLink } from '../components/Styles';
import {Link} from 'react-router-dom';

function CreateEvent() {
  const navigate = useNavigate();
  const [EventName, setEventName] = useState('');
  const [StartDate, setStartDate] = useState('');
  const [EndDate, setEndDate] = useState('');
  const [Description, setDescription] = useState('');

//   async function create(event) {
//     event.preventDefault();
//   const response =  await fetch('http://localhost:8080/authentication/createConcours', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json', 
//         'accept': 'application/json'
//       },

//       body: JSON.stringify({
//         EventName,
//         StartDate,
//         EndDate,
//         Description,
//       }),
//     });
//     const data = await response.json()
//     console.log(data)
//     if (data.status === 'ok') {
//         navigate('/')
//     } else {
//         alert('evenement create')
//         navigate('/')
//     }
//   }

  return (
    <>
     <div style={{ position: "absolute", top: 0, left: 0, backgroundColor: "transparent", width: "100%", padding: "15fx", display: "flex", justifyContent: "flex-start" }}>
                    <div className='Rnav'>
                        <img src="Collecty'form.png" alt='' className="logo" />
                        <h1>Création d'évènements</h1>
                    </div>
                </div>
    <StyledFormArea>
      {/* <Avatar image={Logo} /> */}
      <StyledTitle color={colors.theme} size={30}> Création d'un évènement </StyledTitle>

      <Formik
        initialValues={{
          EventName: '',
          StartDate: '',
          EndDate: '',
          Description: '',
        }}
        validationSchema={
          Yup.object().shape({
            EventName: Yup.string().required('Required'),
            StartDate: Yup.string().required('Required'),
            EndDate: Yup.string().required('Required'),
            Description: Yup.string().required('Required'),
          })
        }
      >
        {(props) => (
          <Form /*onSubmi={create} */>
            <Field
              as={StyledTextInput}
              type="text"
              name="EventName"
              placeholder="Nom de l'évènement "
              onChange={(e)=>setEventName(e.target.value)}
              value={EventName}
            />
            {props.errors.EventName && <p>{props.errors.EventName}</p>}

            <Field
              as={StyledTextInput}
              type="date"
              name="StartDate"
              placeholder="Date du début de l'évènement"
              onChange={(e)=>setStartDate(e.target.value)}
              value={StartDate}
            />
            {props.errors.StartDate && <p>{props.errors.StartDate}</p>}

            <Field
              as={StyledTextInput}
              type="date"
              name="EndDate"
              placeholder="Date de fin de l'évènement"
              onChange={(e)=>setEndDate(e.target.value)}
              value={EndDate}
            />
            {props.errors.EndDate && <p>{props.errors.EndDate}</p>}

            <Field
              as={StyledTextInput}
              type="text"
              name="Description"
              placeholder="Description de l'évènement"
              onChange={(e)=>setDescription(e.target.value)}
              value={Description}
            />
            {props.errors.Description && <p>{props.errors.Description}</p>}
            <ButtonGroup>
            <StyledFormButton type='submit'>
                <Link to='/'>
              Créer l'évènement
              </Link>
            </StyledFormButton>
          </ButtonGroup>
          </Form>
        )}
      </Formik>
      <Copyright>
        Outil d'entrainement Collecty'Space - 2022
      </Copyright>
    </StyledFormArea>
    </>
  )
};

export default CreateEvent;