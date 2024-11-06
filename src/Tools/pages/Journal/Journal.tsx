import "./journalStyle.css"

export default function Journal() {
  return (
      <div className="container mx-auto">
          <h1 className="text-4xl font-bold my-10">Journals</h1>
          <p className="w-2/4 mb-5">
              <span>Shopping</span> is one of the world's leading ecommerce brands and is internationally 
              recognized for celebrating the essence of classic Worldwide cool looking style.
          </p>
          <button className="btn border py-2 px-3 bg-black text-white rounded-2xl hover:bg-slate-300 hover:text-black">Continue Shopping</button>
      </div>
  )
}
