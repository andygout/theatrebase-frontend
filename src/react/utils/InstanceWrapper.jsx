import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import getDifferentiatorSuffix from '../../lib/get-differentiator-suffix';
import { InstanceDocumentTitle, InstanceLabel, PageTitle } from '../components';

class InstanceWrapper extends React.Component {

	render () {

		const { instance, children } = this.props;

		let pageTitleText = instance.get('name', '');

		pageTitleText += getDifferentiatorSuffix(instance.get('differentiator'));

		return (
			<React.Fragment>

				{
					instance.get('name') && instance.get('model') && (
						<InstanceDocumentTitle
							name={instance.get('name')}
							differentiator={instance.get('differentiator')}
							model={instance.get('model')}
						/>
					)
				}

				<InstanceLabel text={instance.get('model', '')} />

				<PageTitle text={pageTitleText} />

				{ children }

			</React.Fragment>
		);

	}

}

InstanceWrapper.propTypes = {
	instance: ImmutablePropTypes.map.isRequired,
	children: PropTypes.node.isRequired
};

export default InstanceWrapper;
