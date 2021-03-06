import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import {
	AppendedCreativeCredits,
	AppendedCreativeEntities,
	AppendedDepictions,
	AppendedFormat,
	AppendedPerformers,
	AppendedRoles,
	AppendedSubTheatres,
	AppendedTheatre,
	AppendedWritingCredits,
	InstanceLink
} from '.';

const List = props => {

	const { instances } = props;

	return (
		<ul className="list">

			{
				instances.map((instance, index) =>
					<li key={index}>

						{
							instance.get('uuid')
								? <InstanceLink instance={instance} />
								: <React.Fragment>{ instance.get('name') }</React.Fragment>
						}

						{
							instance.get('format') && (
								<AppendedFormat format={instance.get('format')} />
							)
						}

						{
							instance.get('theatre') && (
								<AppendedTheatre theatre={instance.get('theatre')} />
							)
						}

						{
							instance.get('subTheatre') && (
								<AppendedTheatre theatre={instance.get('subTheatre')} />
							)
						}

						{
							instance.get('subTheatres')?.size > 0 && (
								<AppendedSubTheatres subTheatres={instance.get('subTheatres')} />
							)
						}

						{
							instance.get('roles')?.size > 0 && (
								<AppendedRoles roles={instance.get('roles')} />
							)
						}

						{
							instance.get('writingCredits')?.size > 0 && (
								<AppendedWritingCredits writingCredits={instance.get('writingCredits')} />
							)
						}

						{
							instance.get('creativeCredits')?.size > 0 && (
								<AppendedCreativeCredits creativeCredits={instance.get('creativeCredits')} />
							)
						}

						{
							instance.get('creativeEntities')?.size > 0 && (
								<AppendedCreativeEntities creativeEntities={instance.get('creativeEntities')} />
							)
						}

						{
							instance.get('depictions') && (
								<AppendedDepictions depictions={instance.get('depictions')} />
							)
						}

						{
							instance.get('performers')?.size > 0 && (
								<AppendedPerformers performers={instance.get('performers')} />
							)
						}

						{
							instance.get('qualifier') && (
								<React.Fragment>&nbsp;({instance.get('qualifier')})</React.Fragment>
							)
						}

					</li>
				)
			}

		</ul>
	);

};

List.propTypes = {
	instances: ImmutablePropTypes.list.isRequired
};

export default List;
