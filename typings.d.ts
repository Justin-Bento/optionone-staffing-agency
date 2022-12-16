export interface Program {
  _id: string;
  title: string;
  description: string;
  slug: {
    current: string
  }
//   body: [object];
}


export interface ServiceCard {
  Headline: string,
  Subhead: null,
  Supporting: string,
  Image: string,
  Button: string 
}
export interface BlogCardInterface {
  Headline: string,
  Subhead: string,
  Supporting: string,
  Image: string,
  Path: string  
}