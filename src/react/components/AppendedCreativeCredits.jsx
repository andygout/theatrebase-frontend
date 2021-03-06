import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { AppendedCoCreditedEntities } from '.';

const AppendedCreativeCredits = props => {

	const { creativeCredits } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;…&nbsp;</React.Fragment>

			{
				creativeCredits
					.map((creativeCredit, index) =>
						<React.Fragment key={index}>

							<React.Fragment>{ creativeCredit.get('name') }</React.Fragment>

							{
								creativeCredit.get('coCreditedEntities')?.size > 0 && (
									<AppendedCoCreditedEntities
										coCreditedEntities={creativeCredit.get('coCreditedEntities')}
									/>
								)
							}

						</React.Fragment>
					)
					.reduce((prev, curr) => [prev, '; ', curr])
			}

		</React.Fragment>
	);

};

AppendedCreativeCredits.propTypes = {
	creativeCredits: ImmutablePropTypes.list.isRequired
};

export default AppendedCreativeCredits;
