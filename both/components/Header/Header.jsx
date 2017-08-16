Header = React.createClass({
  render() {
    var navStyle = {
      backgroundColor: "#3f51b5", 
      paddingLeft: "12px"
    };
    var navOptions;
    if(User.isLoggedIn()){
      navOptions=(
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a onClick={this.logout} href="/logout">Logout</a></li>
          </ul>
      )
    }else{
      navOptions=(
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
      )
    }
    return (
      <nav style={navStyle}>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">App Name Here</a>
          {navOptions}
        </div>
      </nav>
    );
  },
  logout(){
    Meteor.logout(function(er){
      if(er){
        Materialize.toast(er.reason,4000);
      }else{
        this.setState({isLoggedIn:!this.state.isLoggedIn})
        FlowRouter.go('/');
      }
    }.bind(this));
  },
  getInitialState(){
    return{
      isLoggedIn:User.isLoggedIn()
    };
  }
});
