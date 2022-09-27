import { GraphQLServer } from 'graphql-yoga';
import { mockUsers, mockPosts, mockComments } from './mockData';

// Type Definitions (schema)
const typeDefs = `
  type Query {
    users (query: String): [User!]!
    posts (query: String): [Post!]!
    comments: [Comment!]!
    me: User!
    post: Post!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    comments: [Comment!]!    
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
  }

`;

// Resolvers
const resolvers = {
	Query: {
		users(parent, args, ctx, info) {
			if (!args.query) return mockUsers;

			return mockUsers.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()));
		},
		posts(parent, args, ctx, info) {
			if (!args.query) return mockPosts;

			return mockPosts.filter(post => {
				const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
				const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());

				return isTitleMatch || isBodyMatch;
			});
		},
		comments(parent, args, ctx, info) {
			return mockComments;
		},
		me() {
			return {
				id: '101',
				name: 'Shahmir Khan Jadoon',
				email: 'shahmir@test.com',
				age: 30,
			};
		},
		post() {
			return {
				id: '512',
				title: 'Cricket',
				body: 'Pakistan won Cricket world cup of the year 1992',
				published: true,
			};
		},
	},
	Post: {
		author(parent, args, ctx, info) {
			return mockUsers.find(user => user.id === parent.author);
		},
		comments(parent, args, ctx, info) {
			return mockComments.filter(comment => comment.post === parent.id);
		},
	},
	User: {
		posts(parent, args, ctx, info) {
			return mockPosts.filter(post => post.author === parent.id);
		},
		comments(parent, args, ctx, info) {
			return mockComments.filter(comment => comment.author === parent.id);
		},
	},
	Comment: {
		author(parent, args, ctx, info) {
			return mockUsers.find(user => user.id === parent.author);
		},
		post(parent, args, ctx, info) {
			return mockPosts.find(post => post.id === parent.post);
		},
	},
};

const server = new GraphQLServer({
	typeDefs,
	resolvers,
});

server.start(() => console.log(`The GraphQL server is up and running at port 4000`));
