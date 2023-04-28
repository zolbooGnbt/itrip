import { useState } from "react";
import { Airplane, Bell, Map } from "react-bootstrap-icons";
import Select from 'react-select';


const Tabs = ({ dataDest ,handleFilterChange }) => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const options = [
        { value: "Ulaanbaatar", label: "Ulaanbaatar" },
        { value: "Seoul", label: "Seoul" },
        { value: "Tokyo", label: "Tokyo" },
        { value: "Istanbul", label: "Istanbul" },
        { value: "Bali", label: "Bali" },
    ];
    const customStyles = {
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            color: state.isSelected ? "#212529" : "#fff",
            backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
        }),

        control: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: "#212529",
            padding: "10px",
            border: "none",
            boxShadow: "none",
        }),
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
    };


    return (
        <div className="tab-box">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    <Airplane></Airplane> НИСЛЭГ
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    <Map></Map> АЯЛАЛ
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    <Bell></Bell> ЗОЧИД БУУДАЛ
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <div className="nisleg-content">
                        <div className="nisleg-content-1">
                            <label className="nisleg-content-1-1">Хаанаас</label>
                            <Select options={options} styles={customStyles} />
                        </div>
                        <div className="nisleg-content-1">
                            <label className="nisleg-content-1-1">Хүрэх</label>
                            <Select options={options} styles={customStyles} />
                        </div>
                        <div className="nisleg-content-1">
                            <label className="nisleg-content-1-1">Нислэгийн огноо</label>
                            <input type="date" className="nisleg-input" />
                        </div>
                    </div>
                    <a href="/flight" >
                        <button className="search-btn"onChange={handleFilterChange} >Search</button>
                    </a>
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <div className="nisleg-content">
                        <div className="nisleg-content-1">
                            <label className="nisleg-content-1-1">Байршил</label>
                            <Select options={options} styles={customStyles} />
                        </div>
                        <a href="/travel" >
                            <button className="search-btn1" onChange={handleFilterChange}>Search</button>
                        </a>
                    </div>
                </div>
                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <div className="nisleg-content"></div>
                </div>
            </div>
        </div>
    );
}

export default Tabs;