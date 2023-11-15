import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  maxCharacter = 50;

  onTitleChangeEventHandler(event) {
    const title = event.target.value;

    if (title.length <= this.maxCharacter) {
      this.setState({ title: title });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    const remainingCharacter = this.maxCharacter - this.state.title.length
    return (
      <div className="col-md-10 mt-5 py-2 px-5">
        <form
          className="input-box"
          onSubmit={this.onSubmitEventHandler}
        >
          <h3>Buat Catatan</h3>
          <label htmlFor="Title" className="d-block">Title: </label>
          <input
            type="text"
            placeholder="Title note Kamu..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler} />
          <p><strong>Sisa Text: {remainingCharacter}</strong></p>

          <label htmlFor="Deskripsi Note" className="d-block">Deskripsi Note: </label>
          <textarea
            cols="65"
            rows="5"
            placeholder="Deskripsi note kamu..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>

          <button className="button-submit" type="submit">Submit Note</button>
        </form>
      </div>
    )
  }
}

export default NoteInput;