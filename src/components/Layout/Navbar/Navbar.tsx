
import { ModeToggle } from "@/components/Mode_togoller/ModeToggller";
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
     
    
   
   
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem><Link to='/task'>Tasks</Link></MenubarItem>
      <MenubarItem><Link to='/users'>User</Link></MenubarItem>
      <MenubarSeparator />
    
      <MenubarSeparator />
    
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