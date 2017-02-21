import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export class Login extends React.Component {
    
    constructor (props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
    }

    onLogin() {
        var {dispatch} = this.props;

        dispatch(actions.startLogin());
    }


    render () {
        return(
            <div>
            <h1 className="page-title">THE TODO APP</h1>

                <div className="row">
                    <div className="columns small-centered small-10 medium-6 large-4">
                        <div className="callout callout-auth">
                            <h3>
                             Login Page
                            </h3>  

                            <p>Login with GitHub or Facebook Account Below</p> 
                            <button className="button" onClick={this.onLogin}>Login with GitHub</button>  
                                           
                        </div>                   
                    </div>           
                </div>
                
                
            </div>
        );
    }

}
//<button className="button" onClick={this.onLogin}>Login with FaceBook</button> 
export default Redux.connect()(Login);
