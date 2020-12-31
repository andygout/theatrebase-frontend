import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { InstanceFacet, List } from '../../components';
import { InstanceWrapper } from '../../utils';

class Person extends React.Component {

	render () {

		const { person } = this.props;

		const playtexts = person.get('playtexts');
		const subsequentVersionPlaytexts = person.get('subsequentVersionPlaytexts');
		const sourcingPlaytexts = person.get('sourcingPlaytexts');
		const productions = person.get('productions');

		return (
			<InstanceWrapper instance={person}>

				{
					playtexts?.size > 0 && (
						<InstanceFacet labelText='Playtexts'>

							<List instances={playtexts} />

						</InstanceFacet>
					)
				}

				{
					subsequentVersionPlaytexts?.size > 0 && (
						<InstanceFacet labelText='Subsequent versions of their playtexts'>

							<List instances={subsequentVersionPlaytexts} />

						</InstanceFacet>
					)
				}

				{
					productions?.size > 0 && (
						<InstanceFacet labelText='Productions'>

							<List instances={productions} />

						</InstanceFacet>
					)
				}

				{
					sourcingPlaytexts?.size > 0 && (
						<InstanceFacet labelText='Playtexts as source material writer'>

							<List instances={sourcingPlaytexts} />

						</InstanceFacet>
					)
				}

			</InstanceWrapper>
		);

	}

}

Person.propTypes = {
	person: ImmutablePropTypes.map.isRequired
};

const mapStateToProps = state => ({
	person: state.get('person')
});

export default connect(mapStateToProps)(Person);
