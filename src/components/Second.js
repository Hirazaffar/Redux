import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import addReducer from '../reducer/AddReducer';

const Second = () => {

    const list = useSelector((state) => state.addReducer.list);

    return (
        <div>

           
            <div className="container my-5 mx-5">
            <h2 className="text-center"> Information you entered : </h2>
                <div className="row pt-5">
                    <div className="col-md-6 col-10 mx-auto">
                        
                            <div>
                                <p
                                placeholder=" text">
                                    {
                                        list.map((info) => {
                                            return (
                                                <div key={info.id}>
                                                    <p>
                                                        {info.data}
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </p>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second