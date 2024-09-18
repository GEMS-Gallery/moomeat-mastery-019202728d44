export const idlFactory = ({ IDL }) => {
  const MeatCut = IDL.Record({
    'name' : IDL.Text,
    'description' : IDL.Text,
    'position' : IDL.Text,
  });
  return IDL.Service({
    'getAllMeatCuts' : IDL.Func([], [IDL.Vec(MeatCut)], ['query']),
    'getMeatCutByName' : IDL.Func([IDL.Text], [IDL.Opt(MeatCut)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
