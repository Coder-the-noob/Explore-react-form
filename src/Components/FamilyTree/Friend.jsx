import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Friend = () => {
    const [money] = use(MoneyContext);
    return (
        <div>
            <h3>Friend</h3>
            <p>Family Money: {money}</p>
        </div>
    );
};

export default Friend;