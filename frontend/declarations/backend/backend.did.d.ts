import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface MeatCut {
  'name' : string,
  'description' : string,
  'position' : string,
}
export interface _SERVICE {
  'getAllMeatCuts' : ActorMethod<[], Array<MeatCut>>,
  'getMeatCutByName' : ActorMethod<[string], [] | [MeatCut]>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
