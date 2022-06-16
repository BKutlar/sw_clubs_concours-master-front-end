import { StyledTitle, StyledSubTitle, Avatar, StyleButton, ButtonGroup } from "./../components/Styles";
//logo
import Logo from "./../assets/logo.png";

const Acceuil = ({ user }) => {
    // const [user, setUser] = useState({});

    // useEffect(
    //     () => { fetchUser() },
    //     [],
    // )

    // async function fetchUser() {
    //     try {
    //         const response = await fetch('http://localhost:8080/api/getUser', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             }
    //         })

    //         const data = await response.json()
    //         setUser(data[0]);
    //     } catch(error) {
    //         console.log(error);
    //     }
    // }
    return (
        <div >
            <div style={{ position: "absolute", top: 0, left: 0, backgroundColor: "transparent", width: "100%", padding: "15fx", display: "flex", justifyContent: "flex-start"}}>
                <Avatar image={Logo} />
            </div>
        
            <StyledTitle size={65}>
                Bienvenue {user.firstName}
            </StyledTitle>
            <StyledSubTitle size={27}>
                CA VA BG
            </StyledSubTitle>
            <ButtonGroup>
                <StyleButton to="/createClub">créer un club</StyleButton>
                <StyleButton to="/createOrga">créer une organisation</StyleButton>
            </ButtonGroup>
        </div>
    )
}

export default Acceuil;