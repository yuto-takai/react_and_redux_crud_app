import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

import { postEvent } from '../actions'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
 
class EventsNew extends Component {
  // セクション5 35あたりをもう一階あとで復習する
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    // touchedはフォームにタッチしたかどうかなどを見ているreduxFormが持ってる属性など
    const { input, label, type, meta: { touched, error } } = field
    return (
      <TextField 
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorTExt={touched && error}
        {...input}
        fullWidth={true}
      />
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = {
      margin: 12
    }
    return( 
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label='Title' name='title' type='text' component={this.renderField}></Field></div>
        <div><Field label='Body' name='body' type='text' component={this.renderField}></Field></div>
        <RaisedButton label='Submit' type='submit' style={style} disabled={pristine || submitting || invalid}/>
        <RaisedButton label='Cancel' style={style} containerElement={<Link to='/' />}/>
      </form>
     )
  }
}

// バリデーションを行う関数
const validate = values => {
  const errors = {}
  if (!values.title) errors.title = 'Enter a title, please.'
  if (!values.body) errors.body = 'Enter a body, please.'  
  return errors
}

// 例のごとくpostEventというアクションをpropsとして使えるようにする
const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)

 