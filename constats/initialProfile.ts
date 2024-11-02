import { Item } from "@/types/item";

const initialProfile: {[key: string]: Item | null} = {
    //Left side of profile
    helmet: null,
    necklace: null,
    sword: null,
    chest: null,
    belt: null,
    //Right side of profile
    le: null,
    re: null,
    gloves: null,
    shield: null,
    pants: null,
    boots: null,
}

export default initialProfile