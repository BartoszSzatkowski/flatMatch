import { gql } from '@apollo/client';

export default {
  getNextMatch: (id) => {
    return gql`
        query Query {
            getNextMatch(UserId: ${id}) {
                user {
                    id
                    name
                }
                status
                desc {
                    text
                    factors
                }
            }
        }
        `;
  },

  getConversation: (userA, userB) => {
    return gql`
      query Query {
        getConversation(userA: ${userA},userB: ${userB}) {
          sender
          recipient
          content
        }
      }
    `;
  },
};
