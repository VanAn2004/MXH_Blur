import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { jwtDecode } from "jwt-decode";
import { getToken } from "../service/LocalStorageService";
import { useNotification } from "../contexts/NotificationContext";

const NotificationSocketContext = createContext(null);

export const NotificationSocketProvider = ({ children }) => {
  const stompClientRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false);
  const { addNotification } = useNotification();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      console.log("⚠️ No token found, skipping WebSocket connection");
      return;
    }

    let userId;
    try {
      const decoded = jwtDecode(token);
      userId = decoded.sub;
      console.log("👤 Decoded userId from JWT:", userId);
    } catch (error) {
      console.error("❌ Failed to decode token:", error);
      return;
    }

    // ✅ FIX: Thêm /api prefix
    const wsUrl = `http://localhost:8082/notification/ws-notification?token=${token}`;
console.log("🔌 Connecting to:", wsUrl);

    const client = new Client({
      webSocketFactory: () => new SockJS(wsUrl),
      
      reconnectDelay: 5000,
      heartbeatIncoming: 10000,
      heartbeatOutgoing: 10000,
      
      debug: (str) => {
        console.log("🔍 STOMP:", str);
      },

      onConnect: () => {
        console.log("✅ STOMP Connected to notification service");
        setIsConnected(true);

        const subscriptionPath = `/user/${userId}/queue/notifications`;
        console.log("📡 Subscribing to:", subscriptionPath);

        client.subscribe(subscriptionPath, (message) => {
          try {
            const data = JSON.parse(message.body);
            console.log("🔔 Realtime notification received:", data);

            addNotification({
              id: data.id,
              senderId: data.senderId,
              senderName: data.senderName,
              senderFirstName: data.senderFirstName,
              senderLastName: data.senderLastName,
              avatar: data.senderImageUrl,
              message: data.content,
              createdDate: data.timestamp,
              type: data.type,
              postId: data.postId,
              storyId: data.storyId,
              seen: data.read || false,
            });
          } catch (e) {
            console.error("❌ Failed to parse notification:", e);
          }
        });

        console.log("✅ Subscription successful");
      },

      onStompError: (frame) => {
        console.error("❌ STOMP Error:", frame.headers["message"]);
        console.error("❌ Frame body:", frame.body);
        setIsConnected(false);
      },

      onWebSocketClose: () => {
        console.log("🔌 WebSocket closed");
        setIsConnected(false);
      },

      onDisconnect: () => {
        console.log("❌ STOMP Disconnected");
        setIsConnected(false);
      },
    });

    client.activate();
    stompClientRef.current = client;

    return () => {
      console.log("🧹 Cleaning up WebSocket connection");
      if (client.active) {
        client.deactivate();
      }
      setIsConnected(false);
    };
  }, [addNotification]);

  const contextValue = {
    stompClient: stompClientRef.current,
    isConnected,
  };

  return (
    <NotificationSocketContext.Provider value={contextValue}>
      {children}
    </NotificationSocketContext.Provider>
  );
};

export const useNotificationSocket = () => {
  const context = useContext(NotificationSocketContext);
  if (!context) {
    throw new Error("useNotificationSocket must be used within NotificationSocketProvider");
  }
  return context;
};