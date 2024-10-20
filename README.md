# vpwa
Repository for group semestral project. Course Development of Progressive Web Applications (VPWA).

---
## Tasks
[x] design the web
[x] implement the designs
[x] log in and registration switching
[] create DB model
[] setup backend in node/Adonis
## Requirements
# -> Users
1. User login, register and logout
2. User sees list of channels, in which he's a member
3. User sends messages throug "command-line" which is a fixed element of the application. 
4. Creating a channel through "command-line" using /join "name of the channel".
5. User can revoke his member ship throug "/cancel"
6. User can address a private message throug "@username"
7. User can see the entire messages history
8. User is notified of every new message
9. User can set visibility status.
10. User can list all channel members through "/list"
11. If user has an active channel selected, he can see that someone is typing a message in the statebar
12. Users can kick someone from the channel using "/kick 'nickname'", if the user accumulates three “kicks” in the channel, he is expelled.   
13. User can only send messages in channels he's a member.
14. User has his own data as name, surname, a nickname and its emai.
# -> Channels
1. Channels can be private and public.
2. Any user can create a channel.
3. Only admin can add using "/invite".
4. Only admin can cancel the channel using "/quit".
# ----> private 
1. Only admin can delete using "/revoke".
# ----> public
1. Any User can invite other user using "/invite Nickname".
2. User can kick another user from the channel using "kick nickName".
User is banned permanently when has 3 kicks.
3. Admin can revoke an user "permanently" using "/kick nickname".
Admin can restore an user using "/invite nickname".
# -> Notifications
1. Notification has part of the message and the sender.
2. The notification is issued only if the application is not in the “visible” state.
3. The user can set to receive notifications only for "DM" or muted Notification.
4. If the offline mode is set, no notifications are received.
---
# Notes


This is your place to leave any notes you have about the project.
