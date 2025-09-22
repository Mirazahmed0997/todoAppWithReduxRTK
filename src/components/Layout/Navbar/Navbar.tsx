
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
      <MenubarItem>New Window</MenubarItem>
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