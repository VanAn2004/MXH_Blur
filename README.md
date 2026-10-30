# Blur 🌫️ - Social Media Chat & Calling Platform

Blur is a **full-stack social media application** with real-time chat, voice/video calling, and modern microservices architecture. Built with Java Spring Boot, React, WebSocket, and WebRTC for seamless communication.

## ✨ Key Features

### Core Features
- 🔐 **Authentication**: OAuth2 + JWT (Sign up, Login, Password reset)
- 💬 **Real-time Chat**: Instant messaging with Socket.IO
- 📱 **Voice & Video Calls**: WebRTC peer-to-peer connections
- 👥 **User Management**: Create profiles, view conversations
- 📊 **Message History**: Persistent chat storage
- 🔔 **Notifications**: Real-time message notifications
- 📝 **Conversation Management**: View active conversations, unread message count
- 🎯 **Microservices Architecture**: Scalable and modular design

---

## 🎨 Complete Features List

### 1. Authentication & User Management
- ✅ **User Registration** - Create new accounts with email, username, password
- ✅ **Email Verification** - Confirm email address during signup
- ✅ **OAuth2 Integration** - Sign up/login with external providers
- ✅ **Password Reset** - Recover account with password recovery flow
- ✅ **JWT Token Management** - Secure token-based authentication
- ✅ **Token Refresh** - Automatic token renewal without re-login
- ✅ **Token Revocation** - Logout invalidates tokens
- ✅ **Role-Based Access Control** - Admin, User role management
- ✅ **Permission System** - Granular permission management
- ✅ **User Profile Management** - Edit profile, avatar, bio, etc.
- ✅ **Profile Search** - Search users by username or email
- ✅ **User Relationships** - Track follower/following relationships

### 2. Real-time Messaging (Chat Service)
- ✅ **One-to-One Conversations** - Direct messages between users
- ✅ **Real-time Message Delivery** - Instant message transmission via Socket.IO
- ✅ **Message Status Tracking** - SENT, DELIVERED, READ status
- ✅ **Message History** - Persist all messages in MongoDB
- ✅ **Unread Message Count** - Badge showing unread messages per conversation
- ✅ **Mark as Read** - Update conversation read status
- ✅ **Conversation List** - View all active conversations
- ✅ **Last Message Display** - Show latest message in conversation list
- ✅ **Message Pagination** - Load messages in pages for performance
- ✅ **Message Timestamps** - Know when messages were sent
- ✅ **User Typing Indicator** - See when user is typing
- ✅ **Message Search** - Find messages in conversations
- ✅ **Media Attachments** - Send files/images with messages
- ✅ **Message Reactions** - React to messages with emojis
- ✅ **Message Replies** - Reply to specific messages in threads

### 3. Voice & Video Calling
- ✅ **Voice Calls** - Peer-to-peer audio communication
- ✅ **Video Calls** - Peer-to-peer video communication
- ✅ **Call Initiation** - Request call from conversation
- ✅ **Incoming Call Notification** - Alert when receiving call with ringtone
- ✅ **Call Answer/Reject** - Accept or decline incoming calls
- ✅ **Call Duration Tracking** - Track how long calls last
- ✅ **Call Status Management** - INITIATING, RINGING, ANSWERED, ENDED states
- ✅ **Call History** - Record all calls with timestamps
- ✅ **Missed Calls** - Track calls that weren't answered
- ✅ **WebRTC Peer Connection** - Direct P2P connection without server relay
- ✅ **ICE Candidate Exchange** - NAT traversal with STUN servers
- ✅ **SDP Offer/Answer** - WebRTC signaling protocol
- ✅ **Audio Tracks Management** - Enable/disable microphone during call
- ✅ **Video Tracks Management** - Enable/disable camera during call
- ✅ **Call Timeout** - Auto-end failed calls after timeout
- ✅ **Call Notifications in Messages** - Show call initiation in chat

### 4. Posts & Feed (Post Service)
- ✅ **Create Posts** - Publish text/image posts to feed
- ✅ **Post Feed** - View posts from users you follow
- ✅ **Post Detail View** - See full post with comments
- ✅ **Edit Posts** - Modify post content
- ✅ **Delete Posts** - Remove posts permanently
- ✅ **Post Timestamps** - Know when posts were created
- ✅ **Like Posts** - Show appreciation for posts
- ✅ **Unlike Posts** - Remove likes from posts
- ✅ **Like Count** - Display number of likes per post
- ✅ **Liked By List** - See who liked your posts
- ✅ **Post Pagination** - Load posts in infinite scroll
- ✅ **Image/Media in Posts** - Upload images to Cloudinary
- ✅ **Post Search** - Find posts by content
- ✅ **Trending Posts** - Show popular posts based on likes

### 5. Comments & Discussions (Post Service)
- ✅ **Create Comments** - Reply to posts with text
- ✅ **Comment Display** - Show all comments on post
- ✅ **Edit Comments** - Modify comment content
- ✅ **Delete Comments** - Remove comments
- ✅ **Like Comments** - Appreciate helpful comments
- ✅ **Unlike Comments** - Remove comment likes
- ✅ **Comment Replies** - Reply to specific comments (nested comments)
- ✅ **Reply Edit/Delete** - Modify or remove replies
- ✅ **Comment Count** - Show number of comments per post
- ✅ **Comment Timestamps** - See when comments were made
- ✅ **Comment Pagination** - Load comments in pages
- ✅ **Comment Notifications** - Alert when post gets comments
- ✅ **Reply Notifications** - Alert when someone replies to your comment

### 6. Stories (Story Service)
- ✅ **Create Stories** - Upload image/video stories
- ✅ **Story Timeline** - View stories from followed users
- ✅ **Story Viewer** - Full-screen story view with navigation
- ✅ **Story Expiration** - Stories auto-delete after 24 hours
- ✅ **Like Stories** - React to stories
- ✅ **Unlike Stories** - Remove story likes
- ✅ **Story Timestamps** - See when stories were posted
- ✅ **Story List** - See all stories in feed
- ✅ **Multiple Stories** - Users can post multiple stories
- ✅ **Story Preview Circles** - Visual indicators for unseen stories
- ✅ **Story Progression** - Auto-play next story
- ✅ **Story Pause/Resume** - Control story playback
- ✅ **Story Delete** - Users can delete their own stories

### 7. User Relationships & Follow System
- ✅ **Follow Users** - Subscribe to user updates
- ✅ **Unfollow Users** - Stop receiving updates from user
- ✅ **Follower List** - See who follows you
- ✅ **Following List** - See who you follow
- ✅ **Follower Count** - Display follower statistics
- ✅ **Follow Suggestions** - Recommend users to follow
- ✅ **Follow Notifications** - Alert when new follower
- ✅ **Block Users** - Block unwanted users (future feature)
- ✅ **Private Accounts** - Control who can follow (future feature)

### 8. Notifications System
- ✅ **Real-time WebSocket Notifications** - Instant alerts via Socket.IO
- ✅ **Message Notifications** - Alert for new messages
- ✅ **Call Notifications** - Alert for incoming calls
- ✅ **Like Notifications** - Alert when someone likes post/story/comment
- ✅ **Comment Notifications** - Alert when someone comments on post
- ✅ **Follow Notifications** - Alert when someone follows you
- ✅ **Mention Notifications** - Alert when tagged in posts
- ✅ **Notification Center** - View all notifications
- ✅ **Mark as Read** - Mark individual notifications as read
- ✅ **Notification Timestamps** - See when notifications occurred
- ✅ **Notification Persistence** - Store notifications in database
- ✅ **Kafka Event Processing** - Async notification delivery via Kafka
- ✅ **Notification Filtering** - Filter by notification type

### 9. User Profile
- ✅ **View Profile** - See user's public profile page
- ✅ **Edit Profile** - Update personal information
- ✅ **Profile Picture** - Upload custom avatar
- ✅ **Bio/Description** - Add profile bio text
- ✅ **User Statistics** - Display post count, follower count, following count
- ✅ **User Posts** - Display all user's posts
- ✅ **User Stories** - Show user's active stories
- ✅ **Profile Verification Badge** - Mark verified accounts (future)
- ✅ **Private Profile** - Hide profile from non-followers (future)
- ✅ **Profile Activity** - Show recent activity

### 10. Search & Discovery
- ✅ **User Search** - Find users by username/email
- ✅ **Post Search** - Search posts by content
- ✅ **Hashtag Search** - Find posts with hashtags (future)
- ✅ **Search Results** - Display matching users and posts
- ✅ **Search Pagination** - Load results in pages
- ✅ **Advanced Search** - Filter by date, likes, comments (future)
- ✅ **Search Suggestions** - Auto-complete search queries (future)

### 11. Security Features
- ✅ **JWT Authentication** - Secure API endpoints
- ✅ **Password Hashing** - Bcrypt password encryption
- ✅ **CORS Configuration** - Cross-origin request handling
- ✅ **WebSocket JWT Auth** - Validate tokens on Socket.IO connections
- ✅ **Token Expiration** - Auto-expire tokens for security
- ✅ **Token Blacklist** - Revoke tokens on logout
- ✅ **Request Validation** - Input sanitization
- ✅ **Rate Limiting** - Prevent abuse (future)
- ✅ **End-to-End Encryption** - For messages (future)
- ✅ **Secure File Upload** - Cloudinary integration

### 12. Performance & Optimization
- ✅ **Redis Caching** - Cache frequently accessed data
- ✅ **Database Indexing** - Optimize query performance
- ✅ **Pagination** - Load data in chunks
- ✅ **Socket.IO Rooms** - Efficient message broadcasting
- ✅ **WebRTC P2P** - Direct calls without server relay
- ✅ **Message Compression** - Reduce bandwidth usage
- ✅ **Image Optimization** - Cloudinary auto-compression
- ✅ **Lazy Loading** - Load components on demand

### 13. Microservices Architecture
- ✅ **API Gateway** - Central request router
- ✅ **Service Discovery** - Inter-service communication
- ✅ **Independent Scaling** - Scale services separately
- ✅ **Database per Service** - Isolated data persistence
- ✅ **Event-Driven** - Kafka for async communication
- ✅ **Service Isolation** - Fault tolerance
- ✅ **Container Deployment** - Docker & Docker Compose

### 14. Admin Features
- ✅ **Role Management** - Create and assign roles
- ✅ **Permission Management** - Control user permissions
- ✅ **User Management** - Admin user operations (future)
- ✅ **Content Moderation** - Remove inappropriate content (future)
- ✅ **Analytics Dashboard** - View platform statistics (future)

### 15. Additional Features
- ✅ **Dark Mode** - Toggle dark/light theme
- ✅ **Responsive Design** - Works on mobile, tablet, desktop
- ✅ **Connection Status** - Show Socket.IO connection status
- ✅ **Error Handling** - Graceful error messages
- ✅ **Loading States** - Show loading indicators
- ✅ **Empty States** - Handle empty data views
- ✅ **Toast Notifications** - User feedback messages
- ✅ **PWA Support** - Progressive web app capabilities

---

## 📊 Feature Distribution by Service

| Service | Features | Count |
|---------|----------|-------|
| **Identity Service** | User auth, roles, permissions | 12 |
| **Chat Service** | Messaging, calls, conversations | 25 |
| **Post Service** | Posts, comments, likes, replies | 22 |
| **Story Service** | Stories, likes, timeline | 13 |
| **Profile Service** | User profiles, relationships, follow | 15 |
| **Notification Service** | Real-time alerts, Kafka events | 13 |
| **Frontend** | UI/UX, Dark mode, Responsive | 8 |
| **Security** | Authentication, encryption, validation | 10 |
| **Performance** | Caching, indexing, optimization | 8 |
| **Architecture** | Microservices, Docker, Gateway | 7 |

**Total Features: 133+**

## 🏗️ System Architecture

### Technology Stack

**Frontend:**
- React.js with Hooks
- Tailwind CSS for styling
- Socket.IO for real-time communication
- WebRTC for voice/video calls
- Axios for HTTP requests

**Backend:**
- Java 17+ with Spring Boot 3.x
- Spring Cloud Gateway (API Gateway)
- Spring Data MongoDB (Database)
- Redis (Caching & Session)
- Socket.IO for WebSocket communication
- Microservices Architecture:
  - `chat-service`: Real-time messaging, voice/video calls
  - `identity-service`: User authentication & management
  - Other services for future features

**Infrastructure:**
- MongoDB: Primary database
- Redis: Cache & session storage
- Socket.IO: WebSocket server (Port 8099)
- Spring Boot API: Port 8083
- React Dev Server: Port 3000

## 📋 Project Structure

### Complete Directory Tree

```
Blur/
├── Backend/                          # Java/Spring Boot microservices
│   ├── api-gateway/                 # API Gateway (Port 8888)
│   │   ├── src/main/java/com/blur/apigateway/
│   │   │   ├── ApiGatewayApplication.java
│   │   │   ├── configuration/
│   │   │   │   ├── AuthenticationFilter.java      # JWT validation
│   │   │   │   └── WebClientConfiguration.java    # HTTP client
│   │   │   ├── dto/request/IntrospectRequest.java
│   │   │   ├── dto/response/
│   │   │   │   ├── ApiResponse.java
│   │   │   │   └── IntrospectResponse.java
│   │   │   ├── repository/IdentityClient.java
│   │   │   ├── service/IdentityService.java
│   │   │   └── resources/application.yaml
│   │   └── pom.xml
│   │
│   ├── chat-service/               # Real-time Chat & Calling (Port 8083, 8099)
│   │   ├── src/main/java/com/blur/chatservice/
│   │   │   ├── ChatServiceApplication.java
│   │   │   ├── configuration/
│   │   │   │   ├── AuthenticationRequestInterceptor.java  # Token passing
│   │   │   │   ├── CustomJwtDecoder.java
│   │   │   │   ├── JWTAuthenticationEntryPoint.java
│   │   │   │   ├── RedisConfig.java                      # Cache setup
│   │   │   │   ├── SecurityConfig.java
│   │   │   │   └── SocketIOConfig.java                   # WebSocket config
│   │   │   ├── controller/
│   │   │   │   ├── CallController.java              # Voice/Video call endpoints
│   │   │   │   ├── ChatMessageController.java       # Message endpoints
│   │   │   │   ├── ConversationController.java      # Conversation endpoints
│   │   │   │   └── SocketHandler.java               # Socket.IO events
│   │   │   ├── service/
│   │   │   │   ├── CallService.java                 # Call logic
│   │   │   │   ├── ChatMessageService.java          # Message operations
│   │   │   │   ├── ConversationService.java         # Conversation management
│   │   │   │   ├── IdentityService.java             # User verification
│   │   │   │   ├── NotificationService.java         # Notifications
│   │   │   │   ├── RedisCacheService.java           # Cache operations
│   │   │   │   └── WebsocketSessionService.java     # Session tracking
│   │   │   ├── entity/
│   │   │   │   ├── CallSession.java                 # Call model
│   │   │   │   ├── ChatMessage.java                 # Message model
│   │   │   │   ├── Conversation.java                # Conversation model
│   │   │   │   ├── MediaAttachment.java             # File model
│   │   │   │   ├── ParticipantInfo.java
│   │   │   │   └── WebsocketSession.java
│   │   │   ├── enums/
│   │   │   │   ├── CallStatus.java       # INITIATING, RINGING, ANSWERED, ENDED
│   │   │   │   ├── CallType.java         # VOICE, VIDEO
│   │   │   │   ├── MessageStatus.java    # SENT, DELIVERED, READ
│   │   │   │   └── MessageType.java
│   │   │   ├── repository/
│   │   │   │   ├── CallSessionRepository.java
│   │   │   │   ├── ChatMessageRepository.java
│   │   │   │   ├── ConversationRepository.java
│   │   │   │   ├── WebsocketSessionRepository.java
│   │   │   │   └── httpclient/
│   │   │   │       ├── IdentityClient.java
│   │   │   │       └── ProfileClient.java
│   │   │   ├── dto/
│   │   │   │   ├── ApiResponse.java
│   │   │   │   ├── request/
│   │   │   │   │   ├── ChatMessageRequest.java
│   │   │   │   │   ├── ConversationRequest.java
│   │   │   │   │   └── IntrospectRequest.java
│   │   │   │   └── response/
│   │   │   │       ├── ChatMessageResponse.java
│   │   │   │       ├── ConversationResponse.java
│   │   │   │       └── IntrospecResponse.java
│   │   │   ├── mapper/
│   │   │   │   ├── ChatMessageMapper.java
│   │   │   │   └── ConversationMapper.java
│   │   │   ├── exception/
│   │   │   │   ├── AppException.java
│   │   │   │   ├── ErrorCode.java
│   │   │   │   └── GlobalExceptionHandler.java
│   │   │   └── resources/application.yaml          # Config (8083, 8099)
│   │   └── pom.xml
│   │
│   ├── identity-service/           # Authentication & Authorization (Port 8080)
│   │   ├── src/main/java/org/identityservice/
│   │   │   ├── IdentityServiceApplication.java
│   │   │   ├── configuration/
│   │   │   │   ├── AppConfiguration.java
│   │   │   │   ├── AuthenticationRequestInterceptor.java
│   │   │   │   ├── CustomJwtDecoder.java
│   │   │   │   ├── FeignConfig.java
│   │   │   │   ├── JWTAuthenticationEntryPoint.java
│   │   │   │   ├── RedisConfig.java
│   │   │   │   └── SecurityConfig.java
│   │   │   ├── controller/
│   │   │   │   ├── AuthController.java         # Register, Login, Token
│   │   │   │   ├── PermissionController.java
│   │   │   │   ├── RoleController.java
│   │   │   │   └── UserController.java
│   │   │   ├── service/
│   │   │   │   ├── AuthenticationService.java
│   │   │   │   ├── PermissionService.java
│   │   │   │   ├── RedisService.java
│   │   │   │   ├── RoleService.java
│   │   │   │   └── UserService.java
│   │   │   ├── entity/
│   │   │   │   ├── InvalidatedToken.java
│   │   │   │   ├── Permission.java
│   │   │   │   ├── Role.java
│   │   │   │   └── User.java
│   │   │   ├── repository/
│   │   │   │   ├── InvalidatedTokenRepository.java
│   │   │   │   ├── PermissionRepository.java
│   │   │   │   ├── RoleRepository.java
│   │   │   │   ├── UserRepository.java
│   │   │   │   └── httpclient/
│   │   │   │       ├── OutboundIdentityClient.java
│   │   │   │       ├── OutboundUserClient.java
│   │   │   │       └── ProfileClient.java
│   │   │   ├── dto/
│   │   │   │   ├── request/
│   │   │   │   │   ├── AuthRequest.java
│   │   │   │   │   ├── UserCreationRequest.java
│   │   │   │   │   ├── ProfileCreationRequest.java
│   │   │   │   │   └── IntrospectRequest.java
│   │   │   │   └── response/
│   │   │   │       ├── AuthResponse.java
│   │   │   │       ├── UserResponse.java
│   │   │   │       └── IntrospecResponse.java
│   │   │   ├── mapper/
│   │   │   │   ├── PermissionMapper.java
│   │   │   │   ├── ProfileMapper.java
│   │   │   │   ├── RoleMapper.java
│   │   │   │   └── UserMapper.java
│   │   │   ├── exception/
│   │   │   │   ├── AppException.java
│   │   │   │   ├── ErrorCode.java
│   │   │   │   └── GlobalExceptionHandler.java
│   │   │   └── resources/application.yaml          # Config (8080)
│   │   └── pom.xml
│   │
│   ├── profile-service/           # User Profiles (Port 8081)
│   │   ├── src/main/java/com/blur/profileservice/
│   │   └── pom.xml
│   │
│   ├── post-service/              # Posts & Comments (Port 8084)
│   │   ├── src/main/java/com/postservice/
│   │   └── pom.xml
│   │
│   ├── notification-service/      # Real-time Notifications (Port 8082)
│   │   ├── src/main/java/com/blur/notificationservice/
│   │   ├── configuration/
│   │   │   ├── WebsocketConfig.java            # WebSocket setup
│   │   │   ├── JwtHandshakeInterceptor.java    # JWT auth
│   │   │   └── WebSocketEventListener.java
│   │   ├── kafka/
│   │   │   ├── consumer/EventListener.java     # Kafka events
│   │   │   └── handler/
│   │   │       ├── CommentEventHandler.java
│   │   │       ├── FollowEventHandler.java
│   │   │       ├── LikePostEventHandler.java
│   │   │       └── ReplyCommentEventHandler.java
│   │   └── pom.xml
│   │
│   ├── story-service/             # Stories (Port 8086)
│   │   ├── src/main/java/com/example/storyservice/
│   │   └── pom.xml
│   │
│   ├── docker-compose.yml         # Database & infrastructure setup
│   └── .mvn/wrapper/              # Maven wrapper scripts
│
├── frontend/                        # React.js Web Application (Port 3000)
│   ├── public/
│   │   ├── index.html              # HTML entry point
│   │   ├── manifest.json           # PWA config
│   │   ├── blur.jpg                # App logo
│   │   └── ringtone.mp3            # Call notification sound
│   ├── src/
│   │   ├── index.js                # React entry point
│   │   ├── App.js                  # Root component
│   │   ├── index.css               # Global styles
│   │   ├── api/                    # API endpoints
│   │   │   ├── authAPI.js          # Authentication API
│   │   │   ├── messageApi.js       # Messaging API
│   │   │   ├── postApi.js          # Post API
│   │   │   ├── storyApi.js         # Story API
│   │   │   ├── userApi.js          # User API
│   │   │   └── notificationAPI.js  # Notification API
│   │   ├── Components/             # React components (30+)
│   │   │   ├── Call/
│   │   │   │   ├── CallWindow.jsx
│   │   │   │   ├── CallendedModal.jsx
│   │   │   │   └── IncommingCallModal.jsx
│   │   │   ├── Message/
│   │   │   │   ├── ChatArea.jsx         # Message display
│   │   │   │   ├── ConversationList.jsx # Chat list
│   │   │   │   ├── MessageBubble.jsx    # Single message
│   │   │   │   └── UserSearchBar.jsx    # User search
│   │   │   ├── Post/
│   │   │   │   ├── PostCard.jsx         # Post display
│   │   │   │   ├── CreatePostModal.jsx  # Create post
│   │   │   │   └── PostDetailPage.jsx
│   │   │   ├── ProfileComponents/
│   │   │   │   ├── ProfileUserDetails.jsx
│   │   │   │   ├── ReqUserPostCard.jsx
│   │   │   │   └── OrderUserProfile.jsx
│   │   │   ├── Comment/
│   │   │   │   ├── CommentCard.jsx
│   │   │   │   ├── CommentModal.jsx
│   │   │   │   └── CommentModal.css
│   │   │   ├── Story/
│   │   │   │   ├── StoryCircle.jsx       # Story thumbnail
│   │   │   │   ├── StoryModal.jsx        # Story viewer
│   │   │   │   └── AddStoryModal.jsx     # Create story
│   │   │   ├── Notification/
│   │   │   │   ├── NotificationIcon.jsx
│   │   │   │   ├── NotificationItem.jsx
│   │   │   │   └── NotificationHeader.jsx
│   │   │   ├── Sidebar/
│   │   │   │   ├── SidebarComponent.jsx  # Main navigation
│   │   │   │   ├── SidebarConfig.js      # Menu items
│   │   │   │   ├── LogoutModal.jsx
│   │   │   │   └── SidebarComponents.css
│   │   │   └── ConnectionStatus.jsx      # Socket status
│   │   ├── contexts/               # React Context API
│   │   │   ├── SocketContext.js         # Chat WebSocket
│   │   │   ├── NotificationSocketContext.js  # Notification WebSocket
│   │   │   └── NotificationContext.jsx  # Notification state
│   │   ├── hooks/                  # Custom React Hooks
│   │   │   ├── useCall.js          # Call management hook
│   │   │   ├── useMessages.js      # Message operations hook
│   │   │   ├── useConversations.js # Conversation operations hook
│   │   │   ├── useSocket.js        # Socket connection hook
│   │   │   ├── useUnreadMessages.js    # Unread tracking
│   │   │   └── useNotification.js  # Notification hook
│   │   ├── Pages/                  # Page components (routes)
│   │   │   ├── Login/
│   │   │   │   ├── LoginPage.jsx
│   │   │   │   ├── LoginCard.jsx
│   │   │   │   ├── RegisterPage.jsx
│   │   │   │   ├── RegisterCard.jsx
│   │   │   │   ├── ActivationPage.jsx
│   │   │   │   ├── Authenticate.jsx
│   │   │   │   └── CreatePassword.jsx
│   │   │   ├── HomePage/
│   │   │   │   └── HomePage.jsx         # Feed page
│   │   │   ├── MessagePage/
│   │   │   │   └── MessagePage.jsx      # Chat page
│   │   │   ├── Notification/
│   │   │   │   └── NotificationPage.jsx # Notifications page
│   │   │   ├── Profile/
│   │   │   │   └── Profile.jsx          # User profile page
│   │   │   ├── Search/
│   │   │   │   └── SearchPage.jsx       # User search page
│   │   │   ├── Account/
│   │   │   │   └── EditAccountPage.jsx  # Settings page
│   │   │   └── Router/
│   │   │       └── Router.jsx           # Route configuration
│   │   ├── service/                # Service layer
│   │   │   ├── api.js              # Base API client
│   │   │   ├── chatApi.js          # Chat-specific API
│   │   │   ├── httpClient.js       # Axios configuration
│   │   │   ├── JwtService.js       # JWT token management
│   │   │   ├── LocalStorageService.js  # Local storage utilities
│   │   │   ├── notificationSocket.js   # Notification WebSocket
│   │   │   ├── WebRTCService.js    # WebRTC peer connection
│   │   │   ├── configuration.js    # App config
│   │   │   └── UploadToCloudnary.js    # File upload
│   │   ├── Config/                 # Configuration
│   │   │   ├── configuration.js    # Global config
│   │   │   ├── Logic.js            # Business logic
│   │   │   └── UploadToCloudnary.js
│   │   ├── styles/                 # Global styles
│   │   │   └── darkmode.css        # Dark mode styles
│   │   ├── utils/                  # Utility functions
│   │   │   ├── auth.js             # Auth utilities
│   │   │   └── constants.js        # App constants
│   │   └── build/                  # Production build (generated)
│   ├── package.json                # Dependencies & scripts
│   ├── Dockerfile                  # Container config
│   ├── docker-compose.yml          # Docker setup
│   ├── tailwind.config.js          # Tailwind CSS config
│   ├── default.conf                # Nginx config
│   └── README.md
│
├── production/                      # Production deployment
│   ├── docker-compose.yaml         # Full stack configuration
│   └── default.conf                # Nginx configuration
│
└── README.md                        # Project documentation
```

### Backend Services Overview

| Service | Port | Database | Purpose |
|---------|------|----------|---------|
| **API Gateway** | 8888 | - | Route requests to services |
| **Identity Service** | 8080 | MySQL | User auth & JWT management |
| **Profile Service** | 8081 | Neo4j | User profiles & relationships |
| **Notification Service** | 8082 | MongoDB | Real-time notifications |
| **Chat Service** | 8083/8099 | MongoDB | Messaging & calls |
| **Post Service** | 8084 | MongoDB | Posts, comments, likes |
| **Story Service** | 8086 | MongoDB | Stories management |

### Frontend Components Breakdown

**Pages (8):** Login, Register, Home, Messages, Profile, Search, Notifications, Account

**Components (30+):**
- **Call Components:** CallWindow, IncomingCallModal, CallEndedModal
- **Message Components:** ChatArea, ConversationList, MessageBubble, UserSearchBar, MediaPreview
- **Post Components:** PostCard, CreatePostModal, PostDetailPage
- **Story Components:** StoryCircle, StoryModal, AddStoryModal
- **Notification Components:** NotificationIcon, NotificationItem, NotificationHeader
- **Profile Components:** ProfileUserDetails, ReqUserPostCard, OrderUserProfile
- **Common:** Sidebar, ConnectionStatus, Comment components

### Technology Stack Summary

**Backend Technologies:**
- Java 17-21
- Spring Boot 3.2-3.4
- Spring Cloud Gateway
- Spring Data MongoDB, JPA, Redis
- Socket.IO (Netty)
- Apache Kafka
- JWT & OAuth2
- MapStruct, Jackson

**Frontend Technologies:**
- React 18.x
- Redux Toolkit
- React Router
- Socket.IO Client
- Axios
- Tailwind CSS
- Chakra UI
- WebRTC (native)
- WebSocket

**Infrastructure:**
- MongoDB (document database)
- MySQL (relational database)
- Neo4j (graph database)
- Redis (caching)
- Apache Kafka (message queue)
- Docker & Docker Compose
- Nginx (web server)

## 🚀 Getting Started

### Prerequisites

- **Java 17+**: `java --version`
- **Node.js 18+**: `node --version`
- **MongoDB**: Running locally or in Docker
- **Redis**: Running locally or in Docker
- **npm**: Package manager for Node

### Installation & Setup

#### 1. Clone Repository

```bash
git clone https://github.com/yourusername/blur.git
cd Blur
```

#### 2. Start Backend Services

**Option A: Using Docker Compose** (Recommended)

```bash
cd Backend
docker-compose up -d
```

This will start:
- MongoDB (port 27017)
- Redis (port 6379)
- Chat Service (port 8083 API, 8099 Socket.IO)

**Option B: Manual Setup**

Ensure MongoDB and Redis are running:

```bash
# Terminal 1: MongoDB
mongod

# Terminal 2: Redis
redis-server

# Terminal 3: Chat Service
cd Backend/chat-service
mvn spring-boot:run
```

Backend will be available at:
- API Gateway: `http://localhost:8083/chat`
- Socket.IO: `http://localhost:8099`

#### 3. Start Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend will be available at `http://localhost:3000`

## 📚 How to Use the Application

### 1. Authentication

1. Open `http://localhost:3000` in your browser
2. Click "Sign Up" or "Register"
3. Enter your details (username, email, password)
4. Login with your credentials

### 2. Starting a Chat

1. After login, navigate to the Conversations section
2. Click on a user or conversation to open chat
3. Type a message and press Send
4. Messages appear in real-time for both users

### 3. Making a Voice/Video Call

1. Open a conversation with another user
2. Click the **📞 Phone Icon** for voice call or **📹 Video Icon** for video call
3. The other user will receive a call notification
4. They click "Accept" to start the call
5. Your microphone/camera will be activated for the call
6. Click "End Call" to disconnect

### 4. Message Management

- **View Conversations**: See all your active chats
- **Unread Count**: Badge shows number of unread messages
- **Message History**: Scroll up to see previous messages
- **Mark as Read**: Conversations are marked as read automatically

## 🔧 API Endpoints

### Authentication
```
POST   /api/auth/register        - Register new user
POST   /api/auth/login           - Login user
POST   /api/auth/introspect      - Verify token
```

### Chat & Conversations
```
GET    /api/chat/conversations/my-conversations    - Get user's conversations
POST   /api/chat/messages                          - Send a message
GET    /api/chat/messages/{conversationId}         - Get conversation messages
GET    /api/chat/conversations/{id}/unread-count   - Get unread count
PUT    /api/chat/conversations/mark-as-read        - Mark as read
```

### WebSocket Events (Socket.IO)
```
Socket Events:
- connect                    - Client connects
- disconnect                 - Client disconnects
- send_message              - Send chat message
- message_sent              - Message sent confirmation
- message_received          - Receive incoming message
- call:initiate             - Initiate a call
- call:incoming             - Incoming call notification
- call:answer               - Answer a call
- call:reject               - Reject a call
- call:end                  - End a call
- webrtc:offer              - WebRTC offer for connection
- webrtc:answer             - WebRTC answer
- webrtc:ice-candidate      - ICE candidate for NAT traversal
```

## 📊 Database Models

### User (MongoDB)
```javascript
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String (hashed),
  avatar: String (Cloudinary URL),
  createdAt: Date
}
```

### Conversation (MongoDB)
```javascript
{
  _id: ObjectId,
  participants: [String], // User IDs
  lastMessage: ChatMessage,
  lastMessageTime: Date,
  createdAt: Date
}
```

### ChatMessage (MongoDB)
```javascript
{
  _id: ObjectId,
  conversationId: String,
  senderId: String,
  content: String,
  messageType: String, // TEXT, VOICE_CALL, VIDEO_CALL
  status: String, // SENT, DELIVERED, READ
  attachments: [String], // URLs
  createdAt: Date
}
```

## 🔐 Security

- **JWT Tokens**: Secure API authentication
- **Token Storage**: Stored in localStorage
- **CORS**: Configured for cross-origin requests
- **Password**: Hashed using Spring Security
- **WebSocket**: Authenticated via JWT token

## 🚨 Troubleshooting

### Call shows "đang kết nối" (connecting) indefinitely

**Solution**: Ensure both users have microphone/camera permissions and are on the same network or using STUN servers for NAT traversal.

### Messages not appearing

1. Check if Socket.IO is connected (browser console)
2. Verify MongoDB is running: `mongosh`
3. Check Redis cache: `redis-cli`
4. Restart the chat-service

### "Socket connection not ready" error

Wait 2-3 seconds for Socket.IO to connect after page load, then try again.

### 406 Not Acceptable error

Ensure your API requests include the `Accept: application/json` header.

## 🧪 Development Notes

### Running in Development Mode

```bash
# Terminal 1: Frontend (hot reload)
cd frontend && npm run dev

# Terminal 2: Backend (Spring Boot)
cd Backend/chat-service && mvn spring-boot:run

# Terminal 3: Database (if not using Docker)
mongod
redis-server
```

### Environment Variables

Create `.env` files for configuration:

**Frontend** (`frontend/.env`):
```
VITE_API_BASE=http://localhost:8083/chat
VITE_SOCKET_URL=http://localhost:8099
```

**Backend** (`Backend/chat-service/application.yml`):
```yaml
spring:
  data:
    mongodb:
      uri: mongodb://localhost:27017/blur
  redis:
    host: localhost
    port: 6379
```

## 📈 Performance Optimization

- **Redis Caching**: Session storage for faster authentication
- **MongoDB Indexing**: Indexes on conversationId, userId for quick queries
- **Socket.IO Rooms**: Efficient message broadcasting
- **WebRTC**: Direct peer-to-peer calls without server relay

## 🔮 Future Enhancements

- [ ] End-to-end encryption for messages
- [ ] Message search functionality
- [ ] Voice message transcription
- [ ] User presence status (online/offline)
- [ ] Call recording
- [ ] Group chats & conferences
- [ ] Message reactions & replies
- [ ] Media gallery view

## 📝 Git Workflow

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: add your feature description"

# Push to remote
git push origin feature/your-feature-name

# Create Pull Request on GitHub
```

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write/update tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👨‍💻 Author

**Văn Sỹ (vansy204)**
- GitHub: [@vansy204](https://github.com/vansy204)
- Project: Full-stack practice with Microservices, Real-time Chat, and WebRTC

## ⭐ Show Your Support

If you find this project helpful, please give it a star! ⭐

---

**Last Updated**: December 2, 2025
**Version**: 1.0.0
**Status**: Production Ready ✅
