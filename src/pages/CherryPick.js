import React, {Component} from 'react';
import Sentence from '../components/Sentence';
import './CherryPick.css';

export default class CherryPick extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            limit: 100,
            sentences: [],
            sentenceObject: {},
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeSentence = this.changeSentence.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.processText();
    }

    processText() {
        let sentenceRegex = new RegExp(/[^\s][^.!?]+[.!?]+/g);
        let charRegex = new RegExp(/[\"\(\)…\d]/g);
        let sentences = this.state.text.match(sentenceRegex);
        let shortSentences = [];
        sentences.forEach((item) => {
            if (item.length < 60 && !item.match(charRegex)) {
                shortSentences.push(item);
            }
        });
        let finalSentences = shortSentences.slice(0, this.state.limit);
        let finalSentenceObject = {};
        finalSentences.forEach((item, key) => {
            finalSentenceObject[key] = {
                submit: true,
                value: item,
            };
        });
        this.setState({
            sentences: finalSentences,
            sentenceObject: finalSentenceObject,
        });
    }

    changeSentence(key, val) {
        let sentences = this.state.sentenceObject;
        sentences[key] = val;
        this.setState({
            sentenceObject: sentences,
        });
    }

    render() {
        return(
            <div className="pageContent">
                <p>This tool will extract sentences appropriate for Common Voice from longer text, like book or article.</p>
                <form onSubmit={this.handleSubmit}>
                    <textarea rows="10" name="text" placeholder="Text to cherry pick" onChange={(event) => {
                        this.setState({text: event.target.value});
                    }}/>
                    <input type="number" name="limit" placeholder="Sentence limit (default 100)" onChange={(event) => {
                        this.setState({limit: event.target.value});
                    }}/>
                    <input type="submit" value="Cherry pick"/>
                </form>
                <p>Please, check if extracted sentences are OK. If they are not, you can either edit it just by clicking on it, or click on the checkmark which will remove the sentence from submitted sentences.</p>
                <div className="sentences">
                    {Object.keys(this.state.sentenceObject).map((objectKey, index) => <Sentence change={this.changeSentence} key={index} objectKey={objectKey} value={this.state.sentenceObject[objectKey]['value']}/>)}
                </div>
                <button className="sentences-submit">Submit</button>
            </div>
        );
    }
}