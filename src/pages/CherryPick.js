import React, {Component} from 'react';
import Sentence from '../components/Sentence';
import Communicator from '../components/Communicator';
import './CherryPick.css';

export default class CherryPick extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            limit: 100,
            sentences: [],
            sentenceObject: {},
            submitDisabled: false,
            submitText: 'Odeslat',
        };

        this.communicator = new Communicator();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeSentence = this.changeSentence.bind(this);
        this.submitData = this.submitData.bind(this);
        this.updateButton = this.updateButton.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        this.processText();
    }

    processText() {
        let sentenceRegex = new RegExp(/[^\s][^.!?]+[.!?]+/g);
        let charRegex = new RegExp(/["()„”“‚‘…\d]/g);
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

    updateButton(status) {
        if (status === 'success') {
            this.setState({
                submitText: 'Uloženo, děkujeme za příspěvek!',
            });
        } else {
            this.setState({
                submitText: 'Nastala neočekávaná chyba, zkuste to později',
            });
        }
    }

    submitData() {
        let toSubmit = [];
        Object.keys(this.state.sentenceObject).map((objectKey, index) => {
            let currentSentence = this.state.sentenceObject[objectKey];
            if (currentSentence.submit === true) {
                toSubmit.push(currentSentence.value);
            }
        });
        this.setState({
            submitDisabled: true,
        });
        this.communicator.sendData(toSubmit, this.updateButton);
        /*fetch('http://localhost:4878/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(toSubmit)
        }).then(response => response.json())
            .then((response) => {
                this.setState({
                    submitDisabled: true,
                });
                if (response.status === 'written') {
                    this.setState({
                        submitText: 'Saved, thanks for your contribution!',
                    });
                } else {
                    this.setState({
                        submitText: 'Unexpected error occured, try again later',
                    });
                }
            }).catch(() => {
            this.setState({
                submitText: 'Unexpected error occured, try again later',
            });
        });*/
    }

    render() {
        return(
            <div className="pageContent">
                <p>Tento nástroj vybere z delšího souvislého textu, jako například článek nebo kniha, věty vhodné pro Common Voice.</p>
                <p>Používejte pouze texty dostupné jako volné dílo nebo pod licencí kompatibilní s CC-0.</p>
                <form onSubmit={this.handleSubmit}>
                    <textarea rows="10" name="text" placeholder="Souvislý text" onChange={(event) => {
                        this.setState({text: event.target.value});
                    }}/>
                    <input type="number" name="limit" placeholder="Limit vybraných vět (ve výchozím stavu 100)" onChange={(event) => {
                        this.setState({limit: event.target.value});
                    }}/>
                    <input type="submit" value="Vybrat věty"/>
                </form>
                <p>Zkontrolujte každou větu. Pokud je s ní něco špatně, můžete ji kliknutím na ni opravit nebo kliknutím na fajfku odebrat z vět určených k odeslání.</p>
                <div className="sentences">
                    {Object.keys(this.state.sentenceObject).map((objectKey, index) => <Sentence change={this.changeSentence} key={index} objectKey={objectKey} value={this.state.sentenceObject[objectKey]['value']}/>)}
                </div>
                <button onClick={this.submitData} disabled={this.state.submitDisabled} className="sentences-submit">{this.state.submitText}</button>
            </div>
        );
    }
}