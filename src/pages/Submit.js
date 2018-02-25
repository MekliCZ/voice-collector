import React, {Component} from 'react';
import Communicator from "../components/Communicator";

export default class Submit extends Component {
    constructor() {
        super();

        this.state = {
            sentences: [],
            submitText: 'Odeslat',
            submitDisabled: false,
        };

        this.communicator = new Communicator();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateButton = this.updateButton.bind(this);
        this.processText = this.processText.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.processText();
    }

    processText() {
        let sentences = this.state.sentences.split('\n');
        let finalSentences = [];
        sentences.forEach((sentence) => {
            let passed = true;
            if (sentence.length <= 2) {
                passed = false;
            }
            if (passed === true) {
                finalSentences.push(sentence);
            }
        });
        this.setState({
            submitDisabled: true,
        });
        this.communicator.sendData(finalSentences, this.updateButton);
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

    render() {
        return (
            <div className="pageContent">
                <p>Používejte pouze texty dostupné jako volné dílo nebo pod licencí kompatibilní s CC-0.</p>
                <form onSubmit={this.handleSubmit}>
                    <textarea rows="10" name="sentences" placeholder="Jedna věta na řádek" onChange={(event) => {
                        this.setState({sentences: event.target.value});
                    }}/>
                    <input disabled={this.state.submitDisabled} type="submit" value={this.state.submitText}/>
                </form>
            </div>
        );
    }
}