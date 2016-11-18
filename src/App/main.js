import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Ken from './Ken.jsx';
import Timer from './Timer.jsx';
import TodoApp from './TodoApp.jsx';
import MarkdownEditor from './MarkdownEditor.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Ken name='ken' />, document.getElementById('ken'));
ReactDOM.render(<Timer />, document.getElementById('timer'));
ReactDOM.render(<TodoApp />, document.getElementById('todoApp'));
ReactDOM.render(<MarkdownEditor />, document.getElementById('markdownEditor'));

