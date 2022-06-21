//styled components
import {
    StyledTextInput,
    StyledFormArea,
    StyledFormButton,
    Avatar,
    StyledTitle,
    colors,
    ButtonGroup,
    ExtraText,
    TextLink,
    Copyright,
    Icon
} from './../components/Styles';
import { useState } from 'react';
import Logo from './../assets/logo.png'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { decodeToken } from 'react-jwt';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import {Link } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const token=localStorage.getItem('user')

    async function login(event) {
        event.preventDefault();

        const response = await fetch('http://localhost:8080/authentication/login', {
            method: 'POST',
            headers: {
                // 'Auhtorization': localStorage.getItem('token'),
                'Content-Type': 'application/json',
                // 'Authorzation' : `Bearer ${token}`

            },

            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await response.json()
        console.log(data)
        if (data.user) {
            localStorage.setItem('token', data.user)
            const user = decodeToken(data.user);
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('role',data.info.role)
            alert('Login successful')
            window.location.href = '#'

        } else {
            alert('Please check your username and password')
        }

        if (data.status === 'ok' && data.info.role === '') {
        navigate('/club')
        }
        else if(data.status === 'ok' && data.info.role !== 'superUser'){
            navigate('/allowJoinOrgs')
        }

        else if(data.status === 'ok' && data.info.role === 'superUser'){
            navigate('/createClub')
        }

        else{
            navigate('/')
        }

        
 
        
    }
    

    return (
        
        <div>
            <StyledFormArea >
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}> Connexion au Collecty'Space </StyledTitle>
                <Icon to='/'><BiArrowBack /></Icon>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string()
                                .email('Invalid email address')
                                .required('Required'),
                            password: Yup.string()
                                .min(8, 'Password is too short')
                                .max(30, 'Password is too long')
                                .required('Required'),
                        })
                    }
                >

                    {(props) => (
                        <Form action='#' onSubmit={login}>
                            <Field
                                as={StyledTextInput}
                                type="email"
                                name="email"
                                value={email} required
                                onChange={(e) => setEmail(e.target.value)}

                                placeholder="Email"
                            />
                            {props.errors.email && <p>{props.errors.email}</p>}

                            <Field
                                as={StyledTextInput}
                                type="password"
                                name="password"
                                value={password} required
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Mot de passe"
                            />
                            {props.errors.password && <p>{props.errors.password}</p>}
                            <ButtonGroup>
                                <StyledFormButton type='submit'>
                                    Se connecter
                                </StyledFormButton>
                            </ButtonGroup>

                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    <TextLink to='/register'>Nouvel utilisateur</TextLink>
                </ExtraText>
            </StyledFormArea>
            <Copyright>
                Outil d'entrainement Collecty'Space - 2022
            </Copyright>
        </div>
    )
}

export default Login;