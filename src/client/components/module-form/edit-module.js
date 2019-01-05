import React, { Component } from 'react';
import ModuleForm from './module-form';

// export default (props) => {
//     // Do the fetching, and render the form only when the data is here
//     return (
//         <moduleForm {...props} isEditing={true} />
//     )
// }

class EditModule extends Component {
    state = {
        isLoading: true,
        message: 'Hang in there...',
        moduleData: null
    }
    componentDidMount() {
        console.log(this.props.match.params.id)
        const url = '/api/modules'
        const id = this.props.match.params.id;
        // TODO handle failure (404)
        fetch(`${url}/${id}`)
            .then(
                response => response.json()
            ).then(
                data => this.setState({
                    isLoading: false,
                    moduleData: data
                })
            )
        // .catch(error => this.setState({
        //     message: error
        // })) 
    }
    render() {
        return (
            this.state.isLoading ?
                <div>{this.state.message}</div>
                :
                <ModuleForm {...this.props} moduleData={this.state.moduleData} id={this.props.match.params.id} isEditing={true} />
        )
    }
}

export default EditModule;