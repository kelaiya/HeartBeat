import React, {Component} from 'react'
import { connect } from 'react-redux';
import store, {fetchUser} from '../store'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

// Home component is the initial page displayed by the app 
// Names of all the patients which be displayed on this page
//User can also sort the names by different factors

class Home extends Component {
  constructor(props){
    super(props)
    // srtKey will sort the names according to the type selected. 
    this.state = {
      sortKey: ""
    }
    this.handleSortChange = this.handleSortChange.bind(this);
  }
  
  handleSortChange(event){
    this.setState({ sortKey: event.target.value})
  }

  componentDidMount() {
    const userThunk = fetchUser();
    store.dispatch(userThunk);
  }
  
  render() {
   	var user = this.props.user;
    if(this.state.sortKey == "titleA-Z"){
      user.sort((a, b) => b.name < a.name);
    } else if(this.state.sortKey == "titleZ-A"){
      user.sort((a, b) => a.name < b.name);
    } 
    return (
        <div className="container">
          <div className="sort">
            {
              user ? <div>
                <div className="sort">
                  <form onSubmit={this.handleSortSubmit} className="sortclass">
                    <select value={this.state.value} onChange={this.handleSortChange} className="sortclass">
                      <option> SORT </option>
                      <option value="titleA-Z"> By Title (A-Z) </option>
                      <option value="titleZ-A"> By Title (Z-A) </option>
                    </select>
                  </form>
                </div>
              </div> : <h1 />
              }
          </div>  
            {
              user.map(function(data){
              	return (
              		<div key={data.id} className="Search-box">
              			<img src= {data.image} className="image" />
              			<Link to={`/${data.id}`}className="text-color">{data.name}</Link>
              		</div>
            		)
              })
            }
          </div>
        )
    }
}

const mapStateToProps = function(state){
	
  // state.user will give the names of all the patients.
	return {
		user : state.user
	}

}

export default connect(mapStateToProps)(Home);