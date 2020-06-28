export interface IBookinfo {
    id:number;
    isbn: string;
    title: string;
    subtitle: string;
    author: string;
    published: string;
    publisher: string;
    pages: number;
    description: string;
    website: string;
    image: string;
}
export class Bookinfo {
    id: number;
    isbn: string;
    title:string;
    subtitle: string;
    author: string;
    published: string;
    publisher: string;
    pages: number;
    description: string;
    website: string;
    image: string;
    constructor(
        id?: number,
        isbn?: string,
        title?: string,
        subtitle?: string,
        author?: string,
        published?: string,
        publisher?: string,
        pages?: number,
        description?: string,
        website?: string,
        image?: string,
    ){ this.id = id;
        this.isbn = isbn;
       this.title = title;
       this.subtitle = subtitle;
       this. author = author;
       this. published =published;
       this. publisher = publisher;
       this. pages = pages;
       this. description = description;
       this. website = website;
       this.image = image

    }
}
