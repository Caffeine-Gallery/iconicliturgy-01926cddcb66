import Nat "mo:base/Nat";

import Array "mo:base/Array";
import Text "mo:base/Text";

actor {
  // Types
  type Artwork = {
    id: Nat;
    title: Text;
    artist: Text;
    imageUrl: Text;
    description: Text;
  };

  type LiturgyText = {
    id: Nat;
    title: Text;
    content: Text;
  };

  // State
  stable var artworks: [Artwork] = [];
  stable var liturgyTexts: [LiturgyText] = [];

  // Artwork management
  public func addArtwork(title: Text, artist: Text, imageUrl: Text, description: Text) : async Nat {
    let id = artworks.size();
    let newArtwork: Artwork = {
      id;
      title;
      artist;
      imageUrl;
      description;
    };
    artworks := Array.append(artworks, [newArtwork]);
    id
  };

  public query func getArtworks() : async [Artwork] {
    artworks
  };

  // Liturgy text management
  public func addLiturgyText(title: Text, content: Text) : async Nat {
    let id = liturgyTexts.size();
    let newText: LiturgyText = {
      id;
      title;
      content;
    };
    liturgyTexts := Array.append(liturgyTexts, [newText]);
    id
  };

  public query func getLiturgyTexts() : async [LiturgyText] {
    liturgyTexts
  };

  // Initialize with sample data
  public func initializeData() : async () {
    if (artworks.size() == 0) {
      ignore await addArtwork("Christ Pantocrator", "Unknown", "https://example.com/christ_pantocrator.jpg", "A famous icon of Christ as the ruler of the universe");
      ignore await addArtwork("Our Lady of Vladimir", "Unknown", "https://example.com/our_lady_of_vladimir.jpg", "One of the most venerated Orthodox icons");
    };
    if (liturgyTexts.size() == 0) {
      ignore await addLiturgyText("The Jesus Prayer", "Lord Jesus Christ, Son of God, have mercy on me, a sinner.");
      ignore await addLiturgyText("Trisagion", "Holy God, Holy Mighty, Holy Immortal, have mercy on us.");
    };
  };
}
