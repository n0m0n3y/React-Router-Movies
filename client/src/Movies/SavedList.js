import React,{Component} from 'react';
import { Link } from 'react-router-dom';
export default class SavedList extends Component{

  render(){
    return(
      <div className="saved-list">
      <h3>Saved Movies:</h3>
      {this.props.list.map(movie => (
        <Link to={`/movies/${movie.id}`}>
        <span key={movie.id} className="saved-movie">{movie.title}</span>
        </Link>
      ))}
      <Link to="/" className="home-button"><div>Home</div></Link>
    </div>
  );
    
  }
}
