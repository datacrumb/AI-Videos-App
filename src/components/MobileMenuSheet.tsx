import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileMenuSheet = () => {
  return (
    <>
      {/* Movile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="lg:hidden cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="bg-white font-satoshi bg-opacity-30 backdrop-blur-md">
          <SheetHeader>
            <SheetTitle className="text-white">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 mt-4 pl-5 text-white">
            <Link href="#home">Home</Link>
            <Link href="#features">Features</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#customers">Customers</Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenuSheet;