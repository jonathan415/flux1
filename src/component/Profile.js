import React, { Component } from 'react';
import MyAction from '../actions/MyAction.js';


class Profile extends Component {

    changeName() {
        MyAction.changeName('ben');
    }

    changeAge() {
        MyAction.changeAge('88');
    }

    changeAgeAndGender(newAge, newGender) {
        MyAction.changeAge(newAge);
        MyAction.changeGender(newGender);
    }

    render() {
        let hobbies = [];
        if( this.props.hobbies ){
            hobbies = this.props.hobbies;
        }

        return(
            <div>
                <button onClick={this.changeName.bind(this)}>Change My Name</button>
                <br />
                My name is {this.props.name}
                <br />

                <button onClick={() => {MyAction.changeAgeAndGender(23, 'female')}}>Change My Age</button>
                <br />
                My age is {this.props.age}
                <br />

                <button onClick={this.changeAgeAndGender.bind(this, 24, 'female2')}>Change My Age and Gender</button>
                <br />
                My age is {this.props.age}. My gender is: {this.props.gender}
                <br />

                <button>Change My Gender</button>
                <br />
                My name is {this.props.gender}
                <br />


                <button>Change City</button>
                <br />
                My name is {this.props.city}
                <br />

                <button>Change My State</button>
                <br />
                My name is {this.props.state}
                <br />

                <button>Change My Country</button>
                <br />
                My name is {this.props.country}
                <br />

                <button>Change My Hobbies</button>
                <br />
                    <ul>
                        {
                            hobbies.map((value, key) => {
                                return <li key={key}>{value}</li>
                            })
                        }
                    </ul>
                <br />

            </div>
        );
    }

}

export default Profile;
