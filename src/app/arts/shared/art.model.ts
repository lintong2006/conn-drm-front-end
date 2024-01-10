export class ImageSetDTO {
    constructor(
        public count: number,
        public imageNames: string[],
        public imageContent: File[]
    ){
        this.imageNames = new Array<string>(count);
        this.imageContent = new Array<File>(count);
    }
}


export class ArtItemDTO {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public description: string,
        public category: string,
        public unitPrice: string,
        public imageUrl: string,
        public length: number,
        public width: number,
        public height: number,
        public isActive: string,
        public unitsInStock: number,
        public isPrint: string,
        public likeCount: number,
    ){}
 }

 export class ArtItem {
    constructor(
        public title: string,
        public author: string,
        public description: string,
        public category: string,
        public unitPrice: string,
        public imageUrl: string,
        public isActive: string,
        public unitsInStock: string,
    ){}
 }

 export class Category {
    constructor(
        public name: string,
        public imageUrl: string
    ){}
 }

// enum Category {
//     PAINTING  = 'Painting',
//     DRAWING = 'Drawing',
//     DIGITAL = 'Digital',
//     PHOTOGRAPHY = 'Photography'
// }
