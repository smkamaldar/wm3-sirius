import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Fullscreen from "react-full-screen"

class SingleStarPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            star: {},
            isOpen: false,
            modalIsOpen: false,
            isFullscreen: false
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openFullscreen = this.openFullscreen.bind(this);

    }

openModal() {
    this.setState({modalIsOpen: true});
  }

    afterOpenModal() { 
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    openFullscreen() {
        this.setState({isFullscreen: true});
    }

    closeFullscreen() {
        this.setState({isFullscreen: false});
    }

    render() {
        return (
            <div>
                <button onClick={this.openModal}>Open Modal</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    style={customStyles}
                >
                    <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                    <button onClick={this.closeModal}>close</button>
                    <button onClick={this.openFullscreen}>Fullscreen</button>
                    <button onClick={this.closeFullscreen}>Close Fullscreen</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </Modal>
                <Fullscreen enabled={this.state.isFullscreen}>
                    <div>I am a fullscreen modal</div>
                </Fullscreen>
            </div>
        );
    }
}

ReactDOM.render( <SingleStarPage />, document.getElementById("root"));