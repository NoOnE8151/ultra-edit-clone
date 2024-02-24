import { Menu } from 'lucide-react';

function Header() {
  return (
    <header className="bg-dark p-[5px] flex items-center gap-sm justify-between px-[15px]">
      <img src="../../public/UE-Logo-2.png" alt="logo" width="150" />
      <Menu className="text-lg text-[#2EA3F2] m" />
    </header>
  );
}

export default Header;