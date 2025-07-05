import { Link, useNavigate } from "react-router-dom";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import { ModeToggle } from "../DarkMode/ModeToggle";
import { Button } from "@/components/ui/button";
import useHandleLogout from "@/hooks/useHandleLogout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { User } from "lucide-react";

export default function Header() {
  const logout = useHandleLogout();

  const navigate = useNavigate();

  const {userData} = useContext(AppContext);

  const handleNavigationToEmailVerification = () => {
    navigate("/email-verify");
  }

  return (
    <header className="sticky top-0 w-full border-b">
      <div className="h-14 container flex items-center">
        {/* Desktop */}
        <MainNav />

        {/* Mobile */}
        <MobileNav />

        {/* Desktop & mobile */}
        <div className="flex items-center justify-end flex-1 mr-4">
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button className="mr-3 border border-gray-500" variant="outline"><User /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="dark:text-white">{userData?.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleNavigationToEmailVerification}>Verify Email</DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
