var GreeterMessage = React.createClass({
    render:  function(){
      var name = this.props.name;
      var message = this.props.message;

      return (
        //This is JSX CODE
        <div>
          <h1>Hello {name}!</h1>
          <p> {message} </p>
        </div>
      );
    }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault;

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (message.length > 0){
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates);
  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type='text' ref='name' placehold="Enter name"/>
        </div>
        <div>
          <textarea ref='message' placeholder="Enter message"></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});
var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'This is the default message'
    }
  },
  getInitialState: function(){
      return {
        name: this.props.name,
        message: this.props.message
      }
    },

  handleNewData: function(updates) {
    this.setState(updates);
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

var firstName = 'Liz';
var message = "Welcome to the coolest message ever"

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  //The "name" attribute is a prop
  //See line 3
  //Here we are passing a name in
  //getDefaultProps allows this attribute(prop)
  //to have a default value if none specified
  document.getElementById('app')
);
