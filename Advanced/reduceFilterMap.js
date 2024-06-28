// //filter la use array me manipulation sorting and condition apply krne ke lie kia jata hai
// const mynum=[12,21,32,43,54,65,76,87,98]
// //const newnum=mynum.filter((num)=>num>50)//best way to filter the vALUE
// const newnum=mynum.filter((num)=>{
//    return  num>50
// })
// console.log(newnum) 
// const newnum11=[]
// mynum.forEach((num)=>{
//     if(num>60){
//         newnum11.push(num)
//     }
// })
// //console.log(newnum11)


// const book=[
//     {
//       "title": "The Great Gatsby",
//       "author": "F. Scott Fitzgerald",
//       "publication_year": 1925,
//       "isbn": "978-0743273565",
//       "publisher": "Scribner"
//     },
//     {
//       "title": "To Kill a Mockingbird",
//       "author": "Harper Lee",
//       "publication_year": 1960,
//       "isbn": "978-0061120084",
//       "publisher": "Harper Perennial Modern Classics"
//     },
//     {
//       "title": "1984",
//       "author": "George Orwell",
//       "publication_year": 1949,
//       "isbn": "978-0451524935",
//       "publisher": "Signet Classic"
//     },
//     {
//       "title": "The Catcher in the Rye",
//       "author": "J.D. Salinger",
//       "publication_year": 1951,
//       "isbn": "978-0316769488",
//       "publisher": "Little, Brown and Company"
//     }
//   ]
//   //filter the book bu author
//   let userbook=book.filter((bk)=>bk.author==="J.D. Salinger")

//filter the data by publication year
// userbook=book.filter((bk)=>{return bk.publication_year>=1925})
  
// console.log(userbook)
const number=[10,23,43,56,77,56]
const newnumber=number.map((num)=>num*10).map((num)=>num+11).filter((num=>num>500))

console.log(newnumber)

