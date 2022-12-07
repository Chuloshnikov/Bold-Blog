import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import { useParams } from "react-router-dom";


export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

class ProfileContainer extends React.Component {
    
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "8764743T";
        }
        axios.get(`https://randomuser.me/api/?results}` + userId)
            .then(response => {
                this.props.setUserProfile(response.data.results);
                
            });
    }
    
    
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>    
            </div>
            )
        }
}

let mapStateToProps = (state) => ({
    profile:state.profilePage.profile
}); 



let WithUrlDataContainerComponenet = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponenet);