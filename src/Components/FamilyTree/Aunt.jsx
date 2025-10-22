import React from 'react';
import Cousin from './Cousin';

const Aunt = ({asset}) => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name="Cousin 3" asset={asset}></Cousin>
                <Cousin name="Cousin 4"></Cousin>
            </section>
        </div>
    );
};

export default Aunt;