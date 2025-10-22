import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({asset}) => {
    const [money, setMoney] = use(MoneyContext);
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name="Cousin 3" asset={asset}></Cousin>
                <Cousin name="Cousin 4"></Cousin>
                <button onClick={() => setMoney(money + 5000)}>Add Money</button>
            </section>
        </div>
    );
};

export default Aunt;