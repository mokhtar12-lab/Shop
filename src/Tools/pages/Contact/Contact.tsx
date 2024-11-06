import "./contactStyle.css"

export default function Contact() {
  return (
    <div className="container mx-auto my-20">
      <h1 className="text-5xl font-bold">Contact</h1>
      <p className="my-10 text-2xl pl-3">Fill Up a Form</p>

      <form className="my-10">
        <input className="input" type="text" placeholder="Enter Your Name Here"/>
        <input className="input" type="email" placeholder="Enter Your Email"/>
        <input className="input" type="text"  placeholder="Enter Your Messages"/>

        <input className="sub" type="submit" value="Post" />
      </form>
    </div>
  )
}
