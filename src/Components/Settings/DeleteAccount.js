import React, { Component } from 'react'
import { connect } from 'react-redux'
import {deleteUser} from '../../Ducks/Reducers/userReducer';

export class DeleteAccount extends Component {
    runDelete = () =>{
        deleteUser();
        this.props.page = '/';
    }
    render() {
        return (
            <div className={'delete-account'}>
                <main>
                    Are you sure you want to delete your account?
                </main>
                <section>
                    <button>Yes</button>
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
    deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount)
