import React from 'react'
import RichTextEditor from './Editor'
import style from './EditorComponent.module.css'
import Cookies from 'js-cookie'
import { EditorState } from 'draft-js';

export default class EditorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          editorState: EditorState.createEmpty()
        };
        this.onChange = (editorState) => this.setState({editorState});
        this.setText = this._setText.bind(this);
      }
    
    _setText(e) {
        e.preventDefault()
        const text = new RichTextEditor().setCookie()
        console.log(text)
        Cookies.set('text', text)
    }

    render() {
        const editorState = this.state;
        return (
            <div className={style.editorComponent}>
                <RichTextEditor editorState={editorState} onChange={this.onChange} ref="content"/>
                <div className={style.btnDiv}>
                    <button>X</button>
                    <button onClick={(e) => this.setText(e)}>S</button>
                </div>
            </div>
        )
    }
}