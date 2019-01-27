import React, { Component } from 'react';
import './App.css';

const defaultState = {
  likes: 100,
  dislikes: 25,
  active: ''
};

class App extends Component {
  state = defaultState;

  handleClick = action => e => {
    e.preventDefault();

    if (this.state.active === action) {
      this.setState(defaultState);
    } else if (this.state.active !== action) {
      this.setState({
        ...defaultState,
        [action]: this.state[action] + 1,
        active: action
      });
    }
  };

  render() {
    const { active, dislikes, likes } = this.state;

    return (
      <div>
        <div>
          <h2>Like/Dislike</h2>
        </div>
        <style>{`
          .like-button, .dislike-button {
            font-size: 1rem;
            padding: 5px 10px;
            color: #585858;
            }

          .liked, .disliked {
            font-weight: bold;
            color: #1565c0;
          }
                    
          .active {
            background-color: grey;
          }
        `}</style>
        <button
          className={`like-button ${active === 'likes' ? 'liked' : ''}`}
          onClick={this.handleClick('likes')}
        >
          Like | <span className="likes-counter">{likes}</span>
        </button>
        <button
          className={`dislike-button ${
            active === 'dislikes' ? 'disliked' : ''
          }`}
          onClick={this.handleClick('dislikes')}
        >
          Dislike | <span className="dislikes-counter">{dislikes}</span>
        </button>
      </div>
    );
  }
}

export default App;
