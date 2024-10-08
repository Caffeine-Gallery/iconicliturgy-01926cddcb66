export const idlFactory = ({ IDL }) => {
  const Artwork = IDL.Record({
    'id' : IDL.Nat,
    'title' : IDL.Text,
    'description' : IDL.Text,
    'imageUrl' : IDL.Text,
    'artist' : IDL.Text,
  });
  const LiturgyText = IDL.Record({
    'id' : IDL.Nat,
    'title' : IDL.Text,
    'content' : IDL.Text,
  });
  return IDL.Service({
    'addArtwork' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [IDL.Nat],
        [],
      ),
    'addLiturgyText' : IDL.Func([IDL.Text, IDL.Text], [IDL.Nat], []),
    'getArtworks' : IDL.Func([], [IDL.Vec(Artwork)], ['query']),
    'getLiturgyTexts' : IDL.Func([], [IDL.Vec(LiturgyText)], ['query']),
    'initializeData' : IDL.Func([], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
