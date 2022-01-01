import React from "react";
import { toast } from "react-toastify";
import Modal from "./ModalTerms";

export default class CreateFlashcardForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: ""
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.title = "Create a New Flashcard";
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleBodyChange(event) {
        this.setState({ body: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch("https://itp-404-final-project-api.herokuapp.com/api/flashcards", {
            method: "POST",
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    title: "",
                    body: ""
                });

                toast.success(`Flashcard "${json.title}" was successfully created`);
                this.props.history.push("/");
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="needs-validation">
                <h3>Create a New Flashcard</h3>
                <div className="my-3">
                    <label htmlFor="title" className="form-label">
                        Front
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                        placeholder="Word"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">
                        Back
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="body"
                        rows="3"
                        value={this.state.body}
                        onChange={this.handleBodyChange}
                        placeholder="Definition"
                        required
                    />
                </div>
                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label className="form-check-label" htmlFor="invalidCheck">
                        Agree to Terms & Conditions.
                    </label>
                </div>
                <div className="CreateFlashcardForm mb-3">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => {
                            this.setState({ isModalOpen: true });
                        }}
                    >
                        See Terms & Conditions
                    </button>
                    {this.state.isModalOpen && (
                        <Modal
                            title="Flashcards App Terms & Conditions"
                            body={() => {
                                return <p>You agree to losing your flashcard data after exiting the browser.</p>;
                            }}
                            onClose={() => {
                                this.setState({ isModalOpen: false });
                            }}
                        />
                    )}
                </div>
                <div id="modal-container"></div>
                <button type="submit" className="btn btn-dark">
                    Create
                </button>
                <div className="row mt-3">
                    <img src="https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-fluid justify-content-center mx-auto col-auto" alt="Pencils on light background"></img>
                </div>
            </form>
        );
    }
}
