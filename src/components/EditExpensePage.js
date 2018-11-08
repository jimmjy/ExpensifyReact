import React from 'react';

const EditExpensePage = (props) => {
    const message = props.match.params.id ? `Editing current file ${props.match.params.id}` : `This is the edit expenses page and that expense is not found`;

    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

export default EditExpensePage;