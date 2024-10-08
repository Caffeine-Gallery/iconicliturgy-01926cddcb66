import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Artwork {
  'id' : bigint,
  'title' : string,
  'description' : string,
  'imageUrl' : string,
  'artist' : string,
}
export interface LiturgyText {
  'id' : bigint,
  'title' : string,
  'content' : string,
}
export interface _SERVICE {
  'addArtwork' : ActorMethod<[string, string, string, string], bigint>,
  'addLiturgyText' : ActorMethod<[string, string], bigint>,
  'getArtworks' : ActorMethod<[], Array<Artwork>>,
  'getLiturgyTexts' : ActorMethod<[], Array<LiturgyText>>,
  'initializeData' : ActorMethod<[], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
