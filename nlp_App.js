// const e = React.createElement;

// class CodeEditor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       code: '',
//     };
//   }

//   handleCodeChange(event) {
//     this.setState({ code: event.target.value });
//   }

//   runCode() {
//     // Code execution logic goes here
//     console.log('Running code:', this.state.code);
//   }

//   render() {
//     return e(
//       'div',
//       null,
//       e('h1', null, 'Code Editor'),
//       e('textarea', { value: this.state.code, onChange: this.handleCodeChange.bind(this), rows: 10, cols: 80 }),
//       e('button', { onClick: this.runCode.bind(this) }, 'Run Code'),
//       e('h2', null, 'Output'),
//       e('pre', null, this.state.code)
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return e('div', { style: { margin: 'auto' } }, e(CodeEditor));
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('my_app'));
// root.render(e(App));


// const e = React.createElement;

// const codeEditorStyles = {
//   container: {
//     margin: 'auto',
//     width: '50vw',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundImage: "url('https://files.realpython.com/media/Python-vs-C_Watermarked.b9da21127ecc.jpg')", // Replace with the URL of your cool image
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },
//   editor: {
//     backgroundColor: 'rgba(0, 0, 0, 0.9)',
//     color: 'white',
//     padding: '20px',
//     borderRadius: '5px',
//   },
//   button: {
//     backgroundColor: 'black',
//     color: 'white',
//     fontSize: '16px',
//     padding: '10px 20px',
//     borderRadius: '5px',
//     border: 'none',
//     margin: '10px',
//     cursor: 'pointer',
//   },
// };

// class CodeEditor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       code: '',
//     };
//   }

//   handleCodeChange(event) {
//     const newCode = event.target.value;
//     this.setState({ code: newCode });
//   }

//   render() {
//     return e(
//       'div',
//       { style: codeEditorStyles.container },
//       e('h1', null, 'Code Editor'),
//       e('textarea', { value: this.state.code, onChange: this.handleCodeChange.bind(this), rows: 20, cols: 100, style: codeEditorStyles.editor }),
//       e('button', { style: codeEditorStyles.button }, 'Run Code'),
//       e('h2', null, 'Output'),
//       e('pre', null, '') // Render an empty <pre> element
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return e('div', null, e(CodeEditor));
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('my_app'));
// root.render(e(App));


const e = React.createElement;

const codeEditorStyles = {
  container: {
    margin: 'auto',
    width: '50vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: "url('https://files.realpython.com/media/Python-vs-C_Watermarked.b9da21127ecc.jpg')", // Replace with the URL of your cool image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    position: 'relative', // Add relative positioning to the container
  },
  editor: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    color: 'white',
    padding: '20px',
    borderRadius: '5px',
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '16px',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    margin: '10px',
    cursor: 'pointer',
  },
  output: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '10px',
    position: 'absolute',
    bottom: '80px', // Position the output at the bottom
    left: '50%', // Position the output at the center horizontally
    transform: 'translateX(-50%)', // Adjust the horizontal position
  },
};

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    };
  }

  handleCodeChange(event) {
    const newCode = event.target.value;
    this.setState({ code: newCode });
  }

  render() {
    return e(
      'div',
      { style: codeEditorStyles.container },
      e('h1', null, 'Code Editor'),
      e('textarea', { value: this.state.code, onChange: this.handleCodeChange.bind(this), rows: 20, cols: 100, style: codeEditorStyles.editor }),
      e('button', { style: codeEditorStyles.button }, 'Run Code'),
      e('div', { style: codeEditorStyles.output }, 'Output') // Render the 'Output' text inside a div with output styles
    );
  }
}

class App extends React.Component {
  render() {
    return e('div', null, e(CodeEditor));
  }
}

const root = ReactDOM.createRoot(document.getElementById('my_app'));
root.render(e(App));

