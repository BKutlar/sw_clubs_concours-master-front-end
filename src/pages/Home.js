import { StyledTitle, StyledSubTitle, Avatar, StyleButton, ButtonGroup } from "./../components/Styles";

//logo
import Logo from "./../assets/logo.png";
import './filter.css';

const Home = () => {

    return (
        <>

            <div >

                <div style={{ position: "absolute", top: 0, left: 0, backgroundColor: "transparent", width: "100%", padding: "15fx", display: "flex", justifyContent: "flex-start" }}>
                    <div className='nav'>
                        <img src="Collecty'form.png" alt='' className="logo" />
                    </div>
                </div>
                {/* </div> */}
                <StyledTitle size={65}>
                    Welcome to Collecty'form
                </StyledTitle>
                {/* <StyledSubTitle size={27}>
                test
            </StyledSubTitle> */}
                <ButtonGroup>
                    <StyleButton to="/login">Se connecter</StyleButton>
                    <StyleButton to="/register">S'inscrire</StyleButton>
                </ButtonGroup>
            </div>
        </>
    )
}

export default Home;