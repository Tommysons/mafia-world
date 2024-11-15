import { useState } from "react";
import { Item } from "@/types/item";
import initialItems from "@/data/initialItems";
import initialProfile from "@/constats/initialProfile";

export const useInventoryProfile = () => {
  const [inventory, setInventory] = useState<Item[]>(initialItems);
  const [profile, setProfile] = useState<{ [key: string]: Item | null }>(initialProfile);

  const handleInventoryClick = (uniqueId: string) => {
    const item = inventory.find((i) => i.uniqueId === uniqueId);
    if (!item) return;

    const slotKey = item.id;
    const existingItem = profile[slotKey];
    if (existingItem) setInventory((prev) => [...prev, existingItem]);

    setProfile((prev) => ({ ...prev, [slotKey]: item }));
    setInventory((prev) => prev.filter((i) => i.uniqueId !== uniqueId));
  };

  const handleProfileClick = (slotKey: string) => {
    const item = profile[slotKey];
    if (!item) return;

    setInventory((prev) => (prev.some((i) => i.uniqueId === item.uniqueId) ? prev : [...prev, item]));
    setProfile((prev) => ({ ...prev, [slotKey]: null }));
  };

  return {
    inventory,
    profile,
    handleInventoryClick,
    handleProfileClick,
  };
};
