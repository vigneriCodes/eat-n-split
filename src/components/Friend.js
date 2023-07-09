import React from 'react';

import Button from './Button';

function Friend({ friend, onSelect }) {
	return (
		<li>
			<img alt="Some person's face" src={friend.image} />
			<h3>{friend.name}</h3>
			{friend.balance < 0 && (
				<p className='red'>
					You owe {friend.name} ${Math.abs(friend.balance)}
				</p>
			)}
			{friend.balance > 0 && (
				<p className='green'>
					{friend.name} owes you ${Math.abs(friend.balance)}
				</p>
			)}
			{friend.balance === 0 && <p>You and {friend.name} are even</p>}
			<Button onClick={() => onSelect(friend)}>Select</Button>
		</li>
	);
}

export default Friend;
