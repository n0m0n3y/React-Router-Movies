import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard";

export default class Movie extends Component{
  constructor(props){
    super(props);
    this.state ={
      movie: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchMovie(id);
  }
   
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
    fetchMovie = id => {
      axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(()=>({ movie: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
    }
    //  componentWillRecevieProps(newProps){
    //    if (this.props.match.pharms.id !== newProps.match.pharms.id){
    //      this.fetchMovie(newProps.match.params.id);
    //    }
    //  }  

  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

   render(){
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }
    // const { movie } = this.state;
    return (
      <div className="save-wrapper">
      <MovieCard key={this.state.movie.id} movie={this.state.movie}/>
      <div className="save-button" onClick={()=> this.saveMovie()}>Save</div>
      </div>
    );
   } 
  }
//   const { title, director, metascore, stars } = movie;
//   return (
//     <div className="save-wrapper">
//       <div className="movie-card">
//         <h2>{title}</h2>
//         <div className="movie-director">
//           Director: <em>{director}</em>
//         </div>
//         <div className="movie-metascore">
//           Metascore: <strong>{metascore}</strong>
//         </div>
//         <h3>Actors</h3>

//         {stars.map(star => (
//           <div key={star} className="movie-star">
//             {star}
//           </div>
//         ))}
//       </div>
//       <div className="save-button">Save</div>
//     </div>
//   );
// }

// export default Movie;
