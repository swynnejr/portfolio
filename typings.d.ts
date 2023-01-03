// Global typings
interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}  

interface Image {
  _type: "image";
  asset: Reference;
}

// Portfolio Typings

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}  

export interface PortfolioInfo extends SanityBody {
  _type: "portfolioInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}  

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}  

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: datetime;
  dateEnded: datetime;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];

}  

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}  

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}  


// Blog Typings

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};  

interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}  

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}  

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}