import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard><CommentDetail author="Sam" timeAgo="Today at 4:30pm" blogPost="Hello" avatar={faker.image.avatar()}/></ApprovalCard>
            <ApprovalCard><CommentDetail author="Alex" timeAgo="Today at 9:30pm" blogPost="Hi" avatar={faker.image.avatar()}/></ApprovalCard>
            <ApprovalCard><CommentDetail author="Bob" timeAgo="Today at 1:30pm" blogPost="Hola" avatar={faker.image.avatar()}/></ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));

