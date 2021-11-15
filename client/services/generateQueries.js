import { gql } from '@apollo/client';

export default {
  loginUser: () => {
    return gql`
      query Query($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
          id
          name
          email
        }
      }
    `;
  },

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

  getChats: (id) => {
    return gql`
      query Query {
        getMatched(UserId: ${id}) {
          id
          name
          email
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
