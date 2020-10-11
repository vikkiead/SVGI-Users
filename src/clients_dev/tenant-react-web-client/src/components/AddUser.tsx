/** This component is for displaying each user in the record, passed to it from userList */
import React, { useState } from 'react';
import { IAction, IUser } from '../app.interfaces';

//create the type for the anticipated props to be passed from parent component
type Props = {
    handleCreateUser: Function,
    dispatch: React.Dispatch<IAction>
}

const AddUser: React.FC<Props> = (props) => {

    const initialUserState: IUser = {
        /*
        ?: string
     ?: string
     lastName?: string
     ?: string
     ?: string
     dateOfBirth?: Date
     isActive?: boolean;
     primaryEmailAddress?: string;
     isPrimaryEmailAddressVerified?: boolean;
     passwordSalt?: string;
     passwordHash?: string;
     isPasswordChangeRequired?: boolean;
     resetPasswordToken?: string;
     resetPasswordExpiration?: Date;
     primaryEmailVerificationToken?: string;
     otpEnabled?: boolean
     otpSecret?: string
     profile?: IProfile;
        */
       firstName: '',
       middleName: '',
       lastName: '',
       commonName: '',
       dateOfBirth: new Date(),
       isActive: true,
       primaryEmailAddress: '',
       isPrimaryEmailAddressVerified: true,
       passwordSalt: '',
       passwordHash: '',
       isPasswordChangeRequired:false,
       resetPasswordToken: '',
       resetPasswordExpiration: new Date(),
       primaryEmailVerificationToken: '',
       otpEnabled: true,
       otpSecret: '',
/*
     homeAddress?: string
     nationality?: string
     stateOfOrigin?: string
     photoId?: string
*/
       profile: {
        homeAddress: '',
        Nationality: '',
        stateOfOrigin: '',
        photoId: '',
            bulmaProperties: {
                primaryColor: '',
                primaryBackground: ''
            }
        }
    }

    //declare the state variable for user to be added from form. Notice that we are using an object containing the individual elements
    //We need to interact with them individually as state variable that will change in response to input onChange 
    const [user, setUser] = useState<IUser>({ ...initialUserState });

    //create a general onChange event handler for form inputs that fire onChange event
    //See https://reactjs.org/docs/events.html? for all kinds of events that can be handled in react
    const onChange = (event: React.FormEvent) => {
        const userState = user;//check out user in state as is
        //modify element in the state which has the same name as the input that fired this event. Pass the new value
        const target: HTMLInputElement | HTMLSelectElement = event.target as HTMLInputElement | HTMLSelectElement; //as is used here to cast
        userState[target.name] = target.value;
        setUser({ ...userState });//checkin the modified state
    }

    //function to handle form onSubmit event
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();//do not do the default form submit to the server
        props.handleCreateUser(user, props.dispatch);//call the handleAddUser function passed via props.
    }

    //function to handle form onCancel
    const onCancel = () => {
        //dispatch to state
        props.dispatch({ type: 'HandleCancelCreate' })
    }

    //Note where the above functions are used below within the return statement
        /*
     firstName?: string
     middleName?: string
     lastName?: string
     commonName?: string
     gender?: string
     dateOfBirth?: Date
     isActive?: boolean;
     primaryEmailAddress?: string;
     isPrimaryEmailAddressVerified?: boolean;
     passwordSalt?: string;
     passwordHash?: string;
     isPasswordChangeRequired?: boolean;
     resetPasswordToken?: string;
     resetPasswordExpiration?: Date;
     primaryEmailVerificationToken?: string;
     otpEnabled?: boolean
     otpSecret?: string
        */

    return (
        <div className="columns is-mobile">
            <div className="column is-two-thirds">
                <div className="box">
                    <form onSubmit={onSubmit}>
                        <legend>Add User:</legend>

                        <div className="field">
                            <label className="label">First Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Name input" name="firstName" value={user.firstName} onChange={onChange} required/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Middle Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Middle Name input" name="middleName" value={user.middleName} onChange={onChange} required/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Last Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Last name input" name="lastName" value={user.lastName} onChange={onChange} required/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Common Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Common name input" name="commonName" value={user.commonName} onChange={onChange} required/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Gender</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Gender" name="gender" value={user.gender} onChange={onChange} required/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Contact email</label>
                            <div className="control">
                                <input className="input" type="email" placeholder="Contact email input" name="primaryEmailAddress" value={user.primaryEmailAddress} onChange={onChange} required/>
                            </div>
                            <p className="help is-info">Enter a valid email here</p>
                        </div>

                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link">Submit</button>
                            </div>
                            <div className="control">
                                <button className="button is-link is-light" onClick={onCancel}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default AddUser;