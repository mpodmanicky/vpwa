import { defineStore } from 'pinia';

export const useChannelStore = defineStore('channel', {
  state: () => ({
    channels: {}, 
  }),

  actions: {
    addChannel(newChannel) {
      if (!this.channels[newChannel.name]) {
        this.channels[newChannel.name] = newChannel;
      } else {
        console.error('Chanel already exist');
      }
    },

    deleteChannel(channelName) {
      if (this.channels[channelName]) {
        delete this.channels[channelName];
      } else {
        console.error('Channel not found');
      }
    },

    addUserToChannel(channelName, user) {
      if (this.channels[channelName]) {
        if (!this.channels[channelName].users[user.nickname]) {
          this.channels[channelName].users[user.id] = user;
        } else {
          console.error('User is already in the channel');
        }
      }
    },

    removeUserFromChannel(channelName, userNickname) {
      if (this.channels[channelName]) {
        if (this.channels[channelName].users[userNickname]) {
          delete this.channels[channelName].users[userNickname];
        } else {
          console.error('User not found');
        }
      }
    },
  },

  getters: {

    getUsersofChannel: (state) => (channelName) => {
      const channel = state.channels[channelName];
      return channel ? channel.users : {};
    },

    getNamesofChannels: (state) => {
      return Object.keys(state.channels);
    }
  }
});
