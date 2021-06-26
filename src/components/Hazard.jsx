import React from 'react';
import PropTypes from 'prop-types';

const YesNo = new Map([
    [true, 'YES 😱'],
    [false, 'nope']
]);

export default function Hazard({ yes }) {
    return <span className="hazard">{YesNo.get(yes)}</span>;
}

Hazard.propTypes = {
    yes: PropTypes.bool.isRequired
};
