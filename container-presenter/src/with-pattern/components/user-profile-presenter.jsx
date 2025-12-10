import { useState } from "react";
import ErrorMessage from "./common/error/error-message";
import LoadingSpinner from "./common/loading/loading-spinner";
import PostList from "./post-list";
import ProfileHeader from "./profile/profile-header";

const UserProfilePresenter = ({
  user,
  posts,
  loading,
  error,
  onRetry,
  onUpdateUser,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  if (loading) {
    return <LoadingSpinner message={"Loading user profile..."} />;
  }

  if (error) {
    return (
      <ErrorMessage
        title={"Oops! Something went wrong"}
        message={error}
        onRetry={onRetry}
      />
    );
  }

  const handleStartEdit = () => {
    setIsEditing(true);
  };
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleCancelEdit = () => {
    setIsEditing(false);
  };
  const handleSaveProfile = async () => {
    const result = await onUpdateUser(formData);
    if (result.success) {
      setIsEditing(false);
    }
  };
  return (
    <div className="user-profile">
      <ProfileHeader
        user={user}
        isEditing={isEditing}
        formData={formData}
        onStartEdit={handleStartEdit}
        onInputChange={handleInputChange}
        onCancelEdit={handleCancelEdit}
        onSaveProfile={handleSaveProfile}
      />
      <PostList posts={posts} />
    </div>
  );
};

export default UserProfilePresenter;
