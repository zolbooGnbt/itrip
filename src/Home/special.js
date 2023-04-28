import { Clock, Person } from "react-bootstrap-icons";

function Special() {
   return (
      <div className='special'>
         <div className="p-1">Онцлох аялал</div>
         <div className="p-2">Тэнгэрийн хаалга- Аватар аялал /8 шөнө, 9 өдөр/.</div>
         <div className="p-3"> <Person></Person>10 хүн дутуу</div>
         <div className="p-3">    <Clock></Clock>9 өдөр 8 шөнө</div>
         <div className="d-1">
            <div className="p-4">₮ 3,190,000</div>
            <a href="/travel/1" >
               <button className="p-5" >Дэлгэрэнгүй</button>
            </a>
         </div>

      </div>

   )
}
export default Special;