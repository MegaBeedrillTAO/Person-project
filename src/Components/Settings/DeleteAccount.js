import React, { Component } from 'react'
import { connect } from 'react-redux'
import {deleteUser} from '../../Ducks/Reducers/userReducer';
import {changePage} from '../../Ducks/Reducers/appReducer';

export class DeleteAccount extends Component {
    runDelete = () =>{
        this.props.deleteUser();
        this.props.changePage('/');
    }
    render() {
        return (
            <div className={'delete-account'}>
                <main>
                    Are you sure you want to delete your account?
                </main>
                <section>
                    <button onClick={this.runDelete}>Yes</button>
                    <button onClick={this.props.toggle}>No</button>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    page: reduxState.appReducer.currentPage
})

const mapDispatchToProps = {
    deleteUser,
    changePage
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount)
