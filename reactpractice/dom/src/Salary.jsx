import { useState } from "react";

const Salary = () => {
    const [data, setData] = useState({
        name: "",
        salary: 0,
        ta: 0,
        da: 0,
        tax: 0,
        netSalary: 0
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: name === "salary" || name === "ta" || name === "da" ? Number(value) : value
        }));
    };

    const calculate = () => {
        const { salary, ta, da } = data;
        const totalSalary = salary + ta + da;
        let calculatedTax;

        if (totalSalary > 500000) {
            calculatedTax = totalSalary * 0.1; // 10% tax
        } else if (totalSalary > 200000) {
            calculatedTax = totalSalary * 0.05; // 5% tax
        } else {
            calculatedTax = 0;
        }

        const netSalary = totalSalary - calculatedTax;

        setData((prevData) => ({
            ...prevData,
            tax: calculatedTax,
            netSalary: netSalary
        }));
    };

    return (
        <>
            <input 
                type="text" 
                name="name" 
                value={data.name} 
                placeholder="Name" 
                onChange={handleInput} 
            />
            <br/>
            <input 
                type="number" 
                name="salary" 
                value={data.salary} 
                placeholder="Salary" 
                onChange={handleInput} 
            />
            <br/>
            <input 
                type="number" 
                name="ta" 
                value={data.ta} 
                placeholder="TA" 
                onChange={handleInput} 
            />
            <br/>
            <input 
                type="number" 
                name="da" 
                value={data.da} 
                placeholder="DA" 
                onChange={handleInput} 
            />
            <br/>
            <input 
                type="text" 
                placeholder="Tax" 
                value={data.tax} 
                readOnly 
            />
            <br/>
            <input 
                type="text" 
                placeholder="Net Salary" 
                value={data.netSalary} 
                readOnly 
            />
            <br/>
            <button onClick={calculate}>Calculate</button>
        </>
    );
};

export default Salary;