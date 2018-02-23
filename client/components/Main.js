import React, {Component} from 'react'
import { connect } from 'react-redux';
import store, {fetchUser} from '../store'
import { Link } from 'react-router-dom';

// Main component is the initial page displayed by default 

class Main extends Component {

   componentDidMount() {
    const userThunk = fetchUser();
    store.dispatch(userThunk);
}
   render() {
   	console.log("component", this.props.images)
   	var user = this.props.user;
        return (
            <div className="container">
                  	{
            		user.map(function(data){
            			return (
            			        <div key={data.id}>
            									<img src= {data.image} />
            									<h2> Welcome {data.name} to the world of happiness </h2>
            									<Link to={`/appointment/${data.id}`}>Upcoming Appointments</Link>
            							</div>
          							)
            		})
            	}
            	
            </div>
        )
    }
}

const mapStateToProps = function(state, ownProps){
	let people = state.user;
  const name = ownProps.match.params.name
  if(name) var user = people.filter(data => data.name == name)
  return {
    user
  }

}

export default connect(mapStateToProps)(Main);