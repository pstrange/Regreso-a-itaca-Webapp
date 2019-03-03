export interface Book {
    $key:string;
    creationDate:Number
    tag:string;
    id:string;
    volumeInfo: {
        title:string;
        publisher:string;
        publishiedDate:string;
        authors:string[];
        description:string;
        categories:string[];
        laguage:string;
        pageCount:Number;
        imageLinks:{
            smallThumbnail:string;
            thumbnail:string;
        }
    };
    localInfo:{
        price:string;
        stock:Number;
    }
}
