import React, { createContext, useContext, useState, useCallback } from "react";
import { X, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ===== CONTEXT =====
const NotificationContext = createContext(null);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within NotificationProvider");
  }
  return context;
};

export const requestNotificationPermission = async () => {
  if (!("Notification" in window)) {
    console.log("Browser không hỗ trợ notification");
    return false;
  }

  if (Notification.permission === "granted") return true;
  if (Notification.permission !== "denied") {
    const permission = await Notification.requestPermission();
    return permission === "granted";
  }
  return false;
};

// ===== TOAST COMPONENT =====
const MessageToast = ({ notification, onClose, onClick }) => {
  // ✅ Tính tên hiển thị 1 lần
  const displayName = React.useMemo(() => {
    if (notification.senderName && notification.senderName !== "Unknown User") {
      return notification.senderName;
    }

    const firstName = notification.senderFirstName || "";
    const lastName = notification.senderLastName || "";
    const fullName = `${firstName} ${lastName}`.trim();

    return fullName || "Unknown User";
  }, [
    notification.senderFirstName,
    notification.senderLastName,
    notification.senderName,
  ]);

  const handleClick = () => {
    onClick(notification);
  };

  return (
    <div
      onClick={handleClick}
      className="w-[320px] bg-white rounded-xl shadow-lg border border-sky-100 p-3 cursor-pointer hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <img
          src={
            notification.avatar ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          }
          alt={displayName}
          className="w-10 h-10 rounded-full object-cover border border-sky-200 flex-shrink-0"
        />

        {/* Nội dung */}
        <div className="flex-1 min-w-0">
          {/* Dòng chính: Tên + message */}
          <p className="text-sm text-gray-800 leading-snug">
            <span className="font-semibold mr-1">{displayName}</span>
            {notification.message || "đã gửi một thông báo cho bạn."}
          </p>

          {/* Thời gian */}
          <p className="text-xs text-gray-400 mt-1">
            {formatTime(notification.createdDate)}
          </p>

          {/* Click để xem */}
          {(notification.postId || notification.storyId) && (
            <p className="text-xs text-sky-600 font-medium mt-1">
              Click để xem →
            </p>
          )}
        </div>

        {/* Nút đóng */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose(notification.id);
          }}
          className="ml-1 text-gray-400 hover:text-gray-600"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

// ===== PROVIDER =====
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [mode, setMode] = useState("toast");
  const [notificationCounter, setNotificationCounter] = useState(0);
  const navigate = useNavigate(); //

  const addNotification = useCallback((notificationData) => {
  console.log("🔔 Adding notification:", notificationData);
  console.log("🔔 Notification type:", notificationData.type);
  
  setNotifications((prev) => {
    if (!notificationData?.id) {
      console.warn("⚠️ Notification missing ID");
      return prev;
    }

    const exists = prev.some((n) => n.id === notificationData.id);
    if (exists) {
      console.log("⚠️ Notification already exists:", notificationData.id);
      return prev;
    }

    const fullName = [
      notificationData.senderFirstName,
      notificationData.senderLastName,
    ]
      .filter(Boolean)
      .join(" ");
    const senderName =
      fullName || notificationData.senderName || "Unknown User";

    const notification = {
      id: notificationData.id,
      senderFirstName: notificationData.senderFirstName,
      senderLastName: notificationData.senderLastName,
      senderName,
      avatar: notificationData.avatar || notificationData.senderImageUrl,
      message: notificationData.content || notificationData.message,
      createdDate:
        notificationData.createdDate ||
        notificationData.timestamp ||
        new Date().toISOString(),
      type: notificationData.type || "general",
      seen: notificationData.seen ?? notificationData.read ?? false,
      postId: notificationData.postId,
      senderId: notificationData.senderId,
      storyId: notificationData.storyId || notificationData.entityId,
    };

    console.log("✅ Final notification object:", notification);

    playNotificationSound();
    if (document.hidden) showBrowserNotification(notification);
    setNotificationCounter((c) => c + 1);

    return [notification, ...prev];
  });
}, []);

  const setNotificationsList = useCallback((list) => {
    setNotifications(list);
  }, []);

  const removeNotification = useCallback((notificationId) => {
    setNotifications((prev) => prev.filter((n) => n.id !== notificationId));
  }, []);

  const handleNotificationClick = useCallback(
  (notification) => {
    if (notification.onClick) notification.onClick(notification);

    // ✅ XỬ LÝ FOLLOW - Navigate đến profile người follow
    if (notification.type === "Follow" && notification.senderId) {
      navigate(`/profile/user/?profileId=${notification.senderId}`);
      removeNotification(notification.id);
      return;
    }

    // ✅ STORY
    const storyId = notification.storyId || notification.entityId;
    if (storyId) {
      navigate(`/story/${storyId}`);
      removeNotification(notification.id);
      return;
    }

    // ✅ POST
    if (notification.postId) {
      navigate(`/post/${notification.postId}`);
      removeNotification(notification.id);
      return;
    }

    removeNotification(notification.id);
  },
  [navigate, removeNotification]
);


  const value = {
    notifications,
    addNotification,
    removeNotification,
    setNotificationsList,
    setMode,
    mode,
    notificationCounter,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <div className="fixed top-4 right-4 z-[9999] space-y-3 max-h-screen overflow-y-auto pointer-events-none">
        <div className="pointer-events-auto">
          {mode === "toast" &&
            notifications.map((notification) => (
              <MessageToast
                key={notification.id}
                notification={notification}
                onClose={removeNotification}
                onClick={handleNotificationClick}
              />
            ))}
        </div>
      </div>
    </NotificationContext.Provider>
  );
};

// ===== Helpers =====
const formatTime = (dateString) => {
  if (!dateString) return "Vừa xong";
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now - date) / 1000);
  if (diff < 60) return "Vừa xong";
  if (diff < 3600) return `${Math.floor(diff / 60)} phút trước`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} giờ trước`;
  return date.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
  });
};

const playNotificationSound = () => {
  try {
    const audio = new Audio("/notification.mp3");
    audio.play().catch(() => {});
  } catch {}
};

const showBrowserNotification = (notification) => {
  if ("Notification" in window && Notification.permission === "granted") {
    const n = new Notification(notification.senderName, {
      body: notification.message,
      icon: notification.avatar,
    });
    setTimeout(() => n.close(), 5000);
  }
};
