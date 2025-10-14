import { useAppDispatch, useAppSelector } from "@/State/hooks";
import { removeUser, selectUsers } from "@/State/Feature/User/UserSlice";
import { Button } from "@/components/ui/button";
import { AddUserModal } from "@/components/Module/AddUser";

const UserList = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

 

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-3">User List</h2>

      <AddUserModal></AddUserModal>

      <ul className="mt-3 space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between border p-2 rounded"
          >
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>

   
            
         

            <Button className="ml-2"
              variant="destructive"
              size="sm"
              onClick={() => dispatch(removeUser(user.id))}
            >
              Remove
            </Button>
          

          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
