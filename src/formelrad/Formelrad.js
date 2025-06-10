import {useState} from "react";
import '../css/mvp.css';
import formelrad from "../image/formelradelektronik.gif";
import InputField from "../formular/InputField";

export default function Formelrad() {
    const [values, setValues] = useState({
        u: 10,
        i: 2,
        r: "",
        p: ""
    })

const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");

    const u = parseFloat(values.u);
    const i = parseFloat(values.i);
    const r = parseFloat(values.r);
    const p = parseFloat(values.p);

    if (values.u === "" && values.i === "") {
        // calculate u and i
        setValues(v => ({ ...v, u: Math.sqrt(p * r) }));
        setValues(v => ({ ...v, i: Math.sqrt(p / r) }));
    } else if (values.u === "" && values.r === "") {
        // calculate u and r
        setValues(v => ({ ...v, u: p / i }));
        setValues(v => ({ ...v, r: p / (i * i) }));
    } else if (values.u === "" && values.p === "") {
        // calculate u and p
        setValues(v => ({ ...v, u: i * r }));
        setValues(v => ({ ...v, p: i * i * r }));
    } else if (values.i === "" && values.r === "") {
        // calculate i and r
        setValues(v => ({ ...v, i: p / u }));
        setValues(v => ({ ...v, r: u * u / p }));
    } else if (values.i === "" && values.p === "") {
        // calculate i and p
        setValues(v => ({ ...v, i: u / r }));
        setValues(v => ({ ...v, p: u * u / r }));
    } else {
        // calculate r and p
        setValues(v => ({ ...v, r: u / i }));
        setValues(v => ({ ...v, p: u * i }));
    }
};


    return (
        <>
            <section>
                <header>
                    <h2>Formelrad</h2>
                    <img src={formelrad} width="200" alt="Formelrad"/>
                </header>
<form onSubmit={handleSubmit}>

                    <InputField color={"black"} value={values.u} label="Spannung" handleChange={e => {setValues(values => ({...values, u: e.target.value}))}} />
                    <InputField color={"black"} value={values.i} label="Stromstärke" handleChange={e => {setValues(values => ({...values, i: e.target.value}))}} />
                    <InputField color={"black"} value={values.r} label="Widerstand" handleChange={e => {setValues(values => ({...values, r: e.target.value}))}} />
                    <InputField color={"black"} value={values.p} label="Leistung" handleChange={e => {setValues(values => ({...values, p: e.target.value}))}} />
                    <button type="submit">Calculate</button>
                </form>
            </section>
        </>
    )
}