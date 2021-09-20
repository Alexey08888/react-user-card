import UserAvatar from "../components/UserAvatar";

function UserCard() {
  return (
    <div className="block1">
      <UserAvatar />
      <div className="name">
        <h3>John Doe</h3>{" "}
      </div>
      <div className="block2"><p >Share high-quality media without extra fees, text on Wi-Fi, see when
        your friends are typing and enjoy better group chats.*</p>
        
      </div>
    </div>
  );
}

export default UserCard;
