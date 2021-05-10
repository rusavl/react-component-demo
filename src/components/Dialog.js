import React from 'react';
import ReactDOM from 'react-dom';

let dialogInstance = 0;

export default class Dialog extends React.Component {
  render() {
    return <div>{this.props.params}</div>;
  }

  static getInstance(params) {
    let div = document.createElement('div');
    div.classList.add('dialog-wrapper');
    ReactDOM.render(<Dialog params={params} />, div);
    document.body.appendChild(div);

    return {
      destory() {
        ReactDOM.unmountComponentAtNode(div);
        document.removeChild(div);
        div = null;
      }
    };
  }

  static show(params) {
    dialogInstance = dialogInstance || Dialog.getInstance(params);
    return dialogInstance;
  }

  static hide() {
    if (dialogInstance) {
      dialogInstance.destory();
      dialogInstance = null;
    }
  }
}
