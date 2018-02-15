Import React from 'react';

class AddEvent extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      this.handleDate = this.handleDate.bind(this)
      this.handleEventName = this.handleTitle.bind(this)
      this.handleTime = this.handleTime.bind(this)
      this.handleWehre = this.handleWhere.bind(this)
      this.handleDescription = this.handleDescription.bind(this)
      this.addToCalender = this.addToCalender.bind(this)
    }
    handleDate(event){
      this.setState({
        Date: event.target.value
      })
    }
    handleTitle(event){
      this.setState({
        Date: event.target.value
      })
    }
    handleDate(event){
      this.setState({
        Date: event.target.value
      })
    }
    handleTitle(event){
      this.setState({
        Date: event.target.value
      })
    }
    handleTime(event){
      this.setState({
        Date: event.target.value
      })
    }
    handleWhere(event){
      this.setState({
        Date: event.target.value
      })
    }
    handleDescription(event){
      this.setState({
        Date: event.target.value
      })
    }
    addToCalender(){

      this.setState({
        date: '',
        title: '',
        time: '',
        where: '',
        description: ''
      })
    }

    render()
  }
}
export default AddEvent;
