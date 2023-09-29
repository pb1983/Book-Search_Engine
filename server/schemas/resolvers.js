const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {

    Query: {

        me: async ({ parent, args, context }) => {
            if (context.user) {
                return await User.findOne({ _id: context.user._id })
            }
            throw AuthenticationError;
        },
    },

    Mutation: {

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },

        addUser: async (parent, { username, email, password }) => {
            console.log("hello")
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },


        saveBook: async (parent, { savedBooks }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    {
                        $push: {
                            savedBooks: { savedBooksInput },
                        },
                    },
                    { new: true }
                );

            }
            throw AuthenticationError;
        },

        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
                const user = await User.findOneAndDelete(
                    { _id: context.user.id },
                    { $pull: { savedBooks: bookId } },
                    { new: true }
                )
                return user
            }
            throw AuthenticationError;



        }
    }
}


