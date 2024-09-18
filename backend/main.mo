import Bool "mo:base/Bool";

import Array "mo:base/Array";
import Text "mo:base/Text";

actor {
  // Define a type for meat cuts
  type MeatCut = {
    name: Text;
    description: Text;
    position: Text;
  };

  // Store meat cuts information
  let meatCuts: [MeatCut] = [
    { name = "Chuck"; description = "Tough but flavorful, good for slow cooking"; position = "shoulder" },
    { name = "Rib"; description = "Tender and well-marbled, great for grilling"; position = "ribs" },
    { name = "Loin"; description = "Lean and tender, ideal for steaks"; position = "back" },
    { name = "Round"; description = "Lean and less tender, suitable for roasts"; position = "rear" },
    { name = "Brisket"; description = "Tough but flavorful, perfect for smoking"; position = "chest" },
  ];

  // Query function to get all meat cuts
  public query func getAllMeatCuts() : async [MeatCut] {
    meatCuts
  };

  // Query function to get a specific meat cut by name
  public query func getMeatCutByName(name: Text) : async ?MeatCut {
    Array.find(meatCuts, func(cut: MeatCut) : Bool { Text.equal(cut.name, name) })
  };
}
