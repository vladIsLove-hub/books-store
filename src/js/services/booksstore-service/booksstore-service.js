export default class BooksStoreService{

    authorData = [
        {
            id: 1,
            first_name: 'Richard',
            last_name: 'Dawkins'
        },
        {
            id: 2,
            first_name: 'George',
            last_name: 'Orwell'
        },
        {
            id: 3,
            first_name: 'Steve',
            last_name: 'McConnell'
        },
        {
            id: 4,
            first_name: 'Marijn',
            last_name: 'Haverbeke'
        },
        {
            id: 5,
            first_name: 'Mark',
            last_name: 'Manson'
        }
    ]

    bookData = [
        {
            id: 1,
            title: 'The God Delusion',
            author_id: this.authorData[0],
            created_at: '30.10.2020',
            first_public: '2017' 
        },
        {
            id: 2,
            title: '1984',
            author_id: this.authorData[1],
            created_at: '30.10.2020',
            first_public: '2017' 
        },
        {
            id: 3,
            title: 'Code Complete',
            author_id: this.authorData[2],
            created_at: '12.11.2020',
            first_public: '2010'
        },
        {
            id: 4,
            title: 'Eloquent JavaScript',
            author_id: this.authorData[3],
            created_at: '12.11.2020',
            first_public: '2018'
        },
        {
            id: 5,
            title: 'Everything is Fucked',
            author_id: this.authorData[4],
            created_at: '12.11.2020',
            first_public: '2018'
        }
    ]

    async getBooks(){ // Server request immitation
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                // if(Math.random() > 0.90){
                //     reject(new Error('Something bad happend'))
                // }
                resolve([this.bookData, this.authorData])
            }, 600)
        })
    }  
}