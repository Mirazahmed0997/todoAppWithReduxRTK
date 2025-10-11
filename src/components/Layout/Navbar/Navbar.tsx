
import { ModeToggle } from "@/components/Mode_togoller/ModeToggller";
import { AddTaskModal } from "@/components/Module/AddTaskModal";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Link } from "react-router";


const Navbar = () => {
    return (
        <div>
            <Menubar>
  <MenubarMenu>
   
     <MenubarTrigger>File</MenubarTrigger>
    <AddTaskModal></AddTaskModal>
   
   
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem><Link to='/task'>Tasks</Link></MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
      <ModeToggle></ModeToggle>
    </MenubarContent>
  </MenubarMenu>
</Menubar>

      <div>
        
      </div>


        </div>
    );
};

export default Navbar;