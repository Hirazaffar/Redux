import { useDispatch } from "react-redux";
import { Container, Form, Button} from 'react-bootstrap';
import { useState } from 'react';
import { Add } from '../actions/index';
import "./First.css";





const First = () => {


    const [data, setData] = useState(
        {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            age: "",

        });

    const dispatch = useDispatch();

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }

        })
    }


    return (
        <>
            <Container>

                <div className="my-5"> </div>

                <h2 className="text-center"> Registration Page </h2>

                <div className="container contact_div">

                    <div className="row pt-3">
                        <div className="col-md-6 col-10 mx-auto">

                            <Form>
                            <p className="item2">Email address</p>
                                <Form.Group className="mb-3 center_div" controlId="formBasicEmail"> 
                                    <Form.Control type="email"
                                        Name="email"
                                        value={data.email}
                                        onChange={(event) => setData(event.target.value)}
                                        placeholder="Enter email" />
                                    <Button variant="primary" onClick={() => dispatch(Add(data), setData(""))}>
                                        save
                                    </Button>
                                </Form.Group>


                                <p className="item2">First Name</p>
                                <Form.Group className="mb-3 center_div" controlId="formBasicEmail">
                                   
                                    <Form.Control type="email"
                                        Name="text"
                                        value={data.firstName}
                                        onChange={(event) => setData(event.target.value)}
                                        placeholder="Enter first Name" />
                                    <Button variant="primary" onClick={() => dispatch(Add(data), setData(""))}>
                                        save
                                    </Button>
                                </Form.Group>
                              
                                <p className="item2">Last Name</p>
                                <Form.Group className="mb-3 center_div" controlId="formBasicEmail">
                                  
                                    <Form.Control type="text"
                                        Name="text"
                                        value={data.lastName}
                                        onChange={(event) => setData(event.target.value)}
                                        placeholder="Enter last Name" />
                                    <Button variant="primary" onClick={() => dispatch(Add(data), setData(""))}>
                                        save
                                    </Button>
                                </Form.Group>
                                <p className="item2">Password</p>
                              
                                <Form.Group className="mb-3 center_div" controlId="formBasicPassword">
                                <Form.Control type="password"
                                        Name="password"
                                        value={data.password}
                                        onChange={(event) => setData(event.target.value)}
                                        placeholder="Password" />
                                    
                                    <Button variant="primary" onClick={() => dispatch(Add(data), setData(""))}>
                                        save
                                    </Button>
                                </Form.Group>

                                <p className="item2">Age</p>
                                <Form.Group className="mb-3 center_div" controlId="formBasicEmail">
                                <Form.Control type="number"
                                        Name="age"
                                        value={data.age}
                                        onChange={(event) => setData(event.target.value)}
                                        placeholder="Enter age" />
                                  
                                    <Button variant="primary" onClick={() => dispatch(Add(data), setData(""))}>
                                        save
                                    </Button>
                                </Form.Group>


                            </Form>


                        </div>

                    </div>

                </div>

            </Container>

        </>
    )
}

export default First