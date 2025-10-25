import { useQuery } from "@tanstack/react-query";
import { getUserFriends } from "../lib/api.js";
import FriendCard from "../components/FriendCard.jsx";

const FriendsPage = () => {
  const { data: friends, isLoading, isError } = useQuery(["friends"], getUserFriends);

  if (isLoading) return <p className="p-4 text-center">Loading friends...</p>;
  if (isError) return <p className="p-4 text-center text-red-500">Failed to load friends</p>;

  if (!friends || friends.length === 0) {
    return <p className="p-4 text-center text-gray-500">You have no friends yet.</p>;
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {friends.map((friend) => (
        <FriendCard key={friend._id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsPage;
