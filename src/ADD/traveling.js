import { useState } from "react";
import axios from "axios"

function AddTravel() {
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [image4, setImage4] = useState("");
    const [location, setLocation] = useState("");
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [day, setDay] = useState("");
    const [price, setPrice] = useState("");
    const [date,setDate]=useState("")
    const [shortInfo, setShortInfo] = useState("");
    const [sanamj, setSanamj] = useState("");
    const [included, setIncluded] = useState("");
    const [includedList, setIncludedList] = useState([]);
    const [notIncluded, setNotIncluded] = useState("");
    const [notIncludedList, setNotIncludedList] = useState([]);

    const countryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla",
        "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan",
        "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda",
        "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands",
        "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands",
        "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia",
        "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands",
        "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany",
        "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau",
        "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
        "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic",
        "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia",
        "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco",
        "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles",
        "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama",
        "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania",
        "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka",
        "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland",
        "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia",
        "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay",
        "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

    function addHandler() {
        var destination = {
            img1: image1,
            img2: image2,
            img3: image3,
            img4: image4,
            location: location,
            title: title,
            type: type,
            day: day,
            date:date,
            sanamj: sanamj,
            price: price,
            shortInfo: shortInfo,
            includedList: includedList,
            notIncludedList: notIncludedList
        }
        axios.post('https://react-45bf8-default-rtdb.asia-southeast1.firebasedatabase.app/destination.json', destination)
            .then(response => {
                alert("amjilttai nemegdlee")
            }
            ).catch(error => alert("error"))
    }

    const enterHandler1 = (e) => {
        const item = [e.target.value]
        if (e.key === 'Enter') {
            setIncludedList((list) => [...list, item]);
            setIncluded("");
        }
    }
    const enterHandler2 = (e) => {
        const item1 = [e.target.value]
        if (e.key === 'Enter') {
            setNotIncludedList((list) => [...list, item1]);
            setNotIncluded("");
        }
    }

    return (
        <div className="add-info">
            <div className="add-input-img">
                <input type="text" alt="" className="add-input" value={image1} onChange={(e) => setImage1(e.target.value)} placeholder="image URL" />
                <input type="text" alt="" className="add-input" value={image2} onChange={(e) => setImage2(e.target.value)} placeholder="image URL" />
                <input type="text" alt="" className="add-input" value={image3} onChange={(e) => setImage3(e.target.value)} placeholder="image URL" />
                <input type="text" alt="" className="add-input" value={image4} onChange={(e) => setImage4(e.target.value)} placeholder="image URL" />
                
            </div>
            <div className="add-info-1">
                <div className="add-product">
                    <input type="text" className="add-input" placeholder="Бүтээглэхүүний нэр" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <select name="location" className="add-input" value={location} onChange={(e) => setLocation(e.target.value)}>
                        {countryList.map((country, id) => {
                            return (<option key={id}>
                                {country}
                            </option>)
                        })}

                    </select>
                    <select name="type" className="add-input" value={type} onChange={(e) => setType(e.target.value)}>
                        <option >Төрөл сонгох</option>
                        <option value="Ger">Аялал</option>
                        <option value="Woman">Бүтээглэхүүн</option>
                    </select>
                    <textarea type="text" className="add-information" placeholder="Товч тайлбар" value={shortInfo} onChange={(e) => setShortInfo(e.target.value)} />
                    <input type="text" className="add-input" placeholder="АЯЛЛЫН ҮНЭД БАГТСАН ЗҮЙЛС" value={included} onChange={(e) => setIncluded(e.target.value)} onKeyDown={enterHandler1} />
                    <label className="travel-label">АЯЛЛЫН ҮНЭД БАГТСАН ЗҮЙЛС</label>
                    <ul>
                        {includedList.map((item) => {
                            return <li key={item} className="li">
                                {item}
                            </li>
                        })}
                    </ul>
                    <input type="text" className="add-input" placeholder="АЯЛЛЫН ҮНЭД БАГТААГҮЙ ЗҮЙЛС" value={notIncluded} onChange={(e) => setNotIncluded(e.target.value)} onKeyDown={enterHandler2} />
                    <label className="travel-label">АЯЛЛЫН ҮНЭД БАГТААГҮЙ ЗҮЙЛС</label>
                    <ul>
                        {notIncludedList.map((item, id) => {
                            return <li key={id} className="li">
                                {item}
                            </li>
                        })}
                    </ul>
                    <textarea type="text" className="add-information" placeholder="Cанамж" value={sanamj} onChange={(e) => setSanamj(e.target.value)} />
                </div>
                <div className="add-product">
                    <input type="text" className="add-input" placeholder="өдөр" value={day} onChange={(e) => setDay(e.target.value)} />
                    <input type="date" className="add-input" placeholder="өдөр" value={date} onChange={(e) => setDate(e.target.value)} />
                    <input type="text" className="add-input" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
            </div>
            <button onClick={addHandler} className="add-btn">Add</button>

        </div>
    )

}
export default AddTravel;