import { Component } from 'react';
import './styles.css';

import { Posts } from '../../components/Posts';
import { Input } from '../../components/Input';

export class Home extends Component {
  state = {
    posts: [],
    todosPosts: [], 
    postsPerPage: 8, 
    searchValue: ''
  }

  async componentDidMount ( ) {
    await this.carregarPosts();
  }

  carregarPosts = async ( ) => {
    const { postsPerPage } = this.state;

    const postsResponse = await fetch('https://api.disneyapi.dev/characters')
    const postsJson = await postsResponse.json( )
    this.setState({ 
      posts: postsJson.data.slice(postsPerPage), 
      Posts: postsJson.data,
    }) 
  }


  handleChange = ( e ) => {
    const { value } = e.target
    this.setState({ searchValue: value }) 
  }
 
  render ( ) {
    const { posts, postsPerPage, todosPosts, searchValue } = this.state; 
    const noMorePost = postsPerPage >= Posts.length;

    const filteredPosts = !!searchValue ? 
      Posts.filter( post => post.name.toLowerCase().includes(searchValue.toLowerCase())) 
      : posts;

     return (
      <section className="container">

        <div className="search-container">
          <h1>Disney { searchValue } </h1>
          <Input 
            onChange={this.handleChange}
            value={searchValue}
          />
        </div>

       {filteredPosts.length > 0 && <Posts posts={filteredPosts}/>}
       {filteredPosts.length === 0 && <p>Não existem card's</p>}


      </section>
      
    )
  };
}


