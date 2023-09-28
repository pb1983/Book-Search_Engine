const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
 
    Query: {

        me: async ({ parent, id, context }) => {
            if (context.user) {
            return await User.findOne({ _id: context.user._id })
            } 
            throw AuthenticationError;
},
    },

Mutation: {
    login: async (parent, { tech1, tech2 }) => {
        const matchup = await Matchup.create({ tech1, tech2 });
        return matchup;
    },
}

}

    
