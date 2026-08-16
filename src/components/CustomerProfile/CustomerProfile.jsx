import profile from "../../assets/profile/profile.png";
function CustomerProfile() {
  return (
    <div className="flex flex-row items-center gap-2 rounded-full bg-red-200 pl-2 pr-4 p-2">
      <img
        src={profile}
        alt="profile"
        className="profile-image w-11 h-11 rounded-full object-cover"
      />
      <div className="text-2xl">Kimheang</div>
    </div>
  );
}

export default CustomerProfile;
