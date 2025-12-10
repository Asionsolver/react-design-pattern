// import UserProfile from "./messy-way/components/UserProfile";

import "./App.css";
import UserProfile from "./messy-way/components/user-profile";
import UserProfileContainer from "./with-pattern/components/profile/user-profile-container";
function App() {
  return (
    <div>
      <UserProfileContainer userId={1} />
    </div>
  );
}

export default App;
