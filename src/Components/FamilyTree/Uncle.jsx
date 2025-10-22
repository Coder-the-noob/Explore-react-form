import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name="Cousin 1"></Cousin>
                <Cousin name="Cousin 2"></Cousin>
            </section>
        </div>
    );
};

export default Uncle;