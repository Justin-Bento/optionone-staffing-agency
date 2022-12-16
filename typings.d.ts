export interface Program {
  _id: string;
  title: string;
  description: string;
  slug: {
    current: string
  }
//   body: [object];
}


export interface ServiceCardInterface {
  Headline: string,
  Supporting: string,
  Image: string,
  Button: string,
  Path: string  
}
export interface BlogCardInterface {
  Headline: string,
  Subhead: string,
  Supporting: string,
  Image: string,
  Path: string  
}