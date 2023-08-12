
export interface CatalogueDetailedMenuSubItem {
    id:number
    name:string
}
export interface CatalogueDetailedMenuItem {
    id: number
    name: string
    subItems:Array<CatalogueDetailedMenuSubItem>
}

export const catalogueDetailedMenuData:Array<CatalogueDetailedMenuItem> = [
    {
        id:1,
        name:"Амортизаторы и вилки",
        subItems:[
            {
                id:1,
                name:"Амортизаторы"
            },
            {
                id:2,
                name:"Вилки"
            },
            {
                id:3,
                name:"Запчасти для вилок"
            },
            {
                id:4,
                name:"Запчасти для амортизаторов"
            }
        ]
    },
    {
        id:2,
        name:"Колёса и комплектующие",
        subItems:[
            {
                id:1,
                name:"Покрышки"
            },
            {
                id:2,
                name:"Камеры"
            },
            {
                id:3,
                name:"Обода"
            },
            {
                id:4,
                name:"Колеса в сборе"
            },
            {
                id:5,
                name:"Покрышки"
            },
            {
                id:6,
                name:"Камеры"
            },
            {
                id:7,
                name:"Обода"
            },
            {
                id:8,
                name:"Колеса в сборе"
            },
            {
                id:9,
                name:"Обода"
            },
            {
                id:10,
                name:"Колеса в сборе"
            }
        ]
    },
    {
        id:3,
        name:"Амортизаторы и вилки",
        subItems:[
            {
                id:1,
                name:"Амортизаторы"
            },
            {
                id:2,
                name:"Вилки"
            },
            {
                id:3,
                name:"Запчасти для вилок"
            },
            {
                id:4,
                name:"Запчасти для амортизаторов"
            }
        ]
    },
    {
        id:4,
        name:"Колёса и комплектующие",
        subItems:[

            {
                id:5,
                name:"Покрышки"
            },
            {
                id:6,
                name:"Камеры"
            },
            {
                id:7,
                name:"Обода"
            },
            {
                id:8,
                name:"Колеса в сборе"
            },
            {
                id:10,
                name:"Колеса в сборе"
            }
        ]
    },
    {
        id:5,
        name:"Амортизаторы и вилки",
        subItems:[
            {
                id:1,
                name:"Амортизаторы"
            },
            {
                id:2,
                name:"Вилки"
            },
            {
                id:3,
                name:"Запчасти для вилок"
            },
            {
                id:4,
                name:"Запчасти для амортизаторов"
            }
        ]
    },
    {
        id:6,
        name:"Колёса и комплектующие",
        subItems:[
            {
                id:1,
                name:"Покрышки"
            },
            {
                id:2,
                name:"Камеры"
            },
            {
                id:3,
                name:"Обода"
            },

            {
                id:6,
                name:"Камеры"
            },
            {
                id:7,
                name:"Обода"
            },
            {
                id:8,
                name:"Колеса в сборе"
            },
            {
                id:9,
                name:"Обода"
            },
            {
                id:10,
                name:"Колеса в сборе"
            }
        ]
    },
    {
        id:7,
        name:"Амортизаторы и вилки",
        subItems:[
            {
                id:1,
                name:"Амортизаторы"
            },
            {
                id:2,
                name:"Вилки"
            },
            {
                id:3,
                name:"Запчасти для вилок"
            },
            {
                id:4,
                name:"Запчасти для амортизаторов"
            }
        ]
    },
]