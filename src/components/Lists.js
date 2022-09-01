import React, { useLayoutEffect } from 'react';
import List from './List';
const Lists = () => {
    const relavtive = [
        { id: 1, name: "Rohan", place: "Adderss1" },
        { id: 2, name: "Mukesh", place: "Adderss2" },
        { id: 3, name: "Suresh", place: "Adderss3" },
        { id: 4, name: "Mahesh", place: "Adderss4" },
        { id: 5, name: "Rakesh", place: "Adderss5" },
        { id: 6, name: "Rajkumar", place: "Adderss6" },
    ]
    return (
        <div>
            <div className='list'>
                <b> <ul>
                    <li>S.No</li>
                    <li>Name</li>
                    <li>Address</li>
                </ul></b>
            </div>
            <div className='list1'>
                <ul>
                    {
                        relavtive.map((relavtive) =>
                            <List key={relavtive.id} relavtive={relavtive} />
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
export default Lists;