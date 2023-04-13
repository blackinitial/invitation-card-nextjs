// Generated by https://quicktype.io

export interface WedData {
  config:   Config;
  header:   Header;
  navbar:   Navbar;
  couple:   Couple;
  events:   Events;
  moment:   Moment;
  location: Location;
}

export interface Config {
  name: string;
  bgm:  string;
}

export interface Couple {
  title: string;
  groom: Bride;
  bride: Bride;
}

export interface Bride {
  name:        string;
  photo:       string;
  status:      string;
  socmed:      Socmed;
  description: string;
}

export interface Socmed {
  facebook:  string;
  twitter:   string;
  instagram: string;
}

export interface Events {
  ceremony:  Ceremony;
  reception: Ceremony;
}

export interface Ceremony {
  type:    string;
  photo:   string;
  title:   string;
  date:    string;
  time:    string;
  address: Address;
}

export interface Address {
  line1: string;
  line2: string;
  line3: string;
}

export interface Header {
  bgImageLandscape: string[];
  bgImagePortrait:  string[];
  bridegroom:       string;
  desc:             string;
  date:             string;
  timestamp:        number;
  ongoing:          string;
  days:             string;
  hours:            string;
  minutes:          string;
  seconds:          string;
  line1:            string;
  line2:            string;
  button:           string;
}

export interface Location {
  maps: string;
}

export interface Moment {
  images: Image[];
}

export interface Image {
  src:             string;
  thumbnail:       string;
  thumbnailWidth:  number;
  thumbnailHeight: number;
}

export interface Navbar {
  brand: string;
  nav:   Nav[];
}

export interface Nav {
  to:   string;
  text: string;
}
