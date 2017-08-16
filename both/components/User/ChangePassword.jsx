ChangePassword=React.createClass({
    onSubmit(e){
        e.preventDefault();
        var oldPassword=this.refs.oldPassword.getDOMNode().value;
        var newPassword=this.refs.newPassword.getDOMNode().value;
        var confirmPassword=this.refs.confirmPassword.getDOMNode().value;
        if(newPassword==confirmPassword){
            Accounts.changePassword(oldPassword,newPassword,function(er){
                if(er){
                    Materialize.toast(er.reason,4000);
                }else{
                    Materialize.toast("Your password is changed!",4000);
                }
            })
        }
    },
    render(){
        return (
                <div className="row">
                    <h4 className="text-center">Change Password</h4>
                    <form onSubmit={this.onSubmit} className="col offset-s4 s4">
                        <div className="row">
                            <div className="input-field col s12">
                                <input ref="oldPassword" id="oldPassword" type="text" className="validate" />
                                <label htmlFor="oldPassword">Old Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input ref="newPassword" id="newPassword" type="password" className="validate" />
                                <label htmlFor="newPassword">New Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input ref="confirmPassword" id="confirmPassword" type="password" className="validate" />
                                <label htmlFor="confirmPassword">Confirm Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <button className="waves-effect waves-light btn btn-block">Submit</button>
                        </div>
                    </form>
                </div>
            );
        }
})