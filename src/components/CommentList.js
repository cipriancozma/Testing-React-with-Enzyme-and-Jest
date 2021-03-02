import React from 'react';
import { connect } from 'react-redux';

class CommentList extends React.Component {
     renderComments(){
        return this.props.comments.map(comment => {
            return <li key={comment}>{comment}</li>})
    }
    render() {
        return <div>
        <ul>
            {this.renderComments()}
        </ul>
    </div>
    }
}

// const CommentList = () => {

//     const renderComments = () => {
//         return comments.map(comment => {
//             return <li key={comment}>{comment}</li>})
//     }

//     return <div>
//         <ul>
//             {renderComments()}
//         </ul>
//     </div>
// }

const mapStateToProps = (state) => {
    return { comments: state.comments}
}

export default connect(mapStateToProps)(CommentList);