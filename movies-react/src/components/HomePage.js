import React from 'react';
import {connect} from "react-redux"
import {
    popularMovies,
    // getMovie
} from "../actions"
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';


class FullPageIntroWithFixedTransparentNavbar extends React.Component {
    componentWillMount(){
        this.props.popularMovies() 
      }
    renderPopularMovies(){
        let mov = this.props.movies.movies
        // console.log(mov)
        let random = Math.floor(Math.random() * (19 - 0)) + 0
        for(let i = 0; i < mov.length; i++){
            if(mov.length !== 0 && mov.indexOf(mov[i]) === random)
            mov = mov[i]
       
          }
          if(mov.backdrop_path !== null || mov.backdrop_path !== undefined)
        return mov.backdrop_path
        else return "https://wallpapercave.com/wp/wp3891853.jpg"
     
    }

    //this.renderPopularMovies() === "https://wallpapercave.com/wp/wp3891853.jpg" 

  render() {
    const url = `https://image.tmdb.org/t/p/w1280/`
    return (
        
      <div>
        <header>
        {this.renderPopularMovies() === "https://wallpapercave.com/wp/wp3891853.jpg" ? 
        <MDBView src="https://wallpapercave.com/wp/wp3891853.jpg">
        <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
          {/* <h2>This Navbar is fixed</h2>
          <h5>It will always stay visible on the top, even when you scroll down</h5>
          <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
          <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p> */}
        </MDBMask>
      </MDBView>
      :
      <MDBView src={`${url}${this.renderPopularMovies()}`}>
      
      <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
        {/* <h2>This Navbar is fixed</h2>
        <h5>It will always stay visible on the top, even when you scroll down</h5>
        <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
        <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p> */}
      </MDBMask>
    </MDBView>
      }
         
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state){
    return{
      movies: state.movies 
    }
  }

export default connect(mapStateToProps, {popularMovies})(FullPageIntroWithFixedTransparentNavbar)