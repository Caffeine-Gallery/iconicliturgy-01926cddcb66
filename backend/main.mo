import Nat "mo:base/Nat";

import Array "mo:base/Array";
import Text "mo:base/Text";
import Option "mo:base/Option";

actor {
  // Types
  type Artwork = {
    id: Nat;
    title: Text;
    artist: Text;
    imageUrl: Text;
    description: Text;
    detailText: Text;
  };

  type LiturgyText = {
    id: Nat;
    title: Text;
    content: Text;
    detailText: Text;
  };

  // State
  stable var artworks: [Artwork] = [];
  stable var liturgyTexts: [LiturgyText] = [];

  // Artwork management
  public func addArtwork(title: Text, artist: Text, imageUrl: Text, description: Text, detailText: Text) : async Nat {
    let id = artworks.size();
    let newArtwork: Artwork = {
      id;
      title;
      artist;
      imageUrl;
      description;
      detailText;
    };
    artworks := Array.append(artworks, [newArtwork]);
    id
  };

  public query func getArtworks() : async [Artwork] {
    artworks
  };

  public query func getArtwork(id: Nat) : async ?Artwork {
    if (id < artworks.size()) {
      ?artworks[id]
    } else {
      null
    }
  };

  // Liturgy text management
  public func addLiturgyText(title: Text, content: Text, detailText: Text) : async Nat {
    let id = liturgyTexts.size();
    let newText: LiturgyText = {
      id;
      title;
      content;
      detailText;
    };
    liturgyTexts := Array.append(liturgyTexts, [newText]);
    id
  };

  public query func getLiturgyTexts() : async [LiturgyText] {
    liturgyTexts
  };

  public query func getLiturgyText(id: Nat) : async ?LiturgyText {
    if (id < liturgyTexts.size()) {
      ?liturgyTexts[id]
    } else {
      null
    }
  };

  // Initialize with sample data
  public func initializeData() : async () {
    if (artworks.size() == 0) {
      ignore await addArtwork(
        "Christ Pantocrator",
        "Unknown",
        "https://example.com/christ_pantocrator.jpg",
        "A famous icon of Christ as the ruler of the universe",
        "The Christ Pantocrator is one of the most common religious images of Orthodox Christianity. Generally speaking, in Medieval eastern roman church art and architecture, an iconic mosaic or fresco of Christ Pantokrator occupies the space in the central dome of the church, in the half-dome of the apse, or on the nave vault. Some scholars suggest that the Pantocrator image was derived from the pre-Christian Roman Imperial imagery of Zeus/Jupiter or Sol Invictus."
      );
      ignore await addArtwork(
        "Our Lady of Vladimir",
        "Unknown",
        "https://example.com/our_lady_of_vladimir.jpg",
        "One of the most venerated Orthodox icons",
        "The Virgin of Vladimir, also known as Vladimir Mother of God, Our Lady of Vladimir, or Theotokos of Vladimir, is a medieval Byzantine icon of the Virgin and Child. It is one of the most venerated Orthodox icons and a fine and early example of the iconography of the Eleusa type. The icon is displayed in the Tretyakov Gallery, Moscow. Her feast day is June 3. Even more than most famous icons, the original has been copied repeatedly for centuries, and many copies have considerable artistic and religious significance of their own."
      );
    };
    if (liturgyTexts.size() == 0) {
      ignore await addLiturgyText(
        "The Jesus Prayer",
        "Lord Jesus Christ, Son of God, have mercy on me, a sinner.",
        "The Jesus Prayer, also known as The Prayer, is a short formulaic prayer esteemed and advocated especially within the Eastern churches: 'Lord Jesus Christ, Son of God, have mercy on me, a sinner.' The prayer has been widely taught and discussed throughout the history of the Orthodox Church. The ancient and original form did not include the words 'a sinner', which were added later. It is often repeated continually as a part of personal ascetic practice, its use being an integral part of the eremitic tradition of prayer known as Hesychasm."
      );
      ignore await addLiturgyText(
        "Trisagion",
        "Holy God, Holy Mighty, Holy Immortal, have mercy on us.",
        "The Trisagion (Greek: Τρισάγιον 'Thrice Holy'), also known as Thrice Holy, is a standard hymn of the Divine Liturgy in most of the Eastern Orthodox, Oriental Orthodox and Eastern Catholic churches. In churches which use the Byzantine Rite, the Trisagion is chanted immediately before the Prokeimenon and the Epistle reading. It is also included in a set of prayers named 'Trisagion Prayers' which forms part of numerous services and private devotions."
      );
    };
  };
}
