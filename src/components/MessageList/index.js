import React, { Component } from 'react';
import MessageListItem from './MessageListItem';
import { connect } from 'react-redux';
import { sortBy } from 'lodash';

class MessageList extends Component {

    render() {

        if (!this.props.messages) {
            return <div>No Messages</div>
        }
        const sortedList = sortBy(this.props.messages, ['timestamp']);

        return (
            <div>
                {
                    sortedList.length > 0
                        ? sortedList.map((item, index) => <MessageListItem key={index} message={item} user={this.props.users[item.userId]} />)
                        : <div key={1}>No Messages Found.</div>
                }
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        messages: state.service.messages,
        users: state.users.data
    }
};

export default connect(mapStateToProps, null)(MessageList);