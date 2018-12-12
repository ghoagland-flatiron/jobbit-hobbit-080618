import React from 'react';
import { connect } from 'react-redux'
import { updateHobbit } from '../actions/hobbitActions'

class EditForm extends React.Component {

  state = {
    id: 0,
    name: '',
    title: '',
    key_skill: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidUpdate (prevState, prevProps) {
    if (prevProps.id !== this.props.selectedHobbit.id) {
      this.setState({
        id: this.props.selectedHobbit.id,
        name: this.props.selectedHobbit.name,
        title: this.props.selectedHobbit.title,
        key_skill: this.props.selectedHobbit.key_skill
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.editMyHobbit(this.state)

    // fetch(`http://localhost:3000/hobbits/${this.state.id}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json'
    //   },
    //   body: JSON.stringify(this.state)
    // })
    //   .then(r => r.json())
    //   .then((res) => this.props.editMyHobbit(res))
  }


  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div> </div>
        <form onSubmit={this.handleSubmit}>
          <h5> Name: {this.state.name} </h5>
          <label>
            Title
          </label>
          <input name="title" value={this.state.title} onChange={this.handleChange} />
          <label>
            Key Skill
          </label>
          <input name="key_skill" value={this.state.key_skill} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ selectedHobbit }) => ({ selectedHobbit })
// const mapStateToProps = (state) => {
//   return {
//     selectedHobbit: state.selectedHobbit
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    editMyHobbit: (hobbit) => dispatch(updateHobbit(hobbit))
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(EditForm)
