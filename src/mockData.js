const mockUsers = [
	{
		id: '101',
		name: 'Shahmir Khan Jadoon',
		email: 'shahmir@test.com',
		age: 30,
	},
	{
		id: '102',
		name: 'Suleman Ayub',
		email: 'suleman@i2c.com',
		age: 25,
	},
	{
		id: '150',
		name: 'Syed Talha Masood',
		email: 'talha@remotebase.com',
		age: 35,
	},
];

const mockPosts = [
	{
		id: 501,
		title: 'Cricket',
		body: 'Pakistan won Cricket World Cup in year 1992',
		published: true,
		author: '101',
	},
	{
		id: 502,
		title: 'Football',
		body: 'John Terry retires from Chelsea FC',
		published: false,
		author: '101',
	},
	{
		id: 525,
		title: 'Basketball',
		body: 'Lebron James play in LA Lakers',
		published: true,
		author: '150',
	},
];

const mockComments = [
	{
		id: 1001,
		text: 'Nice comment',
		author: '101',
		post: 502,
	},
	{
		id: 1002,
		text: "That's a nice post",
		author: '150',
		post: 502,
	},
	{
		id: 1003,
		text: 'Working perfectly',
		author: '102',
		post: 501,
	},
	{
		id: 1004,
		text: 'Such a helpful post',
		author: '102',
		post: 525,
	},
	{
		id: 1005,
		text: 'Write more posts like this',
		author: '102',
		post: 502,
	},
];

export { mockUsers, mockPosts, mockComments };
