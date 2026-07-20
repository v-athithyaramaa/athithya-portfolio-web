"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    setMounted(true);
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!mounted) return null;

  const navigate = (id: string) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContact = () => {
    setOpen(false);
    window.location.href = "mailto:vathithyaramaa@gmail.com"; 
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Command>
        <CommandInput placeholder="Search index..." className="font-mono text-xs" />
        <CommandList className="font-mono text-xs">
          <CommandEmpty>No results found in directory.</CommandEmpty>
          <CommandGroup heading="Directory">
            <CommandItem onSelect={() => navigate("home")}>Index / Home</CommandItem>
            <CommandItem onSelect={() => navigate("about")}>Manifesto / About</CommandItem>
            <CommandItem onSelect={() => navigate("records")}>Trajectory / Experience</CommandItem>
            <CommandItem onSelect={() => navigate("works")}>Case Files / Projects</CommandItem>
            <CommandItem onSelect={() => navigate("systems")}>Systems / Tech Stack</CommandItem>
            <CommandItem onSelect={() => navigate("telemetry")}>Telemetry / Dashboard</CommandItem>
            <CommandItem onSelect={() => navigate("beyond")}>Beyond / The Code</CommandItem>
          </CommandGroup>
          <CommandGroup heading="Actions">
            <CommandItem onSelect={handleContact}>Initialize Contact</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
