export const idlFactory = ({ IDL }) => {
  const Artwork = IDL.Record({
    'id' : IDL.Nat,
    'title' : IDL.Text,
    'description' : IDL.Text,
    'detailText' : IDL.Text,
    'imageUrl' : IDL.Text,
    'artist' : IDL.Text,
  });
  const LiturgyText = IDL.Record({
    'id' : IDL.Nat,
    'title' : IDL.Text,
    'content' : IDL.Text,
    'detailText' : IDL.Text,
  });
  return IDL.Service({
    'addArtwork' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [IDL.Nat],
        [],
      ),
    'addLiturgyText' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [IDL.Nat], []),
    'getArtwork' : IDL.Func([IDL.Nat], [IDL.Opt(Artwork)], ['query']),
    'getArtworks' : IDL.Func([], [IDL.Vec(Artwork)], ['query']),
    'getLiturgyText' : IDL.Func([IDL.Nat], [IDL.Opt(LiturgyText)], ['query']),
    'getLiturgyTexts' : IDL.Func([], [IDL.Vec(LiturgyText)], ['query']),
    'initializeData' : IDL.Func([], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
