import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './components/Dialog';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.showDialog = this.showDialog.bind(this);
  }

  showDialog() {
    // console.log('showDialog');
    Dialog.show('hahahaha');
  }
  render() {
    return (
      <div className="main-container">
        <header style={{padding: 10, fontSize: 24}}>react component demo</header>
        <button onClick={this.showDialog}>showDialog</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
