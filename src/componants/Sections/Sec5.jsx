import '../../style/Sections/Section5/Section5.css'

function Section5(){
 return (
   <div className="Section5 container">
     <h1 className="">Book A Table</h1>
     <form className="form_content">
       <input className="UserName" type="text" placeholder="Your Name" />
       <input type="tel" className="UserNumber" placeholder="Phone Number" />
       <select className="select">
         <option selected disabled className="persons">
           How Many Persons ?
         </option>
         <option className="">1</option>
         <option className="">2</option>
         <option className="">3</option>
         <option className="">4</option>
         <option className="">5</option>
       </select>
       <input className="UserEmail" type="email" placeholder="Your Email" />
       <input className="UserDate" type="date" placeholder="mm/dd/yy" />
     </form>
   </div>
 );
}

export default Section5