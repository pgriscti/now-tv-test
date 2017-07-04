import React from 'react';
import User from '../../User';
import ReactTooltip from 'react-tooltip';
import { Grid, Row, Col } from 'react-flexbox-grid';
import moment from 'moment';

const MessageListItem = ({ message, user }) => {
    const formattedTimestamp = moment(message.timestamp).format('DD/MM/YYYY');

    return (
        <div>
            <Grid fluid>
                <Row>
                    <Col md={2}>
                        <User user={user} />
                    </Col>
                    <Col md={10}>
                        <p data-tip={user.email}>{message.message}</p>
                        <ReactTooltip />
                        {formattedTimestamp}
                    </Col>
                </Row>
            </Grid>
            <hr />
        </div>
    );
};

export default MessageListItem;