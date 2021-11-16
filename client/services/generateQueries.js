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
      query Query($UserId: Int!) {
        getNextMatch(UserId: $UserId) {
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

  updateMatch: () => {
    return gql`
      mutation Mutation($thisId: Int!, $otherId: Int!, $status: Int!) {
        updateMatch(thisId: $thisId, otherId: $otherId, status: $status)
      }
    `;
  },

  createMessage: () => {
    return gql`
      mutation Mutation($sender: Int!, $recipient: Int!, $content: String!) {
        createMessage(sender: $sender, recipient: $recipient, content: $content)
      }
    `;
  },
};
