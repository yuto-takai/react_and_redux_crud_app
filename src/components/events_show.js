import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

import { getEvent, deleteEvent, putEvent } from '../actions'
import { Link } from 'react-router-dom'
 
class EventsShow extends Component {
  // セクション5 35あたりをもう一階あとで復習する
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    // touchedはフォームにタッチしたかどうかなどを見ているreduxFormが持ってる属性など
    const { input, label, type, meta: { touched, error } } = field
    return (
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span>{error}</span>}
      </div> 
    )
  }

  async onSubmit(values) {
    // await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return( 
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label='Title' name='title' type='text' component={this.renderField}></Field></div>
        <div><Field label='Body' name='body' type='text' component={this.renderField}></Field></div>
        <div>
          <input type='submit' value='Submit' disabled={pristine || submitting} />
          <Link to='/'>Cancel</Link>
        </div>
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
// const mapDispatchToProps = ({ postEvent })

export default connect(null, null)(
  reduxForm({ validate, form: 'eventShowForm' })(EventsShow)
)

 