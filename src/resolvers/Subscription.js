const Subscription = {
	comment: {
		subscribe(parent, { postId }, { db, pubsub }, info) {
			const postExists = db.posts.find(post => post.id === postId && post.published);

			if (!postExists) {
				throw new Error('Post does not exist');
			}

			return pubsub.asyncIterator(`comment ${postId}`); // Channel name: "comment 44" (postId = 44)
		},
	},
	post: {
		subscribe(parent, args, { pubsub }, info) {
			return pubsub.asyncIterator('post');
		},
	},
};

export { Subscription as default };
