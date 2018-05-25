import React from 'react';
import { node, string } from 'prop-types';

import LyspareIkon from '@sb1/ffe-icons-react/lib/lyspare-ikon';

import BaseMessage from './BaseMessage';

const iconStyles = {
    width: '40px',
    height: '40px',
};

const TipsMessage = props => (
    <BaseMessage
        type="tips"
        icon={<LyspareIkon style={iconStyles} />}
        {...props}
    />
);

TipsMessage.propTypes = {
    /** The content of the message box */
    children: node,
    /** Any extra class names to the wrapping DOM node */
    className: string,
    /**
     * Deprecated. Use `children` instead.
     * @deprecated
     */
    content: node,
    /** The icon to show. Has a default value, but can be overridden */
    icon: node,
    /** An optional title for the message */
    title: node,
};

export default TipsMessage;
