import catalogueImg from './catalogueItemImg.png'
export interface CatalogueMenuItem {
    id: number
    name: string
    type: string //item or service
    imgSrc: string | undefined
}

export const catalogueMenuData:Array<CatalogueMenuItem> = [
    {
        id:1,
        name:"Велосипеды",
        type:"item",
        imgSrc:catalogueImg
    },
    {
        id:2,
        name:"Электросамокаты",
        type:"item",
        imgSrc:catalogueImg
    },
    {
        id:3,
        name:"Самокаты",
        type:"item",
        imgSrc:catalogueImg
    },
    {
        id:4,
        name:"Скейтборды",
        type:"item",
        imgSrc:catalogueImg
    },
    {
        id:5,
        name:"Роликовые коньки",
        type:"item",
        imgSrc:catalogueImg
    },
    {
        id:6,
        name:"Велоаксессуары",
        type:"item",
        imgSrc:catalogueImg
    },
    {
        id:7,
        name:"SUP и каяки",
        type:"item",
        imgSrc:catalogueImg
    },
    {
        id:8,
        name:"Туризм",
        type:"item",
        imgSrc:catalogueImg
    },
    {
        id:9,
        name:"Тренажеры",
        type:"item",
        imgSrc:catalogueImg
    },
    {
        id:10,
        name:"Запчасти для самокатов",
        type:"item",
        imgSrc:catalogueImg
    },
    {
        id:11,
        name:"Запчасти для электросамокатов",
        type:"item",
        imgSrc:catalogueImg
    },
    {
        id:12,
        name:"Горные лыжи",
        type:"item",
        imgSrc:catalogueImg
    },
    {
        id:13,
        name:"Сноуборды",
        type:"item",
        imgSrc:catalogueImg
    },
    {
        id:14,
        name:"Рюкзаки и сумки",
        type:"item",
        imgSrc:catalogueImg
    },
    {
        id:15,
        name:"Другое",
        type:"item",
        imgSrc:catalogueImg
    },
    {
        id:16,
        name:"Ремонт и обслуживание",
        type:"service",
        imgSrc:undefined
    },
    {
        id:17,
        name:"Прокат оборудывания",
        type:"service",
        imgSrc:undefined
    },
]