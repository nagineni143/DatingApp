import { Photo } from "./photo";

export interface Member {
    id: number;
    username: string;
    age: number;
    pUrl: string;
    knownAs: string;
    created: Date;
    active: Date;
    gender: string;
    lookingFor: string;
    introduction: string;
    interests: string;
    city: string;
    country: string;
    photos: Photo[];
  }
  
