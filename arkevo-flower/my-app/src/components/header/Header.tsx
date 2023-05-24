import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../assets/logo.svg";
import { Modal, Form } from 'react-bootstrap';
import { useState , 
    // useEffect 
} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { endpoint } from '../api/api';
import userSvg from "../../assets/user.svg"

interface AuthData {
    first_name: string,
    id: number,
    last_name: string,
}
interface HeaderProps{
    authData:AuthData[];
    setIsAuth: (isAuth: boolean) => void;
    isAuth: boolean;
    setAuthData: (authData: AuthData[]) => void;
    token:string,
    setToken: (token: string) => void;
}
function Header({authData, setIsAuth, isAuth, setAuthData, token, setToken} : HeaderProps) {
    //testeralbania@gmail.com
    //testeralbania1@gmail.com
    //testeralbania2@gmail.com
    //test1234!!
    const updateAuthData = (newAuthData: AuthData[]) => {
        setAuthData(newAuthData);
        setIsAuth(true)
    };
    const [showSuccessfulLogIn, setShowSuccessfulLogIn] = useState(false);
    const [show, setShow] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showSuccessfulSignUp, setShowSuccessfulSignUp] = useState(false);

    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true);};

    const handleCloseSignUp = () => setShowSignUp(false);
    const handleShowSignUp = () => setShowSignUp(true);

    const handleCloseSuccessfulSignUp = () => setShowSuccessfulSignUp(false);
    const handleShowSuccessfulSignUp = () => setShowSuccessfulSignUp(true);

    const handleCloseSuccessfulLogIn = () => setShowSuccessfulLogIn(false);

    const handleDateValue = (event: React.ChangeEvent<HTMLInputElement>)=>{setDate(event.target.value)}
    const handleNameValue = (event: React.ChangeEvent<HTMLInputElement>)=>{setName(event.target.value)}
    const handleSurnameValue = (event: React.ChangeEvent<HTMLInputElement>)=>{setSurname(event.target.value)}

    const handleEmailValue = (event: React.ChangeEvent<HTMLInputElement>)=>{setEmail(event.target.value)}
    const handlePasswordValue = (event: React.ChangeEvent<HTMLInputElement>)=>{setPassword(event.target.value)}

    const [showProfile, setShowProfile] = useState(false);
    const [sightings, setSightings] = useState(0);
    const handleProfileClose = ()=>setShowProfile(false);
    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      axios.post(endpoint+"users/login",{ 
            "email": email,
            "password": password,
        }).then(res=>{
            const data = res.data;
            if(email !== "" && password !== ""){
                if(data.auth_token){
                    handleClose();
                    setShowSuccessfulLogIn(true)
                    const resToken = data.auth_token;
                    const headers = {
                        'Accept':'application/json',
                        "Authorization": resToken,
                    }
                    axios.get(endpoint+'users/me',{headers}).then(res=>{
                        updateAuthData([res.data.user])
                        setToken(resToken);
                        // console.log(authData)
                    }).catch(err=>{
                        console.log(err);
                    })
                }else{
                    alert(data.error);
                }
            }else{
                alert("Please insert your username and password");
            }
        }).catch(res=>{
            alert(res);
        })
    };
    const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post(endpoint+"users/register",{ 
              "email": email,
              "password": password,
              "first_name": name,
              "last_name": surname,
              "date_of_birth": date,
          }).then(res=>{
              const data = res.data;
              if(email !== "" && password !== ""){
                  if(data.auth_token){
                    handleCloseSignUp();
                    handleShowSuccessfulSignUp();
                  }else{
                      alert(data.error);
                  }
              }else{
                  alert("Please insert your username and password");
              }
          }).catch(res=>{
            alert(res);
        })
      };
      const openProfile = ()=>{
        const headers = {
            'Accept':'application/json',
            "Authorization": token,
        }
        axios.get(endpoint + `users/${authData[0].id}`, {headers}).then(res=>{
            console.log(res.data);
        }).catch(err=>{
            console.log(err);
        })
        axios.get(endpoint+`sightings/${authData[0].id}`, {headers}).then(res=>{
            setSightings(res.data.sightings.length)
        }).catch(err=>{
            console.log(err);
        })
        setShowProfile(true);
      }
      function logOut(){
        setAuthData([])
        setIsAuth(false);
        setShowProfile(false);
      }
  return (
    <Navbar bg="white" expand="lg" style={{height:80}}>
      <Container>
      <Link className="navbar-brand" to="/"><img src={Logo} alt="logo"></img></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:"flex-end"}}>
          <Nav>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/latestSighting">Latest Sightings</Link>
            <Link className="nav-link" to="/favourites">Favourites</Link>
            {isAuth ? 
            <>
            <div>
                <button style={{border:0,background:"transparent",}} onClick={openProfile}>
                    <img src={userSvg} className="rounded-circle img-fluid" style={{width:40,}} alt="user-icon"/>
                </button>
            </div>
            <Modal show={showProfile} onHide={handleProfileClose} centered >
            <div className="card mb-4" style={{borderBottom:0}}>
            <div className="card-body text-center">
          <Modal.Header style={{justifyContent:'center',paddingBottom:0, borderBottom:0,}} closeButton />
          <Modal.Body style={{padding: '10px 10%'}}>
            <div style={{display:'flex', justifyContent:"center", alignItems:'center'}}>
                <img src={userSvg} alt="avatar" className="rounded-circle img-fluid" style={{width:80,}} />
                <div className='d-flex flow-column'>
                    <h5 className="my-3" style={{height:'max-content'}}>{authData[0].first_name} {authData[0].last_name}</h5>
                    <span>{sightings} sightings</span>
                </div>
            </div>
            <Form.Group controlId="name" className='form-data-profile'>
                    <Form.Label>Name</Form.Label>
                    <Form.Label>{authData[0].first_name}</Form.Label>
            </Form.Group>
            <Form.Group controlId="name" className='form-data-profile'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Label>{authData[0].last_name}</Form.Label>
            </Form.Group>
            <div className="d-flex justify-content-center mb-2">
              <button type="button" className="btn ms-1" onClick={logOut}>Log Out</button>
            </div>
          </Modal.Body>
          </div>
        </div>
            </Modal>
            <Modal show={showSuccessfulLogIn} onHide={handleCloseSuccessfulLogIn} centered>
                <Modal.Header style={{justifyContent:'center',paddingBottom:0, borderBottom:0,}}>
                    <Modal.Title>Congratulations! You have successfully logged into FlowrSpot!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant="primary" type="submit" style={{width:"100%", marginTop:20,}} className='special-bg login' onClick={handleCloseSuccessfulLogIn}>Ok</Button>
                </Modal.Body>
            </Modal>
            </> 
            : <>
            <Button className='special-c' onClick={handleShow}>Login</Button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header style={{justifyContent:'center',paddingBottom:0, borderBottom:0,}}>
                <Modal.Title>Welcome Back</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleLogin}>
                    <Form.Group controlId="email" className='form-data'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={handleEmailValue} value={email}/>
                    </Form.Group>
                    <Form.Group controlId="password" className='form-data'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={handlePasswordValue} value={password}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{width:"100%", marginTop:20,}} className='special-bg login'>
                    Log In
                    </Button>
                </Form>
                </Modal.Body>
            </Modal>
            <Button className='special-bg createAcc' onClick={handleShowSignUp}>New Account</Button>
            <Modal show={showSignUp} onHide={handleCloseSignUp} centered>
                <Modal.Header style={{justifyContent:'center',paddingBottom:0, borderBottom:0,}}>
                <Modal.Title>Create an Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleSignUp}>
                    <div className='form-full'>
                        <Form.Group controlId="birthdate" className='form-data' style={{width:'calc(50% - 5px)', marginRight:10,}}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" onChange={handleNameValue} value={name}/>
                        </Form.Group>
                        <Form.Group controlId="birthdate" className='form-data' style={{width:'calc(50% - 5px)'}}>
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="text" onChange={handleSurnameValue} value={surname}/>
                        </Form.Group>
                    </div>
                    <Form.Group controlId="birthdate" className='form-data'>
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" onChange={handleDateValue} value={date}/>
                    </Form.Group>
                    <Form.Group controlId="create-email" className='form-data'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={handleEmailValue} value={email}/>
                    </Form.Group>
                    <Form.Group controlId="create-password" className='form-data'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={handlePasswordValue} value={password}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{width:"100%", marginTop:20,}} className='special-bg login'>
                        Create Account
                    </Button>
                </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showSuccessfulSignUp} onHide={handleCloseSuccessfulSignUp} centered>
                <Modal.Header style={{justifyContent:'center',paddingBottom:0, borderBottom:0,}}>
                    <Modal.Title>Congratulations! You have successfully signed up for FlowrSpot!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant="primary" type="submit" style={{width:"100%", marginTop:20,}} className='special-bg login' onClick={handleShow}>Ok</Button>
                </Modal.Body>
            </Modal>
            </>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
