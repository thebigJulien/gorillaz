import React from 'react';
import '../scss/App.scss';
import Albums from './album';
import Gorillaz from './gorillaz';
import Header from './header';

class App extends React.Component {
  render() {
    let gorillazAlbums = Gorillaz.results.albummatches.album;

    let albumsList = gorillazAlbums.map((el) => {
      return <Albums className="albums" key={el.url} data={el}></Albums>;
    });

    return <div className="app">
      <Header></Header>
      <div className="body">{albumsList}</div>
      </div>;
  }
}

export default App;
